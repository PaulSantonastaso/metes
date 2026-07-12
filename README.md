# Metes

**Metes** is a $35 AI-powered listing marketing kit for real estate agents — live at [metes.app](https://www.metes.app), taking real payments, backed by real customers. This repository is primarily a portfolio artifact demonstrating specific patterns in AI system architecture, multi-chain LLM orchestration, and production-scale prompt engineering.

Both framings are true: it's a working product, and it's a demonstration of how I approach the design of AI-native systems from a product and engineering perspective.

---

## Why this repo exists

I built Metes to solve a specific problem for real estate agents (the "unconstrained AI produces embarrassing listing copy" problem) and to have a live, non-trivial system I could point to when discussing AI product architecture. The repo prioritizes the second purpose: the code, structure, and decisions here are chosen to be legible to someone evaluating engineering and product judgment, not just to ship a product.

---

## What it demonstrates

Metes is structured around five architectural patterns worth studying in isolation.

### 1. Multi-chain LLM orchestration with structured output

The listing pipeline runs a directed graph of specialized LLM chains — extraction → listing description → parallel social/email chains → compliance audit. Each chain has a specific job, a Pydantic output schema, and calibrated temperature. Nothing is a single monolithic prompt.

The parallel section fans out N social post chains (one per platform slot, image-informed) and an email campaign chain concurrently via `asyncio.gather`, then rejoins for compliance review. This is a common pattern in production LLM systems that isn't well-documented in tutorials.

Files worth reading: `backend/services/listing_pipeline_service.py`, `backend/chains/`.

### 2. Constrained generation architecture

The core thesis of Metes as a product is that unconstrained LLM output produces recognizable AI tells (clichés, formulaic phrases, structural patterns like em-dash pairs). The fix is architectural, not editorial: ground the model in verified data, ban known patterns at the prompt level, force structured output schemas, and audit the result.

Every text-generating chain in the codebase implements all four layers:

- **Grounding data**: extracted property details, Google Places neighborhood context, image intelligence with room typing
- **Banned phrase enforcement**: explicit "never use" lists per prompt, reinforced by the audit layer
- **Structured output**: Pydantic models with field-level `description` metadata that the LLM reads as instruction
- **Audit layer**: `ComplianceService` reviews every output for Fair Housing violations, AI tells, and misleading language before delivery

Files worth reading: `backend/services/compliance_service.py`, `backend/chains/neighborhood_chain.py` (best-documented example of the pattern).

### 3. Cost-tier navigation

The Places API New has multiple pricing tiers. Essentials fields (rating, review count, primary type) are $5/1000 requests. Pro fields (editorial summary, etc.) are $17/1000 — 3.4x more expensive. On a $35 product, that decision matters.

The codebase reflects a specific choice: use Essentials fields plus prompt engineering rather than paying for Pro. The field mask in `neighborhood_service.py` is deliberately kept on the Essentials tier, and the prompt is engineered to compensate by using Google's `primaryTypeDisplayName` as a category cue. The tradeoff is documented in code comments so a future reader (including future me) understands the reasoning.

This kind of cost-boundary awareness is often missing from portfolio AI projects that just call GPT-4 for everything. Real production systems are shaped by these decisions.

Files worth reading: `backend/services/neighborhood_service.py`.

### 4. Real-time observability

Two observability layers, each targeting a different question:

- **LangSmith** for LLM chain tracing — every chain runs with `.with_config(run_name=...)` so I can inspect any generation in the LangSmith UI, replay failing traces, and iterate prompts against real production data.
- **PostHog** for user funnel instrumentation — client-side events on tool submissions, gating, completions, and failures, so I can measure content → tool → conversion in a single funnel.

The instrumentation for the free tools was rebuilt after I discovered a specific bug: submission events weren't firing (only email gate events were), which meant LangSmith showed real LLM runs but PostHog showed no user activity. Fixing it required understanding both systems and where the observability gap actually lived.

Files worth reading: `frontend/app/tools/*/`, backend logging in `backend/services/`.

### 5. Compliance as a first-class layer, not an afterthought

Real estate listing content has real Fair Housing exposure. The first Fair Housing Act violation carries up to a $25,597 civil penalty per HUD's current schedule; third violations exceed $115,000. This isn't hypothetical — it's the operating environment.

The `ComplianceService` reviews every generated asset (MLS description, social posts, email subject lines, email bodies) against Fair Housing patterns before delivery. It runs after generation, in parallel across all assets, and applies revised text back into the output before returning to the user. Failed compliance checks don't crash the pipeline — they surface a revised version and log the original issue for review.

Files worth reading: `backend/services/compliance_service.py`, `backend/services/listing_pipeline_service.py` (the section that merges compliance results back into outputs).

---

## On prompts

The production prompts live at `backend/prompts/` and are intentionally public. The value of Metes as a system is in the architecture that consumes them — chain construction, structured output enforcement, compliance audit as a first-class layer, cost-tier navigation — not in the specific phrase lists.

The prompts themselves are worth reading. `neighborhood_chain.py` is the best-documented example of constrained generation: banned phrases, low-density market handling, category calibration from Google Places signals. `mls_writer.txt` shows how output schemas are constructed through field descriptions rather than free prose. `social_media.txt` shows per-platform voice differentiation.

Copying the prompts doesn't copy the product. The audit layer, the extraction pipeline, the image intelligence, the observability — that's the system.

---

## AI usage

This project is built with heavy, intentional use of Claude. I'm not hiding that — it's how modern AI-native product work gets done, and being explicit about the workflow is more useful than pretending otherwise.

My working pattern with Claude is deliberate. I use the chat interface at claude.ai as a thinking partner and reviewer, not as a code writer with commit access. I do **not** use Claude Code, Cursor, or any agent that writes directly into the codebase. That's a specific choice, not a limitation.

The workflow, roughly:

1. **Discuss.** I bring a problem, a constraint, or a proposed change to Claude. We work through the shape of it — what's changing, why, what the tradeoffs are, what I might be missing.
2. **Agree.** I pressure-test the proposal, push back where the recommendation feels off, and commit to a specific plan before code gets written.
3. **Plan.** Claude produces the specific changes — usually as surgical find/replace diffs against files I share, not full-file rewrites.
4. **Build.** I review every diff, apply it manually into my IDE, and run tests locally before pushing.

This slower loop is intentional. It keeps my judgment on every line that ships. Claude drafts, I decide. When a recommendation is wrong (which happens regularly), I catch it because I'm reading the diff, not accepting the commit.

Two examples where the review caught real problems before they shipped:

- **Stripe checkout kwargs pattern.** Claude initially recommended passing `customer_email` directly to `stripe.checkout.Session.create()`. Reviewing the diff before applying it, I caught that Stripe's Pydantic validation would reject `None` values on that field — breaking checkout for anonymous users. The corrected pattern (build a `checkout_kwargs` dict, conditionally attach `customer_email` only when present, then spread with `**`) is now a locked convention in the codebase. Every subsequent Stripe-related suggestion gets checked against it. That pattern has been reverted by full-file regenerations more than once, which is exactly why full-file regenerations are on the "don't accept" list below.
- **`sqft` → `square_footage` field mapping.** The extraction pipeline uses `square_footage` as the canonical field name. Claude occasionally proposes reverting to `living_area` when regenerating adjacent code — the models I'm using seem to have a prior toward that field name from training data. Catching this during diff review, not after deploy, is the reason it hasn't broken production. It's a small bug that would have been invisible in QA and painful in production.

Both of these are examples of the specific value of the review step. An agent with commit access would have shipped them.

What I actively **don't accept**:

- Full-file regenerations when a surgical edit would do (they routinely reintroduce old bugs like the two above)
- Architectural decisions made without a discussion phase
- Prose that reads as AI-generated in customer-facing content
- Prompts that don't match the voice I've iterated toward
- Recommendations that skip the tradeoff conversation

Content marketing on the site is generated the same way. Every `/learn/` piece was drafted in chat, reviewed for factual and voice accuracy by me, then converted to production `page.tsx` — never auto-published. The [six-category AI tells reference](https://www.metes.app/learn/ai-listing-description-tells) is a direct output of this workflow: I noticed patterns in what Claude produced by default, catalogued them with my own judgment about which mattered, and built the product's audit layer around detecting them.

The meta-observation: the same workflow discipline that makes this repo credible as portfolio work also makes Metes credible as a product. Constrained generation, human review, audit before ship — applied to my own work and to the customer-facing output. Same philosophy at different levels.

---

## Stack

- **Backend**: Python 3.11+ / FastAPI, async throughout
- **LLM layer**: LangChain + Google Gemini (Flash Lite for classification/enrichment, Flash for generation)
- **Structured output**: Pydantic v2 with LangChain's `with_structured_output`
- **Frontend**: Next.js 15 (App Router) / React / TypeScript / Tailwind
- **Data**: PostgreSQL, Redis for rate limiting and short-lived state
- **Storage**: Cloudflare R2 (S3-compatible) for generated ZIP kits and observability data
- **Payments**: Stripe Checkout
- **Observability**: LangSmith (LLM tracing), PostHog (user analytics)
- **Bot protection**: Cloudflare Turnstile on free tools
- **Infra**: Railway for backend deploys, Vercel for frontend

Non-obvious choices explained: Gemini over OpenAI because Flash Lite is meaningfully cheaper for high-volume classification tasks and Flash is comparable to GPT-4o for creative generation at ~1/5 the price. LangChain despite its reputation because `with_structured_output` genuinely simplifies Pydantic-based generation once you understand the abstractions.

---

## Notable engineering decisions

A few specific tradeoffs worth calling out.

### Per-tool Redis keys for rate limiting

Original implementation used a shared `tool:email:{ip}` key across the three free tools (compliance check, neighborhood guide, listing description checker). This created a state collision: hitting the email gate on one tool marked all three tools as gated for that IP. Fixed by namespacing per tool: `tool:email:{tool_name}:{ip}`. Simple in retrospect, invisible until you traced through actual user flows.

### Places API type expansion without cost tier change

Adding `primaryType`, `primaryTypeDisplayName`, and `types` to the Places API field mask gave the LLM significantly better category signal ("Italian Restaurant" vs generic "restaurant") without moving to the Pro pricing tier. The prompt was updated to prefer Google's human-readable category labels over query-time bucket names.

### R2 persistence for tool email captures

Redis is intentionally used for rate limiting (short TTL, ephemeral by design). Email captures on the free tools required durable storage, so they write through to R2 as `tool_emails/{tool_name}/{timestamp}_{ip_hash}.json` alongside the Redis rate-limit state. Clean separation of "state that expires" and "data that persists."

### No RESO CSV export in v1

Multiple Listing Service (MLS) boards use inconsistent RESO field mappings. A generic RESO CSV export would fail validation on most boards without per-board field mapping work. Rather than ship a fragile feature, the current version presents listing data in tap-to-copy MLS-ready format and defers RESO to a future v2 keyed to specific validated boards (Stellar MLS first).

### No feature flags system, no auth on free tools

The free tools are rate-limited by IP with an email gate at N runs. There's no user account system for the free tier because the friction cost of accounts would kill top-of-funnel conversion. Paid kits are one-time Stripe Checkout without account creation — Metes is a single-transaction product, not a subscription, so account infrastructure isn't yet earned.

---

## What's intentionally simple

A portfolio project shows engineering judgment as much through what it doesn't build as what it does. Deliberate simplifications:

- **No auth system for free tools** (rate limiting by IP + email gate covers 95% of the abuse surface)
- **No RESO CSV export** (per-board mapping work not justified until validated demand exists)
- **No video generation in v1** (evaluated Runway/Sora/Pika integration; infrastructure is in place but disabled behind a flag until quality bar is met)
- **No account system for paid kits** (single-transaction product; account overhead not justified)
- **No feature flags service** (small enough to use boolean constants at module level; would migrate to a real flag service at scale)
- **No dedicated queue/worker** (async FastAPI handles the concurrency needed at current scale; would move to a Celery or Temporal worker at higher volume)

Each of these is a decision I can explain the reasoning for, not an oversight.

---

## What's in production

Live at [metes.app](https://www.metes.app). Real customers, real payments (Stripe production), real listing kits delivered as ZIP files via R2. Content marketing engine running a 12-week SEO/GEO content plan; free tools active for top-of-funnel; observability instrumented for both LLM chain performance and user funnel conversion.

The system is small (single-region Railway backend and frontend, managed Redis) but production-grade in the ways that matter: structured logging, error tracing, observability, compliance auditing, payment processing, durable storage, and graceful degradation when upstream APIs fail.

---

## License

Source is provided for reference and portfolio review. Not licensed for commercial use or redistribution. If you're interested in the underlying architecture patterns for your own work, reach out — I'm happy to discuss.
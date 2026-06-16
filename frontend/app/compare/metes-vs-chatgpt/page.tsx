import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle, Minus, Clock, AlertTriangle, Database, Workflow } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Metes vs. ChatGPT for Real Estate Listings | Metes",
  description:
    "ChatGPT can write listing content. The real cost is time, Fair Housing exposure, hallucinated local data, and workflow friction. An honest comparison of what it costs to use ChatGPT correctly for real estate.",
  keywords: [
    "metes vs chatgpt",
    "chatgpt for real estate",
    "chatgpt mls description",
    "chatgpt real estate listing",
    "chatgpt fair housing",
    "chatgpt hallucination real estate",
    "ai listing description chatgpt",
    "chatgpt vs dedicated real estate ai",
  ],
  alternates: {
    canonical: "https://www.metes.app/compare/metes-vs-chatgpt",
  },
  openGraph: {
    title: "Metes vs. ChatGPT for Real Estate Listings",
    description:
      "ChatGPT can write listing content. The real cost is time, Fair Housing exposure, hallucinated local data, and workflow friction. An honest comparison.",
    url: "https://www.metes.app/compare/metes-vs-chatgpt",
    siteName: "Metes",
    type: "article",
    images: [
      {
        url: "https://www.metes.app/og/metes-vs-chatgpt.png",
        width: 1200,
        height: 630,
        alt: "Metes vs. ChatGPT for real estate listings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metes vs. ChatGPT for Real Estate Listings",
    description: "ChatGPT can write listing content. Here's what it actually costs to use it correctly.",
    images: ["https://www.metes.app/og/metes-vs-chatgpt.png"],
  },
  robots: { index: true, follow: true },
};

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.metes.app/compare/metes-vs-chatgpt#article",
      "headline": "Metes vs. ChatGPT for Real Estate Listings",
      "description":
        "Honest comparison of using ChatGPT versus a dedicated real estate listing tool. Time cost, hallucination risk, Fair Housing exposure, and workflow trade-offs.",
      "image": "https://www.metes.app/og/metes-vs-chatgpt.png",
      "datePublished": "2026-06-17",
      "dateModified": "2026-06-17",
      "author": {
        "@type": "Organization",
        "name": "Metes Editorial",
        "url": "https://www.metes.app",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Metes",
        "url": "https://www.metes.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.metes.app/logo.png",
        },
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.metes.app/compare/metes-vs-chatgpt",
      },
      "keywords":
        "ChatGPT, real estate, MLS listing, Fair Housing, hallucination, knowledge cutoff, GPT-4o, GPT-5",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.metes.app/compare/metes-vs-chatgpt#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I use ChatGPT to write MLS listing descriptions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. ChatGPT generates MLS descriptions with appropriate prompts. The output is generally fluent and usable as a starting point. The risks are: (1) it can fabricate details about the property that don't exist, (2) it routinely includes Fair Housing-flagged language unless explicitly instructed otherwise, (3) it doesn't enforce MLS character limits unless told.",
          },
        },
        {
          "@type": "Question",
          "name": "Is ChatGPT Fair Housing compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No, ChatGPT has no Fair Housing safeguards. It will generate phrases like 'perfect for families,' 'great for young professionals,' and 'safe neighborhood' — all of which are Fair Housing-flagged language. The agent remains legally responsible for the output. 'I used ChatGPT' is not a defense recognized by HUD or courts.",
          },
        },
        {
          "@type": "Question",
          "name": "How accurate is ChatGPT for real estate market data?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Limited. ChatGPT Free works from training data with a knowledge cutoff of October 2023 (GPT-4o) or December 2025 (GPT-5.5). ChatGPT Plus has Bing browsing for current information, but it's unreliable for hyperlocal data — specific business names, current operating hours, recent neighborhood changes. For neighborhood content specifically, dedicated tools that query live data sources are materially more accurate.",
          },
        },
        {
          "@type": "Question",
          "name": "Does ChatGPT hallucinate?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, at measurable rates. Benchmark testing shows GPT-4o hallucinates approximately 1.5% of the time on general tasks. Real-world hallucination rates in LLM interactions are higher — peer-reviewed research found 31.4% in real-world use, rising to 60% in complex domains. For real estate specifically, the documented failure mode is 'confidently includes property details that don't exist.'",
          },
        },
        {
          "@type": "Question",
          "name": "How long does it take to write a complete listing kit in ChatGPT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For a competent agent with saved prompts, approximately 45-90 minutes per complete kit (MLS description, social posts, email campaign, neighborhood content, photo coordination, Fair Housing review). First-time prompting takes 2-3x longer. Dedicated tools that produce the same outputs typically take under 60 seconds.",
          },
        },
        {
          "@type": "Question",
          "name": "Is it safe to paste client information into ChatGPT?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally no, especially for the free tier. OpenAI's free tier may use inputs for training future models. Pasting client PII (financial information, contract terms, transaction details) into consumer-grade AI is a documented compliance concern. The 2026 industry guidance is to use business-grade tools with documented data handling policies for any work involving client information.",
          },
        },
        {
          "@type": "Question",
          "name": "Should I use ChatGPT or Metes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If you list 1-3 properties a year and have time to manually verify and edit AI output, ChatGPT is a reasonable choice and the cost is minimal. If you list 1+ properties a month, the time cost (45-90 minutes per listing) and compliance risk make Metes' per-listing pricing more efficient. The break-even point is roughly 1-2 listings per month — above that, the dedicated tool saves more time and money than it costs.",
          },
        },
        {
          "@type": "Question",
          "name": "Does ChatGPT Plus's web browsing fix the hallucination problem?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Partially. Plus's Bing browsing helps for current events and well-indexed information. It's unreliable for hyperlocal data — specific business names, recent closures, neighborhood-level changes. For listing content that needs to be accurate about local businesses, schools, and amenities, browsing-augmented ChatGPT is better than offline but still produces fabrications. Live data API integration is materially more accurate for local content.",
          },
        },
      ],
    },
  ],
};

// ─────────────────────────────────────────────────────────────────
// Brand palette
// ─────────────────────────────────────────────────────────────────

const C = {
  cream: "#EFEAE0",
  creamWarm: "#F4F0E8",
  bgCard: "#FAF7F0",
  forest: "#1F3D2E",
  forestDeep: "#14271E",
  moss: "#4A6B53",
  gold: "#B89968",
  goldDeep: "#9A7E50",
  goldSoft: "#D9C49C",
  ink: "#14271E",
  inkSoft: "#4A6B53",
  muted: "rgba(20,39,30,0.55)",
  border: "rgba(20,39,30,0.10)",
  warn: "#C97B5C",
  pass: "#5C8A6E",
};

// ─────────────────────────────────────────────────────────────────
// SectionLabel — matches the ListingAI comparison page pattern
// ─────────────────────────────────────────────────────────────────

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] ${light ? "text-[#D9C49C]" : "text-[#9A7E50]"}`}>
      <span className={`inline-block h-px w-[18px] ${light ? "bg-[#D9C49C]" : "bg-[#9A7E50]"}`} />
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// BulletList — gold bullets, matches the Week 1 + feature page convention
// ─────────────────────────────────────────────────────────────────

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            paddingLeft: "20px",
            position: "relative",
            fontFamily: "var(--font-manrope, sans-serif)",
            fontSize: "16px",
            lineHeight: 1.7,
            color: C.ink,
          }}
        >
          <span style={{ position: "absolute", left: "4px", color: C.gold, fontWeight: 600 }}>•</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─────────────────────────────────────────────────────────────────
// Comparison table data
// ─────────────────────────────────────────────────────────────────

type CellState = "yes" | "no" | "partial" | "text";

interface ComparisonRow {
  label: string;
  metes: { state: CellState; value?: string };
  chatgptFree: { state: CellState; value?: string };
  chatgptPlus: { state: CellState; value?: string };
}

const COMPARISON_ROWS: ComparisonRow[] = [
  { label: "Pricing", metes: { state: "text", value: "$35 per listing" }, chatgptFree: { state: "text", value: "Free" }, chatgptPlus: { state: "text", value: "$20/month" } },
  { label: "Time per listing kit", metes: { state: "text", value: "Under 60 seconds" }, chatgptFree: { state: "text", value: "45-90 minutes" }, chatgptPlus: { state: "text", value: "45-90 minutes" } },
  { label: "MLS description", metes: { state: "yes", value: "Editorial style, 950-char cap" }, chatgptFree: { state: "partial", value: "With prompting" }, chatgptPlus: { state: "partial", value: "With prompting" } },
  { label: "Social posts (4 platforms)", metes: { state: "yes", value: "Auto-coordinated" }, chatgptFree: { state: "partial", value: "Manual coordination" }, chatgptPlus: { state: "partial", value: "Manual coordination" } },
  { label: "Email campaign (4-email drip)", metes: { state: "yes", value: "Built-in" }, chatgptFree: { state: "partial", value: "Manual sequence" }, chatgptPlus: { state: "partial", value: "Manual sequence" } },
  { label: "Photo curation + captions", metes: { state: "yes", value: "Top 25 ranked, renamed" }, chatgptFree: { state: "no", value: "Can't see photos" }, chatgptPlus: { state: "partial", value: "Limited photo analysis" } },
  { label: "Neighborhood content", metes: { state: "yes", value: "Live Google Places API" }, chatgptFree: { state: "partial", value: "Training data only" }, chatgptPlus: { state: "partial", value: "Bing browsing (variable)" } },
  { label: "Fair Housing audit", metes: { state: "yes", value: "122-phrase reference" }, chatgptFree: { state: "no", value: "User must check" }, chatgptPlus: { state: "no", value: "User must check" } },
  { label: "Hallucination control", metes: { state: "yes", value: "Live data on neighborhood content" }, chatgptFree: { state: "no", value: "Unconstrained generation" }, chatgptPlus: { state: "no", value: "Unconstrained generation" } },
  { label: "Local data knowledge", metes: { state: "yes", value: "Live (queried at generation)" }, chatgptFree: { state: "no", value: "Months to years old" }, chatgptPlus: { state: "partial", value: "Browsing helps, unreliable" } },
  { label: "Workflow", metes: { state: "yes", value: "One-click pipeline" }, chatgptFree: { state: "partial", value: "Chat interface" }, chatgptPlus: { state: "partial", value: "Chat interface" } },
  { label: "Data privacy", metes: { state: "yes", value: "Per-listing input, not retained" }, chatgptFree: { state: "no", value: "Inputs may train future models" }, chatgptPlus: { state: "partial", value: "Better but consumer-grade" } },
];

function CellIcon({ state }: { state: CellState }) {
  if (state === "yes") return <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5C8A6E]" />;
  if (state === "no") return <XCircle className="h-4 w-4 shrink-0 text-[#C97B5C]" />;
  if (state === "partial") return <Minus className="h-4 w-4 shrink-0 text-[#B89968]" />;
  return null;
}

// ─────────────────────────────────────────────────────────────────
// Style atoms
// ─────────────────────────────────────────────────────────────────

const h2Style = {
  fontFamily: "var(--font-manrope, sans-serif)",
  fontSize: "clamp(24px, 3.5vw, 36px)",
  fontWeight: 500 as const,
  lineHeight: 1.1,
  letterSpacing: "0.005em",
  color: C.ink,
  marginTop: 0,
  marginBottom: "24px",
};

const h3Style = {
  fontFamily: "var(--font-manrope, sans-serif)",
  fontSize: "clamp(18px, 2vw, 22px)",
  fontWeight: 600 as const,
  lineHeight: 1.25,
  letterSpacing: "-0.005em",
  color: C.ink,
  marginTop: "32px",
  marginBottom: "14px",
};

const proseStyle = {
  fontFamily: "var(--font-manrope, sans-serif)",
  fontSize: "16px",
  lineHeight: 1.7,
  color: C.ink,
  marginBottom: "16px",
};

const CONTENT = "mx-auto w-full max-w-[960px] px-6 lg:px-8";
const READING = "mx-auto max-w-[720px]";

// ─────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────

export default function MetesVsChatGPTPage() {
  return (
    <div className="min-h-screen bg-[#EFEAE0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA_JSON_LD) }}
      />
      <Header />

      {/* ─────────────── HERO — CREAM ─────────────── */}
      <section className="border-b border-[rgba(20,39,30,0.10)] bg-[#F4F0E8]">
        <div className="mx-auto w-full max-w-[960px] px-6 py-16 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-[720px]">
            <SectionLabel>Comparison · ChatGPT</SectionLabel>

            <h1 className="mb-4 font-manrope text-[clamp(28px,4.5vw,48px)] font-medium leading-[1.08] tracking-[0.005em] text-[#14271E]">
              Metes vs. ChatGPT for real estate listings: <em className="not-italic text-[#9A7E50]">what it actually costs</em> to use it correctly.
            </h1>

            <p className="mb-6 max-w-[640px] text-[clamp(14px,1.2vw,17px)] leading-[1.6] text-[#4A6B53]">
              ChatGPT can produce real estate listing content. The question isn&apos;t capability — it&apos;s the cost of using it correctly. A competent agent generates a complete listing kit in ChatGPT in 45-90 minutes. Metes does the same workflow in under 60 seconds.
            </p>

            <p className="mb-8 max-w-[640px] text-[clamp(14px,1.2vw,17px)] leading-[1.6] text-[#4A6B53]">
              This page is an honest comparison. ChatGPT is a remarkable general-purpose tool. The costs that don&apos;t show up in the $0-$20/month sticker price: time, Fair Housing exposure (first-offense penalty: $25,597), hallucinated local data, no end-to-end pipeline, and personal data privacy concerns.
            </p>

            <p className="text-[13px] font-mono uppercase tracking-[0.08em] text-[rgba(20,39,30,0.55)]">
              Last updated: June 17, 2026 · Reflects GPT-5.5 capabilities and current ChatGPT pricing
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── TLDR + JUMP TO — EARTH ─────────────── */}
      <section className="bg-[#EFEAE0] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <div style={{
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              borderRadius: "12px",
              padding: "28px",
              marginBottom: "32px",
            }}>
              <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
                TLDR
              </div>
              <p style={proseStyle}>
                ChatGPT can write listing content. The real comparison isn&apos;t &ldquo;can it do this?&rdquo; — it&apos;s &ldquo;what does it cost to do it well?&rdquo; Time (45-90 minutes per listing), Fair Housing exposure ($25,597 first-offense penalty), hallucinated local data (research shows 1.5%-31% hallucination rates), no end-to-end pipeline, and data privacy concerns when pasting client information into a consumer-grade chatbot.
              </p>
              <p style={{ ...proseStyle, marginBottom: 0 }}>
                For agents doing 1-3 listings a year, ChatGPT is a reasonable choice. For agents doing real listing volume, dedicated workflows pay for themselves quickly.
              </p>
            </div>

            <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              Jump to
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { id: "what-chatgpt-produces", label: "What ChatGPT can produce" },
                { id: "time-cost", label: "The time cost (45-90 minutes per listing)" },
                { id: "hallucination-cost", label: "The hallucination cost (1.5-31%)" },
                { id: "compliance-cost", label: "The compliance cost ($25,597 first-offense)" },
                { id: "workflow-cost", label: "The workflow cost" },
                { id: "when-chatgpt", label: "When ChatGPT is the right choice" },
                { id: "side-by-side", label: "Side-by-side comparison" },
                { id: "faq", label: "Common questions" },
              ].map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} style={{
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontSize: "14px",
                    color: C.forest,
                    textDecoration: "underline",
                    textDecorationColor: C.gold,
                    textUnderlineOffset: "3px",
                  }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─────────────── WHAT CHATGPT CAN PRODUCE — CREAM ─────────────── */}
      <section id="what-chatgpt-produces" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <SectionLabel>The honest concession</SectionLabel>
            <h2 style={h2Style}>What ChatGPT can actually produce</h2>

            <p style={proseStyle}>
              Before the comparison, the honest concession: ChatGPT — both the free tier and the $20/month Plus tier — can generate real estate listing content. With the right prompts, it can produce MLS descriptions, social media posts, email drafts, and rough neighborhood overviews. Mainstream coverage has documented agents using ChatGPT to sell homes; one widely-shared example reported a listing description generated by ChatGPT that helped sell a property $100,000 over asking.
            </p>

            <p style={proseStyle}>
              If you&apos;re a real estate agent and you&apos;ve never used ChatGPT for listing copy, you should try it. It&apos;s free at the basic tier, the learning curve is shallow, and the outputs are reasonable.
            </p>

            <p style={proseStyle}>
              That&apos;s the floor. The rest of this page is about the ceiling — what ChatGPT can&apos;t do well, what it costs to make it produce acceptable output, and where dedicated tools genuinely outperform.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── TIME COST — EARTH ─────────────── */}
      <section id="time-cost" className="bg-[#EFEAE0] py-20 sm:py-24">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              <Clock className="h-3 w-3" strokeWidth={2} />
              Cost #1
            </div>
            <h2 style={h2Style}>The time cost</h2>

            <p style={proseStyle}>
              The cost most agents don&apos;t budget for. ChatGPT is fast at producing one output from one prompt. A complete listing kit isn&apos;t one output — it&apos;s a sequence of related outputs that have to be coordinated, formatted, and verified.
            </p>

            <h3 style={h3Style}>What a complete listing kit actually requires</h3>
            <BulletList items={[
              "MLS description (within character limits, MLS-platform-specific)",
              "Social media posts (Facebook, Instagram, LinkedIn, Google Business Profile — each platform has different optimal lengths and structures)",
              "Email campaign (typically 4 emails: launch, open house, price drop or urgency, sold-or-still-available)",
              "Neighborhood content (places, lifestyle, schools, transit)",
              "Photo captions or curation guidance",
              "Fair Housing compliance review across every output",
            ]} />

            <h3 style={h3Style}>Time cost in ChatGPT (honest estimate)</h3>

            <p style={proseStyle}>
              For a competent agent with prompts already saved and refined, producing a complete kit through ChatGPT typically takes:
            </p>

            <div style={{ overflowX: "auto", marginBottom: "20px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "14px", fontFamily: "var(--font-manrope, sans-serif)" }}>
                <thead>
                  <tr style={{ background: C.bgCard }}>
                    <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: `1px solid ${C.border}`, fontWeight: 600, color: C.ink }}>Task</th>
                    <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: `1px solid ${C.border}`, fontWeight: 600, color: C.ink }}>Time in ChatGPT</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["MLS description (prompt + review + edit + format)", "8-12 minutes"],
                    ["Social posts (4 platforms, separate sessions or chained prompt)", "10-15 minutes"],
                    ["Email campaign (4 emails, sequenced)", "10-15 minutes"],
                    ["Neighborhood content (research + draft + verify)", "15-25 minutes"],
                    ["Photo curation guidance (manual review against photos)", "10-15 minutes"],
                    ["Fair Housing review pass on every output", "5-10 minutes"],
                  ].map(([task, time], i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "rgba(20,39,30,0.02)" }}>
                      <td style={{ padding: "10px 12px", borderBottom: `1px solid ${C.border}`, color: C.ink }}>{task}</td>
                      <td style={{ padding: "10px 12px", borderBottom: `1px solid ${C.border}`, color: C.inkSoft }}>{time}</td>
                    </tr>
                  ))}
                  <tr style={{ background: C.bgCard }}>
                    <td style={{ padding: "10px 12px", color: C.ink, fontWeight: 600 }}>Total per listing</td>
                    <td style={{ padding: "10px 12px", color: C.ink, fontWeight: 600 }}>58-92 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p style={proseStyle}>
              These figures assume the agent already has prompts saved and works efficiently. First-time prompting takes 2-3x longer. An agent doing 5 listings a month at the conservative end is spending <strong>5-8 hours per month</strong> on listing copy alone.
            </p>

            <h3 style={h3Style}>Time cost in Metes</h3>

            <p style={proseStyle}>
              The same complete kit — MLS description, four-channel social pack, four-email campaign, neighborhood guide with live local data, photo curation with rankings and captions, Fair Housing audit on every asset — generates in <strong>under 60 seconds</strong>. No prompts to write. No outputs to coordinate. No format conversions.
            </p>

            <h3 style={h3Style}>What this difference is worth</h3>

            <p style={proseStyle}>
              For an agent doing 6 listings a month:
            </p>

            <BulletList items={[
              <>ChatGPT workflow: roughly <strong>6-9 hours/month</strong> at $0-$20/month subscription</>,
              <>Metes workflow: roughly <strong>6 minutes/month</strong> at $35/listing ($210/month)</>,
            ]} />

            <p style={proseStyle}>
              The honest accounting: ChatGPT is &ldquo;free&rdquo; in cash terms; it costs the agent <strong>6-9 hours of monthly time</strong> that could be spent showing properties, prospecting, or with clients. At even a modest opportunity cost of $50/hour for an agent&apos;s time, the &ldquo;free&rdquo; ChatGPT workflow costs $300-$450 in opportunity cost per month — more than the dedicated tool subscription.
            </p>

            <p style={proseStyle}>
              This calculation doesn&apos;t include the cost of mistakes (covered below), only the cost of correct production.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── HALLUCINATION COST — FOREST DARK ─────────────── */}
      <section id="hallucination-cost" className="relative overflow-hidden bg-[#14271E] py-20 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(184,153,104,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,153,104,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className={`relative ${CONTENT}`}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#D9C49C]">
              <Database className="h-3 w-3" strokeWidth={2} />
              Cost #2
            </div>
            <h2 style={{ ...h2Style, color: C.creamWarm }}>The hallucination cost</h2>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              ChatGPT generates content that sounds correct. Sometimes it is. Sometimes it isn&apos;t — and there&apos;s no built-in signal telling you which.
            </p>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>Documented fabrication in real estate listings</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              Florida Realtors Magazine documented a specific scenario: a real estate agent used ChatGPT to generate a property description. ChatGPT &ldquo;delivered an attractive write-up&rdquo; but added details that didn&apos;t exist — including a grove of fruit trees on the property. The listing went to MLS. An overseas buyer made an offer based on the listing. After closing, the buyer discovered no fruit trees.
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              This is the load-bearing example. Not because every ChatGPT output invents fruit trees, but because <strong style={{ color: C.gold }}>the failure mode is &ldquo;confidently includes content that doesn&apos;t exist.&rdquo;</strong> The agent didn&apos;t lie. The AI did. The agent is still liable for the misrepresentation.
            </p>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>What the research says about hallucination rates</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              Peer-reviewed studies measuring ChatGPT hallucination rates:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                <><strong style={{ color: C.gold }}>GPT-4o on benchmark tasks:</strong> ~1.5% hallucination rate (Vectara leaderboard)</>,
                <><strong style={{ color: C.gold }}>Real-world LLM interactions:</strong> 31.4% hallucination rate, rising to 60% in complex domains</>,
                <><strong style={{ color: C.gold }}>For specific factual recall</strong> (citations, business names, addresses): GPT-4 hallucinated 5.4-29% of references in controlled studies; GPT-3.5 hallucinated 36-40%</>,
              ].map((item, i) => (
                <li key={i} style={{ paddingLeft: "20px", position: "relative", fontFamily: "var(--font-manrope, sans-serif)", fontSize: "16px", lineHeight: 1.7, color: "rgba(244,240,232,0.85)" }}>
                  <span style={{ position: "absolute", left: "4px", color: C.gold, fontWeight: 600 }}>•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              What this means in practice: across an agent&apos;s monthly listing volume, <strong>some fraction of ChatGPT-generated descriptions will contain fabricated details</strong>. Most will be minor (a slightly wrong square footage, an amenity that doesn&apos;t exist, a school district that shifted). A few will be material — like the fruit trees case.
            </p>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>Knowledge cutoffs make this worse for local content</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              ChatGPT&apos;s knowledge of your specific market is at least months out of date:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                <><strong style={{ color: C.gold }}>GPT-5.5 (current ChatGPT default):</strong> knowledge cutoff December 2025</>,
                <><strong style={{ color: C.gold }}>GPT-4o (still widely used):</strong> knowledge cutoff October 2023 — almost three years old as of June 2026</>,
                <><strong style={{ color: C.gold }}>ChatGPT Free has limited web browsing</strong> — the model is largely working from training data</>,
                <><strong style={{ color: C.gold }}>ChatGPT Plus has Bing browsing</strong> which helps for current events but is unreliable for hyperlocal business data</>,
              ].map((item, i) => (
                <li key={i} style={{ paddingLeft: "20px", position: "relative", fontFamily: "var(--font-manrope, sans-serif)", fontSize: "16px", lineHeight: 1.7, color: "rgba(244,240,232,0.85)" }}>
                  <span style={{ position: "absolute", left: "4px", color: C.gold, fontWeight: 600 }}>•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              For neighborhood content specifically — coffee shops, restaurants, parks, schools, services — ChatGPT is working from data that doesn&apos;t reflect which businesses are currently operating, which have closed, which have changed names, or which are new. Listings generated this way often reference businesses that don&apos;t exist as described.
            </p>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>How Metes handles this</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              Metes&apos; neighborhood content is generated from <strong style={{ color: C.gold }}>Google Places API data queried at generation time</strong>. Every business mentioned in a Metes neighborhood guide is a real, currently-operating business with current ratings and review counts. The agent can verify any name in the output.
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              For MLS descriptions and listing copy, Metes uses LLM generation grounded in the property data the agent provides (square footage, features, address). The output can still contain LLM-typical issues, but it can&apos;t invent square footage, features, or amenities that weren&apos;t input — the system is constrained to the agent&apos;s verified property data.
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              This is the structural difference: <strong style={{ color: C.gold }}>ChatGPT is unconstrained generation.</strong> Metes is constrained generation with live data verification on the highest-risk content (neighborhood, places).
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── COMPLIANCE COST — CREAM ─────────────── */}
      <section id="compliance-cost" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-20 sm:py-24">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              <AlertTriangle className="h-3 w-3" strokeWidth={2} />
              Cost #3
            </div>
            <h2 style={h2Style}>The compliance cost</h2>

            <p style={proseStyle}>
              Fair Housing violations are the most common formal complaint filed against real estate agents. ChatGPT generates language that creates Fair Housing exposure routinely, and it doesn&apos;t flag the violations.
            </p>

            <h3 style={h3Style}>What ChatGPT generates that violates Fair Housing rules</h3>

            <p style={proseStyle}>
              Ask ChatGPT to write a listing description and the output frequently contains:
            </p>

            <BulletList items={[
              <>&ldquo;Perfect for families&rdquo; (familial status preference — prohibited)</>,
              <>&ldquo;Great for young professionals&rdquo; (familial status, age proxy — risky)</>,
              <>&ldquo;Walking distance to...&rdquo; (disability implication — prohibited as general descriptor)</>,
              <>&ldquo;Safe neighborhood&rdquo; (coded language — risky)</>,
              <>&ldquo;Exclusive&rdquo; / &ldquo;Private community&rdquo; (HUD-flagged catch words)</>,
              <>&ldquo;Family-oriented community&rdquo; (familial status preference — prohibited)</>,
            ]} />

            <p style={proseStyle}>
              The model produces these phrases because they appear constantly in its training data — which is full of real estate listings that were themselves Fair Housing violations. The model isn&apos;t safety-trained on Fair Housing rules. It generates fluently, not lawfully.
            </p>

            <h3 style={h3Style}>What the legal exposure looks like</h3>

            <p style={proseStyle}>
              From the <Link href="/learn/fair-housing-language-mls-listings" style={{ color: C.forest, textDecoration: "underline", textDecorationColor: C.gold, textUnderlineOffset: "3px" }}>complete 2026 Fair Housing reference</Link>:
            </p>

            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "12px", padding: "20px 24px", margin: "20px 0" }}>
              <BulletList items={[
                <><strong>First-offense civil penalty:</strong> $25,597</>,
                <><strong>Repeat violation within 5 years:</strong> $63,991</>,
                <><strong>Third violation within 7 years:</strong> $115,054</>,
                <><strong>DOJ pattern-or-practice cases:</strong> up to $150,000</>,
              ]} />
            </div>

            <p style={proseStyle}>
              These are per discriminatory practice. A single listing with multiple flagged phrases can compound beyond per-violation caps. Civil penalties are separate from compensatory and punitive damages, plus attorney fees, that may be awarded to complainants.
            </p>

            <h3 style={h3Style}>&ldquo;AI wrote it&rdquo; is not a defense</h3>

            <p style={proseStyle}>
              The National Association of REALTORS® has been explicit on this point: agents are responsible for the content they publish, regardless of how it was generated. &ldquo;I used ChatGPT&rdquo; doesn&apos;t transfer liability. Florida Realtors and multiple state-level continuing education programs reinforce the same conclusion.
            </p>

            <p style={proseStyle}>
              The Pinnacle Real Estate Academy summarized it directly in 2026: &ldquo;I didn&apos;t know&rdquo; won&apos;t protect you when a Fair Housing complaint gets filed.
            </p>

            <h3 style={h3Style}>How Metes handles this</h3>

            <p style={proseStyle}>
              Every Metes-generated output runs through a Fair Housing compliance audit using the same 122-phrase reference library documented in the <Link href="/learn/fair-housing-language-mls-listings" style={{ color: C.forest, textDecoration: "underline", textDecorationColor: C.gold, textUnderlineOffset: "3px" }}>Fair Housing language reference</Link>. The audit catches phrases like &ldquo;perfect for families&rdquo; before they ship in the kit. ChatGPT doesn&apos;t have this layer — the user has to know to check.
            </p>

            <div style={{
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              borderRadius: "12px",
              padding: "24px 28px",
              margin: "32px 0",
            }}>
              <p style={{ ...proseStyle, margin: 0, fontSize: "15px" }}>
                The standalone Fair Housing Compliance Checker is free to use without signup if you want to audit ChatGPT-generated output yourself. Three scans per session.
              </p>
              <Link
                href="/tools/fha-compliance-checker"
                style={{
                  marginTop: "12px",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: C.forest,
                  color: C.creamWarm,
                  fontFamily: "var(--font-manrope, sans-serif)",
                  fontSize: "14px",
                  fontWeight: 500,
                  padding: "12px 22px",
                  borderRadius: "9px",
                  textDecoration: "none",
                }}
              >
                Try the Fair Housing Checker
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── WORKFLOW COST — EARTH ─────────────── */}
      <section id="workflow-cost" className="bg-[#EFEAE0] py-20 sm:py-24">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              <Workflow className="h-3 w-3" strokeWidth={2} />
              Cost #4
            </div>
            <h2 style={h2Style}>The workflow cost</h2>

            <p style={proseStyle}>
              ChatGPT is a chat interface. Metes is a pipeline. The difference matters when you&apos;re doing more than one listing.
            </p>

            <h3 style={h3Style}>What the chat interface costs you</h3>

            <p style={proseStyle}>
              Producing a kit in ChatGPT requires:
            </p>

            <BulletList items={[
              <><strong>One conversation per listing</strong> (or chained prompts in a single session that get unwieldy)</>,
              <><strong>Manual coordination of outputs</strong> — the MLS description doesn&apos;t know about the social posts, the social posts don&apos;t reference the email campaign</>,
              <><strong>Manual formatting</strong> — character counts, line breaks, platform-specific structures</>,
              <><strong>Manual photo coordination</strong> — ChatGPT can&apos;t see your photos. Descriptions reference photos generically.</>,
              <><strong>No consistency across listings</strong> — different prompts produce different structures; brand voice drifts</>,
            ]} />

            <p style={proseStyle}>
              For an agent doing 1-2 listings a year, none of this matters. For an agent doing 1-3 listings a month, the workflow friction compounds.
            </p>

            <h3 style={h3Style}>What a pipeline gives you</h3>

            <p style={proseStyle}>
              Metes is built around one workflow: upload photos and details, get a complete kit. The same input structure produces the same output structure every time. Photos are analyzed and ranked. Captions are tied to specific photos by filename. MLS descriptions, social posts, and emails are coordinated — the email campaign references the social pack, the social pack references the listing.
            </p>

            <p style={proseStyle}>
              This isn&apos;t an inherent advantage of dedicated tools over general AI. It&apos;s an advantage of having a workflow over having a chatbot.
            </p>

            <h3 style={h3Style}>The data privacy gap</h3>

            <p style={proseStyle}>
              A real consideration that doesn&apos;t show up in most ChatGPT-vs-tool comparisons: <strong>OpenAI&apos;s free tier may use your inputs to train future models.</strong> When an agent pastes a client&apos;s pre-approval letter, transaction documents, or property details into the free ChatGPT for help, those inputs may be retained and used for training.
            </p>

            <p style={proseStyle}>
              For agents working with client PII (financial information, personal details, contract terms), this is a documented compliance concern. The 2026 industry guidance is clear: don&apos;t paste client information into consumer-grade AI tools.
            </p>

            <p style={proseStyle}>
              ChatGPT Plus ($20/month) has different data handling settings, but the default behavior across consumer-grade AI is more permissive than business tools. Metes is built around per-listing inputs that don&apos;t get retained or used for any other purpose.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── WHEN CHATGPT IS THE RIGHT CHOICE — CREAM ─────────────── */}
      <section id="when-chatgpt" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-20 sm:py-24">
        <div className={CONTENT}>
          <div className={READING}>
            <SectionLabel>Honest disclaimer</SectionLabel>
            <h2 style={h2Style}>When ChatGPT is actually the right choice</h2>

            <p style={proseStyle}>
              Honesty section. ChatGPT is genuinely the better choice in several scenarios:
            </p>

            <BulletList items={[
              <><strong>You list 1-3 properties a year.</strong> The Metes per-listing pricing is still reasonable, but a free or $20/month ChatGPT subscription has zero per-listing marginal cost, and you have time to manually verify the output.</>,
              <><strong>You want maximum flexibility.</strong> ChatGPT can write anything — investor pitch decks, buyer scripts, client emails, contract clauses (with a lawyer&apos;s review). Metes does listing kits well; it doesn&apos;t do everything.</>,
              <><strong>You&apos;re learning AI tools in general.</strong> ChatGPT is the canonical AI tool. Using it teaches general AI literacy that transfers to other tools. Metes is purpose-built and won&apos;t teach those skills.</>,
              <><strong>You enjoy the writing process.</strong> ChatGPT is a co-writer. If you genuinely enjoy crafting listing copy and want AI as a brainstorming partner, ChatGPT is better suited to that workflow than a one-click pipeline.</>,
            ]} />

            <p style={proseStyle}>
              For agents doing genuine listing volume — 1+ listings a month — the time, compliance, and accuracy costs of using ChatGPT for the full workflow accumulate faster than the subscription savings.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── SIDE-BY-SIDE TABLE — EARTH ─────────────── */}
      <section id="side-by-side" className="bg-[#EFEAE0] py-20 sm:py-24">
        <div className={CONTENT}>
          <div style={{ maxWidth: "960px", margin: "0 auto" }}>
            <SectionLabel>Side-by-side</SectionLabel>
            <h2 style={h2Style}>The honest comparison</h2>
            <p style={proseStyle}>
              The capability picture across all three options. Metes versus ChatGPT Free versus ChatGPT Plus.
            </p>

            <div style={{ overflowX: "auto", marginTop: "24px" }}>
              <div className="overflow-hidden rounded-[14px] border border-[rgba(20,39,30,0.18)] bg-[#FAF7F0]">
                <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-3 border-b border-[rgba(20,39,30,0.10)] bg-[rgba(20,39,30,0.04)] px-5 py-3.5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[rgba(20,39,30,0.55)]">
                    Capability
                  </div>
                  <div className="font-manrope text-[13px] font-semibold text-[#14271E]">
                    Metes
                  </div>
                  <div className="font-manrope text-[13px] font-semibold text-[#14271E]">
                    ChatGPT Free
                  </div>
                  <div className="font-manrope text-[13px] font-semibold text-[#14271E]">
                    ChatGPT Plus
                  </div>
                </div>

                {COMPARISON_ROWS.map((row, i) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-3 px-5 py-3.5 ${
                      i < COMPARISON_ROWS.length - 1 ? "border-b border-[rgba(20,39,30,0.08)]" : ""
                    }`}
                  >
                    <div className="font-manrope text-[13px] font-medium text-[#14271E]">
                      {row.label}
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <CellIcon state={row.metes.state} />
                      </div>
                      {row.metes.value && (
                        <span className="text-[12.5px] leading-[1.5] text-[#4A6B53]">
                          {row.metes.value}
                        </span>
                      )}
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <CellIcon state={row.chatgptFree.state} />
                      </div>
                      {row.chatgptFree.value && (
                        <span className="text-[12.5px] leading-[1.5] text-[#4A6B53]">
                          {row.chatgptFree.value}
                        </span>
                      )}
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="mt-0.5">
                        <CellIcon state={row.chatgptPlus.state} />
                      </div>
                      {row.chatgptPlus.value && (
                        <span className="text-[12.5px] leading-[1.5] text-[#4A6B53]">
                          {row.chatgptPlus.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── FAQ — WARM CREAM ─────────────── */}
      <section id="faq" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-20 sm:py-24">
        <div className={CONTENT}>
          <div className={READING}>
            <SectionLabel>Common questions</SectionLabel>
            <h2 style={h2Style}>Common questions</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "24px" }}>
              {[
                {
                  q: "Can I use ChatGPT to write MLS listing descriptions?",
                  a: "Yes. ChatGPT generates MLS descriptions with appropriate prompts. The output is generally fluent and usable as a starting point. The risks are: (1) it can fabricate details about the property that don't exist, (2) it routinely includes Fair Housing-flagged language unless explicitly instructed otherwise, (3) it doesn't enforce MLS character limits unless told.",
                },
                {
                  q: "Is ChatGPT Fair Housing compliant?",
                  a: "No, ChatGPT has no Fair Housing safeguards. It will generate phrases like 'perfect for families,' 'great for young professionals,' and 'safe neighborhood' — all of which are Fair Housing-flagged language. The agent remains legally responsible for the output. 'I used ChatGPT' is not a defense recognized by HUD or courts.",
                },
                {
                  q: "How accurate is ChatGPT for real estate market data?",
                  a: "Limited. ChatGPT Free works from training data with a knowledge cutoff of October 2023 (GPT-4o) or December 2025 (GPT-5.5). ChatGPT Plus has Bing browsing for current information, but it's unreliable for hyperlocal data — specific business names, current operating hours, recent neighborhood changes. For neighborhood content specifically, dedicated tools that query live data sources are materially more accurate.",
                },
                {
                  q: "Does ChatGPT hallucinate?",
                  a: "Yes, at measurable rates. Benchmark testing shows GPT-4o hallucinates approximately 1.5% of the time on general tasks. Real-world hallucination rates in LLM interactions are higher — peer-reviewed research found 31.4% in real-world use, rising to 60% in complex domains. For real estate specifically, the documented failure mode is 'confidently includes property details that don't exist.'",
                },
                {
                  q: "How long does it take to write a complete listing kit in ChatGPT?",
                  a: "For a competent agent with saved prompts, approximately 45-90 minutes per complete kit (MLS description, social posts, email campaign, neighborhood content, photo coordination, Fair Housing review). First-time prompting takes 2-3x longer. Dedicated tools that produce the same outputs typically take under 60 seconds.",
                },
                {
                  q: "Is it safe to paste client information into ChatGPT?",
                  a: "Generally no, especially for the free tier. OpenAI's free tier may use inputs for training future models. Pasting client PII (financial information, contract terms, transaction details) into consumer-grade AI is a documented compliance concern. The 2026 industry guidance is to use business-grade tools with documented data handling policies for any work involving client information.",
                },
                {
                  q: "Should I use ChatGPT or Metes?",
                  a: "If you list 1-3 properties a year and have time to manually verify and edit AI output, ChatGPT is a reasonable choice and the cost is minimal. If you list 1+ properties a month, the time cost (45-90 minutes per listing) and compliance risk make Metes' per-listing pricing more efficient. The break-even point is roughly 1-2 listings per month — above that, the dedicated tool saves more time and money than it costs.",
                },
                {
                  q: "Does ChatGPT Plus's web browsing fix the hallucination problem?",
                  a: "Partially. Plus's Bing browsing helps for current events and well-indexed information. It's unreliable for hyperlocal data — specific business names, recent closures, neighborhood-level changes. For listing content that needs to be accurate about local businesses, schools, and amenities, browsing-augmented ChatGPT is better than offline but still produces fabrications. Live data API integration is materially more accurate for local content.",
                },
              ].map(({ q, a }, i) => (
                <details
                  key={i}
                  style={{
                    borderRadius: "12px",
                    border: `1px solid ${C.border}`,
                    background: C.bgCard,
                    padding: "20px 24px",
                  }}
                >
                  <summary style={{
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: C.ink,
                    cursor: "pointer",
                    listStyle: "none",
                    letterSpacing: "-0.005em",
                  }}>
                    {q}
                  </summary>
                  <div style={{ marginTop: "14px", fontSize: "14.5px", lineHeight: 1.7, color: C.inkSoft }}>
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── SOURCES FOOTER — CREAM ─────────────── */}
      <section className="bg-[#EFEAE0] py-10">
        <div className={CONTENT}>
          <div className={READING}>
            <p style={{
              fontFamily: "var(--font-jetbrains, monospace)",
              fontSize: "12px",
              lineHeight: 1.6,
              color: C.muted,
              textAlign: "center",
              fontStyle: "italic",
            }}>
              Sources: Florida Realtors Magazine, &ldquo;The Real Reasons AI Can&apos;t Replace Real Estate Professionals&rdquo; (NAR-affiliated, 2024); Vectara LLM Hallucination Leaderboard (2025-2026); JMIR Comparative Analysis of LLM Hallucination Rates (peer-reviewed, 2024); HUD Office of Fair Housing and Equal Opportunity penalty schedules (24 CFR § 180.671, March 2024 adjustment); NAR Fair Housing Act overview (2026); Pinnacle Real Estate Academy AI compliance guidance (2026); OpenAI documentation on knowledge cutoffs and data handling (2026). This reference is informational and not legal advice.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── FINAL CTA — DARK FOREST ─────────────── */}
      <section className="relative overflow-hidden bg-[#14271E] py-20 sm:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(184,153,104,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,153,104,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className={`relative ${CONTENT}`}>
          <div style={{ maxWidth: "720px" }}>
            <SectionLabel light>The honest closing</SectionLabel>
            <h2 className="mb-5 font-manrope text-[clamp(28px,4vw,42px)] font-medium leading-[1.1] tracking-[0.005em] text-[#F4F0E8]">
              ChatGPT is a general-purpose tool. <em className="not-italic text-[#B89968]">Real estate listings aren&apos;t a general-purpose problem.</em>
            </h2>
            <p className="mb-8 max-w-[600px] text-[clamp(15px,1.3vw,17px)] leading-[1.6] text-[rgba(244,240,232,0.78)]">
              For agents doing real listing volume, dedicated workflows pay for themselves quickly. Try the free Fair Housing audit on any ChatGPT-generated copy you have, or skip the audit and let Metes produce the kit compliant by default.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-[9px] bg-[#B89968] px-7 py-3.5 font-manrope text-[14px] font-medium text-[#14271E] no-underline transition-colors hover:bg-[#9A7E50] hover:text-[#F4F0E8]"
              >
                Generate a kit — $35
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/tools/fha-compliance-checker"
                className="inline-flex items-center gap-2 rounded-[9px] border border-[rgba(244,240,232,0.3)] bg-transparent px-7 py-3.5 font-manrope text-[14px] font-medium text-[#F4F0E8] no-underline hover:border-[rgba(244,240,232,0.6)]"
              >
                Audit ChatGPT output for free
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Clock, Radio, Eye, XCircle } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "How to Write Listing Descriptions That Reach Zillow in 2026 | Metes",
  description:
    "The 'What I Love' fields are gone. MLS-to-Zillow syndication is contested. Zillow Preview is a new content type. Here's how to write descriptions that actually reach Zillow buyers in 2026.",
  keywords: [
    "zillow listing description",
    "mls description zillow",
    "what i love about the home zillow",
    "zillow preview listings",
    "pdap feed zillow",
    "zillow pro for brokers",
    "mred zillow suspension",
    "writing for zillow 2026",
  ],
  alternates: {
    canonical: "https://www.metes.app/learn/writing-for-zillow-2026",
  },
  openGraph: {
    title: "How to Write Listing Descriptions That Reach Zillow in 2026",
    description:
      "The 'What I Love' fields are gone. MLS-to-Zillow syndication is contested. Here's what to write and where to post it.",
    url: "https://www.metes.app/learn/writing-for-zillow-2026",
    siteName: "Metes",
    type: "article",
    images: [
      {
        url: "https://www.metes.app/og/writing-for-zillow-2026.png",
        width: 1200,
        height: 630,
        alt: "How to write listing descriptions that reach Zillow in 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing Listing Descriptions for Zillow in 2026",
    description: "The fields are gone, syndication is contested. Here's what to do.",
    images: ["https://www.metes.app/og/writing-for-zillow-2026.png"],
  },
  robots: { index: true, follow: true },
};

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.metes.app/learn/writing-for-zillow-2026#article",
      "headline": "How to Write Listing Descriptions That Reach Zillow in 2026 (When the MLS Won't Do It for You)",
      "description":
        "The 'What I Love' fields are gone. MLS-to-Zillow syndication is contested. Zillow Preview is a new content type. Reference for agents on writing descriptions that reach Zillow buyers in 2026's fractured environment.",
      "image": "https://www.metes.app/og/writing-for-zillow-2026.png",
      "datePublished": "2026-07-08",
      "dateModified": "2026-07-08",
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
        "@id": "https://www.metes.app/learn/writing-for-zillow-2026",
      },
      "keywords":
        "Zillow, MLS description, PDAP, Zillow Preview, IDX, MRED, Compass, real estate",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.metes.app/learn/writing-for-zillow-2026#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I edit my Zillow listing description as an agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No — not on Zillow directly. For any MLS-connected listing, Zillow displays the description that came from the MLS feed. To change what appears on Zillow, you have to change it in the MLS. The change propagates to Zillow within 24 hours via the IDX feed refresh.",
          },
        },
        {
          "@type": "Question",
          "name": "Where did 'What I Love About This Home' go?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zillow removed the homeowner-editable 'What I Love About This Home' and 'What I Love About the Neighborhood' sections from listings tied to IDX feeds (which includes every MLS-connected agent listing) years ago. The change was tied to Zillow's transition to IDX-compliant data display. The fields only remain functional for For Sale By Owner listings that are not tied to an MLS.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Zillow decide which listings show first in search?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zillow's search ranking is not fully documented, but consistent factors include: location match to the buyer's search area, filter match on structured facts (beds, baths, price range, features), listing recency, and buyer save/share behavior. The description contributes indirectly — it affects feature extraction that populates filter matches, and it affects whether buyers save the listing (a signal Zillow weights).",
          },
        },
        {
          "@type": "Question",
          "name": "Why did my listing disappear from Zillow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Three common reasons in 2026: (1) your MLS temporarily suspended its Zillow feed as part of an active dispute (e.g., MRED in May 2026); (2) your listing violated Zillow's Listing Access Standards because it was publicly marketed before hitting the MLS or IDX feed; (3) a data feed error caused the listing not to sync. Contact your brokerage's tech team first, then your MLS, then Zillow support if the issue persists.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I post my listing directly to Zillow without the MLS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For licensed-agent-represented listings, no — not through any authorized route. The only 'direct to Zillow' options are brokerage-level agreements (PDAP feed via MLS Grid or Zillow Pro for Brokers), and both require the Designated Managing Broker to set up. Individual agents cannot post agent listings directly. FSBO listings from homeowners are the only direct-post route Zillow supports for non-MLS-syndicated content.",
          },
        },
        {
          "@type": "Question",
          "name": "What's the Zillow Preview program?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A pre-market listing program that lets participating brokerages showcase listings on Zillow (and now Realtor.com Preview via a collaboration) before they hit the MLS. As of March 2026, 29 brokerages had signed on, including Berkshire Hathaway HomeServices, Engel & Völkers, SERHANT., and Samson Properties. Content shifts to a 'coming soon' positioning with softer CTAs and shorter descriptions. Brokerage-level participation only; agents cannot opt in individually.",
          },
        },
        {
          "@type": "Question",
          "name": "How does Zillow's Listing Access Standards policy affect my listings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The policy, in effect since June 2025, restricts listings that were publicly marketed for more than one business day before appearing on an IDX or VOW feed. This mostly affects private listing networks and pre-MLS brokerage exclusives. Standard MLS listings that go straight to the MLS and then syndicate are not affected. If your brokerage uses coming-soon marketing outside the MLS, coordinate with them on compliance.",
          },
        },
        {
          "@type": "Question",
          "name": "Should I write a different description for Zillow vs. Realtor.com?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generally no. Both portals display the same MLS description via similar IDX feeds. Writing a description optimized specifically for one portal risks weaker performance on the other. The one exception is pre-market content: Zillow Preview and Realtor.com Preview are distinct programs with distinct content requirements. If your brokerage participates in either, expect to write pre-market versions separately from the standard MLS description that syndicates elsewhere.",
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
// SectionLabel
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
// BulletList — gold bullets
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

export default function WritingForZillow2026Page() {
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
            <SectionLabel>Reference · Zillow in 2026</SectionLabel>

            <h1 className="mb-4 font-manrope text-[clamp(28px,4.5vw,48px)] font-medium leading-[1.08] tracking-[0.005em] text-[#14271E]">
              How to write listing descriptions that reach Zillow in 2026 <em className="not-italic text-[#9A7E50]">(when the MLS won&apos;t do it for you)</em>.
            </h1>

            <p className="mb-6 max-w-[640px] text-[clamp(14px,1.2vw,17px)] leading-[1.6] text-[#4A6B53]">
              Zillow used to be simple: agents wrote an MLS description, the MLS syndicated it to Zillow, and everything worked. In 2026, three things changed — the &ldquo;What I Love&rdquo; fields disappeared, MLS-to-Zillow syndication became contested, and pre-market programs like Zillow Preview created a new content type.
            </p>

            <p className="mb-8 max-w-[640px] text-[clamp(14px,1.2vw,17px)] leading-[1.6] text-[#4A6B53]">
              This piece is a reference for what to write, why the old fields are gone, and what to do if your MLS feed to Zillow goes down.
            </p>

            <p className="text-[13px] font-mono uppercase tracking-[0.08em] text-[rgba(20,39,30,0.55)]">
              Last updated: July 8, 2026 · ~18 minute read
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── STATE OF THE MOMENT — GOLD ACCENT BLOCK ─────────────── */}
      <section className="bg-[#EFEAE0] py-12">
        <div className={CONTENT}>
          <div className={READING}>
            <div style={{
              background: "rgba(184,153,104,0.06)",
              border: `1px solid rgba(184,153,104,0.3)`,
              borderRadius: "12px",
              padding: "28px 32px",
            }}>
              <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
                <Clock className="h-3 w-3" strokeWidth={2} />
                A note on the moment
              </div>

              <p style={proseStyle}>
                The Zillow-to-agent pipeline is unstable right now in ways it wasn&apos;t 18 months ago. As of publication:
              </p>

              <BulletList items={[
                <><strong>The MRED (Chicago) suspension:</strong> In May 2026, MRED — the Midwest Real Estate Data MLS covering Chicagoland with ~48,000 subscribers — briefly suspended Zillow&apos;s data feed. A federal judge issued a temporary restraining order forcing MRED to restore the feed while litigation continues. A preliminary injunction hearing is underway (July 1-2, 2026), with post-hearing briefs due July 9 and Judge John Tharp expected to rule shortly after.</>,
                <><strong>The Realtracs (Nashville) dispute:</strong> Realtracs threatened to cut Zillow&apos;s feed effective June 1, 2026. As of June 8, Realtracs decided to continue distributing to Zillow while contract negotiations continue.</>,
                <><strong>The Zillow Pro for Brokers push:</strong> Zillow is actively working with brokerages nationwide to establish direct feeds that bypass the MLS entirely — reachable through either a PDAP feed via MLS Grid or a Zillow Pro for Brokers direct syndication agreement.</>,
                <><strong>The Zillow Preview program:</strong> As of March 2026, 29 brokerages had signed pre-marketing agreements with Zillow, including Berkshire Hathaway HomeServices, Engel &amp; Völkers, SERHANT., and Samson Properties.</>,
              ]} />

              <p style={{ ...proseStyle, marginBottom: 0 }}>
                The specifics will shift over the next 90 days. What won&apos;t shift: the underlying question every listing agent needs a clear answer to — <em>how does my listing actually reach Zillow, and what should I write for the paths that exist right now?</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── TLDR + JUMP TO — CREAM ─────────────── */}
      <section className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-16 sm:py-20">
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
                Zillow used to be simple. In 2026, three things changed: (1) the old &ldquo;What I Love About This Home / Neighborhood&rdquo; editable Zillow fields are gone for any MLS-tied listing; (2) MLS-to-Zillow syndication is no longer guaranteed in some markets; (3) Zillow Preview is a real pre-market program requiring different content.
              </p>
              <p style={{ ...proseStyle, marginBottom: 0 }}>
                For most agents in most markets, the answer is still: write the best MLS description you can, and it will syndicate to Zillow via IDX. But knowing what &ldquo;best&rdquo; means when your MLS description is the <em>only</em> Zillow-visible content is different from knowing it as one channel among many.
              </p>
            </div>

            <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              Jump to
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { id: "fields-gone", label: "The 'What I Love' fields are gone" },
                { id: "display", label: "How MLS descriptions actually display on Zillow" },
                { id: "mls-wont-send", label: "When your MLS won't send your listing to Zillow" },
                { id: "preview", label: "The Zillow Preview program" },
                { id: "writing", label: "Writing for each path" },
                { id: "what-not", label: "What NOT to do" },
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

      {/* ─────────────── FIELDS GONE — EARTH ─────────────── */}
      <section id="fields-gone" className="bg-[#EFEAE0] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <SectionLabel>Historical context</SectionLabel>
            <h2 style={h2Style}>The &ldquo;What I Love&rdquo; fields are gone</h2>

            <p style={proseStyle}>
              Most agents&apos; mental model of Zillow is stuck in 2019. The image that persists: an MLS description at the top, then two homeowner-editable sections underneath — &ldquo;What I Love About This Home&rdquo; and &ldquo;What I Love About the Neighborhood&rdquo; — where the seller or agent could add extra context that the MLS didn&apos;t capture.
            </p>

            <p style={proseStyle}>
              That mental model is wrong. Those fields were removed years ago for MLS-connected listings.
            </p>

            <h3 style={h3Style}>What happened</h3>

            <p style={proseStyle}>
              When Zillow transitioned from direct broker syndication feeds to IDX feeds (a shift that took years to complete and continues to have downstream effects), the platform had to comply with the same IDX display rules that any brokerage-hosted IDX site follows. The homeowner-editable &ldquo;What I Love&rdquo; sections were incompatible with those rules — they allowed unmoderated content to appear alongside MLS-controlled listing data, and they created recurring Fair Housing exposure because homeowners frequently used protected-class language.
            </p>

            <p style={proseStyle}>
              Zillow&apos;s own support documentation confirmed the change in the years that followed: for properties tied to an IDX feed (which includes every listing represented by an MLS-participating agent), the &ldquo;What I Love&rdquo; fields no longer exist.
            </p>

            <h3 style={h3Style}>What still exists</h3>

            <p style={proseStyle}>
              The fields still work for <strong>For Sale By Owner</strong> listings — homeowners selling without an agent, who manually create their listing directly on Zillow rather than through an MLS. In that narrow case, the homeowner can fill out both sections and they display normally.
            </p>

            <p style={proseStyle}>
              If an FSBO homeowner later hires an agent and their property enters the MLS, the FSBO listing (including any &ldquo;What I Love&rdquo; content) gets overridden by the MLS feed. The homeowner-written content disappears when the agent takes over.
            </p>

            <h3 style={h3Style}>What this means for agents in 2026</h3>

            <p style={proseStyle}>
              Two direct implications:
            </p>

            <BulletList items={[
              <><strong>The MLS description is now the only place Zillow displays your writing.</strong> There is no supplementary field to catch what didn&apos;t fit in the MLS char limit. If it doesn&apos;t go in the MLS description, Zillow will not show it.</>,
              <><strong>Neighborhood content has to go in the MLS description.</strong> The old workflow of &ldquo;let the MLS description handle the property and add neighborhood context in the &lsquo;What I Love About the Neighborhood&rsquo; field&rdquo; is dead. Neighborhood context now has to compete for space with property description inside the same field.</>,
            ]} />

            <p style={proseStyle}>
              This is the load-bearing point most agents haven&apos;t internalized. Every optimization decision downstream — character length, keyword placement, feature ordering — flows from the fact that the MLS description does all the work now.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── HOW DISPLAY WORKS — CREAM ─────────────── */}
      <section id="display" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              <Eye className="h-3 w-3" strokeWidth={2} />
              The mechanics
            </div>
            <h2 style={h2Style}>How MLS descriptions actually display on Zillow</h2>

            <p style={proseStyle}>
              To write a description that performs on Zillow specifically, it helps to know how Zillow actually renders it.
            </p>

            <h3 style={h3Style}>Character truncation</h3>

            <p style={proseStyle}>
              Zillow displays MLS descriptions with a &ldquo;read more&rdquo; truncation on both desktop and mobile. The exact character count where truncation begins varies by device and layout, but the practical rules:
            </p>

            <BulletList items={[
              <><strong>Desktop:</strong> approximately 300 characters visible before &ldquo;read more&rdquo;</>,
              <><strong>Mobile:</strong> approximately 200-250 characters visible before &ldquo;read more&rdquo;</>,
            ]} />

            <p style={proseStyle}>
              Since roughly 60-70% of Zillow traffic is mobile, the effective visible zone is closer to 200 characters. Anything past that requires the buyer to tap &ldquo;read more&rdquo; — a real friction point that a meaningful fraction of buyers won&apos;t cross.
            </p>

            <div style={{
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              borderRadius: "10px",
              padding: "16px 20px",
              marginBottom: "20px",
            }}>
              <p style={{ ...proseStyle, margin: 0, fontSize: "15px" }}>
                <strong>Practical implication:</strong> the first 200 characters of the MLS description have to carry the strongest single argument for the property. Feature dumps that spread across the description lose the buyers who don&apos;t tap through.
              </p>
            </div>

            <h3 style={h3Style}>Where the description appears</h3>

            <p style={proseStyle}>
              On the Zillow listing page, the MLS description appears below the photo carousel and above the structured facts (beds, baths, square footage, year built, etc.). It&apos;s the connective tissue between the visual impression and the data. Buyers who scroll past photos land on it, decide whether to keep reading or scroll to the structured facts, and only then decide whether to save the listing or move on.
            </p>

            <p style={proseStyle}>
              The description competes with the photo carousel above (visual) and the structured facts below (numerical). It has to add something both of those don&apos;t — narrative context, sensory detail, neighborhood specificity — or the buyer will treat it as noise.
            </p>

            <h3 style={h3Style}>What Zillow&apos;s algorithm extracts</h3>

            <p style={proseStyle}>
              Zillow&apos;s search and recommendation algorithms don&apos;t just display MLS descriptions — they extract structured data from them. Specific words trigger feature tagging that affects which searches surface the listing. This is not fully documented, but consistent patterns emerge:
            </p>

            <BulletList items={[
              <><strong>Feature keywords</strong> like &ldquo;renovated,&rdquo; &ldquo;updated,&rdquo; &ldquo;new construction,&rdquo; &ldquo;detached garage,&rdquo; &ldquo;primary suite&rdquo; get extracted into Zillow&apos;s feature filters</>,
              <><strong>Location keywords</strong> (neighborhood names, nearby landmarks) affect location-based search relevance</>,
              <><strong>Amenity keywords</strong> (pool, waterfront, mountain views) affect saved-search alerts</>,
            ]} />

            <div style={{
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              borderRadius: "10px",
              padding: "16px 20px",
              marginBottom: "20px",
            }}>
              <p style={{ ...proseStyle, margin: 0, fontSize: "15px" }}>
                <strong>Practical implication:</strong> descriptions that use vague language (&ldquo;beautiful updated interior&rdquo;) signal less to the algorithm than descriptions that use specific language (&ldquo;2024 kitchen renovation with quartz counters and gas range&rdquo;). Specificity helps both buyers scanning the listing and the algorithm categorizing it.
              </p>
            </div>

            <h3 style={h3Style}>The Zillow standards question</h3>

            <p style={proseStyle}>
              Since April 2025, Zillow has enforced a Listing Access Standards policy that bans listings publicly marketed for more than one day before appearing on IDX or VOW feeds. This is aimed at private listing networks (PLNs) and brokerage &ldquo;exclusives&rdquo; — not at listing description content directly. But it&apos;s worth knowing the policy exists, because it affects which listings appear on Zillow at all before you worry about what the descriptions say.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── MLS WON'T SEND — FOREST DARK ─────────────── */}
      <section id="mls-wont-send" className="relative overflow-hidden bg-[#14271E] py-20 sm:py-24">
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
              <Radio className="h-3 w-3" strokeWidth={2} />
              The infrastructure question
            </div>
            <h2 style={{ ...h2Style, color: C.creamWarm }}>When your MLS won&apos;t send your listing to Zillow</h2>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              For most agents in most markets, the MLS-to-Zillow pipeline works fine. Your listing enters the MLS, syndicates via IDX, appears on Zillow within 24 hours. Nothing about the current disputes changes that for you.
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              But if you&apos;re in a market where the MLS has actively suspended or threatened to suspend Zillow&apos;s feed — currently MRED in Chicagoland, potentially Realtracs in Nashville, potentially others as the litigation unfolds — you need to know the two paths that keep your listings on Zillow even if the MLS-level feed goes down.
            </p>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>Path 1: PDAP feed through MLS Grid</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              <strong style={{ color: C.gold }}>PDAP</strong> stands for Participant Data Access Policy. Under NAR&apos;s MLS Policy Statement 8.3, the Participant — meaning the broker, not the individual agent — has the legal right to a data feed of their own brokerage&apos;s listing content from the MLS. The MLS cannot refuse this.
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              In markets served by MLS Grid (a central data pipeline used by ~30 MLSs to distribute listings to vendors), the PDAP feed flows out through MLS Grid to Zillow.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                <><strong style={{ color: C.gold }}>Cost</strong>, per MLS Grid published rates and Heartland MLS documentation: $100 setup fee, ~$175/month in ongoing feed fees. Numbers vary by MLS and feed type.</>,
                <><strong style={{ color: C.gold }}>Who has to do it:</strong> The Designated Managing Broker (DMB) of the brokerage. Individual agents cannot set this up. There is no manual-entry workaround.</>,
                <><strong style={{ color: C.gold }}>Where Zillow documents this:</strong> Zillow published a page during the MRED dispute at zillow.com/agents/beonzillow/ that walks DMBs through the setup process.</>,
              ].map((item, i) => (
                <li key={i} style={{ paddingLeft: "20px", position: "relative", fontFamily: "var(--font-manrope, sans-serif)", fontSize: "16px", lineHeight: 1.7, color: "rgba(244,240,232,0.85)" }}>
                  <span style={{ position: "absolute", left: "4px", color: C.gold, fontWeight: 600 }}>•</span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>Path 2: Zillow Pro for Brokers direct syndication</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              <strong style={{ color: C.gold }}>Zillow Pro for Brokers</strong> is a direct business-to-business syndication agreement between a brokerage and Zillow Group. It&apos;s free, and it bypasses the MLS entirely — the brokerage sends listing data directly to Zillow rather than routing through the MLS.
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                <><strong style={{ color: C.gold }}>Cost:</strong> Free.</>,
                <><strong style={{ color: C.gold }}>Who has to do it:</strong> The DMB signs the agreement with Zillow. Individual agents cannot sign it.</>,
                <><strong style={{ color: C.gold }}>When this matters:</strong> If your MLS decides to stop syndicating to Zillow, a Zillow Pro for Brokers direct feed keeps your listings flowing. Some brokerages already have this in place; others don&apos;t.</>,
              ].map((item, i) => (
                <li key={i} style={{ paddingLeft: "20px", position: "relative", fontFamily: "var(--font-manrope, sans-serif)", fontSize: "16px", lineHeight: 1.7, color: "rgba(244,240,232,0.85)" }}>
                  <span style={{ position: "absolute", left: "4px", color: C.gold, fontWeight: 600 }}>•</span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>What to actually do</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              If you&apos;re an agent worried your listings might disappear from Zillow, the practical action is a single text or email to your DMB:
            </p>

            <div style={{
              background: "rgba(184,153,104,0.08)",
              border: `1px solid rgba(184,153,104,0.25)`,
              borderRadius: "10px",
              padding: "16px 20px",
              marginBottom: "20px",
            }}>
              <p style={{ ...proseStyle, margin: 0, fontSize: "15px", fontStyle: "italic", color: C.creamWarm }}>
                &ldquo;Do we already have a direct broker feed to Zillow — either a PDAP feed through MLS Grid, or a Zillow Pro for Brokers direct syndication agreement?&rdquo;
              </p>
            </div>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              If yes to either one, you&apos;re covered. If no, your DMB is the one who has to set it up. This is not something you can solve at the agent level.
            </p>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>The honest read</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              Most agents in most markets don&apos;t need to worry about this. The MRED situation is contained to Chicagoland and is being litigated. Realtracs decided to keep the Zillow feed active while negotiations continue. No other MLS has actually suspended Zillow&apos;s feed as of July 2026.
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              But the trend is real. Compass CEO Robert Reffkin has publicly urged multiple MLSs to consider cutting Zillow. MLSs are actively updating their IDX display rules in ways that create Zillow-compliance friction. The infrastructure that quietly worked for 15 years is politically contested now.
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              If you&apos;re a listing agent, the reasonable posture is: don&apos;t panic, but know the questions to ask. When your brokerage has a direct feed to Zillow (whether PDAP or Zillow Pro for Brokers), your listings are structurally more resilient regardless of what happens between Zillow and your MLS.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── ZILLOW PREVIEW — CREAM ─────────────── */}
      <section id="preview" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <SectionLabel>The pre-market surface</SectionLabel>
            <h2 style={h2Style}>The Zillow Preview program</h2>

            <p style={proseStyle}>
              Zillow Preview is a pre-market listing program that lets participating brokerages showcase listings on Zillow before they hit the MLS. It&apos;s Zillow&apos;s response to private listing networks — an attempt to bring pre-market inventory into a public, transparent portal.
            </p>

            <h3 style={h3Style}>What it is</h3>

            <p style={proseStyle}>
              A listing in Zillow Preview appears on Zillow (and, per the recent Zillow-Realtor.com collaboration, on Realtor.com Preview as well) before the property is officially listed via the MLS. The listing is marked as pre-market, includes limited details, and is designed to build buyer awareness during the &ldquo;coming soon&rdquo; phase.
            </p>

            <h3 style={h3Style}>Who&apos;s participating</h3>

            <p style={proseStyle}>
              As of March 2026, 29 brokerages had signed Zillow Preview agreements, including:
            </p>

            <BulletList items={[
              "Berkshire Hathaway HomeServices",
              "Engel & Völkers",
              "SERHANT.",
              "Samson Properties",
              "(Plus 25 others)",
            ]} />

            <p style={proseStyle}>
              The list has been growing. eXp Realty announced a similar arrangement with Realtor.com, Homes.com, and ComeHome.com in the same period.
            </p>

            <h3 style={h3Style}>Who can use it</h3>

            <p style={proseStyle}>
              If your brokerage participates in Zillow Preview, you can pre-market eligible listings through the program. If your brokerage doesn&apos;t participate, you can&apos;t. This is a brokerage-level decision, not an agent-level choice.
            </p>

            <h3 style={h3Style}>What this means for content</h3>

            <p style={proseStyle}>
              Pre-market Zillow Preview listings are a different content type than standard MLS descriptions:
            </p>

            <BulletList items={[
              <><strong>Positioning:</strong> &ldquo;coming soon&rdquo; rather than &ldquo;available now&rdquo;</>,
              <><strong>CTAs:</strong> softer — &ldquo;sign up to be notified when this hits the market&rdquo; rather than &ldquo;schedule a tour&rdquo;</>,
              <><strong>Details:</strong> often limited (price range instead of specific price, general area instead of exact address, key features rather than full property specs)</>,
              <><strong>Length:</strong> shorter than standard MLS descriptions</>,
            ]} />

            <p style={proseStyle}>
              If your brokerage participates, expect to write in this mode for a portion of listings. If it doesn&apos;t, this section is informational — skip to the next one.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── WRITING FOR EACH PATH — EARTH ─────────────── */}
      <section id="writing" className="bg-[#EFEAE0] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <SectionLabel>The craft</SectionLabel>
            <h2 style={h2Style}>Writing for each path</h2>

            <p style={proseStyle}>
              Three writing modes for three paths. Same underlying property, different content shape.
            </p>

            <h3 style={h3Style}>Mode 1: The standard MLS description that syndicates to Zillow</h3>

            <p style={proseStyle}>
              This is what most agents write for most listings. The description enters the MLS and reaches Zillow via the normal IDX pipeline.
            </p>

            <p style={proseStyle}>
              <strong>Target character count:</strong> 800-950 characters. This fits under most MLS caps, works within Zillow&apos;s mobile display, and gives enough runway for the first-200-character hook plus the substantive follow-through.
            </p>

            <p style={proseStyle}>
              <strong>Structure:</strong>
            </p>

            <BulletList items={[
              <><strong>First sentence (opens the mobile-visible window):</strong> lead with the single strongest specific fact — the recent renovation, the standout feature, the location that anchors everything else. Not &ldquo;welcome to this stunning home.&rdquo; Something like &ldquo;1,847 sq ft, three-bed craftsman on Linden Avenue, two blocks from Alberta Arts.&rdquo;</>,
              <><strong>Sentences 2-3 (still in mobile-visible zone):</strong> develop the strongest argument. If the property&apos;s story is a 2024 kitchen renovation, the second sentence is about the kitchen. If it&apos;s a hero backyard, the second sentence is about the backyard. Whichever earns the first mobile scroll.</>,
              <><strong>Middle section (past the truncation):</strong> the substantive features and specifications that don&apos;t fit in the visible window. Beds, baths, square footage, updates, systems.</>,
              <><strong>Neighborhood context:</strong> since &ldquo;What I Love About the Neighborhood&rdquo; no longer exists, this has to appear in the MLS description itself. Two to three sentences naming specific nearby places. See the <Link href="/learn/neighborhood-description-examples" style={{ color: C.forest, textDecoration: "underline", textDecorationColor: C.gold, textUnderlineOffset: "3px" }}>neighborhood description examples reference</Link> for how to structure this cleanly.</>,
              <><strong>Closing:</strong> logistics rather than platitudes. Open house timing, seller motivation, showing instructions. Not &ldquo;don&apos;t miss this rare opportunity.&rdquo;</>,
            ]} />

            <div style={{
              background: "rgba(92,138,110,0.06)",
              border: `1px solid rgba(92,138,110,0.18)`,
              borderRadius: "12px",
              padding: "20px 24px",
              marginBottom: "20px",
            }}>
              <div style={{ marginBottom: "10px", fontFamily: "var(--font-manrope, sans-serif)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: C.pass }}>
                Example (886 chars)
              </div>
              <p style={{ ...proseStyle, margin: 0, fontSize: "15px", fontStyle: "italic" }}>
                &ldquo;Move-in ready 4-bed on Yachtsman Way in the Riverbend neighborhood of Annapolis. Kitchen renovation completed 2024: quartz counters, gas range, soft-close shaker cabinets. Primary suite faces east, gets full morning light. South-facing back patio with mature shade trees. Two blocks from Quiet Waters Park, five minutes to the Annapolis City Dock. Old Fox Books &amp; Coffeehouse is the neighborhood coffee stop; Boatyard Bar &amp; Grill anchors the weekend dinner rotation. Showings by appointment; seller relocating for work and would like to close within 60 days.&rdquo;
              </p>
            </div>

            <p style={proseStyle}>
              First 200 characters land the kitchen renovation and the primary suite orientation — the two strongest specifics. The rest fills in for buyers who tap through.
            </p>

            <h3 style={h3Style}>Mode 2: When you have a direct broker feed to Zillow (PDAP or Zillow Pro for Brokers)</h3>

            <p style={proseStyle}>
              The writing itself is identical to Mode 1. The MLS description is still the source. The difference is <em>reliability</em>: your listing appears on Zillow via the direct feed even if the MLS-level feed goes down.
            </p>

            <p style={proseStyle}>
              The one substantive difference: with a direct broker feed, some brokerages get slightly more flexibility on formatting (paragraph breaks, capitalization) than raw IDX syndication allows. Confirm with your brokerage&apos;s tech team what your direct feed actually preserves.
            </p>

            <h3 style={h3Style}>Mode 3: Pre-market Zillow Preview</h3>

            <p style={proseStyle}>
              If your brokerage participates in Zillow Preview, the writing shifts.
            </p>

            <p style={proseStyle}>
              <strong>Target character count:</strong> 400-600 characters. Shorter than a full MLS description. This is a teaser, not the main event.
            </p>

            <p style={proseStyle}>
              <strong>Structure:</strong>
            </p>

            <BulletList items={[
              <><strong>First sentence:</strong> positioning as pre-market. &ldquo;Coming to market next week&rdquo; or &ldquo;First look before it hits the MLS.&rdquo;</>,
              <><strong>Sentences 2-3:</strong> the strongest single feature or two. Enough to make a buyer save the listing without giving away every detail.</>,
              <><strong>Closing:</strong> the notification CTA. &ldquo;Save this listing to be notified when full details go live&rdquo; or similar.</>,
            ]} />

            <div style={{
              background: "rgba(92,138,110,0.06)",
              border: `1px solid rgba(92,138,110,0.18)`,
              borderRadius: "12px",
              padding: "20px 24px",
              marginBottom: "20px",
            }}>
              <div style={{ marginBottom: "10px", fontFamily: "var(--font-manrope, sans-serif)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: C.pass }}>
                Example (420 chars)
              </div>
              <p style={{ ...proseStyle, margin: 0, fontSize: "15px", fontStyle: "italic" }}>
                &ldquo;Coming to market next week: a 2024-renovated 4-bed in the Riverbend neighborhood of Annapolis. Quartz kitchen, primary suite with morning light, south-facing back patio walking distance to Quiet Waters Park. Full details and showings go live [date]. Save this listing to be notified.&rdquo;
              </p>
            </div>

            <p style={proseStyle}>
              Names the strongest specifics without exhausting them. Ends with the notification CTA that drives the follow-up action Zillow Preview is designed for.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── WHAT NOT TO DO — CREAM ─────────────── */}
      <section id="what-not" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              <XCircle className="h-3 w-3" strokeWidth={2} />
              The traps
            </div>
            <h2 style={h2Style}>What NOT to do</h2>

            <p style={proseStyle}>
              Four traps to avoid.
            </p>

            <h3 style={h3Style}>Don&apos;t create duplicate FSBO listings on Zillow when your MLS is also syndicating</h3>

            <p style={proseStyle}>
              If you&apos;re a licensed agent representing a seller, and the property is in the MLS, do not also create a FSBO listing on Zillow &ldquo;just to add the What I Love sections.&rdquo; The Zillow FSBO listing gets automatically overridden by the incoming MLS data. The homeowner-written content disappears. You spent time on content that will never display. Worse, you may have created a duplicate listing that confuses buyers or triggers a data conflict flag.
            </p>

            <h3 style={h3Style}>Don&apos;t try to bypass your MLS through unauthorized posting</h3>

            <p style={proseStyle}>
              Only the DMB can set up a PDAP feed or a Zillow Pro for Brokers agreement. If you&apos;re an agent and your brokerage doesn&apos;t have either, you cannot solve this yourself by posting your listing to Zillow through some other route. Attempting to do so may violate your MLS&apos;s rules and your brokerage&apos;s policies.
            </p>

            <h3 style={h3Style}>Don&apos;t write content that violates Zillow&apos;s Listing Access Standards</h3>

            <p style={proseStyle}>
              Zillow&apos;s April 2025 Listing Access Standards policy affects which listings appear on Zillow at all — separate from content quality. Listings publicly marketed elsewhere for more than one day before hitting an IDX or VOW feed can be excluded. This mostly matters for brokerages that use private listing networks (PLNs) or coming-soon marketing outside the MLS. If your brokerage does this, coordinate with them on how to comply. If your brokerage doesn&apos;t, this doesn&apos;t affect you.
            </p>

            <h3 style={h3Style}>Don&apos;t over-optimize for Zillow at the expense of other portals</h3>

            <p style={proseStyle}>
              Realtor.com, Redfin, Homes.com, and hundreds of IDX-powered brokerage sites all display MLS descriptions with slightly different rendering and slightly different algorithms. Writing a description that only works on Zillow — for example, one so heavily front-loaded that the middle and end are dead space — hurts you elsewhere. The strongest MLS descriptions perform reasonably across all major portals, not just one. And whatever you write, run it through <Link href="/learn/ai-listing-description-tells" style={{ color: C.forest, textDecoration: "underline", textDecorationColor: C.gold, textUnderlineOffset: "3px" }}>the six categories of AI tells</Link> before publishing — Zillow buyers are increasingly pattern-matching on AI-generated copy, and generic prose reduces credibility across every portal it reaches.
            </p>

            <p style={proseStyle}>
              The exception is Zillow Preview content, which is written specifically for the Zillow (and now Realtor.com Preview) pre-market surface. That mode is Zillow-specific by design.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── FAQ — EARTH ─────────────── */}
      <section id="faq" className="bg-[#EFEAE0] py-20 sm:py-24">
        <div className={CONTENT}>
          <div className={READING}>
            <SectionLabel>Common questions</SectionLabel>
            <h2 style={h2Style}>Common questions</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "24px" }}>
              {[
                {
                  q: "Can I edit my Zillow listing description as an agent?",
                  a: "No — not on Zillow directly. For any MLS-connected listing, Zillow displays the description that came from the MLS feed. To change what appears on Zillow, you have to change it in the MLS. The change propagates to Zillow within 24 hours via the IDX feed refresh.",
                },
                {
                  q: "Where did 'What I Love About This Home' go?",
                  a: "Zillow removed the homeowner-editable 'What I Love About This Home' and 'What I Love About the Neighborhood' sections from listings tied to IDX feeds (which includes every MLS-connected agent listing) years ago. The change was tied to Zillow's transition to IDX-compliant data display. The fields only remain functional for For Sale By Owner listings that are not tied to an MLS.",
                },
                {
                  q: "How does Zillow decide which listings show first in search?",
                  a: "Zillow's search ranking is not fully documented, but consistent factors include: location match to the buyer's search area, filter match on structured facts (beds, baths, price range, features), listing recency, and buyer save/share behavior. The description contributes indirectly — it affects feature extraction that populates filter matches, and it affects whether buyers save the listing (a signal Zillow weights).",
                },
                {
                  q: "Why did my listing disappear from Zillow?",
                  a: "Three common reasons in 2026: (1) your MLS temporarily suspended its Zillow feed as part of an active dispute (e.g., MRED in May 2026); (2) your listing violated Zillow's Listing Access Standards because it was publicly marketed before hitting the MLS or IDX feed; (3) a data feed error caused the listing not to sync. Contact your brokerage's tech team first, then your MLS, then Zillow support if the issue persists.",
                },
                {
                  q: "Can I post my listing directly to Zillow without the MLS?",
                  a: "For licensed-agent-represented listings, no — not through any authorized route. The only 'direct to Zillow' options are brokerage-level agreements (PDAP feed via MLS Grid or Zillow Pro for Brokers), and both require the Designated Managing Broker to set up. Individual agents cannot post agent listings directly. FSBO listings from homeowners are the only direct-post route Zillow supports for non-MLS-syndicated content.",
                },
                {
                  q: "What's the Zillow Preview program?",
                  a: "A pre-market listing program that lets participating brokerages showcase listings on Zillow (and now Realtor.com Preview via a collaboration) before they hit the MLS. As of March 2026, 29 brokerages had signed on, including Berkshire Hathaway HomeServices, Engel & Völkers, SERHANT., and Samson Properties. Content shifts to a 'coming soon' positioning with softer CTAs and shorter descriptions. Brokerage-level participation only; agents cannot opt in individually.",
                },
                {
                  q: "How does Zillow's Listing Access Standards policy affect my listings?",
                  a: "The policy, in effect since June 2025, restricts listings that were publicly marketed for more than one business day before appearing on an IDX or VOW feed. This mostly affects private listing networks and pre-MLS brokerage exclusives. Standard MLS listings that go straight to the MLS and then syndicate are not affected. If your brokerage uses coming-soon marketing outside the MLS, coordinate with them on compliance.",
                },
                {
                  q: "Should I write a different description for Zillow vs. Realtor.com?",
                  a: "Generally no. Both portals display the same MLS description via similar IDX feeds. Writing a description optimized specifically for one portal risks weaker performance on the other. The one exception is pre-market content: Zillow Preview and Realtor.com Preview are distinct programs with distinct content requirements. If your brokerage participates in either, expect to write pre-market versions separately from the standard MLS description that syndicates elsewhere.",
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

      {/* ─────────────── SOURCES — CREAM ─────────────── */}
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
              Sources: HousingWire coverage of the Zillow-MRED antitrust litigation (May-July 2026); Real Estate News coverage of Zillow Preview and direct broker feeds; RISMedia coverage of the MRED preliminary injunction hearing; MLS Grid public documentation; Heartland MLS Data Feeds documentation for PDAP pricing; Zillow support documentation on the removal of the &ldquo;What I Love&rdquo; fields for IDX-connected listings; Inman coverage of the Zillow Preview brokerage partnerships. This reference is informational and reflects the state of the market as of July 8, 2026; specifics will change as litigation resolves. Not legal advice.
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
            <SectionLabel light>The load-bearing insight</SectionLabel>
            <h2 className="mb-5 font-manrope text-[clamp(28px,4vw,42px)] font-medium leading-[1.1] tracking-[0.005em] text-[#F4F0E8]">
              The MLS description is now the only place Zillow displays your writing. <em className="not-italic text-[#B89968]">Everything flows from that.</em>
            </h2>
            <p className="mb-8 max-w-[600px] text-[clamp(15px,1.3vw,17px)] leading-[1.6] text-[rgba(244,240,232,0.78)]">
              Length, hook, feature ordering, neighborhood context — every optimization decision depends on the fact that the standalone Zillow fields are gone. Write the MLS description like it&apos;s the only thing Zillow buyers will read, because it is.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/listing-description-checker"
                className="inline-flex items-center gap-2 rounded-[9px] bg-[#B89968] px-7 py-3.5 font-manrope text-[14px] font-medium text-[#14271E] no-underline transition-colors hover:bg-[#9A7E50] hover:text-[#F4F0E8]"
              >
                Audit your MLS description free
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-[9px] border border-[rgba(244,240,232,0.3)] bg-transparent px-7 py-3.5 font-manrope text-[14px] font-medium text-[#F4F0E8] no-underline hover:border-[rgba(244,240,232,0.6)]"
              >
                See the full Metes kit — $35
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
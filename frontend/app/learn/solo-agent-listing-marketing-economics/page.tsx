import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calculator, TrendingDown, TrendingUp, Target, BarChart3 } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Solo Agent Listing Marketing Economics (2026) | Metes",
  description:
    "How much should you spend to market a listing in 2026? Volume math, honest cost stack, and where solo agents systematically overspend and underspend.",
  keywords: [
    "solo agent marketing costs",
    "real estate marketing budget per listing",
    "listing marketing cost 2026",
    "real estate photography cost",
    "ai tool subscription vs per listing",
    "solo agent tool stack",
    "listing marketing roi",
    "how much to spend on listing marketing",
  ],
  alternates: {
    canonical: "https://www.metes.app/learn/solo-agent-listing-marketing-economics",
  },
  openGraph: {
    title: "Solo Agent Listing Marketing Economics (2026)",
    description:
      "Volume math, honest cost stack, and where solo agents systematically overspend and underspend on listing marketing.",
    url: "https://www.metes.app/learn/solo-agent-listing-marketing-economics",
    siteName: "Metes",
    type: "article",
    images: [
      {
        url: "https://www.metes.app/og/solo-agent-listing-marketing-economics.png",
        width: 1200,
        height: 630,
        alt: "Solo agent listing marketing economics (2026)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solo Agent Listing Marketing Economics (2026)",
    description:
      "Volume math, cost stack, and where solo agents systematically overspend.",
    images: ["https://www.metes.app/og/solo-agent-listing-marketing-economics.png"],
  },
  robots: { index: true, follow: true },
};

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.metes.app/learn/solo-agent-listing-marketing-economics#article",
      "headline": "Solo Agent Listing Marketing Economics (2026)",
      "description":
        "Volume math, honest cost stack, and where solo agents systematically overspend and underspend on listing marketing.",
      "image": "https://www.metes.app/og/solo-agent-listing-marketing-economics.png",
      "datePublished": "2026-07-22",
      "dateModified": "2026-07-22",
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
        "@id": "https://www.metes.app/learn/solo-agent-listing-marketing-economics",
      },
      "keywords":
        "solo agent, listing marketing, photography cost, subscription vs per-listing, NAR data, real estate economics",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.metes.app/learn/solo-agent-listing-marketing-economics#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much should I spend on marketing per listing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depends on volume and market. Most solo agents in most markets should spend $400-900 per listing across photography, description, social, print, and light staging. Below $400, you're likely underspending on photography or description. Above $1,200 without a luxury price point, you're likely overspending on video or paid ads.",
          },
        },
        {
          "@type": "Question",
          "name": "Is a $79/month AI tool worth it for a solo agent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Only if you do 27+ listings per year. Below that volume, per-listing pricing ($35-50) mathematically wins. Above that volume, subscription pricing wins on math. Most solo agents fall below the threshold — the median listing-side agent does 5-8 per year per NAR data.",
          },
        },
        {
          "@type": "Question",
          "name": "Should I hire a photographer or do it myself?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Hire a photographer. Every time. Real estate photography is the single highest-ROI marketing spend at any listing volume. Buyers scroll by photo quality first. Phone photos and DIY shots kill click-through, which kills listing performance regardless of price point or description quality.",
          },
        },
        {
          "@type": "Question",
          "name": "How many listings do I need to justify a subscription AI tool?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "27 listings per year to break even on a $79/month tool against a $35 per-listing alternative. 44 listings per year for a $129/month tool. Below those thresholds, per-listing pricing is more efficient.",
          },
        },
        {
          "@type": "Question",
          "name": "Are cinematic listing videos worth it?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "For luxury listings ($1M+): often yes. The marginal impact on sale price and days on market can justify the $500-1,500 spend. For standard listings ($200K-$500K): rarely. Short-form social video at $75-200 has better cost-to-reach ratio at those price points. Cinematic video is the wrong choice for most listings.",
          },
        },
        {
          "@type": "Question",
          "name": "Should I pay for staging?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Push the cost to the seller when possible. Virtual staging on vacant rooms ($30-75 per photo) produces most of the benefit at 5-10% of physical staging cost. Agent-paid physical staging only makes commission-math sense at high price points.",
          },
        },
        {
          "@type": "Question",
          "name": "What's the highest-ROI thing I can spend money on for a listing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Photography. Not description, not video, not staging, not paid ads. Real estate photography drives the click-through rate that determines whether any of the other marketing gets seen. Underspending on photography while spending on anything else is a common mistake.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I know if I'm overspending on listing marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Two questions: (1) Are you spending more than 8-12% of your gross commission on marketing per listing? Above 12%, you're likely overspending relative to the sale value. (2) Are you paying for tools you use less than half the features of? If yes, you're paying for capacity you don't consume.",
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
// BulletList
// ─────────────────────────────────────────────────────────────────

function BulletList({ items, light = false }: { items: React.ReactNode[]; light?: boolean }) {
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
            color: light ? "rgba(244,240,232,0.85)" : C.ink,
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
// CostCategoryCard — for the cost stack section
// ─────────────────────────────────────────────────────────────────

interface CostCategoryProps {
  title: string;
  range: string;
  children: React.ReactNode;
}

function CostCategoryCard({ title, range, children }: CostCategoryProps) {
  return (
    <div style={{
      marginBottom: "24px",
      background: C.bgCard,
      border: `1px solid ${C.border}`,
      borderRadius: "12px",
      padding: "24px 28px",
    }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "8px", marginBottom: "14px" }}>
        <h3 style={{
          fontFamily: "var(--font-manrope, sans-serif)",
          fontSize: "20px",
          fontWeight: 600,
          color: C.ink,
          margin: 0,
          letterSpacing: "-0.005em",
        }}>
          {title}
        </h3>
        <span style={{
          fontFamily: "var(--font-jetbrains, monospace)",
          fontSize: "13px",
          color: C.goldDeep,
          background: "rgba(184,153,104,0.1)",
          padding: "4px 10px",
          borderRadius: "6px",
        }}>
          {range}
        </span>
      </div>
      <div style={{ fontFamily: "var(--font-manrope, sans-serif)", fontSize: "15px", lineHeight: 1.7, color: C.ink }}>
        {children}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// VolumeTierCard — for the recommendation framework
// ─────────────────────────────────────────────────────────────────

interface VolumeTierCardProps {
  tier: string;
  positioning: string;
  items: React.ReactNode[];
  perListing: string;
  annualSpend: string;
}

function VolumeTierCard({ tier, positioning, items, perListing, annualSpend }: VolumeTierCardProps) {
  return (
    <div style={{
      marginBottom: "24px",
      background: C.bgCard,
      border: `1px solid ${C.border}`,
      borderRadius: "12px",
      padding: "24px 28px",
    }}>
      <div style={{ marginBottom: "14px" }}>
        <h3 style={{
          fontFamily: "var(--font-manrope, sans-serif)",
          fontSize: "22px",
          fontWeight: 600,
          color: C.ink,
          margin: "0 0 6px 0",
          letterSpacing: "-0.005em",
        }}>
          {tier}
        </h3>
        <p style={{
          fontFamily: "var(--font-manrope, sans-serif)",
          fontSize: "14px",
          fontStyle: "italic",
          color: C.inkSoft,
          margin: 0,
        }}>
          {positioning}
        </p>
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px 0", display: "flex", flexDirection: "column", gap: "8px" }}>
        {items.map((item, i) => (
          <li
            key={i}
            style={{
              paddingLeft: "20px",
              position: "relative",
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "14.5px",
              lineHeight: 1.6,
              color: C.ink,
            }}
          >
            <span style={{ position: "absolute", left: "4px", color: C.gold, fontWeight: 600 }}>•</span>
            {item}
          </li>
        ))}
      </ul>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "12px",
        marginTop: "18px",
        paddingTop: "16px",
        borderTop: `1px solid ${C.border}`,
      }}>
        <div>
          <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: C.muted, marginBottom: "4px" }}>
            Per-listing total
          </div>
          <div style={{ fontFamily: "var(--font-manrope, sans-serif)", fontSize: "16px", fontWeight: 600, color: C.forest }}>
            {perListing}
          </div>
        </div>
        <div>
          <div style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", color: C.muted, marginBottom: "4px" }}>
            Estimated annual
          </div>
          <div style={{ fontFamily: "var(--font-manrope, sans-serif)", fontSize: "16px", fontWeight: 600, color: C.forest }}>
            {annualSpend}
          </div>
        </div>
      </div>
    </div>
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
const READING = "mx-auto max-w-[760px]";

// ─────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────

export default function SoloAgentEconomicsPage() {
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
          <div className="mx-auto max-w-[760px]">
            <SectionLabel>Guide · Business economics</SectionLabel>

            <h1 className="mb-4 font-manrope text-[clamp(28px,4.5vw,48px)] font-medium leading-[1.08] tracking-[0.005em] text-[#14271E]">
              Solo agent listing marketing economics <em className="not-italic text-[#9A7E50]">(2026)</em>.
            </h1>

            <p className="mb-6 max-w-[640px] text-[clamp(14px,1.2vw,17px)] leading-[1.6] text-[#4A6B53]">
              How much should you actually spend to market a listing in 2026, and what&apos;s the right tool stack for the volume you actually do? Not the volume you plan to do next year. Not the volume top producers do. The volume you actually did in the past twelve months.
            </p>

            <p className="mb-8 max-w-[640px] text-[clamp(14px,1.2vw,17px)] leading-[1.6] text-[#4A6B53]">
              This piece is about the math. Cost ranges by category, subscription-versus-per-listing crossover points, honest recommendations by volume tier.
            </p>

            <p className="text-[13px] font-mono uppercase tracking-[0.08em] text-[rgba(20,39,30,0.55)]">
              Last updated: July 22, 2026 · ~14 minute read
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── TLDR — EARTH ─────────────── */}
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
                The typical solo agent spends $400-1,200 marketing a single listing across photography, video, staging, description, print, and digital. The right mix depends on volume, not on industry averages or what top producers do.
              </p>
              <p style={{ ...proseStyle, marginBottom: 0 }}>
                Subscription tools sound cheap monthly but math breaks below 25-30 listings per year. Per-listing pricing wins for low-volume agents. This piece breaks down the crossover points, the categories most agents overspend on, and where the highest-ROI dollars actually are.
              </p>
            </div>

            <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              Jump to
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { id: "cost-stack", label: "The cost stack, by category" },
                { id: "subscription-math", label: "The subscription math" },
                { id: "volume-reality", label: "The volume reality" },
                { id: "overspend", label: "Where solo agents overspend" },
                { id: "underspend", label: "Where solo agents underspend" },
                { id: "framework", label: "The recommendation framework" },
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

      {/* ─────────────── COST STACK — CREAM ─────────────── */}
      <section id="cost-stack" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              <Calculator className="h-3 w-3" strokeWidth={2} />
              The categories
            </div>
            <h2 style={h2Style}>The cost stack, by category</h2>

            <p style={proseStyle}>
              Honest 2026 ranges. Numbers vary by market — coastal, luxury, and metro markets skew higher than suburban and rural — but the ranges below cover most solo agents in most US markets.
            </p>

            <CostCategoryCard title="Photography" range="$150-500 per listing">
              <p style={{ margin: "0 0 12px 0" }}>The most consistent per-listing spend. Every listing needs it. Quality varies wildly.</p>
              <p style={{ margin: "0 0 12px 0" }}>Real market rates in 2026:</p>
              <BulletList items={[
                <>Standard package (10-25 photos, exterior + interior, basic editing): $200-350 in most markets</>,
                <>Add drone: +$75-150</>,
                <>Add twilight photos: +$100-200</>,
                <>Add virtual staging: $30-75 per photo</>,
                <>Luxury or high-end markets: $400-1,000+</>,
              ]} />
              <p style={{ margin: "0 0 12px 0" }}>
                The &ldquo;cheap photographer&rdquo; trap is real. A $100 photographer whose photos look flat costs the agent more in listing performance than the $150 saved. Buyers scroll listings by photo quality first, description second, price third. Weak photos kill click-through before the description gets a chance.
              </p>
              <p style={{ margin: 0 }}>
                Volume tip: photographers offer discounts at 5+ listings per year. Worth negotiating.
              </p>
            </CostCategoryCard>

            <CostCategoryCard title="Video" range="$100-1,500 per listing">
              <p style={{ margin: "0 0 12px 0" }}>Highly variable by format and market.</p>
              <BulletList items={[
                <>Drone-only video: $75-200</>,
                <>Video walkthrough (10-60 seconds): $150-400</>,
                <>Short-form social video (Reels/Shorts/TikTok): $75-250</>,
                <>Cinematic listing video (2-4 minutes, drone + interior + music): $500-1,500</>,
                <>Luxury cinematic packages: $1,500-5,000+</>,
              ]} />
              <p style={{ margin: "0 0 12px 0" }}>
                Video ROI depends on price point. Cinematic video makes sense for luxury listings where a $500 spend recovers on a $2M sale. On a $350K sale, that same $500 rarely pays back in either sale price or days on market.
              </p>
              <p style={{ margin: 0 }}>
                Short-form video for social (Reels, Shorts, TikTok) has the best cost-to-reach ratio for most solo agents in most markets, but requires posting discipline to convert to lead flow.
              </p>
            </CostCategoryCard>

            <CostCategoryCard title="Staging" range="$500-3,000 per listing">
              <p style={{ margin: "0 0 12px 0" }}>The biggest per-listing spend when it happens, but often skipped.</p>
              <BulletList items={[
                <>Virtual staging (photos only): $30-75 per photo, typically 5-10 rooms = $150-750</>,
                <>Staging consultation: $150-500</>,
                <>Partial physical staging (key rooms only): $500-1,500</>,
                <>Full physical staging (occupied home): $1,000-3,000</>,
                <>Full physical staging (vacant): $2,000-6,000+</>,
              ]} />
              <p style={{ margin: 0 }}>
                Most solo agents either skip staging entirely or push the cost to the seller. Real recommendation: virtual staging on vacant rooms is affordable and often high-ROI. Physical staging is a seller decision, not an agent decision, unless the listing is high enough value to justify it as an agent-paid investment.
              </p>
            </CostCategoryCard>

            <CostCategoryCard title="Written content" range="Wide variance">
              <p style={{ margin: "0 0 12px 0" }}>Description, social posts, email. This is where the per-listing vs subscription vs one-time vs free math gets interesting.</p>
              <BulletList items={[
                <>Time-cost (agent writes it themselves): 2-4 hours per listing. At an hourly value of $75-150 for a solo agent, this is $150-600 in opportunity cost per listing</>,
                <>Copywriter (freelance): $50-200 per listing, usually MLS description only</>,
                <>Subscription AI tools (ChatGPT Plus, Claude Pro): $20-30/month for general LLMs used with editorial review</>,
                <>Real estate-specific subscription tools (ListingWizard, Saleswise): $49-129/month</>,
                <>One-time per-listing AI tools (Metes): $35 per listing</>,
                <>Free AI (ChatGPT free tier, Claude free tier): $0 but time-cost of prompting and editing</>,
              ]} />
              <p style={{ margin: 0 }}>
                Written content is the category with the widest cost variance. The next section breaks down the volume math.
              </p>
            </CostCategoryCard>

            <CostCategoryCard title="Print materials" range="$50-200 per listing">
              <p style={{ margin: "0 0 12px 0" }}>Property flyers, brochures, signs. Digital-first workflows since 2020 have reduced this spend significantly, but it hasn&apos;t disappeared.</p>
              <BulletList items={[
                <>Property flyers at retail print prices: $50-100 per listing</>,
                <>Property flyers at wholesale (Vistaprint, GotPrint): $15-30 per listing</>,
                <>Custom signs (new): $75-150</>,
                <>Sign refresh (rider on existing sign): $10-30</>,
              ]} />
              <p style={{ margin: 0 }}>
                Most solo agents overpay by using local retail printers instead of wholesale online services. Real per-listing spend should be under $50 for most agents.
              </p>
            </CostCategoryCard>

            <CostCategoryCard title="Digital marketing / social ads" range="$100-500 per listing">
              <p style={{ margin: "0 0 12px 0" }}>Highly variable. Most solo agents either underspend to zero or overspend without targeting.</p>
              <BulletList items={[
                <>Facebook boosted post: $30-100 per listing</>,
                <>Facebook targeted ad campaign: $100-500 per listing</>,
                <>Google Ads (rare for individual listings): $100-500</>,
                <>Instagram boosted post: $30-150</>,
                <>Zillow Premier Agent, Realtor.com paid listings: $200-1,000+ per month subscription, not per listing</>,
              ]} />
              <p style={{ margin: 0 }}>
                Most solo agents get better ROI from consistent unpaid social posting than from paid boosts on individual listings. Paid ads make sense when there&apos;s a specific narrative (unique feature, price drop, sudden interest) that boosting can amplify.
              </p>
            </CostCategoryCard>

            <div style={{
              background: "rgba(184,153,104,0.06)",
              border: `1px solid rgba(184,153,104,0.25)`,
              borderRadius: "12px",
              padding: "24px 28px",
              marginTop: "32px",
            }}>
              <h3 style={{ ...h3Style, marginTop: 0, marginBottom: "14px" }}>Total realistic per-listing spend</h3>
              <BulletList items={[
                <><strong>Bare bones</strong> (photography + free AI description + minimal print): $250-400</>,
                <><strong>Standard</strong> (photography + description + social + basic staging + print): $500-900</>,
                <><strong>Full stack</strong> (all of the above + video + paid social): $1,000-2,500</>,
                <><strong>Luxury or high-end:</strong> $2,000-5,000+</>,
              ]} />
              <p style={{ ...proseStyle, marginBottom: 0 }}>
                Most solo agents fall in the $400-1,200 range per listing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── SUBSCRIPTION MATH — FOREST DARK ─────────────── */}
      <section id="subscription-math" className="relative overflow-hidden bg-[#14271E] py-20 sm:py-24">
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
              <BarChart3 className="h-3 w-3" strokeWidth={2} />
              The load-bearing calculation
            </div>
            <h2 style={{ ...h2Style, color: C.creamWarm }}>The subscription math</h2>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              The single most important calculation in solo agent marketing spend: does a subscription tool actually save money at your volume?
            </p>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>The simple math</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              A $79/month subscription costs $948 per year.
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              $948 / $35 per-listing tool = <strong style={{ color: C.gold }}>27 listings per year</strong> to break even.
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              If you do fewer than 27 listings per year on the subscription pricing, you&apos;re paying for capacity you don&apos;t use.
            </p>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>The real math with feature overlap</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              The comparison is not always apples-to-apples. Some subscription tools include features per-listing tools don&apos;t (CRM, lead lifecycle automations, seller microsites). Some per-listing tools include features subscription tools don&apos;t (compliance auditing built in, neighborhood context from live data, downloadable ZIP delivery).
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              The honest math for description-focused content:
            </p>

            <BulletList light items={[
              <><strong style={{ color: C.gold }}>$79/month subscription:</strong> $948/year, breaks even against $35 per-listing at 27 listings</>,
              <><strong style={{ color: C.gold }}>$129/month subscription:</strong> $1,548/year, breaks even against $35 per-listing at 44 listings</>,
              <><strong style={{ color: C.gold }}>$29/month subscription</strong> (ChatGPT Plus, general LLM): $348/year, breaks even against $35 per-listing at 10 listings, but no real estate-specific features</>,
            ]} />

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              Volume brackets and honest recommendations:
            </p>

            <BulletList light items={[
              <><strong style={{ color: C.gold }}>Under 10 listings/year:</strong> Per-listing pricing wins. Subscription pricing at any tier is paying for unused capacity.</>,
              <><strong style={{ color: C.gold }}>10-25 listings/year:</strong> Per-listing pricing still wins on pure math against $79+ tools. Subscription only makes sense if you&apos;re heavily using non-description features (CRM, automation, seller sites).</>,
              <><strong style={{ color: C.gold }}>25-50 listings/year:</strong> Subscription tools become competitive. Per-listing tools still viable if the tool has enough per-listing value (compliance, brand-consistent output, time saved).</>,
              <><strong style={{ color: C.gold }}>50+ listings/year:</strong> Subscription tools become mathematically dominant. Per-listing pricing at $35 = $1,750+ per year, which exceeds most subscription costs even without accounting for feature bundle value.</>,
            ]} />

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              The math is not proprietary. It works for any per-listing vs subscription comparison.
            </p>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>The volume you actually do</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              Real questions worth asking:
            </p>

            <BulletList light items={[
              "How many listings did you close in the past twelve months?",
              "How many are you realistically closing in the next twelve?",
              "Are you buying tools for the agent you are or the agent you plan to become?",
            ]} />

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)", marginBottom: 0 }}>
              The last question is the honest one. Many solo agents buy $79-129/month subscriptions based on the aspiration of being a high-volume producer, then pay for 18 months while doing 6-8 listings. The math never works for that agent.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── VOLUME REALITY — CREAM ─────────────── */}
      <section id="volume-reality" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <SectionLabel>The data</SectionLabel>
            <h2 style={h2Style}>The volume reality</h2>

            <p style={proseStyle}>
              Real 2026 data on solo agent listing volume.
            </p>

            <h3 style={h3Style}>What NAR data shows</h3>

            <p style={proseStyle}>
              Per the 2024 NAR Member Profile (the most recent available):
            </p>

            <BulletList items={[
              "Median REALTOR® completed 10 transactions in the past year, combining buyer and seller representation",
              "Split by side: median listing-side transactions for typical solo agents = 5-8 per year",
              "Top 10% of solo agents (by production): 30-50 listings per year",
              "Team leads and top producers: 50-150+ listings per year",
            ]} />

            <p style={proseStyle}>
              The distribution is heavily skewed. A small percentage of agents do a large percentage of the transactions.
            </p>

            <h3 style={h3Style}>What this means for tool selection</h3>

            <p style={proseStyle}>
              The overwhelming majority of solo agents are in the 5-15 listings per year bracket. That&apos;s the volume where per-listing pricing mathematically wins against subscription pricing.
            </p>

            <p style={proseStyle}>
              The number of solo agents who actually break the 27-listings-per-year threshold that justifies a $79/month subscription is small — maybe 15-25% of the licensed population.
            </p>

            <p style={proseStyle}>
              Yet subscription AI tools are the dominant marketing model in the industry. This mismatch is one of the reasons solo agents feel like their tool spend never pays back: it structurally can&apos;t at their volume.
            </p>

            <h3 style={h3Style}>The honest implication</h3>

            <p style={proseStyle}>
              For most solo agents in most markets, the highest-ROI written-content tools are per-listing priced, not subscription priced. The math is straightforward. The industry structure isn&apos;t optimized for it.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── OVERSPEND — EARTH ─────────────── */}
      <section id="overspend" className="bg-[#EFEAE0] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#C97B5C]">
              <TrendingDown className="h-3 w-3" strokeWidth={2} />
              The waste
            </div>
            <h2 style={h2Style}>Where solo agents overspend</h2>

            <p style={proseStyle}>
              Honest inventory. What most solo agents pay for that doesn&apos;t move the needle at their volume.
            </p>

            <h3 style={h3Style}>Cinematic listing videos on sub-$500K properties</h3>
            <p style={proseStyle}>
              A $500-1,500 cinematic video makes sense on a $2M+ listing where the marginal impact on days on market and final sale price justifies the spend. On a $350K listing, that same $500 rarely pays back. Buyers at that price point are more responsive to strong photography and clear descriptions than cinematic production.
            </p>
            <p style={proseStyle}>
              Cinematic video is not the wrong choice. It&apos;s the wrong choice for most listings.
            </p>

            <h3 style={h3Style}>Physical staging without seller cost-share</h3>
            <p style={proseStyle}>
              Physical staging can produce measurable ROI. But paying $1,500-3,000 out of pocket for a listing where the seller won&apos;t approve or share the cost is a business decision that rarely pays back for a solo agent. The commission math doesn&apos;t support it at typical price points.
            </p>
            <p style={proseStyle}>
              Real recommendation: virtual staging on vacant rooms produces most of the benefit at 5-10% of the cost. Reserve physical staging for cases where the seller approves the cost.
            </p>

            <h3 style={h3Style}>CRMs with AI features that never get activated</h3>
            <p style={proseStyle}>
              The most expensive tool is the one you pay for and don&apos;t use. Many solo agents subscribe to CRM platforms with sophisticated AI capabilities — lead scoring, automated nurture sequences, predictive analytics — and use maybe 15-20% of the feature set.
            </p>
            <p style={proseStyle}>
              The failure mode: agent buys $99-199/month CRM based on aspirational feature set, uses it as a basic contact database, pays the full price. The math would work if the features got used. Since they don&apos;t, the agent is paying for capacity they don&apos;t consume.
            </p>

            <h3 style={h3Style}>Multiple overlapping subscriptions</h3>
            <p style={proseStyle}>
              Common stack for a mid-tier solo agent: MLS system with included AI features + $79/month AI listing tool + separate copywriter for premium listings + $29/month ChatGPT Plus + separate lead-management CRM.
            </p>
            <p style={proseStyle}>
              The functional overlap is enormous. Each tool covers 50-70% of what another tool already does. Consolidating to fewer tools usually recovers $100-300/month with no capability loss.
            </p>

            <h3 style={h3Style}>Boosted social posts without a strategy</h3>
            <p style={proseStyle}>
              Boosting a listing post on Facebook for $50-200 without targeting, without a specific narrative, and without measuring conversion is the most common form of solo agent digital ad waste. Boost budget with no strategy = burn.
            </p>
            <p style={proseStyle}>
              Real recommendation: either commit to running actual campaigns with targeting and measurement (real work, real budget) or skip paid social and put the time into organic posting.
            </p>

            <h3 style={h3Style}>Print materials at retail prices</h3>
            <p style={proseStyle}>
              Local print shops charging $80-100 for property flyers that cost $15-25 at wholesale online services. This is pure overspend with no quality difference at the flyer level.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── UNDERSPEND — CREAM ─────────────── */}
      <section id="underspend" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#5C8A6E]">
              <TrendingUp className="h-3 w-3" strokeWidth={2} />
              The high-ROI spend
            </div>
            <h2 style={h2Style}>Where solo agents underspend</h2>

            <p style={proseStyle}>
              The reverse. What&apos;s genuinely worth spending on for solo agents.
            </p>

            <h3 style={h3Style}>Photography, consistently</h3>
            <p style={proseStyle}>
              The single highest-ROI marketing spend at any listing volume. Buyers scroll listings by photo quality first. Weak photography kills click-through, and low click-through kills listing performance regardless of price point.
            </p>
            <p style={proseStyle}>
              Solo agents underspend here most often by:
            </p>
            <BulletList items={[
              "Using their phone instead of hiring a photographer",
              "Hiring the cheapest photographer available instead of the best value photographer",
              "Skipping drone shots on listings that would benefit",
              "Not budgeting for twilight or seasonal reshoots when the property warrants",
            ]} />
            <p style={proseStyle}>
              Real spend: $200-350 per listing for a standard package. Photography is not the place to save money.
            </p>

            <h3 style={h3Style}>Description writing (or a good tool)</h3>
            <p style={proseStyle}>
              MLS descriptions get scanned in listings feed and syndicated across Zillow, Realtor.com, Redfin, and every IDX site in the market. Weak descriptions lose buyers before they see the photos in detail.
            </p>
            <p style={proseStyle}>
              Since the <Link href="/learn/writing-for-zillow-2026" style={{ color: C.forest, textDecoration: "underline", textDecorationColor: C.gold, textUnderlineOffset: "3px" }}>&ldquo;What I Love About the Home&rdquo; Zillow fields are gone</Link>, the MLS description does all the narrative work on the country&apos;s most-visited real estate platform. Underinvesting in it is underinvesting in every buyer&apos;s first impression.
            </p>
            <p style={proseStyle}>
              Real spend: 30-60 minutes of your time per listing plus a good tool ($35 per-listing tool or subscription depending on volume). Or 2-4 hours of your time writing from scratch if you&apos;re skilled and the property doesn&apos;t need special positioning.
            </p>

            <h3 style={h3Style}>Fair Housing compliance auditing</h3>
            <p style={proseStyle}>
              The <Link href="/learn/fair-housing-words-to-avoid" style={{ color: C.forest, textDecoration: "underline", textDecorationColor: C.gold, textUnderlineOffset: "3px" }}>Fair Housing word list</Link> documents the specific phrases that trigger complaints, MLS rejections, and civil penalties. A single first-time HUD violation currently carries up to $25,597. Third violations exceed $115,000.
            </p>
            <p style={proseStyle}>
              Compliance auditing is genuinely cheap protection. Free tools exist. Paid tools bundle it with other capabilities. The math: even a 5% chance of avoiding one violation pays back a decade of compliance tool costs.
            </p>
            <p style={proseStyle}>
              Solo agents systematically underspend here because Fair Housing risk feels abstract until it isn&apos;t.
            </p>

            <h3 style={h3Style}>Neighborhood research</h3>
            <p style={proseStyle}>
              Buyers want to know what it&apos;s like to live somewhere, not just what the property has. Named nearby coffee shops, parks, schools, and community features differentiate a listing from generic descriptions.
            </p>
            <p style={proseStyle}>
              Time-cost: 30-60 minutes of research per listing, or a tool that pulls verified data. The <Link href="/learn/neighborhood-description-examples" style={{ color: C.forest, textDecoration: "underline", textDecorationColor: C.gold, textUnderlineOffset: "3px" }}>neighborhood description examples reference</Link> shows what strong neighborhood content looks like across 12 markets.
            </p>
            <p style={proseStyle}>
              Underspending: using generic language like &ldquo;quiet neighborhood&rdquo; and &ldquo;close to schools&rdquo; instead of specifics. Costs nothing to fix but requires deliberate effort.
            </p>

            <h3 style={h3Style}>Actually using included MLS marketing tools</h3>
            <p style={proseStyle}>
              Most solo agents have MLS memberships that include marketing capabilities they never activate — CMA templates, buyer communication tools, listing syndication controls, sometimes basic AI features. These are already paid for through MLS dues.
            </p>
            <p style={proseStyle}>
              Free capability that gets ignored is worse than paid capability that gets used. Real recommendation: audit what your MLS actually includes annually.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── FRAMEWORK — EARTH ─────────────── */}
      <section id="framework" className="bg-[#EFEAE0] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              <Target className="h-3 w-3" strokeWidth={2} />
              By volume
            </div>
            <h2 style={h2Style}>The recommendation framework</h2>

            <p style={proseStyle}>
              Decision framework organized by listing volume tier. Numbers assume standard suburban markets; luxury and coastal markets push higher.
            </p>

            <VolumeTierCard
              tier="Under 10 listings per year"
              positioning="Bare bones + focus on the highest-ROI categories."
              items={[
                <><strong>Photography:</strong> Hire a real photographer, $200-350 per listing</>,
                <><strong>Description:</strong> Per-listing tool ($35-50) or free AI + heavy editorial review</>,
                <><strong>Social:</strong> Create in-platform using your MLS&apos;s included tools + phone photos</>,
                <><strong>Staging:</strong> Virtual staging on vacant rooms if the property is empty</>,
                <><strong>Video:</strong> Skip cinematic; short-form only if you have posting discipline</>,
                <><strong>Print:</strong> Wholesale online printers only</>,
                <><strong>Skip:</strong> Subscription AI tools, cinematic video, paid social ads</>,
              ]}
              perListing="$250-450"
              annualSpend="$2,000-3,600 at 8 listings"
            />

            <VolumeTierCard
              tier="10-25 listings per year"
              positioning="Standard package with selective upgrades."
              items={[
                <><strong>Photography:</strong> Negotiate a volume rate with a preferred photographer</>,
                <><strong>Description:</strong> Per-listing tool ($35-50) still wins on math against most subscriptions</>,
                <><strong>Social:</strong> Consider subscription tool only if you use the CRM/lead management side heavily</>,
                <><strong>Staging:</strong> Virtual staging default, physical when seller pays</>,
                <><strong>Video:</strong> Short-form for social; cinematic for listings above your median price</>,
                <><strong>Print:</strong> Wholesale printer, brand-consistent template</>,
                <><strong>Consider:</strong> Compliance auditing tool (free version usually sufficient)</>,
              ]}
              perListing="$400-700"
              annualSpend="$6,000-10,500 at 15 listings"
            />

            <VolumeTierCard
              tier="25-50 listings per year"
              positioning="Full stack, subscription tools become competitive."
              items={[
                <><strong>Photography:</strong> Contract with a preferred photographer at volume pricing</>,
                <><strong>Description:</strong> Test both per-listing ($35 × 40 listings = $1,400) and subscription ($79/mo = $948) — subscription starts to win here</>,
                <><strong>Social:</strong> Subscription tool or in-house content coordinator</>,
                <><strong>Video:</strong> Short-form standard, cinematic on premium listings</>,
                <><strong>Print:</strong> Brand-consistent, professional signage refresh annually</>,
                <><strong>CRM:</strong> Subscription tool with lead management justified at this volume</>,
              ]}
              perListing="$500-1,000"
              annualSpend="$17,500-35,000 at 35 listings"
            />

            <VolumeTierCard
              tier="50+ listings per year"
              positioning="Subscription tools dominant. Consider in-house or contract coordinator."
              items={[
                <><strong>Photography:</strong> Contracted photographer, potentially multiple for capacity</>,
                <><strong>Description:</strong> Subscription tools, potentially in-house or contract content coordinator</>,
                <><strong>Social:</strong> Full stack including paid amplification with targeting</>,
                <><strong>Video:</strong> Regular cinematic packages, agent brand video assets</>,
                <><strong>CRM:</strong> Full-featured platform with automation and lead scoring</>,
                <><strong>Staging:</strong> Vendor relationship for consistent pricing</>,
              ]}
              perListing="$700-1,500+"
              annualSpend="$52,500-112,500+ at 75 listings"
            />
          </div>
        </div>
      </section>

      {/* ─────────────── FAQ — CREAM ─────────────── */}
      <section id="faq" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-20 sm:py-24">
        <div className={CONTENT}>
          <div className={READING}>
            <SectionLabel>Common questions</SectionLabel>
            <h2 style={h2Style}>Common questions</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "24px" }}>
              {[
                {
                  q: "How much should I spend on marketing per listing?",
                  a: "Depends on volume and market. Most solo agents in most markets should spend $400-900 per listing across photography, description, social, print, and light staging. Below $400, you're likely underspending on photography or description. Above $1,200 without a luxury price point, you're likely overspending on video or paid ads.",
                },
                {
                  q: "Is a $79/month AI tool worth it for a solo agent?",
                  a: "Only if you do 27+ listings per year. Below that volume, per-listing pricing ($35-50) mathematically wins. Above that volume, subscription pricing wins on math. Most solo agents fall below the threshold — the median listing-side agent does 5-8 per year per NAR data.",
                },
                {
                  q: "Should I hire a photographer or do it myself?",
                  a: "Hire a photographer. Every time. Real estate photography is the single highest-ROI marketing spend at any listing volume. Buyers scroll by photo quality first. Phone photos and DIY shots kill click-through, which kills listing performance regardless of price point or description quality.",
                },
                {
                  q: "How many listings do I need to justify a subscription AI tool?",
                  a: "27 listings per year to break even on a $79/month tool against a $35 per-listing alternative. 44 listings per year for a $129/month tool. Below those thresholds, per-listing pricing is more efficient.",
                },
                {
                  q: "Are cinematic listing videos worth it?",
                  a: "For luxury listings ($1M+): often yes. The marginal impact on sale price and days on market can justify the $500-1,500 spend. For standard listings ($200K-$500K): rarely. Short-form social video at $75-200 has better cost-to-reach ratio at those price points. Cinematic video is the wrong choice for most listings.",
                },
                {
                  q: "Should I pay for staging?",
                  a: "Push the cost to the seller when possible. Virtual staging on vacant rooms ($30-75 per photo) produces most of the benefit at 5-10% of physical staging cost. Agent-paid physical staging only makes commission-math sense at high price points.",
                },
                {
                  q: "What's the highest-ROI thing I can spend money on for a listing?",
                  a: "Photography. Not description, not video, not staging, not paid ads. Real estate photography drives the click-through rate that determines whether any of the other marketing gets seen. Underspending on photography while spending on anything else is a common mistake.",
                },
                {
                  q: "How do I know if I'm overspending on listing marketing?",
                  a: "Two questions: (1) Are you spending more than 8-12% of your gross commission on marketing per listing? Above 12%, you're likely overspending relative to the sale value. (2) Are you paying for tools you use less than half the features of? If yes, you're paying for capacity you don't consume.",
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

      {/* ─────────────── SOURCES — EARTH ─────────────── */}
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
              Sources: NAR 2024 Member Profile (transaction volume data); Real Estate Photography Marketplace 2025 rate survey; Bankrate 2025 real estate photographer cost analysis; HUD 24 CFR § 180.671 penalty schedule; Vistaprint and GotPrint published wholesale pricing; ListingWizard, Saleswise, and Metes published subscription and per-listing pricing. This piece is informational and reflects the state of the market as of July 22, 2026. Not financial or business advice.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── FINAL CTA — FOREST DARK ─────────────── */}
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
          <div style={{ maxWidth: "760px" }}>
            <SectionLabel light>The through-line</SectionLabel>
            <h2 className="mb-5 font-manrope text-[clamp(28px,4vw,42px)] font-medium leading-[1.1] tracking-[0.005em] text-[#F4F0E8]">
              Buy tools for the agent you actually are. <em className="not-italic text-[#B89968]">Not the agent you plan to become.</em>
            </h2>
            <p className="mb-8 max-w-[620px] text-[clamp(15px,1.3vw,17px)] leading-[1.6] text-[rgba(244,240,232,0.78)]">
              Photography, description, and compliance auditing are the highest-ROI spends at any volume. Subscription tools become competitive only at 25+ listings per year. Per-listing pricing dominates for the majority of solo agents.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/listing-description-checker"
                className="inline-flex items-center gap-2 rounded-[9px] bg-[#B89968] px-7 py-3.5 font-manrope text-[14px] font-medium text-[#14271E] no-underline transition-colors hover:bg-[#9A7E50] hover:text-[#F4F0E8]"
              >
                Audit a listing free
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
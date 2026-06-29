import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, Wrench, Eye, BookOpen } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Why Most AI Listing Descriptions Sound the Same — and How to Fix It | Metes",
  description:
    "Six recognizable patterns make AI-generated listing descriptions sound identical. The taxonomy, real examples, and the architectural fix for AI that doesn't read as AI-generated.",
  keywords: [
    "ai listing description",
    "ai tells real estate",
    "chatgpt listing description",
    "ai generated mls listing",
    "real estate ai patterns",
    "how to spot ai listing",
    "ai listing description fix",
    "constrained ai generation real estate",
  ],
  alternates: {
    canonical: "https://www.metes.app/learn/ai-listing-description-tells",
  },
  openGraph: {
    title: "Why Most AI Listing Descriptions Sound the Same — and How to Fix It",
    description:
      "Six recognizable AI patterns in MLS descriptions, real examples, and the architectural fix for AI that doesn't read as AI-generated.",
    url: "https://www.metes.app/learn/ai-listing-description-tells",
    siteName: "Metes",
    type: "article",
    images: [
      {
        url: "https://www.metes.app/og/ai-listing-description-tells.png",
        width: 1200,
        height: 630,
        alt: "Why AI listing descriptions sound the same",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Why Most AI Listing Descriptions Sound the Same",
    description: "Six AI patterns in MLS descriptions, real examples, and the architectural fix.",
    images: ["https://www.metes.app/og/ai-listing-description-tells.png"],
  },
  robots: { index: true, follow: true },
};

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.metes.app/learn/ai-listing-description-tells#article",
      "headline": "Why Most AI Listing Descriptions Sound the Same — and How to Fix It",
      "description":
        "Six recognizable patterns make AI-generated listing descriptions sound identical. The taxonomy, real anonymized examples, and the architectural fix for AI that doesn't read as AI-generated.",
      "image": "https://www.metes.app/og/ai-listing-description-tells.png",
      "datePublished": "2026-07-01",
      "dateModified": "2026-07-01",
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
        "@id": "https://www.metes.app/learn/ai-listing-description-tells",
      },
      "keywords":
        "AI listing description, ChatGPT real estate, AI tells, constrained generation, MLS description",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.metes.app/learn/ai-listing-description-tells#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do I tell if a listing description was written by AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Look for six categories of tells: real estate clichés (stunning, must-see, nestled), AI-tell vocabulary (delve, elevate, captivating), formulaic phrases (more than just, perfect blend of), generic openings (welcome to, discover, nestled), generic closings (don't miss this, schedule your showing), and structural patterns (multiple em-dash pairs, three-part adjective lists). Any single one is a maybe. Three or more in the same description is a near-certain AI tell.",
          },
        },
        {
          "@type": "Question",
          "name": "What words should I avoid in MLS listing descriptions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The most overused real estate clichés to avoid: 'stunning,' 'must-see,' 'meticulously maintained,' 'boasts,' 'showcases,' 'pristine,' 'immaculate,' 'exquisite,' 'nestled,' and any variation of 'perfect blend of.' These predate AI but AI uses them at higher rates than humans. Beyond clichés, avoid AI-tell vocabulary like 'delve,' 'tapestry,' 'embark,' 'elevate,' and 'captivating' — most humans don't use these words to describe houses.",
          },
        },
        {
          "@type": "Question",
          "name": "Why do AI-generated listings sound the same?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "LLMs trained on overlapping corpora produce overlapping output. ChatGPT, Claude, and other major models learned from similar real estate training data that itself was full of clichéd phrasing. Without specific constraints, the models reach for the statistical average of what listings looked like in their training data — and that average is full of the same overused phrases. The fix is constrained generation: tools that ban known AI patterns at the prompt level, ground output in verified data, and audit results before delivery.",
          },
        },
        {
          "@type": "Question",
          "name": "Is it bad to use ChatGPT for listing descriptions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ChatGPT can produce usable listing copy with the right prompts and significant editorial review. The risks: (1) it can fabricate property details that don't exist, (2) it routinely uses Fair Housing-flagged language unless explicitly instructed otherwise, (3) it produces the AI-tell patterns documented in this article. For agents doing 1-2 listings a year, ChatGPT plus careful editing is reasonable. For agents at higher volume, constrained tools designed for real estate produce better baseline output.",
          },
        },
        {
          "@type": "Question",
          "name": "What's the difference between an AI tell and a real estate cliché?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Real estate clichés ('stunning,' 'must-see,' 'nestled') predate AI by decades. AI tells ('delve,' 'elevate,' 'captivating,' 'more than just') emerged specifically from LLM training data and patterns. There's overlap — AI uses real estate clichés at high rates — but they're distinct categories. Clichés make a listing sound lazy. AI tells make a listing sound machine-generated. Both hurt credibility.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I fix an AI-sounding listing description?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Two paths. Short-term: manually remove the six categories of tells from any AI output before publishing. Replace generic openings with specific facts, swap clichés for concrete details, eliminate em-dash pairs and three-part adjective lists, replace generic closings with logistics. Long-term: use AI tools that don't generate the tells in the first place. Tools with banned phrase lists, grounding data requirements, and audit layers produce baseline output that doesn't need this kind of editing.",
          },
        },
        {
          "@type": "Question",
          "name": "Will buyers notice if my listing was AI-generated?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Increasingly, yes. Buyers actively house-hunting read dozens of listings per week. Pattern recognition is fast. By mid-2026, the AI-tell patterns documented here are recognizable enough that listings using them lose credibility — particularly with younger, internet-native buyers who've spent hours with ChatGPT and Claude themselves. The marginal effectiveness of AI listings is dropping as more agents use the same tools unconstrained.",
          },
        },
        {
          "@type": "Question",
          "name": "What's the best way to use AI for MLS descriptions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Use a constrained tool — one that requires verified property data as input, bans known AI patterns at the prompt level, structures output into specific fields, and audits for Fair Housing compliance and AI tells before delivery. Treat the AI output as a strong first draft. Apply human editorial review focused on local market context, tone, and the specific narrative this listing needs. The right division of labor: AI handles the structural work consistently, the agent handles judgment and market knowledge.",
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
// BulletList — gold bullets, matches Week 1-3 convention
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
// Six categories of AI tells data
// ─────────────────────────────────────────────────────────────────

interface TellCategory {
  number: number;
  slug: string;
  name: string;
  subtitle: string;
  why: string;
  phrases: string[];
  weakExample: string;
  weakAnalysis: string;
  strongRewrite: string;
  strongAnalysis: string;
}

const TELL_CATEGORIES: TellCategory[] = [
  {
    number: 1,
    slug: "cliches",
    name: "Real estate clichés",
    subtitle: "Words that predate AI but AI uses at higher rates than humans",
    why: "Buyers and agents have built immunity to these. The cliché was supposed to do work — to elevate the listing's perceived quality. After two decades of overuse, the words now signal the opposite: that the agent (or AI) didn't bother to find something specific to say.",
    phrases: [
      "Stunning",
      "Must-see",
      "Meticulously maintained",
      "Boasts",
      "Showcases",
      "Pristine",
      "Immaculate",
      "Exquisite",
      "Tranquil oasis",
      "Perfect blend of",
      "In the heart of",
      "Nestled",
    ],
    weakExample: "Welcome to this stunning 4-bedroom home nestled in the quiet community—a beautifully maintained property that boasts an open floor plan with abundant natural light.",
    weakAnalysis: "Three clichés (\"stunning,\" \"nestled,\" \"boasts\") in 25 words. The em-dash pair compounds the tell.",
    strongRewrite: "1,847 sq ft, four bedrooms, single-story layout on a quiet street. The kitchen and great room share a 22-foot wall of west-facing windows — afternoon light fills both rooms.",
    strongAnalysis: "Same listing. Specific facts replace the empty adjectives. The buyer knows more after reading this than after reading the AI version.",
  },
  {
    number: 2,
    slug: "ai-words",
    name: "AI-tell words",
    subtitle: "Words that show up in AI output at much higher rates than in human writing",
    why: "Most humans writing about a house don't say \"the kitchen elevates daily routines\" or \"embark on a journey through this captivating home.\" When these words appear in a real estate context, they're a near-certain AI tell. A reader who's seen any ChatGPT output before will recognize them instantly.",
    phrases: [
      "Delve",
      "Tapestry",
      "Embark",
      "Elevate",
      "Captivating",
      "Elegant",
      "Moreover",
      "Furthermore",
      "Additionally",
    ],
    weakExample: "Embark on a captivating journey through this elegant residence, where every detail elevates the experience of modern living.",
    weakAnalysis: "Four AI-tell words in a single sentence. Almost no human agent would write this.",
    strongRewrite: "Three-bedroom, two-bath single story on a corner lot. The seller updated the kitchen in 2024 — quartz counters, new appliances, soft-close cabinets throughout.",
    strongAnalysis: "The strong version uses concrete facts. The AI version uses elevated abstractions. Concrete beats elevated every time in real estate.",
  },
  {
    number: 3,
    slug: "ai-phrases",
    name: "AI-tell phrases",
    subtitle: "Multi-word constructions that compound the tell",
    why: "These constructions are the LLM's way of building rhetorical structure when it doesn't have specific facts to anchor on. \"More than just a house, this is a home\" is what the model produces when the input data doesn't give it enough specificity to write something concrete.",
    phrases: [
      "More than just",
      "In today's market",
      "The perfect blend of",
      "Whether you're",
      "Welcome to your new home",
      "Don't miss this opportunity",
      "It's not just",
    ],
    weakExample: "This is more than just a home; it's a lifestyle. Don't miss this rare opportunity to make this exceptional property your own.",
    weakAnalysis: "Two AI-tell phrases stacked. The semicolon joining clauses functions as an em-dash equivalent. Pure pattern.",
    strongRewrite: "Showings start Saturday by appointment. The seller's relocating for work and would like to close in 45 days.",
    strongAnalysis: "The AI closing tells the buyer nothing. The strong closing gives them logistics, motivation, and a path to action.",
  },
  {
    number: 4,
    slug: "openings",
    name: "Generic openings",
    subtitle: "The four phrases that open almost every unconstrained AI listing",
    why: "The opening is the highest-leverage sentence in any listing description. It's where the buyer decides whether to keep reading or scroll past. When the opening is \"Welcome to your new dream home,\" the buyer knows nothing specific yet — and the listing has spent its strongest sentence on filler.",
    phrases: [
      "Welcome to",
      "Discover",
      "Nestled",
      "Introducing",
    ],
    weakExample: "Welcome to this charming 3-bedroom home that perfectly combines modern updates with classic character.",
    weakAnalysis: "Generic opening. Cliché (\"charming\"). AI-tell phrase (\"perfectly combines\"). Three patterns in one sentence.",
    strongRewrite: "1923 craftsman bungalow on Linden Avenue, two blocks from the Alberta Arts district. Original Douglas fir floors, restored in 2023.",
    strongAnalysis: "The strong opener leads with specific facts that anchor the reader. The AI opener could describe any house anywhere.",
  },
  {
    number: 5,
    slug: "closings",
    name: "Generic closings",
    subtitle: "The mirror image problem — most AI listings close the same way",
    why: "A buyer who's read 50 listings this week has seen \"schedule your showing today\" 50 times. It carries no information and no urgency. It's a verbal tic, not a call to action.",
    phrases: [
      "Don't miss this",
      "Schedule your showing",
      "Welcome home",
      "This one won't last",
      "Experience [whatever]",
    ],
    weakExample: "Don't miss this rare opportunity to experience refined living at its finest. Schedule your private showing today!",
    weakAnalysis: "Two generic closing patterns stacked. The exclamation point compounds the tell.",
    strongRewrite: "Open house Saturday 1-4. The listing agent (named in the MLS card) can also coordinate weekday previews.",
    strongAnalysis: "Specific, useful, respectful of the buyer's time. The strong closing assumes the buyer is capable of acting on information without being prodded.",
  },
  {
    number: 6,
    slug: "structural",
    name: "Structural tells",
    subtitle: "Sentence-structure patterns, not word-level patterns",
    why: "These patterns are harder to catch with simple find-and-replace. They emerge across an entire description: em-dash pairs (two or more is a strong AI signal), three-part adjective lists (\"light, bright, and airy\"), and feature-followed-by-emotion constructions (\"stainless steel appliances inspire culinary creativity\"). Real humans rarely write this way at this consistency.",
    phrases: [
      "Multiple em-dash pairs in a single description",
      "Three-part adjective lists (\"spacious, elegant, and refined\")",
      "Feature-followed-by-emotion (\"vaulted ceilings create an atmosphere of grandeur\")",
      "Triplet sentence structures repeated across paragraphs",
      "Parenthetical elaborations using em-dashes more than commas",
    ],
    weakExample: "The gourmet kitchen — featuring stainless steel appliances, quartz countertops, and a center island — inspires culinary creativity. The vaulted ceilings, abundant natural light, and open floor plan create an atmosphere of grandeur and warmth.",
    weakAnalysis: "Two em-dash pairs. Two three-part adjective lists. Two feature-followed-by-emotion patterns. Every structural tell in two sentences.",
    strongRewrite: "Kitchen renovation completed 2024 — new stainless appliances, 12-foot quartz island that seats six, soft-close shaker cabinets. Vaulted ceilings in the great room (16 feet at peak). South-facing patio gets sun from late morning through sunset.",
    strongAnalysis: "Same kitchen, same ceilings. Specific facts replace the emotional claims. The buyer can verify any detail.",
  },
];

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

const h4Style = {
  fontFamily: "var(--font-manrope, sans-serif)",
  fontSize: "13px",
  fontWeight: 600 as const,
  lineHeight: 1.3,
  letterSpacing: "0.06em",
  color: C.goldDeep,
  marginTop: "20px",
  marginBottom: "8px",
  textTransform: "uppercase" as const,
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
// TellBlock component
// ─────────────────────────────────────────────────────────────────

function TellBlock({ tell }: { tell: TellCategory }) {
  return (
    <div id={tell.slug} style={{ marginBottom: "64px", scrollMarginTop: "24px" }}>
      <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
        <span className="inline-block h-px w-[18px] bg-[#9A7E50]" />
        Tell {tell.number} of 6
      </div>

      <h3 style={{
        fontFamily: "var(--font-manrope, sans-serif)",
        fontSize: "clamp(22px, 2.6vw, 28px)",
        fontWeight: 500,
        lineHeight: 1.15,
        color: C.ink,
        marginBottom: "8px",
      }}>
        {tell.name}
      </h3>

      <p style={{
        fontFamily: "var(--font-manrope, sans-serif)",
        fontSize: "14px",
        fontStyle: "italic",
        color: C.inkSoft,
        marginBottom: "20px",
      }}>
        {tell.subtitle}
      </p>

      <p style={{ ...proseStyle, marginBottom: "24px" }}>
        {tell.why}
      </p>

      {/* The phrases */}
      <h4 style={h4Style}>The phrases</h4>
      <div style={{
        background: C.bgCard,
        border: `1px solid ${C.border}`,
        borderRadius: "12px",
        padding: "20px 24px",
        marginBottom: "24px",
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {tell.phrases.map((phrase, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "13px",
                color: C.ink,
                background: "rgba(184,153,104,0.1)",
                border: `1px solid rgba(184,153,104,0.25)`,
                borderRadius: "6px",
                padding: "4px 10px",
              }}
            >
              {phrase}
            </span>
          ))}
        </div>
      </div>

      {/* Real example */}
      <h4 style={h4Style}>Weak (real anonymized example)</h4>
      <div style={{
        background: "rgba(201,123,92,0.06)",
        border: `1px solid rgba(201,123,92,0.18)`,
        borderRadius: "10px",
        padding: "16px 20px",
        marginBottom: "12px",
      }}>
        <p style={{
          ...proseStyle,
          fontStyle: "italic",
          fontSize: "15px",
          margin: 0,
          color: C.ink,
        }}>
          &ldquo;{tell.weakExample}&rdquo;
        </p>
      </div>
      <p style={{ ...proseStyle, fontSize: "14.5px", color: C.inkSoft, marginBottom: "24px" }}>
        {tell.weakAnalysis}
      </p>

      {/* Strong rewrite */}
      <h4 style={h4Style}>Strong rewrite</h4>
      <div style={{
        background: "rgba(92,138,110,0.06)",
        border: `1px solid rgba(92,138,110,0.18)`,
        borderRadius: "10px",
        padding: "16px 20px",
        marginBottom: "12px",
      }}>
        <p style={{
          ...proseStyle,
          fontStyle: "italic",
          fontSize: "15px",
          margin: 0,
          color: C.ink,
        }}>
          &ldquo;{tell.strongRewrite}&rdquo;
        </p>
      </div>
      <p style={{ ...proseStyle, fontSize: "14.5px", color: C.inkSoft, marginBottom: 0 }}>
        {tell.strongAnalysis}
      </p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────

export default function AIListingDescriptionTellsPage() {
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
            <SectionLabel>Answer/Guide · AI tells</SectionLabel>

            <h1 className="mb-4 font-manrope text-[clamp(28px,4.5vw,48px)] font-medium leading-[1.08] tracking-[0.005em] text-[#14271E]">
              Why most AI listing descriptions sound the same — <em className="not-italic text-[#9A7E50]">and how to fix it</em>.
            </h1>

            <p className="mb-6 max-w-[640px] text-[clamp(14px,1.2vw,17px)] leading-[1.6] text-[#4A6B53]">
              AI-generated listing descriptions have a recognizable fingerprint. Six specific patterns show up in the vast majority of unconstrained LLM output. Buyers and agents are starting to recognize the pattern, and listings that read as AI-generated are losing credibility.
            </p>

            <p className="mb-8 max-w-[640px] text-[clamp(14px,1.2vw,17px)] leading-[1.6] text-[#4A6B53]">
              The fix isn&apos;t to stop using AI. The fix is to use AI tools that <strong>constrain</strong> generation — that ground output in verified property data, ban known AI patterns at the prompt level, and audit every output before it ships.
            </p>

            <p className="text-[13px] font-mono uppercase tracking-[0.08em] text-[rgba(20,39,30,0.55)]">
              Last updated: July 1, 2026 · ~18 minute read
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
                Six specific patterns — real estate clichés, AI-tell vocabulary, formulaic phrases, generic openings, generic closings, and structural tells like em-dash pairs — show up in the vast majority of unconstrained LLM output. The fix is constrained generation: tools that ground output in verified facts, ban known AI patterns at the prompt level, and audit every output before delivery.
              </p>
              <p style={{ ...proseStyle, marginBottom: 0 }}>
                This page documents the six categories, shows real anonymized examples and rewrites, and explains the architectural difference between AI that gets edited later and AI that&apos;s constrained at generation time.
              </p>
            </div>

            <div className="mb-3 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              Jump to
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { id: "pattern-problem", label: "The pattern problem" },
                { id: "where-from", label: "Where AI tells come from" },
                { id: "taxonomy", label: "The six categories of AI tells" },
                { id: "fix", label: "The architectural fix: constrained generation" },
                { id: "good", label: "What good descriptions actually do" },
                { id: "when", label: "When to use AI and when not to" },
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

      {/* ─────────────── PATTERN PROBLEM — CREAM ─────────────── */}
      <section id="pattern-problem" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              <Eye className="h-3 w-3" strokeWidth={2} />
              The problem
            </div>
            <h2 style={h2Style}>The pattern problem</h2>

            <p style={proseStyle}>
              Pull ten MLS listing descriptions written with ChatGPT or Claude in the past six months. Read them back to back. A fingerprint emerges fast.
            </p>

            <p style={proseStyle}>
              The same em-dash pairs appear in every other sentence. The same &ldquo;more than just a house, this is a home&rdquo; framing shows up at the same paragraph position. The same closings — &ldquo;don&apos;t miss this rare opportunity to make this exceptional property your own&rdquo; — appear like they were generated from the same template. They were.
            </p>

            <p style={proseStyle}>
              This isn&apos;t a coincidence. It&apos;s the natural output of large language models trained on the same corpus, prompted in similar ways, generating without specific constraints. The patterns aren&apos;t bugs. They&apos;re statistical regularities — the LLM equivalent of comfort food, the phrases the model has seen reinforced enough times in training data to consistently reach for them.
            </p>

            <p style={proseStyle}>
              For a single listing, this looks fine. The description reads fluently. It hits the expected beats. An agent reviewing the output might think &ldquo;this is actually pretty good.&rdquo;
            </p>

            <p style={proseStyle}>
              For a market saturated with AI-generated listings, this is a problem.
            </p>

            <p style={proseStyle}>
              <strong>Buyers and agents are pattern-matching.</strong> People who read 20 listings a week — buyers actively house-hunting, agents previewing for clients, brokers reviewing inventory — start to recognize AI prose. The phrases that signal AI become signals of &ldquo;this listing didn&apos;t get human attention.&rdquo; Listings that read as AI-generated lose credibility, and the agents who use them lose the trust dividend that thoughtful writing creates.
            </p>

            <p style={proseStyle}>
              The honest read in mid-2026: <strong>the marginal effectiveness of AI listing descriptions is dropping</strong> as more agents use the same tools without constraints. The window for &ldquo;first-mover advantage with AI&rdquo; is closed. The new edge is in <strong>constrained AI</strong> — output that doesn&apos;t read as AI-generated even though it was.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── WHERE FROM — EARTH ─────────────── */}
      <section id="where-from" className="bg-[#EFEAE0] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <SectionLabel>The mechanism</SectionLabel>
            <h2 style={h2Style}>Where AI tells come from</h2>

            <p style={proseStyle}>
              To fix the patterns, it helps to understand why they exist.
            </p>

            <h3 style={h3Style}>LLMs trained on overlapping corpora produce overlapping output</h3>

            <p style={proseStyle}>
              ChatGPT, Claude, Gemini, and every other major LLM were trained on substantial overlapping data — public web text, books, news, code. The differences in training data are real but smaller than the similarities. When you ask any of them to write a real estate listing description, they reach for similar phrasings from similar training examples.
            </p>

            <p style={proseStyle}>
              This is why ChatGPT and Claude produce listings that sound suspiciously similar despite being different models from different companies. They learned the same patterns from the same training data.
            </p>

            <h3 style={h3Style}>Real estate training data is heavy on clichéd phrasing</h3>

            <p style={proseStyle}>
              The training corpora that LLMs use include massive amounts of historical MLS data, real estate marketing content, and listing copywriter examples. Most of that historical data uses the same overused phrases — &ldquo;stunning,&rdquo; &ldquo;must-see,&rdquo; &ldquo;meticulously maintained,&rdquo; &ldquo;nestled in a quiet neighborhood.&rdquo; The LLM learns these as canonical real estate vocabulary because they appeared in the training data thousands of times.
            </p>

            <p style={proseStyle}>
              <strong>The LLM didn&apos;t invent the clichés. It learned to reproduce them at scale.</strong>
            </p>

            <p style={proseStyle}>
              When an agent prompts ChatGPT for a listing description without specific constraints, the model produces the statistical average of what real estate descriptions in its training data looked like. The statistical average is full of clichés because the original training data was full of clichés.
            </p>

            <h3 style={h3Style}>Unconstrained generation amplifies the worst patterns</h3>

            <p style={proseStyle}>
              Most consumer AI tools — ChatGPT, generic real estate AI products — generate output and ship it. There&apos;s no review loop, no banned phrase list, no audit layer. The LLM produces what it produces, and the agent gets that output.
            </p>

            <p style={proseStyle}>
              Constrained generation is structurally different. It involves:
            </p>

            <BulletList items={[
              <><strong>Grounding data</strong> — feeding the LLM verified property information so it can&apos;t fabricate details</>,
              <><strong>Banned phrase lists</strong> — explicitly prohibiting known AI patterns at the prompt level</>,
              <><strong>Output schemas</strong> — forcing the LLM to produce structured data that&apos;s harder to fill with filler</>,
              <><strong>Audit layers</strong> — a second pass that checks output for clichés, AI tells, and Fair Housing violations before delivery</>,
            ]} />

            <p style={proseStyle}>
              The architectural difference between unconstrained and constrained generation is the difference between &ldquo;an AI wrote this&rdquo; and &ldquo;an AI wrote this but you can&apos;t tell.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── THE 6 CATEGORIES — CREAM ─────────────── */}
      <section id="taxonomy" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <SectionLabel>The taxonomy</SectionLabel>
            <h2 style={h2Style}>The six categories of AI tells</h2>

            <p style={proseStyle}>
              Six distinct patterns make up the bulk of AI listing description tells. Each category gets its own section below with examples, rewrites, and why the pattern matters.
            </p>

            <p style={{ ...proseStyle, marginBottom: "48px" }}>
              The taxonomy below is drawn from production data — phrases the <Link href="/tools/listing-description-checker" style={{ color: C.forest, textDecoration: "underline", textDecorationColor: C.gold, textUnderlineOffset: "3px" }}>Listing Description Checker</Link> flags across thousands of submissions. These aren&apos;t theoretical patterns; they&apos;re what real AI output looks like when agents paste it into the tool.
            </p>

            {TELL_CATEGORIES.map((tell) => (
              <TellBlock key={tell.slug} tell={tell} />
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── THE FIX — FOREST DARK ─────────────── */}
      <section id="fix" className="relative overflow-hidden bg-[#14271E] py-20 sm:py-24">
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
              <Wrench className="h-3 w-3" strokeWidth={2} />
              The fix
            </div>
            <h2 style={{ ...h2Style, color: C.creamWarm }}>The architectural fix: constrained generation</h2>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              Reading the six categories above might suggest a simple fix: &ldquo;just edit the AI output to remove the tells.&rdquo;
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              That works for one listing. It doesn&apos;t work at scale. An agent doing 5-10 listings a month doesn&apos;t have time to manually scrub every output for em-dash pairs, generic openings, and overused adjectives. And the AI tells aren&apos;t independent — fixing the &ldquo;welcome to&rdquo; opening often requires rewriting the whole paragraph, because the rest of the description was structured around that opener.
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              The real fix happens earlier, in how the AI generates output in the first place.
            </p>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>Unconstrained vs constrained generation</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              <strong style={{ color: C.gold }}>Unconstrained generation</strong> is what consumer tools like ChatGPT and Claude do by default. You give the model a prompt (&ldquo;write a listing description for this property&rdquo;). The model produces output based on its statistical understanding of what listings look like. The output ships.
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              <strong style={{ color: C.gold }}>Constrained generation</strong> is structurally different:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                <><strong style={{ color: C.gold }}>1. Grounding data is required.</strong> The model can&apos;t produce output without verified facts about the property — square footage, year built, specific features, photo evidence. No invented details. (Covered in detail in <Link href="/compare/metes-vs-chatgpt" style={{ color: C.goldSoft, textDecoration: "underline", textUnderlineOffset: "3px" }}>Metes vs ChatGPT</Link> — this is the architectural fix for the hallucination problem.)</>,
                <><strong style={{ color: C.gold }}>2. Banned phrase lists are wired into the prompt.</strong> The model is explicitly told: don&apos;t use &ldquo;stunning,&rdquo; don&apos;t use &ldquo;nestled,&rdquo; don&apos;t use &ldquo;more than just,&rdquo; don&apos;t open with &ldquo;welcome to,&rdquo; don&apos;t close with &ldquo;don&apos;t miss this.&rdquo; The prompt enforces what won&apos;t ship.</>,
                <><strong style={{ color: C.gold }}>3. Output schemas force specificity.</strong> Instead of generating freeform prose, the model fills structured fields — kitchen description, primary bedroom, outdoor space, neighborhood context. Each field has a word count, a required specificity level, and explicit anti-patterns to avoid.</>,
                <><strong style={{ color: C.gold }}>4. Audit layers catch what slips through.</strong> A second pass evaluates the output against the same patterns the <Link href="/tools/listing-description-checker" style={{ color: C.goldSoft, textDecoration: "underline", textUnderlineOffset: "3px" }}>Listing Description Checker</Link> detects — clichés, AI tells, structural patterns, length issues. Outputs that fail the audit get regenerated or flagged for human review before delivery.</>,
              ].map((item, i) => (
                <li key={i} style={{ paddingLeft: "20px", position: "relative", fontFamily: "var(--font-manrope, sans-serif)", fontSize: "16px", lineHeight: 1.7, color: "rgba(244,240,232,0.85)" }}>
                  <span style={{ position: "absolute", left: "4px", color: C.gold, fontWeight: 600 }}>•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              This is the difference between &ldquo;an AI wrote this&rdquo; and &ldquo;an AI wrote this, but you can&apos;t tell.&rdquo;
            </p>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>The diff in practice</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              Same property, two outputs from two architectures.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "24px", marginBottom: "24px" }}>
              <div style={{ background: "rgba(201,123,92,0.1)", border: `1px solid rgba(201,123,92,0.3)`, borderRadius: "12px", padding: "20px 24px" }}>
                <div style={{ ...h4Style, marginTop: 0, color: "#E0A589" }}>Unconstrained (ChatGPT, default prompt)</div>
                <p style={{ ...proseStyle, margin: 0, color: "rgba(244,240,232,0.85)", fontStyle: "italic", fontSize: "15px" }}>
                  &ldquo;Welcome to this stunning 3-bedroom, 2-bath home nestled in the heart of a vibrant neighborhood. This meticulously maintained property boasts an open floor plan, gourmet kitchen, and tranquil backyard oasis. The perfect blend of modern luxury and classic charm awaits. Don&apos;t miss this rare opportunity to make this exceptional property your own!&rdquo;
                </p>
                <p style={{ ...proseStyle, marginTop: "12px", marginBottom: 0, color: "rgba(244,240,232,0.65)", fontSize: "13px" }}>
                  Six AI tells in three sentences. Generic open, generic close, three clichés (&ldquo;stunning,&rdquo; &ldquo;nestled,&rdquo; &ldquo;meticulously maintained&rdquo;), an AI-tell phrase (&ldquo;perfect blend of&rdquo;), and zero specific facts.
                </p>
              </div>

              <div style={{ background: "rgba(92,138,110,0.1)", border: `1px solid rgba(92,138,110,0.3)`, borderRadius: "12px", padding: "20px 24px" }}>
                <div style={{ ...h4Style, marginTop: 0, color: "#8FB89E" }}>Constrained (Metes, same property)</div>
                <p style={{ ...proseStyle, margin: 0, color: "rgba(244,240,232,0.85)", fontStyle: "italic", fontSize: "15px" }}>
                  &ldquo;1,650 sq ft single-story on a corner lot in the Maple Heights neighborhood. Kitchen updated in 2023 — new shaker cabinets, quartz counters, gas range. Primary bedroom faces east; gets morning light. South-facing back patio with mature shade trees. Two blocks from Founders Park and the Saturday farmers market.&rdquo;
                </p>
                <p style={{ ...proseStyle, marginTop: "12px", marginBottom: 0, color: "rgba(244,240,232,0.65)", fontSize: "13px" }}>
                  Same property. Same length. Zero AI tells. Every claim verifiable.
                </p>
              </div>
            </div>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              The architecture produces the output. The agent doesn&apos;t have to edit; the architecture didn&apos;t generate the tells in the first place.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── WHAT GOOD DOES — CREAM ─────────────── */}
      <section id="good" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <SectionLabel>The rules</SectionLabel>
            <h2 style={h2Style}>What good descriptions actually do</h2>

            <p style={proseStyle}>
              Three rules. The same rules whether the description is human-written, AI-generated, or hybrid.
            </p>

            <h3 style={h3Style}>Rule 1: Lead with specific facts</h3>
            <p style={proseStyle}>
              The opening sentence is the highest-leverage moment. Specific facts anchor the buyer. Generic adjectives lose them.
            </p>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "10px", padding: "16px 20px", marginBottom: "24px" }}>
              <p style={{ ...proseStyle, margin: 0, fontSize: "14.5px" }}>
                <strong style={{ color: C.warn }}>Weak:</strong> &ldquo;Beautiful single-family home in desirable neighborhood.&rdquo;
              </p>
              <p style={{ ...proseStyle, marginTop: "8px", marginBottom: 0, fontSize: "14.5px" }}>
                <strong style={{ color: C.pass }}>Strong:</strong> &ldquo;1923 craftsman bungalow on Linden Avenue, two blocks from Alberta Arts.&rdquo;
              </p>
            </div>

            <h3 style={h3Style}>Rule 2: Use sensory language tied to verifiable details</h3>
            <p style={proseStyle}>
              Sensory language is powerful in listing descriptions. It helps buyers imagine living in the space. But sensory claims are only credible when tied to verifiable details.
            </p>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "10px", padding: "16px 20px", marginBottom: "24px" }}>
              <p style={{ ...proseStyle, margin: 0, fontSize: "14.5px" }}>
                <strong style={{ color: C.warn }}>Weak:</strong> &ldquo;Sun-drenched living spaces inspire daily relaxation.&rdquo;
              </p>
              <p style={{ ...proseStyle, marginTop: "8px", marginBottom: 0, fontSize: "14.5px" }}>
                <strong style={{ color: C.pass }}>Strong:</strong> &ldquo;The great room has a 22-foot wall of west-facing windows — afternoon light fills both the kitchen and dining area until sunset.&rdquo;
              </p>
            </div>
            <p style={proseStyle}>
              The strong version makes the same sensory point but anchors it in something the buyer can verify in the photos and confirm during a showing.
            </p>

            <h3 style={h3Style}>Rule 3: Close with logistics, not platitudes</h3>
            <p style={proseStyle}>
              The closing should give the buyer a path to action. Not encouragement to take action — actual logistics.
            </p>
            <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "10px", padding: "16px 20px", marginBottom: "24px" }}>
              <p style={{ ...proseStyle, margin: 0, fontSize: "14.5px" }}>
                <strong style={{ color: C.warn }}>Weak:</strong> &ldquo;Don&apos;t miss this opportunity to make this exceptional property your own! Schedule your showing today!&rdquo;
              </p>
              <p style={{ ...proseStyle, marginTop: "8px", marginBottom: 0, fontSize: "14.5px" }}>
                <strong style={{ color: C.pass }}>Strong:</strong> &ldquo;Open house Saturday 1-4 PM. The listing agent can coordinate weekday showings; the seller&apos;s relocating for work and would like to close within 60 days.&rdquo;
              </p>
            </div>
            <p style={proseStyle}>
              The strong closing respects the buyer&apos;s intelligence. They know how to schedule a showing. What they don&apos;t know is when the open house is and what the seller&apos;s timeline looks like.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── WHEN TO USE — EARTH ─────────────── */}
      <section id="when" className="bg-[#EFEAE0] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              <AlertTriangle className="h-3 w-3" strokeWidth={2} />
              Honest disclaimer
            </div>
            <h2 style={h2Style}>When to use AI and when not to</h2>

            <p style={proseStyle}>
              A few honest takes on where AI fits and where it doesn&apos;t.
            </p>

            <h3 style={h3Style}>When AI works well</h3>

            <BulletList items={[
              <><strong>First drafts from verified data.</strong> If you have accurate property facts and use a constrained tool, AI produces strong baseline copy in seconds. The agent&apos;s role becomes editorial review, not blank-page writing.</>,
              <><strong>Multi-format generation.</strong> AI is genuinely useful for taking one property description and adapting it for MLS, social posts, email, and brochures. Each format needs different length and emphasis; AI handles the format conversion well.</>,
              <><strong>Compliance audit support.</strong> AI tools that catch Fair Housing-flagged language (like <Link href="/learn/fair-housing-language-mls-listings" style={{ color: C.forest, textDecoration: "underline", textDecorationColor: C.gold, textUnderlineOffset: "3px" }}>Metes&apos; compliance audit</Link>) are meaningfully better at consistency than human review alone. Humans miss things. Audit tools don&apos;t.</>,
            ]} />

            <h3 style={h3Style}>When AI fails</h3>

            <BulletList items={[
              <><strong>Unconstrained generation.</strong> ChatGPT or Claude with a generic prompt produces the patterns this page documents. The output sounds AI-generated because it is.</>,
              <><strong>No grounding data.</strong> When AI is asked to write about a property it doesn&apos;t have verified facts about, it fabricates. The Florida Realtors fruit-trees case (where ChatGPT invented a grove of fruit trees that didn&apos;t exist on the property) is the canonical failure mode. Covered in detail in <Link href="/compare/metes-vs-chatgpt" style={{ color: C.forest, textDecoration: "underline", textDecorationColor: C.gold, textUnderlineOffset: "3px" }}>Metes vs ChatGPT</Link>.</>,
              <><strong>Without human editorial review.</strong> Even constrained AI benefits from a final human pass. The agent who reviews the AI output catches things the tools miss — context, tone, market-specific knowledge.</>,
            ]} />

            <h3 style={h3Style}>The agent&apos;s responsibility</h3>

            <p style={proseStyle}>
              AI tools don&apos;t transfer responsibility for what gets published. The listing agent is accountable for the description, regardless of how it was generated. &ldquo;AI wrote it&rdquo; isn&apos;t a defense for inaccuracy, Fair Housing violations, or misleading claims. The 2026 industry consensus (NAR, Florida Realtors, multiple state CE programs) is consistent: agents are responsible for their content.
            </p>

            <p style={proseStyle}>
              The implication for AI tools: the tool is responsible for not producing patterns that embarrass the agent. The agent is responsible for the final review. Both layers matter.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── FAQ — CREAM ─────────────── */}
      <section id="faq" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-20 sm:py-24">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              <BookOpen className="h-3 w-3" strokeWidth={2} />
              Common questions
            </div>
            <h2 style={h2Style}>Common questions</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "24px" }}>
              {[
                {
                  q: "How do I tell if a listing description was written by AI?",
                  a: "Look for six categories of tells: real estate clichés (stunning, must-see, nestled), AI-tell vocabulary (delve, elevate, captivating), formulaic phrases (more than just, perfect blend of), generic openings (welcome to, discover, nestled), generic closings (don't miss this, schedule your showing), and structural patterns (multiple em-dash pairs, three-part adjective lists). Any single one is a maybe. Three or more in the same description is a near-certain AI tell.",
                },
                {
                  q: "What words should I avoid in MLS listing descriptions?",
                  a: "The most overused real estate clichés to avoid: 'stunning,' 'must-see,' 'meticulously maintained,' 'boasts,' 'showcases,' 'pristine,' 'immaculate,' 'exquisite,' 'nestled,' and any variation of 'perfect blend of.' These predate AI but AI uses them at higher rates than humans. Beyond clichés, avoid AI-tell vocabulary like 'delve,' 'tapestry,' 'embark,' 'elevate,' and 'captivating' — most humans don't use these words to describe houses.",
                },
                {
                  q: "Why do AI-generated listings sound the same?",
                  a: "LLMs trained on overlapping corpora produce overlapping output. ChatGPT, Claude, and other major models learned from similar real estate training data that itself was full of clichéd phrasing. Without specific constraints, the models reach for the statistical average of what listings looked like in their training data — and that average is full of the same overused phrases. The fix is constrained generation: tools that ban known AI patterns at the prompt level, ground output in verified data, and audit results before delivery.",
                },
                {
                  q: "Is it bad to use ChatGPT for listing descriptions?",
                  a: "ChatGPT can produce usable listing copy with the right prompts and significant editorial review. The risks: (1) it can fabricate property details that don't exist, (2) it routinely uses Fair Housing-flagged language unless explicitly instructed otherwise, (3) it produces the AI-tell patterns documented on this page. For agents doing 1-2 listings a year, ChatGPT plus careful editing is reasonable. For agents at higher volume, constrained tools designed for real estate produce better baseline output.",
                },
                {
                  q: "What's the difference between an AI tell and a real estate cliché?",
                  a: "Real estate clichés ('stunning,' 'must-see,' 'nestled') predate AI by decades. AI tells ('delve,' 'elevate,' 'captivating,' 'more than just') emerged specifically from LLM training data and patterns. There's overlap — AI uses real estate clichés at high rates — but they're distinct categories. Clichés make a listing sound lazy. AI tells make a listing sound machine-generated. Both hurt credibility.",
                },
                {
                  q: "How do I fix an AI-sounding listing description?",
                  a: "Two paths. Short-term: manually remove the six categories of tells from any AI output before publishing. Replace generic openings with specific facts, swap clichés for concrete details, eliminate em-dash pairs and three-part adjective lists, replace generic closings with logistics. Long-term: use AI tools that don't generate the tells in the first place. Tools with banned phrase lists, grounding data requirements, and audit layers produce baseline output that doesn't need this kind of editing.",
                },
                {
                  q: "Will buyers notice if my listing was AI-generated?",
                  a: "Increasingly, yes. Buyers actively house-hunting read dozens of listings per week. Pattern recognition is fast. By mid-2026, the AI-tell patterns documented on this page are recognizable enough that listings using them lose credibility — particularly with younger, internet-native buyers who've spent hours with ChatGPT and Claude themselves. The marginal effectiveness of AI listings is dropping as more agents use the same tools unconstrained.",
                },
                {
                  q: "What's the best way to use AI for MLS descriptions?",
                  a: "Use a constrained tool — one that requires verified property data as input, bans known AI patterns at the prompt level, structures output into specific fields, and audits for Fair Housing compliance and AI tells before delivery. Treat the AI output as a strong first draft. Apply human editorial review focused on local market context, tone, and the specific narrative this listing needs. The right division of labor: AI handles the structural work consistently, the agent handles judgment and market knowledge.",
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
              Sources: Production data from the Listing Description Checker (anonymized examples across thousands of submissions); Florida Realtors Magazine, &ldquo;The Real Reasons AI Can&apos;t Replace Real Estate Professionals&rdquo; (2024); JMIR Comparative Analysis of LLM Hallucination Rates (peer-reviewed, 2024); HUD Office of Fair Housing and Equal Opportunity penalty schedules (24 CFR § 180.671, March 2024 adjustment); National Association of REALTORS® guidance on agent responsibility for marketing content (2026). This reference is informational and not legal advice.
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
            <SectionLabel light>The new edge</SectionLabel>
            <h2 className="mb-5 font-manrope text-[clamp(28px,4vw,42px)] font-medium leading-[1.1] tracking-[0.005em] text-[#F4F0E8]">
              The window for &ldquo;AI is a competitive edge in listing copy&rdquo; is closing. <em className="not-italic text-[#B89968]">The new edge is in AI that doesn&apos;t sound like AI.</em>
            </h2>
            <p className="mb-8 max-w-[600px] text-[clamp(15px,1.3vw,17px)] leading-[1.6] text-[rgba(244,240,232,0.78)]">
              Constrained generation grounds output in verified facts, bans known patterns, and audits results before shipping. The six categories of tells documented here aren&apos;t a hit list of words to scrub manually from every description — they&apos;re a specification for what constrained AI has to solve.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/listing-description-checker"
                className="inline-flex items-center gap-2 rounded-[9px] bg-[#B89968] px-7 py-3.5 font-manrope text-[14px] font-medium text-[#14271E] no-underline transition-colors hover:bg-[#9A7E50] hover:text-[#F4F0E8]"
              >
                Try the Listing Description Checker
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
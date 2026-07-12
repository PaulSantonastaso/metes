import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, AlertTriangle, BookOpen, Scale, MapPin, CheckCircle2, XCircle } from "lucide-react";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "The Complete Real Estate Fair Housing Word List (2026) | Metes",
  description:
    "Fair Housing word reference for real estate agents. Every entry includes why it's flagged and what to write instead. Organized by protected class with Florida-specific Orange County and Orlando additions.",
  keywords: [
    "fair housing word list",
    "words to avoid in real estate listings",
    "fair housing violations mls",
    "florida fair housing words",
    "orange county fair housing",
    "real estate discriminatory language",
    "mls listing compliance",
    "fair housing protected classes 2026",
  ],
  alternates: {
    canonical: "https://www.metes.app/learn/fair-housing-words-to-avoid",
  },
  openGraph: {
    title: "The Complete Real Estate Fair Housing Word List (2026)",
    description:
      "Working reference for MLS listing language, organized by protected class. Every entry includes why it's flagged and what to write instead.",
    url: "https://www.metes.app/learn/fair-housing-words-to-avoid",
    siteName: "Metes",
    type: "article",
    images: [
      {
        url: "https://www.metes.app/og/fair-housing-word-list-2026.png",
        width: 1200,
        height: 630,
        alt: "The complete real estate Fair Housing word list (2026)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Estate Fair Housing Word List (2026)",
    description: "Every entry includes why it's flagged and what to write instead.",
    images: ["https://www.metes.app/og/fair-housing-word-list-2026.png"],
  },
  robots: { index: true, follow: true },
};

const SCHEMA_JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.metes.app/learn/fair-housing-words-to-avoid#article",
      "headline": "The Complete Real Estate Fair Housing Word List (2026)",
      "description":
        "Fair Housing word reference for real estate agents. Organized by federally protected class with Florida-specific and Central Florida jurisdictional additions. Every entry includes why it's flagged and what to write instead.",
      "image": "https://www.metes.app/og/fair-housing-word-list-2026.png",
      "datePublished": "2026-07-15",
      "dateModified": "2026-07-15",
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
        "@id": "https://www.metes.app/learn/fair-housing-words-to-avoid",
      },
      "keywords":
        "Fair Housing Act, protected classes, MLS description, Florida Fair Housing, Orange County, Orlando, discriminatory language",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.metes.app/learn/fair-housing-words-to-avoid#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What are the Fair Housing protected classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Federally, seven: race, color, religion, national origin, sex (including sexual orientation and gender identity per 2021 HUD interpretation), familial status, and disability. States and municipalities add more — Orange County, Florida adds age, marital status, and sexual orientation. California adds 12+ additional classes. Check your local jurisdiction; federal is the minimum, not the ceiling.",
          },
        },
        {
          "@type": "Question",
          "name": "Is 'master bedroom' a Fair Housing violation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. 'Master bedroom' is not a Fair Housing violation under federal law or Florida state law. Some MLSs and industry style guides prefer 'primary bedroom' for reasons unrelated to Fair Housing enforcement. Either term is legally safe.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I mention schools in a listing description?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Naming the specific school district factually is generally safe. Qualitative claims ('great schools,' 'top-rated,' 'excellent schools') are where risk starts because school quality often functions as a demographic proxy. Enforcement has increased on qualitative school claims specifically. Safest practice: name the district, skip the adjective.",
          },
        },
        {
          "@type": "Question",
          "name": "Is 'walking distance' safe to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Under federal enforcement, generally yes. Some Fair Housing training materials flag it as potentially excluding mobility-limited buyers, and enforcement has been inconsistent. Low-risk alternative: 'short distance to' or 'close to.' Loses nothing meaningful and eliminates the debate.",
          },
        },
        {
          "@type": "Question",
          "name": "What's the penalty for a Fair Housing violation in a listing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Per HUD's 24 CFR 180.671 penalty schedule (March 2024 adjustment): up to $25,597 for a first offense, up to $63,993 for a second offense within five years, and up to $127,988 for third and subsequent offenses within seven years. Attorney fees, damages, and equitable remedies can be added. State agencies may impose additional penalties.",
          },
        },
        {
          "@type": "Question",
          "name": "Do state Fair Housing laws add more protected classes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "About 22 states plus DC add protected classes beyond the federal seven. Florida statute does not, but Florida is a home-rule state — Orange County adds three (age, marital status, sexual orientation) and the City of Orlando adds two (sexual orientation, marital status). Other high-addition states include California (12+ additional), New York (10+), Washington (8+), Massachusetts (7+), and DC (12+).",
          },
        },
        {
          "@type": "Question",
          "name": "Can I use 'family room' or 'family-friendly'?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "'Family room' is safe — it's a descriptive room name. 'Family-friendly' is not safe — it's a familial-status preference and one of the most commonly cited violations. The distinction is whether the word describes a physical space or a preferred buyer type.",
          },
        },
        {
          "@type": "Question",
          "name": "How do I audit a listing description for Fair Housing compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Three-step process. First, read the description once and mark every adjective that describes the buyer or the buyer's likely activities ('perfect for,' 'great for,' 'ideal for'). These are the highest-risk spots. Second, check every location or amenity descriptor for demographic proxies (school quality, religious institutions, 'traditional,' 'established'). Third, run the description through the Metes Listing Description Checker, which flags known Fair Housing patterns automatically. Human review catches context; automated audit catches consistency. Both matter.",
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
// WordListTable — the load-bearing component
// ─────────────────────────────────────────────────────────────────

interface WordEntry {
  word: string;
  why: string;
  instead: string;
}

function WordListTable({ entries }: { entries: WordEntry[] }) {
  return (
    <div style={{
      marginBottom: "24px",
      borderRadius: "12px",
      border: `1px solid ${C.border}`,
      overflow: "hidden",
      background: C.bgCard,
    }}>
      {/* Desktop header */}
      <div className="hidden md:grid" style={{
        gridTemplateColumns: "1.2fr 1.5fr 1.5fr",
        gap: "16px",
        padding: "14px 20px",
        background: "rgba(184,153,104,0.08)",
        borderBottom: `1px solid ${C.border}`,
        fontFamily: "var(--font-manrope, sans-serif)",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: C.goldDeep,
      }}>
        <div>Word or phrase</div>
        <div>Why flagged</div>
        <div>What to write instead</div>
      </div>

      {entries.map((entry, i) => (
        <div key={i} style={{
          borderBottom: i < entries.length - 1 ? `1px solid ${C.border}` : "none",
          padding: "16px 20px",
        }}>
          {/* Desktop layout */}
          <div className="hidden md:grid" style={{
            gridTemplateColumns: "1.2fr 1.5fr 1.5fr",
            gap: "16px",
            alignItems: "start",
          }}>
            <div style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "15px",
              fontWeight: 500,
              color: C.ink,
              lineHeight: 1.4,
            }}>
              {entry.word}
            </div>
            <div style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "14.5px",
              lineHeight: 1.6,
              color: C.inkSoft,
            }}>
              {entry.why}
            </div>
            <div style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "14.5px",
              lineHeight: 1.6,
              color: C.ink,
            }}>
              {entry.instead}
            </div>
          </div>

          {/* Mobile layout — stacked */}
          <div className="md:hidden" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "16px",
              fontWeight: 600,
              color: C.ink,
              lineHeight: 1.4,
            }}>
              {entry.word}
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: C.warn,
                marginBottom: "4px",
              }}>
                Why flagged
              </div>
              <div style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "14px",
                lineHeight: 1.55,
                color: C.inkSoft,
              }}>
                {entry.why}
              </div>
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: C.pass,
                marginBottom: "4px",
              }}>
                Write instead
              </div>
              <div style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "14px",
                lineHeight: 1.55,
                color: C.ink,
              }}>
                {entry.instead}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// ContextTable — two-column safe/risky variant
// ─────────────────────────────────────────────────────────────────

interface ContextEntry {
  word: string;
  safe: string;
  risky: string;
}

function ContextTable({ entries }: { entries: ContextEntry[] }) {
  return (
    <div style={{
      marginBottom: "24px",
      borderRadius: "12px",
      border: `1px solid ${C.border}`,
      overflow: "hidden",
      background: C.bgCard,
    }}>
      <div className="hidden md:grid" style={{
        gridTemplateColumns: "1fr 1.4fr 1.4fr",
        gap: "16px",
        padding: "14px 20px",
        background: "rgba(184,153,104,0.08)",
        borderBottom: `1px solid ${C.border}`,
        fontFamily: "var(--font-manrope, sans-serif)",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: C.goldDeep,
      }}>
        <div>Word or phrase</div>
        <div>When it&apos;s safe</div>
        <div>When it&apos;s risky</div>
      </div>

      {entries.map((entry, i) => (
        <div key={i} style={{
          borderBottom: i < entries.length - 1 ? `1px solid ${C.border}` : "none",
          padding: "16px 20px",
        }}>
          <div className="hidden md:grid" style={{
            gridTemplateColumns: "1fr 1.4fr 1.4fr",
            gap: "16px",
            alignItems: "start",
          }}>
            <div style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "15px",
              fontWeight: 500,
              color: C.ink,
            }}>
              {entry.word}
            </div>
            <div style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "14.5px",
              lineHeight: 1.6,
              color: C.inkSoft,
            }}>
              {entry.safe}
            </div>
            <div style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "14.5px",
              lineHeight: 1.6,
              color: C.inkSoft,
            }}>
              {entry.risky}
            </div>
          </div>

          <div className="md:hidden" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "16px",
              fontWeight: 600,
              color: C.ink,
            }}>
              {entry.word}
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: C.pass,
                marginBottom: "4px",
              }}>
                Safe when
              </div>
              <div style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "14px",
                lineHeight: 1.55,
                color: C.inkSoft,
              }}>
                {entry.safe}
              </div>
            </div>
            <div>
              <div style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: C.warn,
                marginBottom: "4px",
              }}>
                Risky when
              </div>
              <div style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "14px",
                lineHeight: 1.55,
                color: C.inkSoft,
              }}>
                {entry.risky}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// SafeTable — two-column word + why-safe
// ─────────────────────────────────────────────────────────────────

interface SafeEntry {
  word: string;
  why: string;
}

function SafeTable({ entries }: { entries: SafeEntry[] }) {
  return (
    <div style={{
      marginBottom: "24px",
      borderRadius: "12px",
      border: `1px solid rgba(92,138,110,0.25)`,
      overflow: "hidden",
      background: "rgba(92,138,110,0.04)",
    }}>
      <div className="hidden md:grid" style={{
        gridTemplateColumns: "1fr 2fr",
        gap: "16px",
        padding: "14px 20px",
        background: "rgba(92,138,110,0.08)",
        borderBottom: `1px solid rgba(92,138,110,0.2)`,
        fontFamily: "var(--font-manrope, sans-serif)",
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: C.pass,
      }}>
        <div>Word or phrase</div>
        <div>Why it&apos;s safe</div>
      </div>

      {entries.map((entry, i) => (
        <div key={i} style={{
          borderBottom: i < entries.length - 1 ? `1px solid rgba(92,138,110,0.15)` : "none",
          padding: "16px 20px",
        }}>
          <div className="hidden md:grid" style={{
            gridTemplateColumns: "1fr 2fr",
            gap: "16px",
            alignItems: "start",
          }}>
            <div style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "15px",
              fontWeight: 500,
              color: C.ink,
            }}>
              {entry.word}
            </div>
            <div style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "14.5px",
              lineHeight: 1.6,
              color: C.inkSoft,
            }}>
              {entry.why}
            </div>
          </div>

          <div className="md:hidden" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "16px",
              fontWeight: 600,
              color: C.ink,
            }}>
              {entry.word}
            </div>
            <div style={{
              fontFamily: "var(--font-manrope, sans-serif)",
              fontSize: "14px",
              lineHeight: 1.55,
              color: C.inkSoft,
            }}>
              {entry.why}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────

const RACE_ENTRIES: WordEntry[] = [
  { word: "\"Traditional neighborhood\"", why: "When used as code for racial composition. Common enforcement flag.", instead: "Describe specific features: architecture, walkability, tree cover, era of construction" },
  { word: "\"Exclusive neighborhood\"", why: "Implies who is included and who is not.", instead: "\"Private neighborhood\" if truly gated; otherwise omit" },
  { word: "\"Prestigious area\"", why: "Steers toward or away from certain buyers based on inferred demographics", instead: "Specific factual descriptors: school district, HOA amenities, median home price if truly relevant" },
  { word: "\"Preferred neighborhood\"", why: "Preferred by whom? Reads as steering.", instead: "Describe what the buyer would actually experience" },
  { word: "\"Established community\"", why: "Sometimes safe (age of neighborhood). Often used as demographic proxy.", instead: "If describing age: \"Neighborhood dates to 1978\" or similar specific fact" },
  { word: "Race-specific ethnic descriptors (any)", why: "Direct violation. Cannot describe or reference residents by race.", instead: "Describe the property and area factually" },
];

const RELIGION_ENTRIES: WordEntry[] = [
  { word: "\"Christian community\"", why: "Direct religious preference.", instead: "Omit religious framing entirely" },
  { word: "\"Walking distance to the church\"", why: "Selective religious accommodation reference; steers toward a specific faith.", instead: "If mentioning religious institutions at all: list multiple types factually (\"houses of worship within one mile include...\") or omit" },
  { word: "\"Near great churches\"", why: "Same problem, softer wording, still flagged.", instead: "Omit" },
  { word: "\"Kosher kitchen\"", why: "Direct religious accommodation; steers toward a specific faith.", instead: "If the kitchen has features that support kosher cooking (dual sinks, dual dishwashers), describe the features directly without the religious label" },
  { word: "\"Halal-friendly\"", why: "Same as above.", instead: "Describe features, not religious use" },
  { word: "\"Faith-based community\"", why: "Direct religious preference.", instead: "Describe the actual amenities (community center, walking paths, etc.)" },
  { word: "\"Blessed home\" / \"Godly home\"", why: "Religious language expressing seller's identity, reads as preference for like-minded buyers.", instead: "Omit" },
  { word: "Holiday-specific descriptors (\"perfect for Christmas mornings\")", why: "Implies religious observance; can read as preference.", instead: "Describe the room's features (light, layout, fireplace) without the seasonal framing" },
];

const ORIGIN_ENTRIES: WordEntry[] = [
  { word: "\"Traditional [ethnic] neighborhood\"", why: "Directly identifies national-origin composition.", instead: "Describe factual features of the area" },
  { word: "\"English-speaking neighborhood\"", why: "Language-based national-origin proxy.", instead: "Omit" },
  { word: "\"Ethnic enclave\" / \"cultural enclave\"", why: "Direct national-origin reference.", instead: "Omit" },
  { word: "Country-specific descriptors (\"Little Italy,\" \"Chinatown\")", why: "Officially recognized neighborhood names may be defensible in some MLSs; check with your broker. Even when technically permitted, they signal demographic preference and are frequently flagged.", instead: "Use the surrounding city name and describe factual features" },
  { word: "\"Assimilated area\"", why: "Direct violation, uncommon but occurs.", instead: "Omit" },
  { word: "\"American values neighborhood\"", why: "Reads as national-origin preference.", instead: "Omit" },
  { word: "Non-English descriptors used as identity markers", why: "Flagged when the descriptor implies who lives there rather than describing an amenity.", instead: "Describe amenities directly" },
];

const SEX_ENTRIES: WordEntry[] = [
  { word: "\"Bachelor pad\"", why: "Direct sex-based framing. Common violation.", instead: "Describe the property's actual features" },
  { word: "\"Perfect for a single woman\"", why: "Explicit sex-based preference.", instead: "Describe the property" },
  { word: "\"Great for men who love to entertain\"", why: "Sex-based preference.", instead: "Describe entertaining features (open layout, outdoor kitchen) without gendering the buyer" },
  { word: "\"Perfect for a couple\"", why: "Marital status implication (federal Sex + local marital status in Orlando/Orange County).", instead: "Describe the property" },
  { word: "\"Man cave\"", why: "Sex-based framing.", instead: "\"Rec room,\" \"media room,\" \"flex space\"" },
  { word: "\"She shed\"", why: "Same problem, opposite direction.", instead: "\"Backyard studio,\" \"outdoor office\"" },
  { word: "Gendered pronouns for the future buyer (\"he'll love the workshop\")", why: "Sex-based preference.", instead: "Neutral: \"The workshop features...\"" },
  { word: "References to buyer's presumed relationship structure", why: "Reads as sex-based or marital-status preference.", instead: "Describe features, not buyers" },
];

const FAMILIAL_ENTRIES: WordEntry[] = [
  { word: "\"Family home\"", why: "Direct familial-status framing.", instead: "Describe the layout and room count" },
  { word: "\"Family room\"", why: "Descriptive room name, generally safe. Distinguish from \"family home\" or \"family-friendly.\" Included here for clarity — this one is fine.", instead: "Keep as-is" },
  { word: "\"Family-friendly neighborhood\"", why: "Direct familial-status preference. Extremely common flag.", instead: "Describe neighborhood factually: parks, walkability, noise level" },
  { word: "\"Perfect for a growing family\"", why: "Explicit familial-status preference.", instead: "Describe bedroom count and space" },
  { word: "\"Great for raising children\"", why: "Direct familial-status preference.", instead: "Describe the layout, yard, or neighborhood factually" },
  { word: "\"Kid-friendly\"", why: "Same problem, softer wording, still flagged.", instead: "Describe features (fenced yard, playroom) directly" },
  { word: "\"Empty nester dream\"", why: "Familial-status preference in the opposite direction (also flagged).", instead: "Describe single-story layout, low maintenance, etc." },
  { word: "\"Perfect starter home\"", why: "Implies life-stage preference; can read as familial.", instead: "Describe size and price factually" },
  { word: "\"Adult community\"", why: "Only defensible if the property is in a legitimate 55+ HOPA-qualified community. Otherwise a violation.", instead: "\"55+ community\" only when the property is legally qualified" },
  { word: "\"Great schools nearby\" / \"Top-rated school district\"", why: "Can imply familial-status preference. In some jurisdictions, factual mention (naming the district) is safer than qualitative claims.", instead: "List the specific school district name factually. Skip qualitative descriptors like \"great,\" \"top-rated,\" or ratings numbers" },
  { word: "\"Room for the kids\"", why: "Familial-status preference.", instead: "\"Additional bedrooms\" or \"flex space\"" },
  { word: "\"Master bedroom\"", why: "This is not a Fair Housing violation. Some MLSs prefer \"primary bedroom\" for other reasons (industry style guides), but federal FHA does not flag it.", instead: "Either works" },
  { word: "\"Playroom\"", why: "Descriptive room name, generally safe if the room actually functions that way.", instead: "Use if accurate; otherwise \"flex space\" or \"bonus room\"" },
];

const DISABILITY_ENTRIES: WordEntry[] = [
  { word: "\"Perfect for able-bodied buyers\"", why: "Direct disability-based preference. Uncommon but occurs.", instead: "Omit" },
  { word: "\"No steps\"", why: "Actually safe and helpful — this is a factual accessibility feature. Include it.", instead: "Keep as-is" },
  { word: "\"Wheelchair accessible\"", why: "Safe and helpful factual description.", instead: "Keep as-is" },
  { word: "\"Handicapped\" (as an adjective)", why: "Outdated terminology; some sources flag as insensitive though not a direct FHA violation.", instead: "\"Accessible\"" },
  { word: "\"Handicap accessible\"", why: "Same as above — outdated, use \"accessible.\"", instead: "\"Accessible\"" },
  { word: "\"Grab bars in bath\"", why: "Safe factual description.", instead: "Keep as-is" },
  { word: "\"Perfect for [any specific disability]\"", why: "Direct preference framing.", instead: "Describe the accessibility feature without naming a specific disability" },
  { word: "\"Walk to nearby shops\"", why: "Debated. Some Fair Housing trainers flag it as excluding mobility-limited buyers; others consider it standard neighborhood description. Enforcement is uneven. Use judgment; consider \"close to nearby shops\" as a safer alternative.", instead: "\"Close to nearby shops\" or \"short distance to nearby shops\"" },
  { word: "\"Walking distance\"", why: "Same debate as above.", instead: "Consider \"short distance to\" as a lower-risk alternative" },
  { word: "Any language implying only certain buyers can navigate the space", why: "Disability preference.", instead: "Describe the space factually" },
];

const FLORIDA_ENTRIES: WordEntry[] = [
  { word: "\"Perfect for young professionals\"", why: "Age-based preference (Orange County/Orlando add age; federal does not).", instead: "Describe features and location factually" },
  { word: "\"Great for retirees\"", why: "Age-based preference. Same rule.", instead: "Describe single-story, low-maintenance features factually" },
  { word: "\"Ideal starter home for singles\"", why: "Marital-status preference (Orange County/Orlando add marital status).", instead: "Describe the property, not the buyer" },
  { word: "\"Perfect for newlyweds\"", why: "Marital-status preference.", instead: "Describe the property" },
  { word: "\"Divorce sale\"", why: "Marital status disclosure that reads as steering.", instead: "If seller motivation is relevant: \"seller motivated to close quickly\"" },
  { word: "Age-adjacent framing (\"mature adult community,\" \"young community\")", why: "Age preference.", instead: "\"55+\" only if HOPA-qualified; otherwise describe features" },
];

const CONTEXT_ENTRIES: ContextEntry[] = [
  { word: "\"Quiet neighborhood\"", safe: "Factual noise description backed by data", risky: "When it implies who does or doesn't live there" },
  { word: "\"Safe area\"", safe: "Rarely — this word is nearly always flagged", risky: "Almost always: reads as steering, subjective, undefined" },
  { word: "\"Established\"", safe: "Factual age of the neighborhood or home", risky: "When it implies demographic composition" },
  { word: "\"Walking distance\"", safe: "Descriptive proximity", risky: "When it excludes mobility-limited buyers (see disability section)" },
  { word: "\"Private community\"", safe: "If truly gated or restricted-access", risky: "If used to imply exclusivity of certain buyer types" },
  { word: "\"Exclusive\"", safe: "When it means \"limited membership\" (country club, HOA)", risky: "When it implies who is excluded" },
  { word: "\"Prime location\"", safe: "Descriptive real estate positioning", risky: "When it implies demographic desirability" },
  { word: "\"Charming\"", safe: "Descriptive style adjective", risky: "When it implies \"small\" or \"for a specific type of buyer\" (starter home coding)" },
  { word: "\"Perfect for [X]\"", safe: "Almost never fully safe", risky: "Nearly any [X] can be read as preference. Use \"features [feature]\" instead of \"perfect for [buyer type]\"" },
  { word: "\"Move-in ready\"", safe: "Descriptive condition claim", risky: "Nearly always safe" },
  { word: "\"Turnkey\"", safe: "Descriptive condition claim", risky: "Nearly always safe" },
  { word: "\"Cozy\"", safe: "Rarely", risky: "Often read as coded language for \"small\"; use square footage instead" },
];

const SAFE_ENTRIES: SafeEntry[] = [
  { word: "\"Master bedroom\"", why: "Not a Fair Housing violation. Some MLSs prefer \"primary bedroom\" for industry-style reasons unrelated to FHA. Either works." },
  { word: "\"Master closet\"", why: "Same as above." },
  { word: "\"Family room\"", why: "Descriptive room name. Distinguish from \"family-friendly\" or \"family home.\"" },
  { word: "\"Bonus room\"", why: "Neutral space descriptor." },
  { word: "\"Playroom\"", why: "Safe if the room actually functions that way." },
  { word: "\"Man door\" (in garage description)", why: "Industry term for a pedestrian-access door. Not sex-based framing in listing context." },
  { word: "Specific school district name (factual)", why: "Naming the district is generally safe. Qualitative claims (\"top-rated,\" \"great\") are where risk starts." },
  { word: "Specific neighborhood name", why: "Neighborhood names, even ones with cultural or ethnic origin (Little Havana, Chinatown), are generally safe as factual identifiers. Framing them as desirable because of demographic composition is where violation starts." },
  { word: "\"Walk-in closet\"", why: "Descriptive feature. Not disability-related when describing a closet type." },
  { word: "\"Move-in ready\"", why: "Descriptive condition claim." },
  { word: "\"Turnkey\"", why: "Descriptive condition claim." },
  { word: "\"Open floor plan\"", why: "Layout descriptor." },
  { word: "\"Vaulted ceilings\"", why: "Feature descriptor." },
  { word: "\"Chef's kitchen\"", why: "Marketing style descriptor for premium kitchens. Not occupation-based preference." },
  { word: "Room-count and square-footage claims", why: "Factual property data." },
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
// ClassSection — reusable protected-class subsection
// ─────────────────────────────────────────────────────────────────

interface ClassSectionProps {
  id: string;
  title: string;
  authority: string;
  intro: React.ReactNode;
  entries: WordEntry[];
  closing: React.ReactNode;
}

function ClassSection({ id, title, authority, intro, entries, closing }: ClassSectionProps) {
  return (
    <div id={id} style={{ marginBottom: "56px", scrollMarginTop: "24px" }}>
      <h3 style={{
        ...h3Style,
        marginTop: 0,
        fontSize: "clamp(22px, 2.6vw, 28px)",
        fontWeight: 500,
      }}>
        {title}
      </h3>
      <p style={{
        fontFamily: "var(--font-manrope, sans-serif)",
        fontSize: "13px",
        fontStyle: "italic",
        color: C.inkSoft,
        marginBottom: "16px",
      }}>
        {authority}
      </p>
      <div style={proseStyle}>{intro}</div>
      <WordListTable entries={entries} />
      <div style={proseStyle}>{closing}</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────

export default function FairHousingWordListPage() {
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
            <SectionLabel>Reference · Fair Housing</SectionLabel>

            <h1 className="mb-4 font-manrope text-[clamp(28px,4.5vw,48px)] font-medium leading-[1.08] tracking-[0.005em] text-[#14271E]">
              The complete real estate Fair Housing word list <em className="not-italic text-[#9A7E50]">(2026)</em>.
            </h1>

            <p className="mb-6 max-w-[640px] text-[clamp(14px,1.2vw,17px)] leading-[1.6] text-[#4A6B53]">
              Working reference for MLS listing language, organized by federally protected class. Every entry includes why it&apos;s flagged and what to write instead. Includes Florida-specific Orange County and Orlando additions.
            </p>

            <p className="mb-8 max-w-[640px] text-[clamp(14px,1.2vw,17px)] leading-[1.6] text-[#4A6B53]">
              The through-line worth internalizing: <strong>describe the property, never the buyer.</strong> Every violation on this reference collapses to some version of that failure.
            </p>

            <p className="text-[13px] font-mono uppercase tracking-[0.08em] text-[rgba(20,39,30,0.55)]">
              Last updated: July 15, 2026 · ~20 minute read
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── HOW TO READ — EARTH ─────────────── */}
      <section className="bg-[#EFEAE0] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              <BookOpen className="h-3 w-3" strokeWidth={2} />
              How to use this
            </div>
            <h2 style={h2Style}>How to read this reference</h2>

            <p style={proseStyle}>
              This is a working reference, not a legal document. Use it as a lookup when you&apos;re drafting a listing, an ad, a social post, or an email. It won&apos;t replace training from your broker&apos;s compliance officer or Fair Housing counsel, and it can&apos;t cover every edge case in every jurisdiction. The point is to catch the words and phrases that most often trigger complaints, penalties, or MLS rejections — before they ship.
            </p>

            <p style={proseStyle}>
              <strong>Three things worth knowing before you use the list.</strong>
            </p>

            <p style={proseStyle}>
              <strong>Intent doesn&apos;t matter. Outcome does.</strong> The Fair Housing Act evaluates whether marketing language expresses a preference, limitation, or discrimination against a protected class. Whether the agent meant it that way is not a defense. &ldquo;Perfect for a young family&rdquo; reads as familial-status preference regardless of what the agent had in mind while writing it.
            </p>

            <p style={proseStyle}>
              <strong>Context flips some words.</strong> &ldquo;Master bedroom&rdquo; is not, by itself, a Fair Housing violation. &ldquo;Master&apos;s-quality craftsmanship&rdquo; is not, by itself, a Fair Housing violation. Some words on this list are safe in one context and violating in another. Where that&apos;s the case, the entry says so.
            </p>

            <p style={proseStyle}>
              <strong>Local law can be stricter than federal.</strong> Federal protects 7 classes. Florida adds none via the state statute but adds several through local ordinances — Orange County adds three (age, marital status, sexual orientation) via Chapter 22 Human Rights, and the City of Orlando adds two (sexual orientation, marital status) via Chapter 57. If you list in Central Florida, the state minimum isn&apos;t your ceiling. Section 4 covers this specifically.
            </p>

            <div className="mb-3 mt-8 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              Jump to
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
              {[
                { id: "how", label: "How Fair Housing violations get flagged" },
                { id: "race", label: "Race and color" },
                { id: "religion", label: "Religion" },
                { id: "origin", label: "National origin" },
                { id: "sex", label: "Sex, sexual orientation, and gender identity" },
                { id: "familial", label: "Familial status" },
                { id: "disability", label: "Disability" },
                { id: "florida", label: "Florida-specific: Orange County and Orlando" },
                { id: "other-states", label: "State-additional protections beyond Florida" },
                { id: "context", label: "Context-dependent words" },
                { id: "safe", label: "Words that are actually safe" },
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

      {/* ─────────────── HOW FLAGGED — CREAM ─────────────── */}
      <section id="how" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              <Scale className="h-3 w-3" strokeWidth={2} />
              The mechanics
            </div>
            <h2 style={h2Style}>How Fair Housing violations get flagged</h2>

            <p style={proseStyle}>
              Before the word list, the mechanics of enforcement.
            </p>

            <p style={proseStyle}>
              The Federal Fair Housing Act (42 U.S.C. § 3604) prohibits discriminatory advertising, statements, or notices in the sale or rental of housing. Violations are enforced by the U.S. Department of Housing and Urban Development (HUD) and state fair housing agencies. In Florida, the Florida Commission on Human Relations (FCHR) enforces the state statute at Florida Statutes §§ 760.20-760.37.
            </p>

            <p style={proseStyle}>
              Complaints get filed by:
            </p>

            <BulletList items={[
              "Buyers or prospective buyers who felt excluded by listing language",
              "Testers (paid or volunteer) who audit listings systematically for discriminatory language",
              "Fair Housing organizations that monitor MLS feeds and syndication platforms",
              "Competing agents or brokerages (rare but happens)",
            ]} />

            <p style={proseStyle}>
              Once a complaint is filed, HUD or the state agency investigates. If reasonable cause is found, options include voluntary resolution, an administrative hearing, or civil action. Penalties per violation currently reach up to $25,597 for a first offense, per HUD&apos;s 24 CFR § 180.671 penalty schedule (March 2024 adjustment). Third violations exceed $115,000. Attorney fees, damages, and equitable remedies can be added on top.
            </p>

            <p style={proseStyle}>
              The financial exposure is real. So is the reputational exposure — MLSs, brokerages, and syndication portals increasingly reject or flag listings before they publish, and repeat violations can affect an agent&apos;s license.
            </p>

            <p style={proseStyle}>
              The rest of this piece is the working reference.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── THE SEVEN FEDERAL CLASSES — EARTH ─────────────── */}
      <section className="bg-[#EFEAE0] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <SectionLabel>The federal seven</SectionLabel>
            <h2 style={h2Style}>Federally protected classes</h2>

            <p style={{ ...proseStyle, marginBottom: "48px" }}>
              The following seven classes are protected by the Federal Fair Housing Act and mirrored by Florida Statute § 760. Every US listing must comply with these regardless of jurisdiction.
            </p>

            <ClassSection
              id="race"
              title="Race and color"
              authority="Federal Fair Housing Act, 42 U.S.C. § 3604"
              intro={
                <>Race and color are separate categories in statute but functionally overlap in most listing contexts.</>
              }
              entries={RACE_ENTRIES}
              closing={
                <>The general rule for race and color: describe the property, not the people. The word &ldquo;neighbors&rdquo; or any adjective attached to it is a warning sign — you&apos;re almost never in safe territory when describing who lives nearby.</>
              }
            />

            <ClassSection
              id="religion"
              title="Religion"
              authority="Federal Fair Housing Act, 42 U.S.C. § 3604"
              intro={
                <>Includes religious practice, religious identity, and lack of religion.</>
              }
              entries={RELIGION_ENTRIES}
              closing={
                <>The rule for religion: describe features that a buyer of any faith or no faith could use. If a feature genuinely accommodates religious observance, describe the feature&apos;s mechanics without labeling the observance.</>
              }
            />

            <ClassSection
              id="origin"
              title="National origin"
              authority="Federal Fair Housing Act, 42 U.S.C. § 3604"
              intro={
                <>Covers ancestry, ethnicity, place of birth, and language.</>
              }
              entries={ORIGIN_ENTRIES}
              closing={
                <>Neighborhood proper nouns are the gray area. &ldquo;Little Havana&rdquo; as a formal neighborhood name in Miami is arguably a factual place descriptor. But framing it as <em>desirable because of</em> national-origin composition is a violation. When in doubt, use the surrounding city name and describe the specific features.</>
              }
            />

            <ClassSection
              id="sex"
              title="Sex, sexual orientation, and gender identity"
              authority="Federal Fair Housing Act, 42 U.S.C. § 3604 · HUD interpretation via Executive Order 13988 (2021)"
              intro={
                <>HUD guidance under Executive Order 13988 (2021) confirmed that sex-based protection includes sexual orientation and gender identity. That interpretation remains in effect as of publication. Note: HUD withdrew several supporting guidance documents effective September 17, 2025, but the underlying statutory protection and 2021 EO remain.</>
              }
              entries={SEX_ENTRIES}
              closing={
                <>The pattern to internalize: don&apos;t describe who the buyer is. Describe what the property is.</>
              }
            />

            <ClassSection
              id="familial"
              title="Familial status"
              authority="Federal Fair Housing Act, 42 U.S.C. § 3604"
              intro={
                <>Protects presence of children under 18, pregnant persons, and persons seeking custody. This is the most frequently violated protected class in listing content. Agents&apos; mental models of who buys homes are heavily family-shaped, and it leaks into copy.</>
              }
              entries={FAMILIAL_ENTRIES}
              closing={
                <>
                  <p style={proseStyle}>The &ldquo;great schools&rdquo; trap is worth calling out separately. A factual reference to school district name is generally safe; a qualitative claim (&ldquo;great schools,&rdquo; &ldquo;top-rated,&rdquo; &ldquo;excellent&rdquo;) is where flags start. School quality often functions as a demographic proxy, and enforcement has increased on this specific pattern.</p>
                  <p style={{ ...proseStyle, marginBottom: 0 }}>The 55+ community exception is real but strict. The Housing for Older Persons Act (HOPA) allows age-restricted communities that meet specific criteria to state age preferences. Without HOPA qualification, any age-based framing is a violation.</p>
                </>
              }
            />

            <ClassSection
              id="disability"
              title="Disability"
              authority="Federal Fair Housing Act, 42 U.S.C. § 3604 and § 3605"
              intro={
                <>Covers physical and mental disability. This category has two failure modes: (1) language that excludes people with disabilities, and (2) language that uses disability as a marketing frame.</>
              }
              entries={DISABILITY_ENTRIES}
              closing={
                <>
                  <p style={proseStyle}>The disability category has more nuance than most. Factual descriptions of accessibility features (no steps, grab bars, roll-in shower) are affirmatively helpful and should be included when accurate. The failure mode is language that frames the property as being <em>for</em> or <em>not for</em> people with disabilities.</p>
                  <p style={{ ...proseStyle, marginBottom: 0 }}>The &ldquo;walking distance&rdquo; debate is worth flagging honestly. Federal enforcement has not consistently treated this phrase as a violation, but some Fair Housing training materials flag it. It&apos;s low-risk to swap to &ldquo;short distance&rdquo; or &ldquo;close to,&rdquo; which loses nothing meaningful.</p>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* ─────────────── FLORIDA-SPECIFIC — FOREST DARK ─────────────── */}
      <section id="florida" className="relative overflow-hidden bg-[#14271E] py-20 sm:py-24">
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
              <MapPin className="h-3 w-3" strokeWidth={2} />
              Central Florida
            </div>
            <h2 style={{ ...h2Style, color: C.creamWarm }}>Florida-specific: Orange County and Orlando additions</h2>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              Florida Statutes § 760.20-760.37 mirror the seven federal protected classes exactly. The state does not add new categories at the statutory level.
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              But Florida is a home-rule state, and municipalities can add local protections. In Central Florida specifically, two jurisdictions matter for anyone listing in the Orlando metro area.
            </p>

            <h3 style={{ ...h3Style, color: C.creamWarm, marginTop: "32px" }}>Orange County (Chapter 22 Human Rights)</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              Adds three protected classes beyond the federal and state minimum:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                <><strong style={{ color: C.gold }}>Age</strong></>,
                <><strong style={{ color: C.gold }}>Marital status</strong></>,
                <><strong style={{ color: C.gold }}>Sexual orientation</strong> (federal now covers this via HUD&apos;s sex-based interpretation, but the county ordinance predates and reinforces it)</>,
              ].map((item, i) => (
                <li key={i} style={{ paddingLeft: "20px", position: "relative", fontFamily: "var(--font-manrope, sans-serif)", fontSize: "16px", lineHeight: 1.7, color: "rgba(244,240,232,0.85)" }}>
                  <span style={{ position: "absolute", left: "4px", color: C.gold, fontWeight: 600 }}>•</span>
                  {item}
                </li>
              ))}
            </ul>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>City of Orlando (Chapter 57)</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              Adds two protected classes beyond federal and state:
            </p>

            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                <><strong style={{ color: C.gold }}>Sexual orientation</strong></>,
                <><strong style={{ color: C.gold }}>Marital status</strong></>,
              ].map((item, i) => (
                <li key={i} style={{ paddingLeft: "20px", position: "relative", fontFamily: "var(--font-manrope, sans-serif)", fontSize: "16px", lineHeight: 1.7, color: "rgba(244,240,232,0.85)" }}>
                  <span style={{ position: "absolute", left: "4px", color: C.gold, fontWeight: 600 }}>•</span>
                  {item}
                </li>
              ))}
            </ul>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              The following words and phrases carry Central Florida-specific risk beyond the federal reference above:
            </p>

            {/* Word list for Florida — light variant on dark bg */}
            <div style={{
              marginBottom: "24px",
              borderRadius: "12px",
              border: "1px solid rgba(184,153,104,0.25)",
              overflow: "hidden",
              background: "rgba(184,153,104,0.06)",
            }}>
              <div className="hidden md:grid" style={{
                gridTemplateColumns: "1.2fr 1.5fr 1.5fr",
                gap: "16px",
                padding: "14px 20px",
                background: "rgba(184,153,104,0.12)",
                borderBottom: "1px solid rgba(184,153,104,0.2)",
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: C.goldSoft,
              }}>
                <div>Word or phrase</div>
                <div>Why flagged in Central Florida</div>
                <div>What to write instead</div>
              </div>

              {FLORIDA_ENTRIES.map((entry, i) => (
                <div key={i} style={{
                  borderBottom: i < FLORIDA_ENTRIES.length - 1 ? "1px solid rgba(184,153,104,0.15)" : "none",
                  padding: "16px 20px",
                }}>
                  <div className="hidden md:grid" style={{
                    gridTemplateColumns: "1.2fr 1.5fr 1.5fr",
                    gap: "16px",
                    alignItems: "start",
                  }}>
                    <div style={{
                      fontFamily: "var(--font-manrope, sans-serif)",
                      fontSize: "15px",
                      fontWeight: 500,
                      color: C.creamWarm,
                    }}>
                      {entry.word}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-manrope, sans-serif)",
                      fontSize: "14.5px",
                      lineHeight: 1.6,
                      color: "rgba(244,240,232,0.75)",
                    }}>
                      {entry.why}
                    </div>
                    <div style={{
                      fontFamily: "var(--font-manrope, sans-serif)",
                      fontSize: "14.5px",
                      lineHeight: 1.6,
                      color: "rgba(244,240,232,0.9)",
                    }}>
                      {entry.instead}
                    </div>
                  </div>
                  <div className="md:hidden" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <div style={{
                      fontFamily: "var(--font-manrope, sans-serif)",
                      fontSize: "16px",
                      fontWeight: 600,
                      color: C.creamWarm,
                    }}>
                      {entry.word}
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-manrope, sans-serif)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#E0A589", marginBottom: "4px" }}>Why flagged</div>
                      <div style={{ fontFamily: "var(--font-manrope, sans-serif)", fontSize: "14px", lineHeight: 1.55, color: "rgba(244,240,232,0.75)" }}>{entry.why}</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "var(--font-manrope, sans-serif)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "#8FB89E", marginBottom: "4px" }}>Write instead</div>
                      <div style={{ fontFamily: "var(--font-manrope, sans-serif)", fontSize: "14px", lineHeight: 1.55, color: "rgba(244,240,232,0.9)" }}>{entry.instead}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h3 style={{ ...h3Style, color: C.creamWarm }}>The 2025 HB 1417 complication</h3>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              Florida HB 1417 (Live Local Act) preempted many local tenant-protection ordinances in 2025, including Orange County&apos;s source-of-income protection under the Tenant&apos;s Bill of Rights. The underlying Chapter 22 Human Rights protections (age, marital status, sexual orientation) remain in effect for housing discrimination purposes.
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              For listing-content purposes, treat Orange County&apos;s added protected classes as active. The HB 1417 preemption affected tenant-side procedural protections, not the substantive fair-housing protected class list at the county human-rights level.
            </p>

            <p style={{ ...proseStyle, color: "rgba(244,240,232,0.85)" }}>
              If in doubt: ask your broker&apos;s compliance officer. Central Florida&apos;s local ordinance landscape has been actively litigated over the past 18 months, and specifics can shift.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── OTHER STATES — CREAM ─────────────── */}
      <section id="other-states" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <SectionLabel>Beyond Florida</SectionLabel>
            <h2 style={h2Style}>State-additional protections beyond Florida</h2>

            <p style={proseStyle}>
              Roughly 22 states plus the District of Columbia add protected classes beyond the federal seven. The most common state additions (as of 2026):
            </p>

            <BulletList items={[
              <><strong>Source of income</strong> (California, New York, Washington, Massachusetts, Minnesota, Oregon, Connecticut, New Jersey, others). Words that flag: &ldquo;no Section 8,&rdquo; &ldquo;no vouchers,&rdquo; &ldquo;verified income only&rdquo;</>,
              <><strong>Age</strong> (California, New York, Michigan, others). Words that flag: &ldquo;great for young professionals,&rdquo; &ldquo;mature buyers welcome&rdquo;</>,
              <><strong>Marital status</strong> (California, Illinois, Michigan, others). Words that flag: &ldquo;great for a couple,&rdquo; &ldquo;perfect for newlyweds&rdquo;</>,
              <><strong>Sexual orientation</strong> (California, New York, DC, others — plus HUD&apos;s federal interpretation)</>,
              <><strong>Gender identity</strong> (California, New York, DC, others — plus HUD&apos;s federal interpretation)</>,
              <><strong>Veteran or military status</strong> (California, Illinois, others). Words that flag: &ldquo;no military,&rdquo; &ldquo;civilian preferred&rdquo;</>,
              <><strong>Ancestry</strong> (California, Illinois, others)</>,
              <><strong>Genetic information</strong> (California, others)</>,
              <><strong>Immigration status</strong> (California, others). Words that flag: &ldquo;citizens only,&rdquo; &ldquo;legal residents only&rdquo;</>,
            ]} />

            <p style={proseStyle}>
              The states with the broadest state-additional protected classes: California (12+ additional classes), New York (10+), Washington (8+), Massachusetts (7+), and DC (12+).
            </p>

            <p style={proseStyle}>
              <strong>Practical implication:</strong> if you list outside Florida, the federal 7-class minimum is not your ceiling. State-additional protections can change what&apos;s a violation.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── CONTEXT-DEPENDENT — EARTH ─────────────── */}
      <section id="context" className="bg-[#EFEAE0] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#9A7E50]">
              <AlertTriangle className="h-3 w-3" strokeWidth={2} />
              The gray area
            </div>
            <h2 style={h2Style}>Context-dependent words</h2>

            <p style={proseStyle}>
              A category that matters more than the direct-violation list because it&apos;s where most flagged listings actually get caught.
            </p>

            <p style={proseStyle}>
              These words are not blanket-banned. They are situationally risky, and their risk depends on context. When they appear alongside other patterns (buyer-type framing, demographic proxies, neighborhood characterizations), they raise complaint risk substantially.
            </p>

            <ContextTable entries={CONTEXT_ENTRIES} />

            <p style={proseStyle}>
              The strongest single fix for context-dependent risk: <strong>describe the property, never the buyer.</strong> &ldquo;Great for young professionals&rdquo; fails. &ldquo;Two-bedroom condo with covered parking and downtown Orlando access&rdquo; succeeds and communicates the same information without the demographic framing.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────── SAFE WORDS — CREAM ─────────────── */}
      <section id="safe" className="border-t border-[rgba(20,39,30,0.10)] bg-[#F4F0E8] py-16 sm:py-20">
        <div className={CONTENT}>
          <div className={READING}>
            <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#5C8A6E]">
              <CheckCircle2 className="h-3 w-3" strokeWidth={2} />
              Actually safe
            </div>
            <h2 style={h2Style}>Words that are actually safe</h2>

            <p style={proseStyle}>
              Many agents over-correct. This section is for the words that get worried about but don&apos;t need to be avoided.
            </p>

            <SafeTable entries={SAFE_ENTRIES} />

            <p style={proseStyle}>
              The pattern for safe words: they describe the property, its layout, its features, or objective facts. They do not describe or imply who should live there.
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
                  q: "What are the Fair Housing protected classes?",
                  a: "Federally, seven: race, color, religion, national origin, sex (including sexual orientation and gender identity per 2021 HUD interpretation), familial status, and disability. States and municipalities add more — Orange County, Florida adds age, marital status, and sexual orientation. California adds 12+ additional classes. Check your local jurisdiction; federal is the minimum, not the ceiling.",
                },
                {
                  q: "Is 'master bedroom' a Fair Housing violation?",
                  a: "No. 'Master bedroom' is not a Fair Housing violation under federal law or Florida state law. Some MLSs and industry style guides prefer 'primary bedroom' for reasons unrelated to Fair Housing enforcement. Either term is legally safe.",
                },
                {
                  q: "Can I mention schools in a listing description?",
                  a: "Naming the specific school district factually is generally safe. Qualitative claims ('great schools,' 'top-rated,' 'excellent schools') are where risk starts because school quality often functions as a demographic proxy. Enforcement has increased on qualitative school claims specifically. Safest practice: name the district, skip the adjective.",
                },
                {
                  q: "Is 'walking distance' safe to use?",
                  a: "Under federal enforcement, generally yes. Some Fair Housing training materials flag it as potentially excluding mobility-limited buyers, and enforcement has been inconsistent. Low-risk alternative: 'short distance to' or 'close to.' Loses nothing meaningful and eliminates the debate.",
                },
                {
                  q: "What's the penalty for a Fair Housing violation in a listing?",
                  a: "Per HUD's 24 CFR § 180.671 penalty schedule (March 2024 adjustment): up to $25,597 for a first offense, up to $63,993 for a second offense within five years, and up to $127,988 for third and subsequent offenses within seven years. Attorney fees, damages, and equitable remedies can be added. State agencies may impose additional penalties.",
                },
                {
                  q: "Do state Fair Housing laws add more protected classes?",
                  a: "About 22 states plus DC add protected classes beyond the federal seven. Florida statute does not, but Florida is a home-rule state — Orange County adds three (age, marital status, sexual orientation) and the City of Orlando adds two (sexual orientation, marital status). Other high-addition states include California (12+ additional), New York (10+), Washington (8+), Massachusetts (7+), and DC (12+).",
                },
                {
                  q: "Can I use 'family room' or 'family-friendly'?",
                  a: "'Family room' is safe — it's a descriptive room name. 'Family-friendly' is not safe — it's a familial-status preference and one of the most commonly cited violations. The distinction is whether the word describes a physical space or a preferred buyer type.",
                },
                {
                  q: "How do I audit a listing description for Fair Housing compliance?",
                  a: "Three-step process. First, read the description once and mark every adjective that describes the buyer or the buyer's likely activities ('perfect for,' 'great for,' 'ideal for'). These are the highest-risk spots. Second, check every location or amenity descriptor for demographic proxies (school quality, religious institutions, 'traditional,' 'established'). Third, run the description through the Metes Listing Description Checker, which flags known Fair Housing patterns automatically. Human review catches context; automated audit catches consistency. Both matter.",
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
              Sources: Federal Fair Housing Act, 42 U.S.C. § 3604-3605; HUD 24 CFR § 180.671 penalty schedule (March 2024 adjustment); Florida Statutes §§ 760.20-760.37; Orange County, Florida Code of Ordinances Chapter 22 (Human Rights); City of Orlando Code of Ordinances Chapter 57; Florida Commission on Human Relations (fchr.myflorida.com); Florida Realtors &ldquo;Understanding Fair Housing in Florida&rdquo; (October 2025); Florida HB 1417 (2025) and related preemption analysis; National Apartment Association state-by-state Fair Housing protected class resources; HUD Executive Order 13988 (2021) sex-based interpretation. This reference is informational and current as of July 15, 2026. Not legal advice. Consult your broker&apos;s compliance officer or Fair Housing counsel for jurisdiction-specific questions.
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
          <div style={{ maxWidth: "760px" }}>
            <SectionLabel light>The through-line</SectionLabel>
            <h2 className="mb-5 font-manrope text-[clamp(28px,4vw,42px)] font-medium leading-[1.1] tracking-[0.005em] text-[#F4F0E8]">
              Describe the property. <em className="not-italic text-[#B89968]">Never the buyer.</em>
            </h2>
            <p className="mb-8 max-w-[600px] text-[clamp(15px,1.3vw,17px)] leading-[1.6] text-[rgba(244,240,232,0.78)]">
              Every violation on this reference collapses to some version of that failure. Every safe alternative comes from that discipline. For deeper context see the <Link href="/learn/fair-housing-language-mls-listings" style={{ color: C.goldSoft, textDecoration: "underline", textUnderlineOffset: "3px" }}>Fair Housing language reference</Link> and <Link href="/learn/ai-listing-description-tells" style={{ color: C.goldSoft, textDecoration: "underline", textUnderlineOffset: "3px" }}>why AI listing descriptions default to flagged language</Link>.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/tools/listing-description-checker"
                className="inline-flex items-center gap-2 rounded-[9px] bg-[#B89968] px-7 py-3.5 font-manrope text-[14px] font-medium text-[#14271E] no-underline transition-colors hover:bg-[#9A7E50] hover:text-[#F4F0E8]"
              >
                Audit a draft free
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
import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, BookOpen, AlertTriangle, CheckCircle2 } from "lucide-react";

// ─────────────────────────────────────────────────────────────────
// SEO metadata
// ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Fair Housing Language in MLS Listings: 2026 Reference | Metes",
  description:
    "The complete 2026 reference for Fair Housing-compliant MLS listing language. 120+ phrases mapped to compliant alternatives. Reflects the April 2026 HUD update.",
  keywords: [
    "fair housing language mls",
    "fair housing words to avoid",
    "fair housing real estate advertising",
    "mls listing fair housing compliance",
    "fair housing prohibited words real estate",
    "fair housing act section 804",
    "HUD advertising guidelines",
    "fair housing 2026",
  ],
  alternates: {
    canonical: "https://www.metes.app/learn/fair-housing-language-mls-listings",
  },
  openGraph: {
    title: "Fair Housing Language in MLS Listings: 2026 Reference",
    description:
      "The complete 2026 reference for Fair Housing-compliant MLS listing language. 120+ phrases mapped to compliant alternatives.",
    url: "https://www.metes.app/learn/fair-housing-language-mls-listings",
    siteName: "Metes",
    type: "article",
    images: [
      {
        url: "https://www.metes.app/og/fair-housing-language-mls-listings.png",
        width: 1200,
        height: 630,
        alt: "Fair Housing Language in MLS Listings: 2026 Reference",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fair Housing Language in MLS Listings: 2026 Reference",
    description:
      "120+ phrases mapped to compliant alternatives. Reflects April 2026 HUD update.",
    images: ["https://www.metes.app/og/fair-housing-language-mls-listings.png"],
  },
  robots: { index: true, follow: true },
};

// ─────────────────────────────────────────────────────────────────
// JSON-LD — FAQPage + Article
// ─────────────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can a single word in my MLS listing really cause a Fair Housing complaint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HUD prosecutes language that signals preference based on protected class, regardless of whether the agent intended discrimination. The first-offense civil penalty is $25,597 — not a cost most agents can absorb. A listing with multiple flagged phrases can compound penalties beyond the per-violation cap.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between Fair Housing rules and the NAR Code of Ethics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fair Housing rules are federal law, enforced by HUD. Penalties are civil fines, attorney fees, and damages. The NAR Code of Ethics is private association regulation, enforced by local Realtor boards. Penalties can include fines, mandatory education, suspension, or expulsion from the association. Both apply to Realtor members; non-Realtor agents are still bound by Fair Housing law.",
      },
    },
    {
      "@type": "Question",
      name: "What changed about Fair Housing language guidance in April 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HUD issued a Dear Colleague letter on April 24, 2026, formally clarifying that real estate agents do not violate the Fair Housing Act by discussing neighborhood crime rates or school quality with prospective buyers — provided the information is shared consistently and without discriminatory intent. This reversed years of industry caution. Sharing factual data is now explicitly permitted. Using subjective descriptors like 'safe neighborhood' remains risky.",
      },
    },
    {
      "@type": "Question",
      name: "Can I discuss school quality and crime rates with my clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, per HUD's April 2026 guidance. The information must be objective, verifiable, and shared consistently with all clients. Citing GreatSchools ratings, district report cards, or publicly available crime statistics is acceptable. What's not permitted: using school or crime references to direct buyers toward or away from neighborhoods based on protected-class characteristics, which is steering and still illegal.",
      },
    },
    {
      "@type": "Question",
      name: "Is 'walking distance' really a Fair Housing violation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, as a general descriptor. The 1998 enforcement against Maryland real estate companies prohibited 'walking distance to the subway' as discriminatory against people with mobility impairments. The compliant alternative is specific distance (0.3 miles) or factual proximity (two blocks) that doesn't imply ability.",
      },
    },
    {
      "@type": "Question",
      name: "Can I write 'great for families' if the property genuinely is family-oriented?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Fair Housing Act prohibits language indicating preference based on familial status — even when factually descriptive of likely buyers. The compliant approach is to describe the property feature instead: fenced yard, three-bedroom layout, two-car garage. The buyer determines fit; the listing describes the property.",
      },
    },
    {
      "@type": "Question",
      name: "Does my broker's review catch Fair Housing violations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Often, but not always, and not in time. Most broker reviews happen after a listing is written and submitted. By then, the agent has already invested time in copy that needs rewriting. Automated checking before submission catches issues during the drafting phase, when fixes are cheap.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I get a Fair Housing complaint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A complainant has one year to file with HUD or two years in federal court. HUD investigates automatically; the agent is notified and asked to respond. If HUD finds reasonable cause, the case proceeds to an Administrative Law Judge or, if either party elects, to federal court. Penalties at the ALJ level start at $25,597 for first offenses; DOJ cases can reach $150,000. Compensatory damages, punitive damages, and attorney fees may also be awarded to the complainant.",
      },
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fair Housing Language in MLS Listings: 2026 Reference",
  description:
    "The complete 2026 reference for Fair Housing-compliant MLS listing language. 120+ phrases mapped to compliant alternatives. Reflects the April 2026 HUD Dear Colleague letter on neighborhood crime and school data.",
  image: "https://www.metes.app/og/fair-housing-language-mls-listings.png",
  datePublished: "2026-06-10",
  dateModified: "2026-06-10",
  author: {
    "@type": "Organization",
    name: "Metes Editorial",
    url: "https://www.metes.app",
  },
  publisher: {
    "@type": "Organization",
    name: "Metes",
    url: "https://www.metes.app",
    logo: {
      "@type": "ImageObject",
      url: "https://www.metes.app/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.metes.app/learn/fair-housing-language-mls-listings",
  },
  keywords:
    "fair housing, MLS listing, real estate advertising, HUD, Section 804(c), familial status, fair housing words to avoid",
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
  borderDark: "rgba(244,240,232,0.12)",
  creamText: "rgba(244,240,232,0.78)",
  creamMuted: "rgba(244,240,232,0.55)",
  warn: "#C97B5C",
  pass: "#5C8A6E",
};

const CONTENT = "mx-auto w-full max-w-[1280px] px-6 lg:px-12";
const READING = "mx-auto w-full max-w-[720px]";

// ─────────────────────────────────────────────────────────────────
// Phrase reference table data
// ─────────────────────────────────────────────────────────────────

type TierRow = { phrase: string; tier: 1 | 2 | 3; pc: string; alt: string };

const TIER_1_ROWS: TierRow[] = [
  { phrase: "Family-friendly", tier: 1, pc: "Familial status", alt: "Property feature description" },
  { phrase: "Great for families", tier: 1, pc: "Familial status", alt: '"Three-bedroom layout"' },
  { phrase: "Perfect for families", tier: 1, pc: "Familial status", alt: "Specific feature description" },
  { phrase: "Ideal for young families", tier: 1, pc: "Familial status", alt: "Specific feature description" },
  { phrase: "Family home", tier: 1, pc: "Familial status", alt: "Number of bedrooms" },
  { phrase: "Family-oriented community", tier: 1, pc: "Familial status", alt: "Named neighborhood" },
  { phrase: "Family neighborhood", tier: 1, pc: "Familial status", alt: "Named neighborhood" },
  { phrase: "Perfect for kids", tier: 1, pc: "Familial status", alt: '"Fenced yard"' },
  { phrase: "Great for children", tier: 1, pc: "Familial status", alt: "Property feature" },
  { phrase: "Empty nesters", tier: 1, pc: "Familial status", alt: "Feature description" },
  { phrase: "Perfect for empty nesters", tier: 1, pc: "Familial status", alt: '"Single-story design"' },
  { phrase: "Newlywed home", tier: 1, pc: "Familial status", alt: "Feature description" },
  { phrase: "Starter home", tier: 1, pc: "Familial status", alt: "Price/size description" },
  { phrase: "Mature couple preferred", tier: 1, pc: "Familial status", alt: "Feature description" },
  { phrase: "Adult living", tier: 1, pc: "Familial status", alt: "HOPA designation if applicable" },
  { phrase: "Adults only", tier: 1, pc: "Familial status", alt: "HOPA designation if applicable" },
  { phrase: "No children", tier: 1, pc: "Familial status", alt: "Remove" },
  { phrase: "Children welcome", tier: 1, pc: "Familial status", alt: "Remove" },
  { phrase: "Bachelor pad", tier: 1, pc: "Sex", alt: '"Private den" or "studio"' },
  { phrase: "Bachelorette pad", tier: 1, pc: "Sex", alt: '"Studio" or feature description' },
  { phrase: "Single professional", tier: 1, pc: "Familial status, sex", alt: "Feature description" },
  { phrase: "White family home", tier: 1, pc: "Race", alt: "Remove" },
  { phrase: "Hispanic neighborhood", tier: 1, pc: "Race", alt: "Named neighborhood" },
  { phrase: "Polish neighborhood", tier: 1, pc: "National origin", alt: "Named neighborhood" },
  { phrase: "Italian community", tier: 1, pc: "National origin", alt: "Named neighborhood" },
  { phrase: "Irish home", tier: 1, pc: "National origin", alt: "Remove" },
  { phrase: "Chinese-friendly", tier: 1, pc: "National origin", alt: "Remove" },
  { phrase: "Exclusive neighborhood", tier: 1, pc: "Race (coded)", alt: "Named neighborhood" },
  { phrase: "Private community", tier: 1, pc: "Multiple", alt: "Named development" },
  { phrase: "Integrated", tier: 1, pc: "Race (HUD catch word)", alt: "Remove" },
  { phrase: "Restricted", tier: 1, pc: "Multiple (HUD catch word)", alt: "Remove" },
  { phrase: "Traditional", tier: 1, pc: "Race (HUD catch word)", alt: '"Established" or year built' },
  { phrase: "Membership approval", tier: 1, pc: "Multiple (HUD catch word)", alt: "Remove" },
  { phrase: "Board approval", tier: 1, pc: "Multiple (HUD catch word)", alt: "HOA disclosure (legal docs only)" },
  { phrase: "Heritage neighborhood", tier: 1, pc: "National origin (coded)", alt: "Named neighborhood" },
  { phrase: "No Section 8", tier: 1, pc: "Source of income / race proxy", alt: "Remove" },
  { phrase: "Christian community", tier: 1, pc: "Religion", alt: "Remove" },
  { phrase: "Jewish neighborhood", tier: 1, pc: "Religion", alt: "Named neighborhood" },
  { phrase: "Muslim-friendly", tier: 1, pc: "Religion", alt: "Remove" },
  { phrase: "Catholic home", tier: 1, pc: "Religion", alt: "Remove" },
  { phrase: "Walking distance", tier: 1, pc: "Disability", alt: 'Specific distance ("0.3 miles")' },
  { phrase: "Short walk to", tier: 1, pc: "Disability", alt: "Specific distance" },
  { phrase: "Stroll to", tier: 1, pc: "Disability", alt: "Specific distance" },
  { phrase: "Active lifestyle community", tier: 1, pc: "Disability, age", alt: "HOPA designation if applicable" },
  { phrase: "Great for active buyers", tier: 1, pc: "Disability", alt: "Feature description" },
  { phrase: "Able-bodied", tier: 1, pc: "Disability", alt: "Remove" },
  { phrase: "No wheelchairs", tier: 1, pc: "Disability", alt: "Remove" },
  { phrase: "Stairs throughout", tier: 1, pc: "Disability", alt: '"Two-story" or "multi-level"' },
  { phrase: "Man cave", tier: 1, pc: "Sex (when primary descriptor)", alt: '"Finished basement"' },
  { phrase: "She-shed", tier: 1, pc: "Sex (when primary descriptor)", alt: '"Garden shed"' },
  { phrase: "Perfect for single professional women", tier: 1, pc: "Sex", alt: "Feature description" },
  { phrase: "Couples only", tier: 1, pc: "Familial status, sex", alt: "Remove" },
  { phrase: "Felons need not apply", tier: 1, pc: "Multiple (varies)", alt: "Remove" },
  { phrase: "Crime-free area", tier: 1, pc: "Race (coded)", alt: "Specific crime data citation" },
];

const TIER_2_ROWS: TierRow[] = [
  { phrase: "Quiet neighborhood", tier: 2, pc: "Race (coded)", alt: '"Quiet street"' },
  { phrase: "Up-and-coming", tier: 2, pc: "Race (gentrification coded)", alt: "Remove or describe specifics" },
  { phrase: "Safe neighborhood", tier: 2, pc: "Race (coded)", alt: "Factual data citation" },
  { phrase: "Friendly neighbors", tier: 2, pc: "Multiple", alt: "Remove" },
  { phrase: "Tight-knit community", tier: 2, pc: "National origin (coded)", alt: "Named neighborhood" },
  { phrase: "Welcoming neighborhood", tier: 2, pc: "Multiple", alt: "Remove" },
  { phrase: "Vibrant community", tier: 2, pc: "Multiple (context)", alt: "Specific amenities" },
  { phrase: "Up-scale community", tier: 2, pc: "Race (coded)", alt: "Price tier or feature" },
  { phrase: "Walk to bus stop", tier: 2, pc: "Disability (context)", alt: "Specific distance" },
  { phrase: "Easy access", tier: 2, pc: "Disability (context)", alt: "Specific feature" },
  { phrase: "Multi-level", tier: 2, pc: "Disability (usually safe)", alt: '"Two-story"' },
  { phrase: "Mother-in-law suite", tier: 2, pc: "Familial status (usually safe)", alt: '"Accessory dwelling" or "in-law suite"' },
  { phrase: "Bachelor apartment", tier: 2, pc: "Sex (usually safe as type)", alt: '"Studio apartment"' },
  { phrase: "Near churches", tier: 2, pc: "Religion (context)", alt: "Specific named institution" },
  { phrase: "Active adult community", tier: 2, pc: "Age", alt: "HOPA verification required" },
  { phrase: "Family room", tier: 2, pc: "Familial status (room label safe)", alt: '"Living room" or "den"' },
  { phrase: "Near schools", tier: 2, pc: "Familial status (usually safe)", alt: "Named school" },
];

const TIER_3_ROWS: TierRow[] = [
  { phrase: "Top-rated schools", tier: 3, pc: "None (post-April 2026)", alt: "Specific rating" },
  { phrase: "GreatSchools rating", tier: 3, pc: "None", alt: "Specific rating" },
  { phrase: "School district [name]", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Within [name] School District", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Crime statistics available at [source]", tier: 3, pc: "None", alt: "Same" },
  { phrase: "0.3 miles from [park]", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Two blocks from [business]", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Adjacent to [landmark]", tier: 3, pc: "None", alt: "Same" },
  { phrase: "12-minute drive to [airport]", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Highland neighborhood", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Whole Foods on 32nd", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Edison Elementary", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Denver Public Schools", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Fenced yard", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Three-bedroom layout", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Quartz counters", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Hardwood floors", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Vaulted ceilings", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Single-story design", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Open-concept", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Three-car garage", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Walk-in closet", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Covered patio", tier: 3, pc: "None", alt: "Same" },
  { phrase: "In-ground pool", tier: 3, pc: "None", alt: "Same" },
  { phrase: "New HVAC", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Tankless water heater", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Solar panels", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Smart home wiring", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Newly renovated", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Original character preserved", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Year built: [year]", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Renovated in [year]", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Move-in ready", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Master bedroom", tier: 3, pc: "None (industry convention shift)", alt: '"Primary bedroom" (preferred)' },
  { phrase: "Primary bedroom", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Owner's suite", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Den", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Office", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Garden shed", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Finished basement", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Two-story home", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Established neighborhood", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Historic district", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Desirable neighborhood", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Quiet street", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Mother-in-law apartment", tier: 3, pc: "None", alt: '"Accessory dwelling unit"' },
  { phrase: "First-time buyer", tier: 3, pc: "None", alt: "Same" },
  { phrase: "Number of bedrooms", tier: 3, pc: "None", alt: "Same" },
  { phrase: "No smoking", tier: 3, pc: "None (lease term)", alt: "Same" },
  { phrase: "Reference required", tier: 3, pc: "None (rental)", alt: "Same" },
  { phrase: "Income verification required", tier: 3, pc: "None (rental)", alt: "Same" },
  { phrase: "Credit check required", tier: 3, pc: "None (rental)", alt: "Same" },
];

// ─────────────────────────────────────────────────────────────────
// Shared style atoms
// ─────────────────────────────────────────────────────────────────

const h2Style = {
  fontFamily: "var(--font-manrope, sans-serif)",
  fontSize: "clamp(24px, 3vw, 32px)",
  fontWeight: 500 as const,
  lineHeight: 1.15,
  letterSpacing: "0.005em",
  color: C.ink,
  marginTop: "56px",
  marginBottom: "20px",
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

const sectionLabelStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  fontFamily: "var(--font-jetbrains, monospace)",
  fontSize: "11px",
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: C.goldDeep,
};

// ─────────────────────────────────────────────────────────────────
// Inline CTA component
// ─────────────────────────────────────────────────────────────────

function InlineCTA() {
  return (
    <div style={{
      background: C.bgCard,
      border: `1px solid ${C.border}`,
      borderRadius: "12px",
      padding: "24px 28px",
      margin: "32px 0",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}>
      <p style={{ ...proseStyle, margin: 0, fontSize: "15px" }}>
        Run your draft through the free Fair Housing Compliance Checker — scans against the full 120+ phrase reference and returns flagged phrases with suggested rewrites. Three scans per session are free.
      </p>
      <Link
        href="/tools/fha-compliance-checker"
        style={{
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
          alignSelf: "flex-start",
        }}
      >
        Try the Fair Housing Checker
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Bulleted list — gold bullets, matches feature page convention
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
// Phrase table component
// ─────────────────────────────────────────────────────────────────

function PhraseTableSection({
  title,
  tierNum,
  tierColor,
  rows,
}: {
  title: string;
  tierNum: 1 | 2 | 3;
  tierColor: string;
  rows: TierRow[];
}) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "12px",
        paddingBottom: "8px",
        borderBottom: `1px solid ${C.border}`,
      }}>
        <span style={{
          background: tierColor,
          color: C.creamWarm,
          fontFamily: "var(--font-jetbrains, monospace)",
          fontSize: "11px",
          letterSpacing: "0.06em",
          padding: "3px 10px",
          borderRadius: "4px",
        }}>
          TIER {tierNum}
        </span>
        <span style={{
          fontFamily: "var(--font-manrope, sans-serif)",
          fontSize: "16px",
          fontWeight: 600,
          color: C.ink,
        }}>
          {title}
        </span>
        <span style={{
          fontFamily: "var(--font-jetbrains, monospace)",
          fontSize: "11px",
          color: C.muted,
          marginLeft: "auto",
        }}>
          {rows.length} entries
        </span>
      </div>

      <div style={{ overflowX: "auto" }}>
        <table style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "13.5px",
          fontFamily: "var(--font-manrope, sans-serif)",
        }}>
          <thead>
            <tr style={{ background: C.bgCard }}>
              <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: `1px solid ${C.border}`, fontWeight: 600, color: C.ink, width: "30%" }}>
                Phrase
              </th>
              <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: `1px solid ${C.border}`, fontWeight: 600, color: C.ink, width: "30%" }}>
                Protected Class
              </th>
              <th style={{ textAlign: "left", padding: "10px 12px", borderBottom: `1px solid ${C.border}`, fontWeight: 600, color: C.ink, width: "40%" }}>
                Compliant Alternative
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} style={{
                background: i % 2 === 0 ? "transparent" : "rgba(20,39,30,0.02)",
              }}>
                <td style={{ padding: "10px 12px", borderBottom: `1px solid ${C.border}`, color: C.ink, fontWeight: 500 }}>
                  {row.phrase}
                </td>
                <td style={{ padding: "10px 12px", borderBottom: `1px solid ${C.border}`, color: C.inkSoft }}>
                  {row.pc}
                </td>
                <td style={{ padding: "10px 12px", borderBottom: `1px solid ${C.border}`, color: C.inkSoft }}>
                  {row.alt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────

export default function FairHousingLanguageReferencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="min-h-screen bg-[#EFEAE0]">
        <Header />

        {/* ── HERO / TLDR ── */}
        <section style={{ background: C.creamWarm, padding: "64px 0 48px", borderBottom: `1px solid ${C.border}` }}>
          <div className={CONTENT}>
            <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
              <div style={{ ...sectionLabelStyle, marginBottom: "20px" }}>
                <BookOpen className="h-3 w-3" strokeWidth={2} />
                FAIR HOUSING REFERENCE
              </div>

              <h1 style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 500,
                lineHeight: 1.1,
                letterSpacing: "0.005em",
                color: C.ink,
                marginBottom: "20px",
              }}>
                Fair Housing language in MLS listings: <em style={{ fontStyle: "normal", color: C.goldDeep }}>2026 reference</em>
              </h1>

              <p style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "clamp(15px, 1.3vw, 17px)",
                lineHeight: 1.6,
                color: C.inkSoft,
                marginBottom: "20px",
                maxWidth: "680px",
                margin: "0 auto 20px",
              }}>
                The complete operational reference. The three-tier HUD framework, the April 2026 update on neighborhood crime and school data, and 122 specific phrases mapped to compliant alternatives.
              </p>

              <p style={{
                fontFamily: "var(--font-jetbrains, monospace)",
                fontSize: "12px",
                letterSpacing: "0.04em",
                color: C.muted,
                margin: 0,
              }}>
                Last updated: June 10, 2026 · ~25 minute read
              </p>
            </div>
          </div>
        </section>

        {/* ── TLDR & TABLE OF CONTENTS ── */}
        <section style={{ background: C.cream, padding: "48px 0" }}>
          <div className={CONTENT}>
            <div className={READING}>
              <div style={{
                background: C.bgCard,
                border: `1px solid ${C.border}`,
                borderRadius: "12px",
                padding: "28px",
                marginBottom: "32px",
              }}>
                <div style={{ ...sectionLabelStyle, marginBottom: "12px" }}>
                  TLDR
                </div>
                <p style={{ ...proseStyle, marginBottom: "16px" }}>
                  Fair Housing language in MLS listings falls into three tiers: language that directly references protected classes or uses HUD-documented coded equivalents (clearly prohibited), language that depends on context (risky), and language that describes the property itself (generally acceptable).
                </p>
                <p style={{ ...proseStyle, marginBottom: "16px" }}>
                  Civil penalties start at <strong>$25,597 for a first offense</strong> and reach <strong>$115,054 for repeat violations within seven years</strong>. In April 2026, HUD issued formal guidance clarifying that agents do not violate the Fair Housing Act by discussing neighborhood crime rates or school quality with prospective buyers — a reversal of years of industry caution.
                </p>
                <p style={{ ...proseStyle, margin: 0 }}>
                  This page is the complete operational reference: the three-tier framework, the rule changes, 122 specific phrases mapped to compliant alternatives, and the questions agents actually ask.
                </p>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <div style={{ ...sectionLabelStyle, marginBottom: "12px" }}>
                  Jump to
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {[
                    { id: "april-2026-update", label: "What changed in April 2026" },
                    { id: "why-this-matters", label: "Why this matters" },
                    { id: "framework", label: "The three-tier framework" },
                    { id: "tier-1", label: "Tier 1: Clearly prohibited" },
                    { id: "tier-2", label: "Tier 2: Context-dependent" },
                    { id: "tier-3", label: "Tier 3: Generally acceptable" },
                    { id: "phrase-table", label: "Complete phrase reference (122 entries)" },
                    { id: "checking", label: "How to check your listings" },
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
          </div>
        </section>

        {/* ── APRIL 2026 UPDATE — featured callout ── */}
        <section id="april-2026-update" style={{ background: C.creamWarm, padding: "64px 0", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div className={CONTENT}>
            <div className={READING}>
              <div style={{ ...sectionLabelStyle, marginBottom: "16px" }}>
                <span style={{ display: "inline-block", height: "1px", width: "18px", background: C.goldDeep }} />
                April 2026 update
              </div>

              <h2 style={{ ...h2Style, marginTop: 0 }}>
                What changed in April 2026
              </h2>

              <p style={proseStyle}>
                For most of the last five years, real estate agents were trained to avoid discussing neighborhood crime statistics and school quality with prospective buyers. The reasoning was Fair Housing concerns. Major listing platforms — Realtor.com, Redfin, Trulia — removed crime data from their public-facing listings starting in 2021. Brokerage training materials told agents to redirect questions about neighborhood safety toward neutral factual answers and to avoid school commentary entirely.
              </p>

              <p style={proseStyle}>
                On <strong>April 24, 2026</strong>, HUD Assistant Secretary for Fair Housing and Equal Opportunity Craig Trainor sent a Dear Colleague letter formally reversing that posture. The letter states directly:
              </p>

              <blockquote style={{
                margin: "24px 0",
                padding: "20px 24px",
                borderLeft: `3px solid ${C.gold}`,
                background: C.bgCard,
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "15px",
                fontStyle: "italic",
                color: C.ink,
                lineHeight: 1.6,
              }}>
                &ldquo;Real estate agents and brokers do not violate the Fair Housing Act merely by discussing with prospective homebuyers or renters the prevalence of crime or the quality of schools in neighborhoods.&rdquo;
              </blockquote>

              <p style={proseStyle}>
                The letter applies to all HUD-funded fair housing organizations and the real estate professionals they regulate. HUD also instructed Fair Housing Assistance Programs (FHAPs) not to issue discrimination findings, and Fair Housing Initiatives Programs (FHIPs) not to use federal funds, to pursue complaints based solely on agents providing this information.
              </p>

              <h3 style={h3Style}>What this changes operationally</h3>
              <BulletList items={[
                "Discussing factual, publicly available crime statistics with a buyer is acceptable",
                "Sharing school quality ratings (GreatSchools, state assessment data, district performance reports) is acceptable",
                "Answering direct questions about neighborhood safety with verifiable data is acceptable",
                "The information must be shared consistently across all clients — not selectively offered based on perceived demographics",
              ]} />

              <h3 style={h3Style}>What this doesn&apos;t change</h3>
              <BulletList items={[
                "Intentional steering remains illegal. Directing buyers toward or away from neighborhoods based on protected-class characteristics is still a Fair Housing violation.",
                <>Subjective characterizations like &ldquo;safe neighborhood&rdquo; or &ldquo;good area&rdquo; remain coded language and are still risky in advertising.</>,
                "Section 804(c) of the Fair Housing Act still prohibits advertising language that indicates preference based on race, color, religion, sex, familial status, disability, or national origin.",
              ]} />

              <p style={proseStyle}>
                The distinction is between sharing factual data (now explicitly permitted) and using descriptive language that implies preference (still prohibited).
              </p>

              <p style={proseStyle}>
                This update matters because most existing Fair Housing reference content — including content most agents were trained on — predates it. The rules have shifted. The rest of this reference reflects the current standard.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHY THIS MATTERS ── */}
        <section id="why-this-matters" style={{ background: C.cream, padding: "64px 0" }}>
          <div className={CONTENT}>
            <div className={READING}>
              <div style={{ ...sectionLabelStyle, marginBottom: "16px" }}>
                <span style={{ display: "inline-block", height: "1px", width: "18px", background: C.goldDeep }} />
                The stakes
              </div>

              <h2 style={{ ...h2Style, marginTop: 0 }}>Why this matters</h2>

              <p style={proseStyle}>
                Fair Housing violations are the most common form of complaint filed with HUD against real estate professionals, and familial status discrimination is the single most frequently violated protected class. Most violations are unintentional. Agents writing under deadline use language they&apos;ve read in thousands of other listings without realizing the specific phrases have been the basis for federal complaints.
              </p>

              <p style={proseStyle}>
                The penalties for a single violation don&apos;t care about intent. Under the Federal Civil Penalties Inflation Adjustment Act, the current penalty structure for Fair Housing Act violations in administrative proceedings before a HUD Administrative Law Judge:
              </p>

              <div style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "12px", padding: "20px 24px", margin: "20px 0" }}>
                <BulletList items={[
                  <><strong>First offense:</strong> $25,597</>,
                  <><strong>Repeat violation within five years:</strong> $63,991</>,
                  <><strong>Third violation within seven years:</strong> $115,054</>,
                  <><strong>DOJ pattern-or-practice cases:</strong> Up to $150,000</>,
                ]} />
              </div>

              <p style={proseStyle}>
                These figures are inflation-adjusted as of March 2024 and represent the active penalty structure throughout 2026. They are per discriminatory practice, meaning a listing with multiple flagged phrases can compound penalties beyond these individual caps. Civil penalties are also separate from compensatory and punitive damages awarded to complainants, plus attorney fees the agent or brokerage may be ordered to pay.
              </p>

              <p style={proseStyle}>
                Filing a Fair Housing complaint costs the complainant nothing. They have one year to file with HUD or two years to file in federal court. Investigation is initiated automatically once a complaint is received.
              </p>

              <p style={proseStyle}>
                The math is straightforward: a $25,000 penalty for one phrase in one listing is not a manageable cost of doing business. The operational answer is to catch these phrases before publication.
              </p>
            </div>
          </div>
        </section>

        {/* ── THREE-TIER FRAMEWORK ── */}
        <section id="framework" style={{ background: C.creamWarm, padding: "64px 0", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div className={CONTENT}>
            <div className={READING}>
              <div style={{ ...sectionLabelStyle, marginBottom: "16px" }}>
                <span style={{ display: "inline-block", height: "1px", width: "18px", background: C.goldDeep }} />
                Framework
              </div>

              <h2 style={{ ...h2Style, marginTop: 0 }}>The three-tier framework</h2>

              <p style={proseStyle}>
                HUD&apos;s enforcement of Section 804(c) of the Fair Housing Act distinguishes between three categories of language. The framework matters because the alternative — memorizing a long list of banned words — doesn&apos;t help an agent develop transferable judgment.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", margin: "24px 0" }}>
                {[
                  { tier: 1, label: "Clearly prohibited", color: C.warn, desc: "Language that directly references protected classes, or uses well-documented coded equivalents that HUD treats as equivalent to direct reference. These phrases create immediate liability when used in advertising. Approximately 53 phrases.", anchor: "tier-1" },
                  { tier: 2, label: "Context-dependent", color: C.goldDeep, desc: "Language that is acceptable in some contexts and prohibited in others. The risk depends on what surrounds the phrase, what the agent's other behavior signals, and how a reasonable reader would interpret the listing as a whole. Approximately 17 phrases.", anchor: "tier-2" },
                  { tier: 3, label: "Generally acceptable", color: C.pass, desc: "Descriptive language about the property itself, factual information shared consistently, and proximity references that don't imply ability or demographic preference. Approximately 52 phrases.", anchor: "tier-3" },
                ].map(({ tier, label, color, desc, anchor }) => (
                  <div key={tier} style={{ background: C.bgCard, border: `1px solid ${C.border}`, borderRadius: "12px", padding: "20px 24px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                      <span style={{ background: color, color: C.creamWarm, fontFamily: "var(--font-jetbrains, monospace)", fontSize: "11px", letterSpacing: "0.06em", padding: "3px 10px", borderRadius: "4px" }}>
                        TIER {tier}
                      </span>
                      <span style={{ fontFamily: "var(--font-manrope, sans-serif)", fontSize: "16px", fontWeight: 600, color: C.ink }}>
                        {label}
                      </span>
                    </div>
                    <p style={{ ...proseStyle, fontSize: "14.5px", marginBottom: "8px" }}>
                      {desc}
                    </p>
                    <a href={`#${anchor}`} style={{ fontSize: "13px", color: C.forest, textDecoration: "underline", textDecorationColor: C.gold, textUnderlineOffset: "3px" }}>
                      Jump to Tier {tier} →
                    </a>
                  </div>
                ))}
              </div>

              <p style={proseStyle}>
                The pattern that runs through all three tiers: <strong>specificity protects, generality risks</strong>. Descriptions of physical features, named places, and specific distances are durable. Generic adjectives about who a property is &ldquo;for&rdquo; or what a neighborhood is &ldquo;like&rdquo; are where complaints originate.
              </p>
            </div>
          </div>
        </section>

        {/* ── TIER 1 ── */}
        <section id="tier-1" style={{ background: C.cream, padding: "64px 0" }}>
          <div className={CONTENT}>
            <div className={READING}>
              <div style={{ ...sectionLabelStyle, marginBottom: "16px" }}>
                <AlertTriangle className="h-3 w-3" strokeWidth={2} style={{ color: C.warn }} />
                Tier 1 · Clearly prohibited
              </div>

              <h2 style={{ ...h2Style, marginTop: 0 }}>Tier 1: Clearly prohibited language</h2>

              <p style={proseStyle}>
                These phrases create direct Fair Housing liability when used in MLS listings, marketing materials, or any advertising. Each is grouped by the protected class implicated.
              </p>

              <h3 style={h3Style}>Familial status (the most-prosecuted category)</h3>
              <p style={proseStyle}>
                The Fair Housing Act prohibits language indicating preference based on the presence or absence of children in a household. This category produces more complaints than any other in real estate advertising.
              </p>

              <p style={{ ...proseStyle, fontWeight: 600, marginBottom: "8px" }}>Prohibited:</p>
              <BulletList items={[
                <>&ldquo;Family-friendly,&rdquo; &ldquo;Great for families,&rdquo; &ldquo;Perfect for families&rdquo;</>,
                <>&ldquo;Ideal for young families,&rdquo; &ldquo;Family home,&rdquo; &ldquo;Family-oriented community&rdquo;</>,
                <>&ldquo;Perfect for kids,&rdquo; &ldquo;Great for children&rdquo;</>,
                <>&ldquo;Empty nesters,&rdquo; &ldquo;Perfect for empty nesters&rdquo;</>,
                <>&ldquo;Newlywed home,&rdquo; &ldquo;Starter home&rdquo; (increasingly flagged; varies by jurisdiction)</>,
                <>&ldquo;Mature couple preferred,&rdquo; &ldquo;Adult living&rdquo; (outside HOPA-compliant senior housing)</>,
                <>&ldquo;Adults only&rdquo; (outside HOPA-compliant senior housing)</>,
                <>&ldquo;No children,&rdquo; &ldquo;Children welcome&rdquo; (signals preference), &ldquo;Childless&rdquo;</>,
                <>&ldquo;Bachelor/bachelorette,&rdquo; &ldquo;Single professional&rdquo;</>,
              ]} />

              <p style={{ ...proseStyle, fontWeight: 600, marginBottom: "8px" }}>Compliant alternatives:</p>
              <p style={proseStyle}>
                Describe the property feature instead of the buyer. &ldquo;Fenced yard&rdquo; instead of &ldquo;great for kids.&rdquo; &ldquo;Three bedrooms&rdquo; instead of &ldquo;family-sized.&rdquo; &ldquo;Spacious lot&rdquo; instead of &ldquo;room for the whole family.&rdquo;
              </p>

              <h3 style={h3Style}>Race, color, ethnicity, national origin</h3>
              <p style={proseStyle}>
                Any reference to racial or ethnic composition of the neighborhood, current occupants, or implied preference. HUD&apos;s regulations and case law have prosecuted both direct references and well-documented coded language.
              </p>

              <p style={{ ...proseStyle, fontWeight: 600, marginBottom: "8px" }}>Prohibited:</p>
              <BulletList items={[
                <>Any direct racial reference (&ldquo;white family home,&rdquo; &ldquo;Hispanic neighborhood&rdquo;)</>,
                <>Any ethnic reference (&ldquo;Polish neighborhood,&rdquo; &ldquo;Italian community&rdquo;)</>,
                <>Any nationality reference (&ldquo;Irish home,&rdquo; &ldquo;Chinese-friendly&rdquo;)</>,
                <>&ldquo;Exclusive neighborhood&rdquo; (HUD-flagged coded language)</>,
                <>&ldquo;Private community&rdquo; (in advertising; safe in HOA legal descriptions)</>,
                <>&ldquo;Integrated&rdquo; (counterintuitively, this is a HUD-listed catch word)</>,
                <>&ldquo;Restricted&rdquo; (HUD-listed catch word)</>,
                <>&ldquo;Traditional&rdquo; (HUD-listed catch word when used to describe community character)</>,
                <>&ldquo;Membership approval&rdquo; / &ldquo;board approval&rdquo; (HUD-listed catch words)</>,
                <>&ldquo;Heritage neighborhood&rdquo; / &ldquo;established ethnic community&rdquo;</>,
                <>&ldquo;No Section 8&rdquo; (prosecuted in jurisdictions with source-of-income protection; treated as racial proxy in others)</>,
              ]} />

              <p style={proseStyle}>
                <strong>Compliant alternatives:</strong> Reference named neighborhoods, specific streets, and verifiable amenities. &ldquo;Located in Highland&rdquo; is safe. &ldquo;Highland&apos;s tight-knit Italian community&rdquo; is not.
              </p>

              <h3 style={h3Style}>Religion</h3>
              <p style={proseStyle}>
                Direct references to religious affiliation of the home, neighborhood, or preferred buyer. Indirect references that signal religious community character.
              </p>

              <p style={{ ...proseStyle, fontWeight: 600, marginBottom: "8px" }}>Prohibited:</p>
              <BulletList items={[
                <>&ldquo;Christian community,&rdquo; &ldquo;Jewish neighborhood,&rdquo; &ldquo;Muslim-friendly,&rdquo; &ldquo;Catholic home&rdquo;</>,
                <>Any direct religious preference</>,
                <>&ldquo;Near churches&rdquo; (when used to characterize community rather than as factual proximity)</>,
                <>&ldquo;Walking distance to Temple&rdquo; (combines two flagged elements)</>,
                <>&ldquo;Christian school district&rdquo;</>,
              ]} />

              <p style={proseStyle}>
                <strong>Note:</strong> Holiday greetings (&ldquo;Merry Christmas,&rdquo; &ldquo;Happy Easter&rdquo;) in advertising are NOT violations per HUD guidance. Holiday-themed listings during specific seasons are acceptable. The line is between marketing the property in a religiously affiliated way versus seasonal acknowledgment.
              </p>

              <p style={proseStyle}>
                <strong>Compliant alternatives:</strong> Name specific institutions factually (&ldquo;0.3 miles from First Baptist Church&rdquo;) only when the institution&apos;s proximity is the relevant fact — not when the religious affiliation is the selling point.
              </p>

              <h3 style={h3Style}>Disability and ability-implying language</h3>
              <p style={proseStyle}>
                Section 804(f) prohibits advertising that indicates preference based on disability. Mobility-implying language is the most common source of complaints in this category.
              </p>

              <p style={{ ...proseStyle, fontWeight: 600, marginBottom: "8px" }}>Prohibited:</p>
              <BulletList items={[
                <>&ldquo;Walking distance&rdquo; (when used as a general descriptor)</>,
                <>&ldquo;Short walk to,&rdquo; &ldquo;Stroll to&rdquo;</>,
                <>&ldquo;Easy access&rdquo; (when implying ambulatory ease)</>,
                <>&ldquo;Active lifestyle community&rdquo; (outside HOPA-compliant active adult)</>,
                <>&ldquo;Great for active buyers&rdquo;</>,
                <>&ldquo;Able-bodied,&rdquo; &ldquo;No wheelchairs,&rdquo; &ldquo;Wheelchair-bound need not apply&rdquo;</>,
                <>&ldquo;Stairs throughout&rdquo; (when implying preference for non-disabled)</>,
                <>&ldquo;Felons need not apply&rdquo; (housing-status discrimination in many jurisdictions)</>,
              ]} />

              <p style={proseStyle}>
                <strong>Compliant alternatives:</strong> Specific distances (&ldquo;0.3 miles from the park&rdquo;), specific architectural facts (&ldquo;single-story floor plan,&rdquo; &ldquo;two-story home&rdquo;), specific accessibility features (&ldquo;zero-step entry,&rdquo; &ldquo;main-floor primary bedroom&rdquo;). The factual description is permitted; the implication of preferred ability is not.
              </p>

              <h3 style={h3Style}>Sex and gender</h3>
              <p style={proseStyle}>
                Language that indicates preference based on sex, gender, or gender identity. The 2020 Bostock decision and subsequent HUD guidance confirmed that sex discrimination protections include gender identity and sexual orientation.
              </p>

              <p style={{ ...proseStyle, fontWeight: 600, marginBottom: "8px" }}>Prohibited:</p>
              <BulletList items={[
                <>&ldquo;Bachelor pad&rdquo;</>,
                <>&ldquo;Man cave&rdquo; (when used as a primary descriptor; safe as informal room reference)</>,
                <>&ldquo;She-shed&rdquo; (same nuance)</>,
                <>&ldquo;Perfect for single professional women,&rdquo; &ldquo;Ideal for career-minded men&rdquo;</>,
                <>&ldquo;Couples only,&rdquo; &ldquo;Single woman/man preferred&rdquo;</>,
              ]} />

              <p style={proseStyle}>
                <strong>Compliant alternatives:</strong> Describe the room or feature. &ldquo;Finished basement,&rdquo; &ldquo;garden shed,&rdquo; &ldquo;home office,&rdquo; &ldquo;private den.&rdquo;
              </p>

              <InlineCTA />
            </div>
          </div>
        </section>

        {/* ── TIER 2 ── */}
        <section id="tier-2" style={{ background: C.creamWarm, padding: "64px 0", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div className={CONTENT}>
            <div className={READING}>
              <div style={{ ...sectionLabelStyle, marginBottom: "16px" }}>
                <span style={{ display: "inline-block", height: "1px", width: "18px", background: C.goldDeep }} />
                Tier 2 · Context-dependent
              </div>

              <h2 style={{ ...h2Style, marginTop: 0 }}>Tier 2: Context-dependent language</h2>

              <p style={proseStyle}>
                This is the gray-zone category where most unintentional violations originate. These phrases are not categorically banned but become problematic depending on context, surrounding language, and how a reasonable reader interprets the listing.
              </p>

              <h3 style={h3Style}>Location and proximity language</h3>

              <p style={proseStyle}>
                <strong>&ldquo;Walking distance&rdquo;</strong> — Risky as a general descriptor (implies ability). Safe when paired with specific factual distance (&ldquo;0.3 miles, walkable for those who choose&rdquo;). The 1998 enforcement action against Maryland real estate companies for &ldquo;walking distance to the subway&rdquo; established the precedent that ability-neutral language is safer.
              </p>

              <p style={proseStyle}>
                <strong>&ldquo;Quiet neighborhood&rdquo;</strong> — Risky. Often interpreted as coded reference to demographic homogeneity. &ldquo;Quiet street&rdquo; describing the specific street is generally safe.
              </p>

              <p style={proseStyle}>
                <strong>&ldquo;Up-and-coming&rdquo;</strong> — Frequently flagged as gentrification coded language. Risky in advertising.
              </p>

              <p style={proseStyle}>
                <strong>&ldquo;Established neighborhood&rdquo;</strong> — Generally safe. Factual descriptor of neighborhood age.
              </p>

              <p style={proseStyle}>
                <strong>&ldquo;Historic district&rdquo;</strong> — Safe when factually accurate (a designated historic district).
              </p>

              <p style={proseStyle}>
                <strong>&ldquo;Safe neighborhood&rdquo;</strong> — Still risky despite the April 2026 HUD update. The update addresses sharing factual crime data, not using subjective safety descriptors in advertising. &ldquo;Safe&rdquo; as an adjective remains flagged coded language.
              </p>

              <p style={proseStyle}>
                <strong>&ldquo;Crime-free area&rdquo;</strong> — Prohibited. Treats absence of crime as a marketing claim and implies coded preference.
              </p>

              <p style={proseStyle}>
                <strong>&ldquo;Desirable neighborhood&rdquo;</strong> — Safe per HUD precedent (&ldquo;desirable neighborhood&rdquo; is not a violation).
              </p>

              <h3 style={h3Style}>School and education language (updated April 2026)</h3>

              <p style={proseStyle}>
                This category materially changed with the April 2026 HUD guidance. Sharing factual school information is now explicitly permitted when done consistently across clients.
              </p>

              <p style={proseStyle}>
                <strong>&ldquo;Top-rated schools&rdquo;</strong> — Acceptable when based on verifiable data and shared consistently. Pre-2026 industry guidance treated this as risky; HUD&apos;s current position permits it.
              </p>

              <p style={proseStyle}>
                <strong>&ldquo;School district [X]&rdquo;</strong> — Safe (factual reference).
              </p>

              <p style={proseStyle}>
                <strong>&ldquo;GreatSchools rating: 9/10&rdquo;</strong> — Acceptable per HUD&apos;s April 2026 guidance.
              </p>

              <p style={proseStyle}>
                <strong>&ldquo;Great schools&rdquo;</strong> — Subjective rather than factual. Riskier than the data-referenced version. Use specific ratings instead.
              </p>

              <p style={proseStyle}>
                <strong>&ldquo;Family-friendly schools&rdquo;</strong> — Still prohibited (familial status reference, regardless of school context).
              </p>

              <h3 style={h3Style}>The &ldquo;perfect for&rdquo; trap</h3>

              <p style={proseStyle}>
                Any &ldquo;perfect for [demographic]&rdquo; formulation is high-risk regardless of which protected class is implicated. The pattern itself signals preference.
              </p>

              <BulletList items={[
                <>&ldquo;Perfect for families&rdquo; — prohibited (familial status)</>,
                <>&ldquo;Perfect for retirees&rdquo; — prohibited outside HOPA housing</>,
                <>&ldquo;Perfect for young professionals&rdquo; — risky (proxy for familial status, age)</>,
                <>&ldquo;Perfect for single buyers&rdquo; — risky</>,
                <>&ldquo;Perfect for empty nesters&rdquo; — prohibited (familial status)</>,
              ]} />

              <p style={proseStyle}>
                <strong>The compliant pattern:</strong> Describe the feature, let the buyer determine fit. &ldquo;Three-bedroom layout&rdquo; instead of &ldquo;perfect for a family of five.&rdquo; &ldquo;Single-story design&rdquo; instead of &ldquo;perfect for retirees.&rdquo; &ldquo;Home office and gym&rdquo; instead of &ldquo;perfect for remote workers.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ── TIER 3 ── */}
        <section id="tier-3" style={{ background: C.cream, padding: "64px 0" }}>
          <div className={CONTENT}>
            <div className={READING}>
              <div style={{ ...sectionLabelStyle, marginBottom: "16px" }}>
                <CheckCircle2 className="h-3 w-3" strokeWidth={2} style={{ color: C.pass }} />
                Tier 3 · Generally acceptable
              </div>

              <h2 style={{ ...h2Style, marginTop: 0 }}>Tier 3: Generally acceptable language</h2>

              <p style={proseStyle}>
                The category most existing references underweight. These phrases are durable across markets, jurisdictions, and the foreseeable future of Fair Housing enforcement. Most strong listings live primarily in Tier 3.
              </p>

              <h3 style={h3Style}>Property features (always safe)</h3>
              <BulletList items={[
                "Specific dimensions: square footage, bedrooms, bathrooms, lot size",
                "Architectural features: vaulted ceilings, barn doors, exposed beams, crown molding",
                "Materials and finishes: quartz counters, hardwood floors, marble surrounds, slate roof",
                "Mechanical systems: new HVAC, tankless water heater, solar panels, smart home wiring",
                "Outdoor features: fenced yard, covered patio, in-ground pool, outdoor kitchen",
                "Storage: walk-in closet, three-car garage, basement storage",
                "Layout: open-concept, split-bedroom plan, single-story, two-story",
              ]} />

              <h3 style={h3Style}>Distance and proximity (when specific)</h3>
              <BulletList items={[
                <>Specific distances: &ldquo;0.3 miles to Sloan&apos;s Lake Park&rdquo;</>,
                <>Named landmarks: &ldquo;two blocks from Whole Foods on 32nd&rdquo;</>,
                <>Transit references: &ldquo;two stops from downtown on the C-line&rdquo;</>,
                <>Specific amenity references: &ldquo;adjacent to the Highland Tap &amp; Burger&rdquo;</>,
                <>Travel times: &ldquo;12-minute drive to Denver International Airport&rdquo;</>,
              ]} />

              <h3 style={h3Style}>Factual neighborhood references</h3>
              <BulletList items={[
                <>Named neighborhoods: &ldquo;Highland neighborhood&rdquo;</>,
                <>Specific named businesses: &ldquo;Whole Foods on 32nd&rdquo;</>,
                <>Specific named parks, libraries, transit stops</>,
                <>Named schools (post-April 2026 HUD guidance): &ldquo;Edison Elementary&rdquo;</>,
                <>Specific school district designations: &ldquo;Denver Public Schools&rdquo;</>,
              ]} />

              <h3 style={h3Style}>Primary bedroom note</h3>
              <p style={proseStyle}>
                <strong>&ldquo;Master bedroom&rdquo;</strong> is federally permitted. It is not a Fair Housing violation. However, many MLSs and brokerages have voluntarily moved to &ldquo;primary bedroom&rdquo; or &ldquo;owner&apos;s suite&rdquo; — the Houston Association of REALTORS® formally changed its MLS terminology, and many others have followed. This is a best-practice convention rather than a legal requirement. Listings that use &ldquo;master bedroom&rdquo; are not in violation. New listings increasingly use &ldquo;primary bedroom&rdquo; for consistency with modern industry standards.
              </p>

              <h3 style={h3Style}>Factual school and crime data (April 2026 update)</h3>
              <BulletList items={[
                <>&ldquo;GreatSchools rating: [specific rating]&rdquo;</>,
                <>&ldquo;Within [Specific] School District&rdquo;</>,
                <>&ldquo;Crime statistics available at [data source]&rdquo;</>,
                <>&ldquo;Local crime data: see [source]&rdquo;</>,
                <>&ldquo;School district report card available&rdquo;</>,
              ]} />
              <p style={proseStyle}>
                These references are acceptable per HUD&apos;s April 2026 Dear Colleague letter when shared consistently across all clients.
              </p>
            </div>
          </div>
        </section>

        {/* ── PHRASE REFERENCE TABLES ── */}
        <section id="phrase-table" style={{ background: C.creamWarm, padding: "64px 0", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div className={CONTENT}>
            <div style={{ maxWidth: "960px", margin: "0 auto" }}>
              <div style={{ ...sectionLabelStyle, marginBottom: "16px" }}>
                <span style={{ display: "inline-block", height: "1px", width: "18px", background: C.goldDeep }} />
                Complete reference
              </div>

              <h2 style={{ ...h2Style, marginTop: 0 }}>Complete phrase reference</h2>

              <p style={proseStyle}>
                This table is the operational reference. 122 phrases across the three tiers, with the protected class implicated and a compliant alternative for each. This list reflects HUD&apos;s current enforcement posture as of June 2026 and incorporates the April 2026 Dear Colleague letter on neighborhood crime and school data.
              </p>

              <p style={{ ...proseStyle, fontStyle: "italic", fontSize: "14px", color: C.muted }}>
                Note: This reference is not legal advice. Specific cases may turn on jurisdiction, context, and intent. For high-stakes situations, consult counsel familiar with Fair Housing law in your jurisdiction.
              </p>

              <div style={{ marginTop: "40px" }}>
                <PhraseTableSection title="Clearly prohibited" tierNum={1} tierColor={C.warn} rows={TIER_1_ROWS} />
                <PhraseTableSection title="Context-dependent" tierNum={2} tierColor={C.goldDeep} rows={TIER_2_ROWS} />
                <PhraseTableSection title="Generally acceptable" tierNum={3} tierColor={C.pass} rows={TIER_3_ROWS} />
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW TO CHECK ── */}
        <section id="checking" style={{ background: C.cream, padding: "64px 0" }}>
          <div className={CONTENT}>
            <div className={READING}>
              <div style={{ ...sectionLabelStyle, marginBottom: "16px" }}>
                <span style={{ display: "inline-block", height: "1px", width: "18px", background: C.goldDeep }} />
                The workflow
              </div>

              <h2 style={{ ...h2Style, marginTop: 0 }}>How to systematically check your listings</h2>

              <p style={proseStyle}>
                The compliant approach to Fair Housing review is structural, not aspirational. Three passes through every listing before publication:
              </p>

              <p style={proseStyle}>
                <strong>Pass 1: Read for Tier 1 phrases.</strong> Scan for any phrase in the prohibited category above. These are non-negotiable removals. Replace with property-feature descriptions or specific factual references.
              </p>

              <p style={proseStyle}>
                <strong>Pass 2: Read for Tier 2 context.</strong> Identify any context-dependent phrases. For each, ask: is this phrase doing work that requires this specific wording, or can the same point be made with Tier 3 language? Default to Tier 3 unless the Tier 2 phrase is genuinely necessary.
              </p>

              <p style={proseStyle}>
                <strong>Pass 3: Read as a stranger.</strong> Read the listing assuming you know nothing about the property or neighborhood. Does anything in the description tell the reader what kind of person should or shouldn&apos;t live here? If yes, rewrite to describe the property instead.
              </p>

              <p style={proseStyle}>
                Manual review catches most obvious violations but misses subtle coded language and recently flagged phrases. Automated tools scan against current HUD enforcement patterns and the comprehensive phrase library faster than manual review.
              </p>

              <InlineCTA />
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section id="faq" style={{ background: C.creamWarm, padding: "64px 0", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div className={CONTENT}>
            <div className={READING}>
              <div style={{ ...sectionLabelStyle, marginBottom: "16px" }}>
                <span style={{ display: "inline-block", height: "1px", width: "18px", background: C.goldDeep }} />
                Common questions
              </div>

              <h2 style={{ ...h2Style, marginTop: 0 }}>Common questions</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginTop: "24px" }}>
                {[
                  {
                    q: "Can a single word in my MLS listing really cause a Fair Housing complaint?",
                    a: "Yes. HUD prosecutes language that signals preference based on protected class, regardless of whether the agent intended discrimination. The first-offense civil penalty is $25,597 — not a cost most agents can absorb. A listing with multiple flagged phrases can compound penalties beyond the per-violation cap.",
                  },
                  {
                    q: "What's the difference between Fair Housing rules and the NAR Code of Ethics?",
                    a: "Fair Housing rules are federal law, enforced by HUD. Penalties are civil fines, attorney fees, and damages. The NAR Code of Ethics is private association regulation, enforced by local Realtor® boards. Penalties can include fines, mandatory education, suspension, or expulsion from the association. Both apply to Realtor® members; non-Realtor agents are still bound by Fair Housing law.",
                  },
                  {
                    q: "What changed about Fair Housing language guidance in April 2026?",
                    a: "HUD issued a Dear Colleague letter on April 24, 2026, formally clarifying that real estate agents do not violate the Fair Housing Act by discussing neighborhood crime rates or school quality with prospective buyers — provided the information is shared consistently and without discriminatory intent. This reversed years of industry caution that treated such conversations as Fair Housing risks. Sharing factual data is now explicitly permitted. Using subjective descriptors like \u201Csafe neighborhood\u201D remains risky.",
                  },
                  {
                    q: "Can I discuss school quality and crime rates with my clients?",
                    a: "Yes, per HUD's April 2026 guidance. The information must be objective, verifiable, and shared consistently with all clients. Citing GreatSchools ratings, district report cards, or publicly available crime statistics is acceptable. What's not permitted: using school or crime references to direct buyers toward or away from neighborhoods based on protected-class characteristics (which is steering, still illegal).",
                  },
                  {
                    q: "Is \u201Cwalking distance\u201D really a Fair Housing violation?",
                    a: "Yes, as a general descriptor. The 1998 enforcement against Maryland real estate companies prohibited \u201Cwalking distance to the subway\u201D as discriminatory against people with mobility impairments. The compliant alternative is specific distance (\u201C0.3 miles\u201D) or factual proximity (\u201Ctwo blocks\u201D) that doesn't imply ability.",
                  },
                  {
                    q: "Can I write \u201Cgreat for families\u201D if the property genuinely is family-oriented?",
                    a: "No. The Fair Housing Act prohibits language indicating preference based on familial status — even when factually descriptive of likely buyers. The compliant approach is to describe the property feature instead: \u201Cfenced yard,\u201D \u201Cthree-bedroom layout,\u201D \u201Ctwo-car garage.\u201D The buyer determines fit; the listing describes the property.",
                  },
                  {
                    q: "Does my broker's review catch Fair Housing violations?",
                    a: "Often, but not always, and not in time. Most broker reviews happen after a listing is written and submitted. By then, the agent has already invested time in copy that needs rewriting. Automated checking before submission catches issues during the drafting phase, when fixes are cheap.",
                  },
                  {
                    q: "What happens if I get a Fair Housing complaint?",
                    a: "A complainant has one year to file with HUD or two years in federal court. HUD investigates automatically; the agent is notified and asked to respond. If HUD finds reasonable cause, the case proceeds to an Administrative Law Judge or, if either party elects, to federal court. Penalties at the ALJ level start at $25,597 for first offenses; DOJ cases can reach $150,000. Compensatory damages, punitive damages, and attorney fees may also be awarded to the complainant.",
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

        {/* ── SOURCES FOOTER ── */}
        <section style={{ background: C.cream, padding: "40px 0" }}>
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
                Sources: HUD Office of Fair Housing and Equal Opportunity Dear Colleague letter, April 24, 2026; 24 CFR Part 100; 42 USC § 3604(c); HUD Civil Penalties Inflation Adjustment (24 CFR § 180.671, March 2024 adjustment); NAR Fair Housing Act overview, 2026. This reference is informational and not legal advice.
              </p>
            </div>
          </div>
        </section>

        {/* ── CLOSING / FINAL CTA — DARK FOREST ── */}
        <section style={{ background: C.forestDeep, padding: "80px 0", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(184,153,104,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,153,104,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
          <div className={CONTENT} style={{ position: "relative" }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-jetbrains, monospace)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: C.goldSoft, marginBottom: "16px" }}>
                <span style={{ display: "inline-block", height: "1px", width: "18px", background: C.goldSoft }} />
                Run the check
              </div>
              <h2 style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 500,
                lineHeight: 1.1,
                color: C.creamWarm,
                marginBottom: "20px",
              }}>
                The 122-phrase reference, <em style={{ fontStyle: "normal", color: C.gold }}>scanned in seconds</em>.
              </h2>
              <p style={{
                fontFamily: "var(--font-manrope, sans-serif)",
                fontSize: "clamp(15px, 1.3vw, 17px)",
                lineHeight: 1.6,
                color: C.creamText,
                marginBottom: "32px",
                maxWidth: "600px",
              }}>
                The Fair Housing Compliance Checker scans your draft against the complete phrase library and returns flagged phrases with suggested rewrites. Three scans per session are free with no signup.
              </p>
              <Link
                href="/tools/fha-compliance-checker"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: C.gold,
                  color: C.forestDeep,
                  fontFamily: "var(--font-manrope, sans-serif)",
                  fontSize: "14px",
                  fontWeight: 500,
                  padding: "14px 28px",
                  borderRadius: "9px",
                  textDecoration: "none",
                }}
              >
                Try the Fair Housing Checker
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
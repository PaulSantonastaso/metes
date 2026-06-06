import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowRight, MapPin, Database, ShieldCheck, AlertTriangle, CheckCircle2 } from "lucide-react";

// ─────────────────────────────────────────────────────────────────
// SEO metadata
// ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Neighborhood Intelligence — Real Places, Real Radius, No Invention | metes",
  description:
    "Every Metes listing kit includes a neighborhood guide built from live Google Places data — real businesses inside a 2.5-mile radius of the property, ranked by popularity, curated for brand quality. The neighborhood content other AI tools fake.",
  keywords: [
    "neighborhood description for MLS",
    "real estate neighborhood content",
    "AI neighborhood description",
    "MLS community field generator",
    "Zillow what I love about the neighborhood",
    "Fair Housing neighborhood description",
    "real estate listing neighborhood guide",
    "neighborhood description examples",
  ],
  alternates: {
    canonical: "https://www.metes.app/neighborhood-intelligence",
  },
  openGraph: {
    title: "Neighborhood Intelligence — Real Places, Real Radius, No Invention",
    description:
      "Every Metes listing kit includes a neighborhood guide built from live local data. Real businesses, real ratings, real radius. The neighborhood content other AI tools fake.",
    url: "https://www.metes.app/neighborhood-intelligence",
    siteName: "metes",
    type: "website",
    images: [
      {
        url: "https://www.metes.app/og/neighborhood-intelligence.png",
        width: 1200,
        height: 630,
        alt: "metes Neighborhood Intelligence — the only neighborhood content that doesn't make things up",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neighborhood Intelligence — Real Places, Real Radius, No Invention",
    description:
      "Every Metes listing kit includes a neighborhood guide built from live local data. The neighborhood content other AI tools fake.",
    images: ["https://www.metes.app/og/neighborhood-intelligence.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─────────────────────────────────────────────────────────────────
// JSON-LD — FAQPage + SoftwareApplication
// ─────────────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What exactly do I get for $35 — just the neighborhood content?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The neighborhood guide is one part of the full $35 listing kit. The kit also includes the MLS description, listing headline, social posts for Facebook and Instagram, a four-email campaign, photo curation with captions and renaming, and a Fair Housing compliance review on every asset.",
      },
    },
    {
      "@type": "Question",
      name: "How does Metes know which places to pick from a long list?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Brand-tier curation. A Whole Foods on the corner sells houses. A Walmart does not. Metes prioritizes premium grocery, local independents, beloved coffee shops, and chef-driven restaurants. Generic chains and value-tier brands get deprioritized. If a category has nothing worth highlighting, that section stays empty rather than padded.",
      },
    },
    {
      "@type": "Question",
      name: "What if my listing is rural and there's nothing within 2.5 miles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If there's nothing of substance nearby, the neighborhood guide returns empty rather than fabricated. The lifestyle paragraph then leans on the property itself — acreage, privacy, named natural features. Metes never invents proximity to amenities that aren't there.",
      },
    },
    {
      "@type": "Question",
      name: "Can I edit the neighborhood content before publishing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Everything ships as plain text. The lifestyle paragraph and category sections are strong defaults, not locked artifacts. Edit any line, swap any place, restructure any section before paste.",
      },
    },
    {
      "@type": "Question",
      name: "What makes this different from asking ChatGPT to write neighborhood copy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ChatGPT writes neighborhood copy from training data, not from current local information. It invents businesses, names places that closed years ago, and produces plausible-sounding text that often doesn't match reality. Metes pulls from Google Places at the moment you generate the listing — every business named is real, current, and within a defined radius.",
      },
    },
    {
      "@type": "Question",
      name: "Does the neighborhood guide go through the Fair Housing audit too?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Neighborhood copy is where most Fair Housing violations slip through — phrases like 'walking distance,' 'family-friendly,' or 'exclusive community.' Every line of the neighborhood guide is reviewed by the same audit that runs on the MLS description, social posts, and emails.",
      },
    },
  ],
};

const toolJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Metes Neighborhood Intelligence",
  description:
    "Neighborhood content generator for real estate listings. Pulls live Google Places data within a 2.5-mile radius of the property, ranks by popularity, curates for brand quality, and produces a Fair Housing-compliant lifestyle paragraph plus categorical sections for MLS, presentations, and emails. Included in every $35 Metes listing kit.",
  url: "https://www.metes.app/neighborhood-intelligence",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "35",
    priceCurrency: "USD",
    description: "Per listing — includes full marketing kit",
  },
  provider: {
    "@type": "Organization",
    name: "metes",
    url: "https://www.metes.app",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Real Estate Agents",
  },
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

// ─────────────────────────────────────────────────────────────────
// Shared section styles
// ─────────────────────────────────────────────────────────────────

const sectionHeadline = {
  fontFamily: "var(--font-manrope, sans-serif)",
  fontSize: "clamp(28px, 4vw, 44px)",
  fontWeight: 500 as const,
  lineHeight: 1.08,
  letterSpacing: "0.005em",
  color: C.ink,
};

const sectionSub = {
  fontFamily: "var(--font-manrope, sans-serif)",
  fontSize: "clamp(15px, 1.3vw, 17px)",
  lineHeight: 1.6,
  color: C.inkSoft,
};

// ─────────────────────────────────────────────────────────────────
// Worked examples — live output from the free Neighborhood Guide
// ─────────────────────────────────────────────────────────────────

const WORKED_EXAMPLES = [
  {
    market: "Mountain · Urban-edge",
    location: "Highland · Denver, CO",
    accent: C.forest,
    accentBg: "rgba(31,61,46,0.08)",
    lifestyle:
      "Living here means balancing urban convenience with outdoor accessibility. Start your mornings with a class at CorePower Yoga - LoHi before grabbing fresh produce at Sprouts Farmers Market or The Farmer's Market at Highlands Square. Weekends are best spent exploring the scenic paths at Sloan's Lake Park or visiting the iconic Downtown Aquarium. It is an ideal setting for those who prioritize both activity and local flavor.",
    sections: [
      {
        name: "The everyday",
        places: [
          { name: "The Denver Central Market", desc: "A bustling hall featuring curated local vendors, gourmet goods, and high-quality coffee." },
          { name: "Sprouts Farmers Market", desc: "A reliable neighborhood destination for fresh produce, organic groceries, and healthy pantry staples." },
          { name: "The Farmer's Market at Highlands Square", desc: "A seasonal gathering place highlighting regional growers and artisanal food producers every week." },
        ],
      },
      {
        name: "Outdoor & recreation",
        places: [
          { name: "Sloan's Lake Park", desc: "Large urban park offering expansive water views and paved trails for daily exercise." },
          { name: "Confluence Park", desc: "A scenic riverside destination perfect for cycling, walking, or simply enjoying the outdoors." },
        ],
      },
    ],
  },
  {
    market: "Midwest · Lakeside residential",
    location: "Linden Hills · Minneapolis, MN",
    accent: C.goldDeep,
    accentBg: "rgba(184,153,104,0.12)",
    lifestyle:
      "Living here means easy access to the city's most beloved outdoor spaces, including the waterfront trails at Bde Maka Ska and Lake Harriet Regional Park. Weekends are defined by visits to the Linden Hills Farmers Market or grabbing a wood-fired slice at Pizzeria Lola. With Whole Foods Market and Patisserie 46 nearby, the daily routine is anchored by high-quality local favorites in a peaceful, established setting.",
    sections: [
      {
        name: "The everyday",
        places: [
          { name: "Patisserie 46", desc: "Renowned neighborhood bakery serving exceptional artisan breads and delicate French-inspired pastries daily." },
          { name: "Trader Joe's", desc: "The go-to market for unique pantry staples, fresh produce, and reliable weekly groceries." },
          { name: "Whole Foods Market", desc: "A trusted source for organic produce, specialty goods, and high-quality prepared food options." },
          { name: "Linden Hills Farmers Market", desc: "A seasonal gathering place for local growers, small-batch makers, and fresh community produce." },
        ],
      },
      {
        name: "Outdoor & recreation",
        places: [
          { name: "Lake Harriet Regional Park", desc: "Expansive lakeside park featuring walking paths, swimming beaches, and scenic picnic garden areas." },
          { name: "Bde Maka Ska", desc: "A premier destination for paddleboarding, cycling, and enjoying sunset views on the water." },
        ],
      },
    ],
  },
  {
    market: "Southeast · Coastal historic",
    location: "Mount Pleasant · Charleston, SC",
    accent: C.moss,
    accentBg: "rgba(74,107,83,0.10)",
    lifestyle:
      "Life in this Mount Pleasant corridor balances coastal recreation with everyday convenience. Spend mornings at Shem Creek Boardwalk or the Mount Pleasant Memorial Waterfront Park, then grab a coffee at Vintage Coffee Cafe. The neighborhood is anchored by local favorites like Page's Okra Grill and Saltwater Cowboys, making it easy to enjoy the local scene. With Trader Joe's and the weekly farmers market nearby, everything is close at hand.",
    sections: [
      {
        name: "The everyday",
        places: [
          { name: "Vintage Coffee Cafe", desc: "A neighborhood staple serving fresh coffee and breakfast in a relaxed, open setting." },
          { name: "Trader Joe's", desc: "A go-to market for specialty groceries, unique snacks, and fresh seasonal produce." },
          { name: "Mount Pleasant Farmers Market", desc: "A weekly gathering showcasing local growers, fresh produce, and artisanal food products." },
          { name: "Pitt Street Pharmacy", desc: "A classic local pharmacy offering personalized service and a nostalgic community atmosphere." },
        ],
      },
      {
        name: "Dining nearby",
        places: [
          { name: "Page's Okra Grill", desc: "A beloved local spot known for generous portions of authentic Lowcountry comfort food." },
          { name: "Saltwater Cowboys", desc: "Waterfront dining featuring fresh seafood and a deck with expansive marsh views." },
        ],
      },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────

export default function NeighborhoodIntelligencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolJsonLd) }}
      />

      <div style={{ background: C.cream, minHeight: "100vh" }}>
        <Header />

        {/* ── HERO ── */}
        <section style={{ background: C.creamWarm, padding: "80px 0 64px", borderBottom: `1px solid ${C.border}` }}>
          <div className={CONTENT}>
            <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "5px 14px", border: `1px solid ${C.border}`, borderRadius: "100px", fontFamily: "var(--font-jetbrains, monospace)", fontSize: "11px", letterSpacing: "0.06em", color: C.goldDeep, marginBottom: "24px" }}>
                <MapPin className="h-3 w-3" strokeWidth={2} />
                NEIGHBORHOOD INTELLIGENCE
              </div>

              <h1 style={{ ...sectionHeadline, fontSize: "clamp(32px, 5vw, 52px)", marginBottom: "20px" }}>
                Most AI neighborhood content is fiction. <em style={{ fontStyle: "normal", color: C.goldDeep }}>This isn&apos;t</em>.
              </h1>

              <p style={{ ...sectionSub, fontSize: "clamp(15px, 1.3vw, 18px)", marginBottom: "32px", maxWidth: "640px", margin: "0 auto 32px" }}>
                Every Metes listing kit includes a neighborhood guide built from live Google Places data — real businesses inside a 2.5-mile radius of the property, ranked by popularity, curated for brand quality. The neighborhood content other AI tools fake.
              </p>

              <Link
                href="/tools/neighborhood-guide-generator"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-manrope, sans-serif)",
                  fontSize: "13px",
                  fontWeight: 500,
                  color: C.forest,
                  textDecoration: "underline",
                  textDecorationColor: C.gold,
                  textUnderlineOffset: "4px",
                  textDecorationThickness: "1.5px",
                }}
              >
                Try the free neighborhood guide generator first
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS — 3-card grid ── */}
        <section style={{ background: C.cream, padding: "96px 0" }}>
          <div className={CONTENT}>
            <div style={{ maxWidth: "720px", marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-jetbrains, monospace)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: C.goldDeep, marginBottom: "16px" }}>
                <span style={{ display: "inline-block", height: "1px", width: "18px", background: C.goldDeep }} />
                How it works
              </div>
              <h2 style={{ ...sectionHeadline, marginBottom: "16px" }}>
                Live data, then narrative. <em style={{ fontStyle: "normal", color: C.goldDeep }}>Not the other way around.</em>
              </h2>
              <p style={sectionSub}>
                Most AI tools generate neighborhood content from training data — which is why their output invents businesses or names places that closed two years ago. Metes pulls live local data first, then writes around what&apos;s actually there.
              </p>
            </div>

            <div className="how-grid">
              {[
                {
                  icon: Database,
                  title: "Live Google Places data",
                  desc: "Every place mentioned is pulled at generation time using the property's address. Real businesses, real ratings, real review counts — never training data.",
                },
                {
                  icon: MapPin,
                  title: "2.5-mile radius, 11 categories",
                  desc: "Grocery, coffee, bakery, restaurants, parks, pharmacy, bank, yoga, pilates, gym, farmers markets. Top three per category by Google Places popularity, not distance.",
                },
                {
                  icon: ShieldCheck,
                  title: "Brand-tier curation",
                  desc: "Whole Foods beats Walmart. Local independents beat generic chains. Premium fitness beats generic gyms. Sections stay empty rather than fill with weak entries.",
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  style={{
                    background: C.bgCard,
                    border: `1px solid ${C.border}`,
                    borderRadius: "12px",
                    padding: "28px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                    minWidth: 0,
                  }}
                >
                  <Icon className="h-5 w-5" strokeWidth={1.75} style={{ color: C.goldDeep }} />
                  <h3 style={{ fontFamily: "var(--font-manrope, sans-serif)", fontSize: "16px", fontWeight: 600, color: C.ink, letterSpacing: "-0.005em" }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: "13.5px", lineHeight: 1.6, color: C.inkSoft, margin: 0 }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <style>{`
            .how-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 12px;
            }
            @media (min-width: 640px) {
              .how-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
            }
            @media (min-width: 1024px) {
              .how-grid { grid-template-columns: repeat(3, 1fr); gap: 16px; }
            }
          `}</style>
        </section>

        {/* ── THREE WORKED EXAMPLES — creamWarm ── */}
        <section style={{ background: C.creamWarm, padding: "96px 0", borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
          <div className={CONTENT}>
            <div style={{ maxWidth: "720px", marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-jetbrains, monospace)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: C.goldDeep, marginBottom: "16px" }}>
                <span style={{ display: "inline-block", height: "1px", width: "18px", background: C.goldDeep }} />
                Real output, three different markets
              </div>
              <h2 style={{ ...sectionHeadline, marginBottom: "16px" }}>
                Neighborhood description examples. <em style={{ fontStyle: "normal", color: C.goldDeep }}>Actual generations, no edits.</em>
              </h2>
              <p style={sectionSub}>
                Each example below is unedited output from the free Neighborhood Guide Generator. Different markets, different shapes — same standard for what makes the cut.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "960px" }}>
              {WORKED_EXAMPLES.map(({ market, location, accent, accentBg, lifestyle, sections }) => (
                <article
                  key={location}
                  style={{
                    background: C.bgCard,
                    border: `1px solid ${C.border}`,
                    borderRadius: "14px",
                    padding: "28px",
                  }}
                >
                  {/* Header row — market chip + location */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap", gap: "8px" }}>
                    <span style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "10px", letterSpacing: "0.08em", textTransform: "uppercase" as const, color: accent, padding: "4px 8px", background: accentBg, borderRadius: "4px" }}>
                      {market}
                    </span>
                    <span style={{ fontSize: "11px", color: C.muted, fontFamily: "var(--font-jetbrains, monospace)" }}>
                      {location}
                    </span>
                  </div>

                  {/* Lifestyle paragraph */}
                  <div style={{ marginBottom: "24px" }}>
                    <h4 style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "10px", letterSpacing: "0.10em", textTransform: "uppercase" as const, color: C.muted, marginBottom: "10px" }}>
                      Lifestyle paragraph · for MLS community field
                    </h4>
                    <p style={{ fontSize: "14.5px", lineHeight: 1.65, color: C.ink, margin: 0 }}>
                      {lifestyle}
                    </p>
                  </div>

                  {/* Two category sections side-by-side on desktop */}
                  <div className="example-cats" style={{ borderTop: `1px solid ${C.border}`, paddingTop: "20px" }}>
                    {sections.map(({ name, places }) => (
                      <div key={name}>
                        <h4 style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "10px", letterSpacing: "0.10em", textTransform: "uppercase" as const, color: C.muted, marginBottom: "12px" }}>
                          {name}
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                          {places.map(({ name: placeName, desc }) => (
                            <li key={placeName} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                              <span style={{ color: C.gold, marginTop: "2px", flexShrink: 0 }}>•</span>
                              <div>
                                <span style={{ fontFamily: "var(--font-manrope, sans-serif)", fontSize: "13.5px", fontWeight: 600, color: C.ink }}>
                                  {placeName}.
                                </span>{" "}
                                <span style={{ fontSize: "13.5px", lineHeight: 1.55, color: C.inkSoft }}>
                                  {desc}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <p style={{ marginTop: "32px", fontSize: "12.5px", color: C.muted, fontFamily: "var(--font-jetbrains, monospace)", letterSpacing: "0.04em", textAlign: "center" }}>
              Generated live from the free Neighborhood Guide Generator · Unedited output
            </p>
          </div>

          <style>{`
            .example-cats {
              display: grid;
              grid-template-columns: 1fr;
              gap: 24px;
            }
            @media (min-width: 768px) {
              .example-cats { grid-template-columns: 1fr 1fr; gap: 32px; }
            }
          `}</style>
        </section>

        {/* ── DIFFERENTIATOR — forest section ── */}
        <section style={{ background: C.forestDeep, padding: "96px 0", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(184,153,104,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,153,104,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
          <div className={CONTENT} style={{ position: "relative" }}>
            <div style={{ maxWidth: "720px", marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-jetbrains, monospace)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: C.goldSoft, marginBottom: "16px" }}>
                <span style={{ display: "inline-block", height: "1px", width: "18px", background: C.goldSoft }} />
                Why this matters
              </div>
              <h2 style={{ ...sectionHeadline, color: C.creamWarm, marginBottom: "16px" }}>
                Generic AI makes up businesses. <em style={{ fontStyle: "normal", color: C.gold }}>Buyers Google every one.</em>
              </h2>
              <p style={{ ...sectionSub, color: C.creamText }}>
                 Buyers verify. One fabricated business calls the whole listing into question.
              </p>
            </div>

            <div className="diff-grid">
              <div style={{ background: "rgba(244,240,232,0.04)", border: `1px solid ${C.borderDark}`, borderRadius: "14px", padding: "32px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <AlertTriangle className="h-4 w-4" style={{ color: C.warn }} strokeWidth={2.5} />
                  <div style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "10px", letterSpacing: "0.14em", color: C.goldSoft, fontWeight: 600 }}>
                    GENERIC AI
                  </div>
                </div>
                <h3 style={{ fontFamily: "var(--font-manrope, sans-serif)", fontSize: "20px", fontWeight: 500, color: C.creamWarm, marginBottom: "12px", letterSpacing: "-0.005em", lineHeight: 1.2 }}>
                  Plausible-sounding fiction.
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: C.creamText }}>
                  ChatGPT and similar tools generate neighborhood text from training data. The coffee shop it names might not exist. The grocery store closed two years ago. The park is in a different city. Buyers verify everything now — they drop named businesses into Google Maps, they search Yelp. The moment they catch one fabricated detail, the whole listing loses credibility.
                </p>
              </div>

              <div style={{ background: "rgba(244,240,232,0.04)", border: `1px solid ${C.borderDark}`, borderRadius: "14px", padding: "32px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <CheckCircle2 className="h-4 w-4" style={{ color: C.pass }} strokeWidth={2.5} />
                  <div style={{ fontFamily: "var(--font-jetbrains, monospace)", fontSize: "10px", letterSpacing: "0.14em", color: C.goldSoft, fontWeight: 600 }}>
                    METES
                  </div>
                </div>
                <h3 style={{ fontFamily: "var(--font-manrope, sans-serif)", fontSize: "20px", fontWeight: 500, color: C.creamWarm, marginBottom: "12px", letterSpacing: "-0.005em", lineHeight: 1.2 }}>
                  Real places, real radius, ranked by popularity.
                </h3>
                <p style={{ fontSize: "14px", lineHeight: 1.65, color: C.creamText }}>
                  Every business named in a Metes neighborhood guide is pulled from live Google Places data at the moment you generate the listing. The 2.5-mile radius is enforced. The ranking is by Google Places popularity. The curation favors local brands and independents. Every place can be verified by anyone with a phone.
                </p>
              </div>
            </div>
          </div>

          <style>{`
            .diff-grid {
              display: grid;
              grid-template-columns: 1fr;
              gap: 16px;
            }
            @media (min-width: 768px) {
              .diff-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
            }
          `}</style>
        </section>

        {/* ── FAQ ── */}
        <section style={{ background: C.cream, padding: "96px 0" }}>
          <div className={CONTENT}>
            <div style={{ maxWidth: "720px", marginBottom: "48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-jetbrains, monospace)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: C.goldDeep, marginBottom: "16px" }}>
                <span style={{ display: "inline-block", height: "1px", width: "18px", background: C.goldDeep }} />
                Common questions
              </div>
              <h2 style={{ ...sectionHeadline, marginBottom: "16px" }}>
                What agents ask about <em style={{ fontStyle: "normal", color: C.goldDeep }}>the neighborhood guide</em>.
              </h2>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "880px" }}>
              {[
                {
                  q: "What exactly do I get for $35 — just the neighborhood content?",
                  a: "The neighborhood guide is one part of the full $35 listing kit. The kit also includes the MLS description, listing headline, social posts for Facebook and Instagram, a four-email campaign, photo curation with captions and renaming, and a Fair Housing compliance review on every asset.",
                },
                {
                  q: "How does Metes know which places to pick from a long list?",
                  a: "Brand-tier curation. A Whole Foods on the corner sells houses. A Walmart does not. Metes prioritizes premium grocery, local independents, beloved coffee shops, and chef-driven restaurants. Generic chains and value-tier brands get deprioritized. If a category has nothing worth highlighting, that section stays empty rather than padded.",
                },
                {
                  q: "What if my listing is rural and there's nothing within 2.5 miles?",
                  a: "If there's nothing of substance nearby, the neighborhood guide returns empty rather than fabricated. The lifestyle paragraph then leans on the property itself — acreage, privacy, named natural features. Metes never invents proximity to amenities that aren't there.",
                },
                {
                  q: "Can I edit the neighborhood content before publishing?",
                  a: "Yes. Everything ships as plain text. The lifestyle paragraph and category sections are strong defaults, not locked artifacts. Edit any line, swap any place, restructure any section before paste.",
                },
                {
                  q: "What makes this different from asking ChatGPT to write neighborhood copy?",
                  a: "ChatGPT writes neighborhood copy from training data, not from current local information. It invents businesses, names places that closed years ago, and produces plausible-sounding text that often doesn't match reality. Metes pulls from Google Places at the moment you generate the listing — every business named is real, current, and within a defined radius.",
                },
                {
                  q: "Does the neighborhood guide go through the Fair Housing audit too?",
                  a: "Yes. Neighborhood copy is where most Fair Housing violations slip through — phrases like 'walking distance,' 'family-friendly,' or 'exclusive community.' Every line of the neighborhood guide is reviewed by the same audit that runs on the MLS description, social posts, and emails.",
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
                  <div style={{ marginTop: "14px", fontSize: "14px", lineHeight: 1.65, color: C.inkSoft }}>
                    {a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section style={{ background: C.forestDeep, padding: "96px 0", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(184,153,104,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(184,153,104,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
          <div className={CONTENT} style={{ position: "relative" }}>
            <div style={{ maxWidth: "720px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontFamily: "var(--font-jetbrains, monospace)", fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: C.goldSoft, marginBottom: "16px" }}>
                <span style={{ display: "inline-block", height: "1px", width: "18px", background: C.goldSoft }} />
                Every listing kit. Every neighborhood.
              </div>
              <h2 style={{ ...sectionHeadline, color: C.creamWarm, marginBottom: "20px" }}>
                Neighborhood intelligence ships with <em style={{ fontStyle: "normal", color: C.gold }}>every $35 listing</em>.
              </h2>
              <p style={{ ...sectionSub, color: C.creamText, marginBottom: "32px", maxWidth: "600px" }}>
                Upload your photos and notes. Metes returns the MLS description, social posts, email campaign, photo curation, and a neighborhood guide built from real local data — all in under 60 seconds. No subscription, no commitment.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <Link
                  href="/"
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
                  Generate your listing kit — $35
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  href="/tools/neighborhood-guide-generator"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "transparent",
                    border: `1px solid ${C.borderDark}`,
                    color: C.creamWarm,
                    fontFamily: "var(--font-manrope, sans-serif)",
                    fontSize: "14px",
                    fontWeight: 500,
                    padding: "14px 28px",
                    borderRadius: "9px",
                    textDecoration: "none",
                  }}
                >
                  Try the free version
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
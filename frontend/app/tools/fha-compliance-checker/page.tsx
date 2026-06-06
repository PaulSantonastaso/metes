import type { Metadata } from "next";
import { ComplianceCheckClient } from "./ComplianceCheckClient";

export const metadata: Metadata = {
  title: "Free Fair Housing Compliance Checker for Real Estate Agents | metes",
  description:
    "Free AI tool that scans your MLS description for Fair Housing violations in 3 seconds. Catches accidental discriminatory language before HUD does. No signup required.",
  keywords: [
    "fair housing compliance",
    "FHA compliance checker",
    "real estate listing audit",
    "MLS description checker",
    "fair housing language",
    "real estate compliance tool",
  ],
  alternates: {
    canonical: "https://www.metes.app/tools/fha-compliance-checker",
  },
  openGraph: {
    title: "Free Fair Housing Compliance Checker for Real Estate Agents",
    description:
      "Scan your MLS description for Fair Housing violations in 3 seconds. Free AI-powered audit. No signup.",
    url: "https://www.metes.app/tools/fha-compliance-checker",
    siteName: "metes",
    type: "website",
    images: [
      {
        url: "https://www.metes.app/og/fha-compliance-checker.png",
        width: 1200,
        height: 630,
        alt: "metes Fair Housing Compliance Checker — free tool for real estate agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Fair Housing Compliance Checker for Real Estate Agents",
    description:
      "Scan your MLS description for Fair Housing violations in 3 seconds. Free, no signup.",
    images: ["https://www.metes.app/og/fha-compliance-checker.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─────────────────────────────────────────────────────────────────
// JSON-LD — FAQPage + WebApplication
// ─────────────────────────────────────────────────────────────────

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can a single word in my listing really cause a Fair Housing complaint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. HUD prosecutes language that signals preference based on race, color, religion, sex, familial status, disability, or national origin — regardless of whether you meant discrimination. Phrases like 'great for families,' 'walking distance,' or 'safe neighborhood' have all been the basis for complaints. Civil penalties start at $16,000 for a first offense.",
      },
    },
    {
      "@type": "Question",
      name: "Does the checker save my listing draft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The text you paste in is scanned and discarded after the result is returned. We track usage by IP for rate limiting, but the draft itself is not stored, logged, or used for any other purpose.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is the audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The checker catches the language patterns HUD has historically prosecuted plus the phrases that appear in NAR's Fair Housing reference materials. No automated review replaces legal counsel for high-stakes situations, but the checker catches the everyday accidents — the phrases an agent didn't realize were a problem.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between this and what my broker reviews?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most broker reviews happen after the listing is written and submitted. By then, you've already invested time in the copy. This checker runs in seconds while you're still drafting, so you catch issues before they become broker pushback or, worse, a published listing with a violation.",
      },
    },
    {
      "@type": "Question",
      name: "Is the checker free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three scans per session are completely free, no email required. After that, an email unlocks unlimited continued use — no card on file, no subscription, no sales follow-up.",
      },
    },
    {
      "@type": "Question",
      name: "Why use this instead of just reading the Fair Housing rules myself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most violations aren't from agents who haven't read the rules — they're from agents who know the rules and still miss specific phrases under deadline. The checker catches accidents. It also catches the phrases that aren't technically prohibited but have been used in HUD complaints, which is harder to predict without case experience.",
      },
    },
    {
      "@type": "Question",
      name: "Can the checker suggest compliant rewrites?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every flagged phrase comes with a suggested rewrite that preserves the marketing intent without the compliance risk. 'Walking distance to the park' becomes 'two blocks from the park.' 'Great for families' becomes a description of the actual feature — the fenced yard, the playroom, the school district.",
      },
    },
  ],
};

const toolJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Fair Housing Compliance Checker",
  description:
    "Free AI tool for real estate agents to scan MLS descriptions for Fair Housing violations. Catches protected-class language and suggests compliant rewrites before publication.",
  url: "https://www.metes.app/tools/fha-compliance-checker",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web Browser",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
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

export default function ComplianceCheckPage() {
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
      <ComplianceCheckClient />
    </>
  );
}
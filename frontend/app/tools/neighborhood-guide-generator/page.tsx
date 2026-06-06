import type { Metadata } from "next";
import { NeighborhoodToolClient } from "./NeighborhoodToolClient";

// ─────────────────────────────────────────────────────────────────
// SEO metadata
// ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Free Neighborhood Description Generator for Real Estate Listings | metes",
  description:
    "Free AI tool that builds a multi-section neighborhood guide for any MLS listing. Type an address, get a lifestyle paragraph plus categorical breakdowns powered by live local data. Fair Housing-aware, MLS-character-safe. No signup for your first three generations.",
  keywords: [
    "neighborhood description generator",
    "MLS neighborhood description",
    "real estate neighborhood guide generator",
    "free neighborhood guide real estate",
    "community description MLS",
    "area description MLS listing",
    "Zillow what I love about the neighborhood",
    "Fair Housing neighborhood description",
    "real estate AI neighborhood",
    "MLS public remarks neighborhood",
  ],
  alternates: {
    canonical: "https://www.metes.app/tools/neighborhood-guide-generator",
  },
  openGraph: {
    title: "Free Neighborhood Description Generator for Real Estate Listings",
    description:
      "Type an address. Get a multi-section neighborhood guide powered by live local data. Free, Fair Housing-aware, MLS-ready.",
    url: "https://www.metes.app/tools/neighborhood-guide-generator",
    siteName: "metes",
    type: "website",
    images: [
      {
        url: "https://www.metes.app/og/neighborhood-guide-generator.png",
        width: 1200,
        height: 630,
        alt: "metes Neighborhood Description Generator — free tool for real estate agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Neighborhood Description Generator for Real Estate Listings",
    description:
      "Type an address. Get a multi-section neighborhood guide powered by live local data. Free, MLS-ready.",
    images: ["https://www.metes.app/og/neighborhood-guide-generator.png"],
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
      name: "What should an MLS neighborhood description include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A strong MLS neighborhood description balances lifestyle context with specific, verifiable details — named parks, grocery stores, dining, and walkable destinations. Avoid demographic language and proximity terms that imply mobility (the Fair Housing Act prohibits these). Stick to descriptions of the area, not assumptions about who lives there.",
      },
    },
    {
      "@type": "Question",
      name: "How long should the neighborhood section of an MLS listing be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most MLS community or neighborhood fields cap at around 500 characters. Zillow research suggests a 250-word total listing description, which means the neighborhood portion should be roughly 50-80 words inside that budget. Our generator targets approximately 400 characters for the lifestyle paragraph to fit safely inside most MLS field limits.",
      },
    },
    {
      "@type": "Question",
      name: "What goes in Zillow's What I Love About the Neighborhood field?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The What I Love About the Neighborhood field on Zillow is meant to capture specific, sensory, lifestyle-forward observations about the area — not a list of amenities. Reference named places (parks, coffee shops, trails) and the kind of daily life the neighborhood enables. Our lifestyle paragraph fits this field directly with no editing required.",
      },
    },
    {
      "@type": "Question",
      name: "Is using phrases like family-friendly or walking distance Fair Housing compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Family-friendly implies a preference based on familial status, which is a protected class under the Fair Housing Act. Walking distance can be interpreted as excluding buyers with mobility impairments. Safe alternatives include describing the property layout (multiple living areas) or using neutral proximity language (short distance, two blocks from). Our generator avoids these phrases by default.",
      },
    },
    {
      "@type": "Question",
      name: "How is this different from asking ChatGPT to write a neighborhood description?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generic AI tools generate plausible-sounding neighborhood text from training data alone — which is why their output frequently invents businesses or misnames real ones. Our generator anchors every guide in live Google Places data, pulled at generation time using the property's address. The places, parks, and dining we mention are real, current, and within a defined radius of the listing.",
      },
    },
    {
      "@type": "Question",
      name: "How does this work with my MLS character limits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The lifestyle paragraph is sized for direct paste into MLS community or neighborhood fields, which typically cap around 500 characters. We show the live character count beneath the paragraph so you know it fits. The categorical sections (everyday essentials, outdoor recreation, dining, wellness) are formatted as reference content for use elsewhere — listing presentation talking points, buyer emails, or open house conversation cues.",
      },
    },
  ],
};

const toolJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Neighborhood Description Generator",
  description:
    "Free AI tool for real estate agents to generate Fair Housing-aware neighborhood descriptions for MLS listings using live Google Places data.",
  url: "https://www.metes.app/tools/neighborhood-guide-generator",
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

// ─────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────

export default function NeighborhoodToolPage() {
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
      <NeighborhoodToolClient />
    </>
  );
}
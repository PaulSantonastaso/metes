import type { Metadata } from "next";
import { DescriptionCheckerClient } from "./DescriptionCheckerClient";

export const metadata: Metadata = {
  title: "Free Listing Description Checker — MLS Quality Analyzer",
  description:
    "Paste your MLS listing description and get instant feedback on hook strength, AI tells, clichés, length, and more. Free, no signup for first 3 scans.",
  keywords: [
    "listing description checker",
    "real estate description analyzer",
    "MLS description checker",
    "listing description tool",
    "AI listing description detector",
    "real estate description tips",
    "how to write MLS descriptions",
  ],
  alternates: {
    canonical: "https://www.metes.app/tools/listing-description-checker",
  },
  openGraph: {
    title: "Free Listing Description Checker",
    description:
      "Get instant feedback on your MLS description. Catches AI tells, real estate clichés, weak hooks, and length issues. Free.",
    url: "https://www.metes.app/tools/listing-description-checker",
    siteName: "metes",
    type: "website",
    images: [
      {
        url: "https://www.metes.app/og/listing-description-checker.png",
        width: 1200,
        height: 630,
        alt: "metes Listing Description Checker — free tool for real estate agents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Listing Description Checker",
    description:
      "Paste your description. Get instant feedback on hooks, AI tells, clichés, and length. Free.",
    images: ["https://www.metes.app/og/listing-description-checker.png"],
  },
  robots: { index: true, follow: true },
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
      name: "How long should an MLS description be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The sweet spot is 800 to 950 characters. Most major MLS boards cap public remarks at 950 characters, which means descriptions that exceed that limit either get rejected or truncated mid-sentence on the public listing. Under 600 characters reads as undersell; the buyer assumes the property got less effort than it deserved.",
      },
    },
    {
      "@type": "Question",
      name: "What's the MLS character limit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies by board. Stellar MLS, RMLS, and many other major boards cap at 950 characters. Some boards allow 1,500. A few smaller boards go higher. The safe target across most markets is to write to 880 characters with a 70-character buffer.",
      },
    },
    {
      "@type": "Question",
      name: "How do I make my listing description sound less like ChatGPT?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cut the words that appear in LLM training data far more often than in human writing — delve, tapestry, embark, captivating, elegant — and the phrases that have become AI signatures: 'more than just,' 'in today's market,' 'whether you're X or Y,' 'the perfect blend of.' Replace em-dash pairs with periods. Use concrete details instead of adjective stacks.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use AI to write listing descriptions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, but plan to edit. AI-generated drafts are useful starting points but tend to lean heavily on a small set of statistically over-represented words and patterns. Run the draft through a checker, replace the flagged language with specific details, and the result will read human even though it started as a generated draft.",
      },
    },
    {
      "@type": "Question",
      name: "What words should I avoid in listing descriptions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stunning, meticulously maintained, boasts, showcases, charming, nestled, must-see, dream home, immaculate, exquisite, tranquil oasis. Also avoid 'perfect for' plus any buyer type because these phrases can trigger Fair Housing violations.",
      },
    },
    {
      "@type": "Question",
      name: "Should I mention the neighborhood by name?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and ideally with specific named places. 'Great location' tells the buyer nothing. Specific named places signal that the agent knows the area and that the location actually delivers what the price promises.",
      },
    },
  ],
};

const toolJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Listing Description Checker",
  description:
    "Free AI tool for real estate agents that evaluates MLS listing descriptions against seven craft criteria: opening hook, specific vs. generic language, AI/ChatGPT tells, sensory and lifestyle language, neighborhood context, length and structure, and closing.",
  url: "https://www.metes.app/tools/listing-description-checker",
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

export default function Page() {
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
      <DescriptionCheckerClient />
    </>
  );
}
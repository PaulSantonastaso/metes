"use client";

import { useState } from "react";
import { Check, Lock, Loader2 } from "lucide-react";
import { cn, formatPrice } from "@/lib/utils";
import { PRICING, type PurchaseOption } from "@/types";
import posthog from "posthog-js";

interface PurchaseCardProps {
  sessionId: string;
  /** Whether content generation is still in progress */
  isGenerating?: boolean;
  onCheckout: (option: PurchaseOption, agentEmail: string) => Promise<void>;
  className?: string;
}

const LISTING_FEATURES = [
  "MLS description that sells the lifestyle",
  "Social pack — Facebook + 2× Instagram",
  "4-email drip — Just Listed through Just Sold",
  "Fair Housing audit on every asset",
];

const PHOTO_FEATURES = [
  "Everything in Listing Copy",
  "Color correction + exposure balancing",
  "Sky enhancement on every eligible exterior",
  "Perspective + lens distortion fix",
];

export function PurchaseCard({
  isGenerating = false,
  onCheckout,
  className,
}: PurchaseCardProps) {
  const [selected, setSelected] = useState<PurchaseOption>("listing");
  const [agentEmail, setAgentEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);

  const total = selected === "listing" ? PRICING.listing : PRICING.both;

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleCheckout = async () => {
    if (!validateEmail(agentEmail)) {
      setEmailError("Enter a valid email to receive your package.");
      return;
    }
    setEmailError(null);
    setIsLoading(true);
    posthog.capture("checkout_started", {
      option: selected,
      total_price: total,
    });
    try {
      await onCheckout(selected, agentEmail);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-card p-4 shadow-sm",
        className
      )}
    >
      {/* Option: Listing Copy */}
      <OptionCard
        selected={selected === "listing"}
        onSelect={() => {
          setSelected("listing");
          posthog.capture("purchase_option_selected", { option: "listing", price: PRICING.listing });
        }}
        title="Listing Copy"
        price={formatPrice(PRICING.listing)}
        description="Everything you need to launch a listing"
        features={LISTING_FEATURES}
      />

      {/* Optional add-on label */}
      <p className="mb-1.5 mt-3 font-mono text-[10px] uppercase tracking-[0.1em] text-metes-gold-deep">
        Optional add-on
      </p>

      {/* Option: Listing + Photos */}
      <OptionCard
        accent
        selected={selected === "both"}
        onSelect={() => {
          setSelected("both");
          posthog.capture("purchase_option_selected", { option: "both", price: PRICING.both });
        }}
        title="Listing + Photo Editing"
        price={formatPrice(PRICING.both)}
        description={`Professionally edited photos +${formatPrice(PRICING.photos)}`}
        features={PHOTO_FEATURES}
      />

      {/* Divider + total */}
      <div className="my-3 h-px bg-border" />
      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">Total</span>
        <span className="text-sm font-semibold text-foreground">
          {formatPrice(total)}
        </span>
      </div>

      {/* Agent email input */}
      <div className="mb-3">
        <input
          type="email"
          placeholder="your@email.com"
          value={agentEmail}
          onChange={(e) => {
            setAgentEmail(e.target.value);
            if (emailError) setEmailError(null);
          }}
          className={cn(
            "w-full rounded-md border border-border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring",
            emailError && "border-destructive focus:ring-destructive"
          )}
        />
        {emailError && (
          <p className="mt-1 text-[11px] text-destructive">{emailError}</p>
        )}
      </div>

      {/* Checkout button */}
      <button
        onClick={handleCheckout}
        disabled={isLoading || isGenerating}
        style={{ background: "var(--metes-forest)", color: "var(--metes-cream)" }}
        className={cn(
          "flex w-full items-center justify-center gap-2 rounded-[10px] py-3 text-xs font-semibold transition-opacity",
          (isLoading || isGenerating) ? "cursor-not-allowed opacity-60" : "hover:opacity-90"
        )}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
            Redirecting…
          </>
        ) : (
          <>
            <Lock className="h-3 w-3" />
            Checkout — {formatPrice(total)}
          </>
        )}
      </button>

      {/* Trust copy */}
      <p className="mt-2 text-center text-[10px] text-muted-foreground">
        Secure checkout via Stripe
      </p>
      <p className="text-center text-[10px] text-muted-foreground">
        Package delivered by email + download
      </p>
    </div>
  );
}

// ── Internal option card ──────────────────────────────────────────

interface OptionCardProps {
  selected: boolean;
  onSelect: () => void;
  title: string;
  price: string;
  description: string;
  features: string[];
  /** Upsell treatment — gold dashed border when unselected */
  accent?: boolean;
}function OptionCard({
  selected,
  onSelect,
  title,
  price,
  description,
  features,
  accent = false,
}: OptionCardProps) {
  return (
    <button
      onClick={onSelect}
      style={{
        borderColor: selected
          ? "var(--metes-forest)"
          : accent
          ? "var(--metes-gold)"
          : undefined,
        borderStyle: !selected && accent ? "dashed" : "solid",
        background: selected ? "rgba(31,61,46,0.05)" : undefined,
      }}
      className={cn(
        "w-full rounded-lg border p-3 text-left transition-colors",
        !selected && !accent && "border-border hover:border-foreground/30"
      )}
    >
      <div className="mb-1 flex items-start justify-between gap-2">
        <span className="text-xs font-semibold text-foreground">{title}</span>
        <span className="text-xs font-semibold text-foreground">{price}</span>
      </div>
      <p className="mb-2 text-[11px] text-muted-foreground">{description}</p>
      <ul className="flex flex-col gap-1">
        {features.map((feat) => (
          <li key={feat} className="flex items-center gap-1.5">
            <Check
              className={cn(
                "h-3 w-3 shrink-0",
                selected ? "text-foreground" : "text-muted-foreground"
              )}
            />
            <span className="text-[11px] text-muted-foreground">{feat}</span>
          </li>
        ))}
      </ul>
    </button>
  );
}
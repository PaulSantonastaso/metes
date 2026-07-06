"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { getImageUrl } from "@/lib/api";
import { ContentSection } from "./PreviewBlocks";
import type { GeneratedContent, ListingImage } from "@/types";
import posthog from "posthog-js";

// ─────────────────────────────────────────────────────────────────
// CopyButton — reusable clipboard helper
// ─────────────────────────────────────────────────────────────────

function CopyButton({ text, className, contentType }: { text: string; className?: string; contentType?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    posthog.capture("content_copied", { content_type: contentType ?? "unknown" });
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "flex items-center gap-1 rounded-md border border-border px-2 py-1 text-[10px] text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground",
        className
      )}
    >
      {copied ? (
        <><Check className="h-3 w-3 text-metes-sage" />Copied</>
      ) : (
        <><Copy className="h-3 w-3" />Copy</>
      )}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────
// MlsDescription
// ─────────────────────────────────────────────────────────────────

interface MlsDescriptionProps {
  content: GeneratedContent;
  isPurchased: boolean;
}

export function MlsDescription({ content, isPurchased }: MlsDescriptionProps) {
  return (
    <ContentSection
      title="MLS Description"
      tone="moss"
      badge={
        isPurchased ? (
          <span className="text-[10px] font-medium text-metes-sage">✓ Copy enabled</span>
        ) : (
          <span className="text-[10px] text-muted-foreground">Purchase to copy</span>
        )
      }
    >
      <div className={cn("relative", !isPurchased && "copy-gated")}>
        <p className="text-xs leading-relaxed text-foreground">
          {content.mlsDescription}
        </p>
        <p className="mt-2 text-[10px] text-metes-sage">
          ✓ {content.mlsCharCount} / 950 characters
        </p>
        {isPurchased && (
          <div className="mt-3 flex justify-end">
            <CopyButton text={content.mlsDescription} contentType="mls_description" />
          </div>
        )}
      </div>
    </ContentSection>
  );
}

// ─────────────────────────────────────────────────────────────────
// SocialLaunchPack
// ─────────────────────────────────────────────────────────────────

interface SocialLaunchPackProps {
  content: GeneratedContent;
  sessionId: string;
  images: ListingImage[];
  isPurchased: boolean;
}

const PLATFORM_LABELS: Record<string, string> = {
  facebook:    "Facebook",
  instagram_1: "Instagram 1",
  instagram_2: "Instagram 2",
};

export function SocialLaunchPack({
  content,
  sessionId,
  images,
  isPurchased,
}: SocialLaunchPackProps) {
  const imageMap = Object.fromEntries(images.map((img) => [img.id, img]));

  return (
    <ContentSection
      title="Social Launch Pack"
      tone="gold"
      badge={
        isPurchased ? (
          <span className="text-[10px] font-medium text-metes-sage">✓ Copy enabled</span>
        ) : null
      }
    >
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {content.socialPosts.map((post) => {
          const img = imageMap[post.imageId];

          return (
            <div
              key={post.platform}
              className="overflow-hidden rounded-lg border border-border"
            >
              {/* Platform image */}
              <div className="h-[140px] bg-muted">
                {img && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={getImageUrl(sessionId, img.id)}
                    alt={img.roomType}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              <div className="p-2.5">
                <p className="mb-1.5 text-[9px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {PLATFORM_LABELS[post.platform] ?? post.platform}
                </p>
                <p
                  className={cn(
                    "text-[11px] leading-relaxed text-foreground",
                    !isPurchased && "copy-gated"
                  )}
                >
                  {post.caption}
                </p>
                {isPurchased && (
                  <div className="mt-2 flex justify-end">
                    <CopyButton
                      text={`${post.caption}\n\n${post.hashtags.join(" ")}`}
                      contentType={`social_${post.platform}`}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </ContentSection>
  );
}

// ─────────────────────────────────────────────────────────────────
// EmailCampaign
// ─────────────────────────────────────────────────────────────────

interface EmailCampaignProps {
  content: GeneratedContent;
  isPurchased: boolean;
}

const EMAIL_TAB_LABELS: Record<string, string> = {
  just_listed:   "Just Listed",
  open_house:    "Open House",
  why_this_home: "Why This Home",
  just_sold:     "Just Sold",
};

export function EmailCampaign({ content, isPurchased }: EmailCampaignProps) {
  const [activeType, setActiveType] = useState(content.emails[0]?.type ?? "just_listed");
  const activeEmail = content.emails.find((e) => e.type === activeType);

  return (
    <ContentSection
      title="Email Campaign"
      tone="forest"
      badge={
        isPurchased ? (
          <span className="text-[10px] font-medium text-metes-sage">✓ Copy enabled</span>
        ) : null
      }
    >
      {/* Tab row */}
      <div className="-mx-4 -mt-4 mb-4 flex border-b border-border">
        {content.emails.map((email) => (
          <button
            key={email.type}
            onClick={() => setActiveType(email.type)}
            className={cn(
              "border-b-2 px-3 py-2 text-[10px] transition-colors",
              email.type === activeType
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            )}
          >
            {EMAIL_TAB_LABELS[email.type] ?? email.type}
          </button>
        ))}
      </div>

      {activeEmail && (
        <div className={cn(!isPurchased && "copy-gated")}>
          <p className="mb-0.5 text-xs font-semibold text-foreground">
            {activeEmail.subject}
          </p>
          <p className="mb-3 text-[11px] text-muted-foreground">
            {activeEmail.previewText}
          </p>
          <p className="text-[11px] leading-relaxed text-foreground">
            {activeEmail.body}
          </p>
          {isPurchased && (
            <div className="mt-3 flex justify-end">
              <CopyButton
                text={`Subject: ${activeEmail.subject}\n\n${activeEmail.body}`}
                contentType={`email_${activeType}`}
              />
            </div>
          )}
        </div>
      )}
    </ContentSection>
  );
}

// ─────────────────────────────────────────────────────────────────
// CompliancePanel
// ─────────────────────────────────────────────────────────────────

interface CompliancePanelProps {
  content: GeneratedContent;
  isPurchased: boolean;
}

export function CompliancePanel({ content, isPurchased }: CompliancePanelProps) {
  const { compliance } = content;

  return (
    <ContentSection
      title="Fair Housing Compliance"
      tone="forest"
      badge={
        isPurchased ? (
          <span className="text-[10px] font-medium text-metes-sage">✓ Full audit unlocked</span>
        ) : null
      }
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-metes-sage" /><StatCell
            num={compliance.passed}
            label="Passed"
            color="text-green-700"
          />
          <StatCell
            num={compliance.revised}
            label="Revised"
            color="text-amber-600"
          />
          <StatCell
            num={compliance.flagged}
            label="Flagged"
            color={compliance.flagged > 0 ? "text-red-600" : "text-green-700"}
          />
          <span className="text-xs font-medium text-foreground">
            {compliance.totalAssets} assets reviewed
          </span>
        </div>
        <div className="flex items-center gap-4">
          <StatCell
            num={compliance.passed}
            label="Passed"
            color="text-metes-sage"
          />
          <StatCell
            num={compliance.revised}
            label="Revised"
            color="text-metes-gold-deep"
          />
          <StatCell
            num={compliance.flagged}
            label="Flagged"
            color={compliance.flagged > 0 ? "text-destructive" : "text-metes-sage"}
          />
        </div>
      </div>
    </ContentSection>
  );
}

function StatCell({
  num,
  label,
  color,
}: {
  num: number;
  label: string;
  color: string;
}) {
  return (
    <div className="text-center">
      <p className={cn("text-base font-semibold leading-none", color)}>{num}</p>
      <p className="mt-0.5 text-[9px] text-muted-foreground">{label}</p>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// SuccessBanner
// ─────────────────────────────────────────────────────────────────

interface SuccessBannerProps {
  agentEmail: string;
  onDownload: () => void;
}

export function SuccessBanner({ agentEmail, onDownload }: SuccessBannerProps) {
  return (
    <div
      className="border-b"
      style={{
        background: "rgba(92,138,110,0.10)",
        borderColor: "rgba(92,138,110,0.25)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4 px-6 py-3 lg:px-12">
        <div className="flex items-center gap-3">
          <div
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
            style={{ background: "#5C8A6E" }}
          >
            <Check className="h-3.5 w-3.5" style={{ color: "var(--metes-cream)" }} />
          </div>
          <div className="min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-metes-moss">
              Payment confirmed
            </p>
            <p className="truncate text-2xs text-foreground">
              Your package is ready — sent to{" "}
              <span className="font-medium">{agentEmail}</span> · link valid 7 days
            </p>
          </div>
        </div>
        <button
          onClick={onDownload}
          style={{ background: "var(--metes-forest)", color: "var(--metes-cream)" }}
          className="hidden shrink-0 items-center gap-2 rounded-md px-4 py-2 text-xs font-semibold transition-opacity hover:opacity-90 lg:flex"
        >
          Download Package
        </button>
      </div>
    </div>
  );
}
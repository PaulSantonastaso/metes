import { cn } from "@/lib/utils";
import { getImageUrl } from "@/lib/api";
import { formatListPrice } from "@/lib/utils";
import type { ListingImage, PropertyDetails } from "@/types";
 
// ─────────────────────────────────────────────────────────────────
// PhotoStrip
// ─────────────────────────────────────────────────────────────────
 
interface PhotoStripProps {
  sessionId: string;
  images: ListingImage[];
  activeImageId?: string;
  onSelect?: (imageId: string) => void;
  className?: string;
}
 
export function PhotoStrip({
  sessionId,
  images,
  activeImageId,
  onSelect,
  className,
}: PhotoStripProps) {
  const sorted = [...images].sort((a, b) => a.rank - b.rank);
 
  return (
    <div
      className={cn(
        "mb-5 flex gap-1.5 overflow-x-auto scrollbar-thin pb-1",
        className
      )}
    >
      {sorted.map((img) => (
        <button
          key={img.id}
          type="button"
          onClick={() => onSelect?.(img.id)}
          className={cn(
            "relative h-16 w-[80px] shrink-0 overflow-hidden rounded-md border-2 transition-all",
            img.id === activeImageId
              ? "border-foreground"
              : "border-transparent hover:border-foreground/30"
          )}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={getImageUrl(sessionId, img.id)}
            alt={img.roomType}
            className="h-full w-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}
 
// ─────────────────────────────────────────────────────────────────
// ListingHeader
// ─────────────────────────────────────────────────────────────────
 
interface ListingHeaderProps {
  property: PropertyDetails;
  headline?: string;
  isPurchased: boolean;
  className?: string;
}
 
export function ListingHeader({
  property,
  headline,
  isPurchased,
  className,
}: ListingHeaderProps) {
  return (
    <div className={cn("mb-6", className)}>
      {/* Price leads — Zillow anatomy */}
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span
          className="font-manrope text-foreground"
          style={{
            fontWeight: 500,
            fontSize: "clamp(24px, 3.2vw, 34px)",
            lineHeight: 1.05,
            letterSpacing: "-0.015em",
          }}
        >
          {formatListPrice(property.listPrice)}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
          {property.beds} bd · {property.baths} ba · {property.sqft.toLocaleString()} sqft
        </span>
      </div>
      <p className="mb-4 mt-1 text-xs text-muted-foreground">
        {property.address}, {property.city}, {property.state} {property.zip}
      </p>
 
      {/* Headline — gold rail, the "AI wrote this" signature */}
      {headline ? (
        <div
          className={cn(
            "rounded-r-lg border-l-[3px] bg-card px-4 py-2.5",
            !isPurchased && "copy-gated"
          )}
          style={{ borderLeftColor: "var(--metes-gold)" }}
        >
          <p className="section-label mb-1">Listing headline</p>
          <p className="text-xs font-medium text-foreground">{headline}</p>
        </div>
      ) : (
        // Skeleton
        <div
          className="rounded-r-lg border-l-[3px] bg-card px-4 py-2.5"
          style={{ borderLeftColor: "var(--metes-gold)" }}
        >
          <div className="mb-1.5 h-2.5 w-24 shimmer rounded" />
          <div className="h-3 w-56 shimmer rounded" />
        </div>
      )}
    </div>
  );
}
 
// ─────────────────────────────────────────────────────────────────
// ContentSection — reusable wrapper used for all content panels
// ─────────────────────────────────────────────────────────────────
 
export type SectionTone = "moss" | "gold" | "forest";
 
const TONE_STYLES: Record<SectionTone, { color: string; bg: string }> = {
  moss:   { color: "#4A6B53", bg: "rgba(74,107,83,0.08)" },
  gold:   { color: "#9A7E50", bg: "rgba(184,153,104,0.12)" },
  forest: { color: "#1F3D2E", bg: "rgba(31,61,46,0.08)" },
};
 
function SectionTag({ title, tone = "moss" }: { title: string; tone?: SectionTone }) {
  const t = TONE_STYLES[tone];
  return (
    <span
      className="inline-flex items-center rounded px-2 py-1 font-mono text-[10px] uppercase tracking-[0.08em]"
      style={{ color: t.color, background: t.bg }}
    >
      {title}
    </span>
  );
}
 
interface ContentSectionProps {
  title: string;
  tone?: SectionTone;
  badge?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}
 
export function ContentSection({
  title,
  tone,
  badge,
  children,
  className,
}: ContentSectionProps) {
  return (
    <div
      className={cn("mb-4 overflow-hidden rounded-lg border border-border bg-card", className)}
    >
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <SectionTag title={title} tone={tone} />
        {badge && <div>{badge}</div>}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}
 
// ─────────────────────────────────────────────────────────────────
// SkeletonSection — shimmer placeholder in the shape of a section
// ─────────────────────────────────────────────────────────────────
 
interface SkeletonSectionProps {
  title: string;
  tone?: SectionTone;
  lineCount?: number;
  generatingLabel?: string;
  className?: string;
}
 
export function SkeletonSection({
  title,
  tone,
  lineCount = 5,
  generatingLabel,
  className,
}: SkeletonSectionProps) {
  return (
    <div
      className={cn("mb-4 overflow-hidden rounded-lg border border-border bg-card", className)}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <SectionTag title={title} tone={tone} />
        {generatingLabel && (
          <span className="flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-[10px] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-pulse" />
            {generatingLabel}
          </span>
        )}
      </div>
 
      {/* Shimmer lines */}
      <div className="flex flex-col gap-1.5 p-4">
        {Array.from({ length: lineCount }).map((_, i) => (
          <div
            key={i}
            className="shimmer h-2.5 rounded"
            style={{ width: `${[100, 88, 95, 72, 83, 78, 91][i % 7]}%` }}
          />
        ))}
      </div>
    </div>
  );
}
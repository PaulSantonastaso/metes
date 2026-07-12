import Link from "next/link";
import { HeaderNav } from "./HeaderNav";

// ─────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────

interface HeaderProps {
  /**
   * Visual variant.
   * - "light" — cream background, forest text (default, matches homepage)
   * - "dark"  — forest background, cream text (for use on dark-content pages)
   */
  variant?: "light" | "dark";

  /**
   * Whether the header sticks to the top of the viewport on scroll.
   * Defaults to true.
   */
  sticky?: boolean;
}

// ─────────────────────────────────────────────────────────────────
// Header — server component shell
// Delegates all interactive nav to HeaderNav (client component)
// ─────────────────────────────────────────────────────────────────

export function Header({ variant = "light", sticky = true }: HeaderProps) {
  const isDark = variant === "dark";

  // ── Container classes ──
  const containerClasses = [
    "w-full border-b",
    sticky ? "sticky top-0 z-50" : "",
    isDark
      ? "border-[rgba(244,240,232,0.12)] bg-[#1F3D2E]"
      : "border-[rgba(20,39,30,0.10)] bg-[#EFEAE0]",
  ]
    .filter(Boolean)
    .join(" ");

  // ── Logo text color ──
  const logoColor = isDark ? "text-[#F4F0E8]" : "text-[#1F3D2E]";

  // ── Logo mark — outer square color ──
  const logoOuterClasses = isDark
    ? "bg-[#F4F0E8]"
    : "bg-[#1F3D2E]";

  // ── Logo mark — inner inset border color ──
  // Gold accent regardless of variant — it's the brand signature
  const logoInsetBorder = "border-[#B89968]";

  return (
    <header className={containerClasses}>
      <div className="mx-auto flex h-[60px] w-full max-w-[1280px] items-center justify-between px-6 lg:px-12">
        {/* ── Logo (square mark + wordmark) ── */}
        <Link
          href="/"
          aria-label="metes home"
          className={`flex items-center gap-2 font-manrope text-[17px] font-bold no-underline transition-opacity hover:opacity-90 ${logoColor}`}
        >
          {/* Logo mark — outer square with inset gold square */}
          <span
            className={`relative inline-block h-6 w-6 shrink-0 rounded-[6px] ${logoOuterClasses}`}
            aria-hidden="true"
          >
            <span
              className={`absolute inset-[6px] rounded-[2px] border-[1.5px] ${logoInsetBorder}`}
            />
          </span>
          metes
        </Link>

        {/* ── Interactive nav (client component) ── */}
        <HeaderNav variant={variant} />
      </div>
    </header>
  );
}
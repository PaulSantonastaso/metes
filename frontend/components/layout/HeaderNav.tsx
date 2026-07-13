"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

// ─────────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────────

interface HeaderNavProps {
  variant?: "light" | "dark";
}

interface SimpleNavItem {
  label: string;
  href: string;
}

interface LearnItem {
  label: string;
  href: string;
  description: string;
  image: string;
}

// ─────────────────────────────────────────────────────────────────
// Nav data
// ─────────────────────────────────────────────────────────────────

const FEATURES_ITEMS: SimpleNavItem[] = [
  { label: "Compliance audit", href: "/compliance-audit" },
  { label: "Neighborhood intelligence", href: "/neighborhood-intelligence" },
  { label: "Photo curation", href: "/photo-curation" },
];

const TOOLS_ITEMS: SimpleNavItem[] = [
  { label: "Fair Housing checker", href: "/tools/fha-compliance-checker" },
  { label: "Neighborhood guide generator", href: "/tools/neighborhood-guide-generator" },
  { label: "Listing description checker", href: "/tools/listing-description-checker" },
];

// Most recent 4 learn pieces (Weeks 3-6)
const LEARN_ITEMS: LearnItem[] = [
  {
    label: "The Fair Housing word list (2026)",
    href: "/learn/fair-housing-words-to-avoid",
    description: "Working reference organized by protected class. Every entry with why flagged and what to write instead.",
    image: "/og/fair-housing-word-list-2026.png",
  },
  {
    label: "Writing for Zillow in 2026",
    href: "/learn/writing-for-zillow-2026",
    description: "The 'What I Love' fields are gone. MLS-to-Zillow syndication is contested. What to do about it.",
    image: "/og/writing-for-zillow-2026.png",
  },
  {
    label: "Why AI listing descriptions sound the same",
    href: "/learn/ai-listing-description-tells",
    description: "Six categories of AI tells, real examples, and the architectural fix for AI that doesn't sound like AI.",
    image: "/og/ai-listing-description-tells.png",
  },
  {
    label: "Neighborhood description examples",
    href: "/learn/neighborhood-description-examples",
    description: "12 markets, real Metes output, and the framework for writing neighborhood content that doesn't fabricate.",
    image: "/og/neighborhood-description-examples.png",
  },
];

// ─────────────────────────────────────────────────────────────────
// HeaderNav — main component
// ─────────────────────────────────────────────────────────────────

export function HeaderNav({ variant = "light" }: HeaderNavProps) {
  const isDark = variant === "dark";
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close on click outside (desktop)
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close any menu when navigating
  const handleNavigate = useCallback(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, []);

  const toggleMenu = (name: string) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  const linkColor = isDark
    ? "text-[rgba(244,240,232,0.72)] hover:text-[#F4F0E8]"
    : "text-[#4A6B53] hover:text-[#1F3D2E]";

  const triggerBaseClasses = `flex items-center gap-1 text-[13px] font-medium transition-colors ${linkColor}`;

  return (
    <>
      {/* ─────────────── DESKTOP NAV ─────────────── */}
      <div ref={navRef} className="hidden md:flex items-center gap-6 relative">
        {/* Features dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleMenu("features")}
            className={triggerBaseClasses}
            aria-expanded={openMenu === "features"}
            aria-haspopup="true"
          >
            Features
            <ChevronDown className={`h-3 w-3 transition-transform ${openMenu === "features" ? "rotate-180" : ""}`} />
          </button>
          {openMenu === "features" && (
            <SimpleDropdown items={FEATURES_ITEMS} isDark={isDark} onNavigate={handleNavigate} />
          )}
        </div>

        {/* Free tools dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleMenu("tools")}
            className={triggerBaseClasses}
            aria-expanded={openMenu === "tools"}
            aria-haspopup="true"
          >
            Free tools
            <ChevronDown className={`h-3 w-3 transition-transform ${openMenu === "tools" ? "rotate-180" : ""}`} />
          </button>
          {openMenu === "tools" && (
            <SimpleDropdown items={TOOLS_ITEMS} isDark={isDark} onNavigate={handleNavigate} />
          )}
        </div>

        {/* Learn mega menu */}
        <div className="relative">
          <button
            onClick={() => toggleMenu("learn")}
            className={triggerBaseClasses}
            aria-expanded={openMenu === "learn"}
            aria-haspopup="true"
          >
            Learn
            <ChevronDown className={`h-3 w-3 transition-transform ${openMenu === "learn" ? "rotate-180" : ""}`} />
          </button>
          {openMenu === "learn" && (
            <LearnMegaMenu items={LEARN_ITEMS} isDark={isDark} onNavigate={handleNavigate} />
          )}
        </div>

        {/* Pricing direct link */}
        <Link
          href="/#pricing"
          className={`text-[13px] font-medium no-underline transition-colors ${linkColor}`}
        >
          Pricing
        </Link>

        {/* CTA button */}
        <Link
          href="/#pricing"
          className={`inline-flex items-center gap-1.5 rounded-[8px] px-4 py-2 font-manrope text-[13px] font-medium no-underline transition-colors ${
            isDark
              ? "bg-[#B89968] text-[#14271E] hover:bg-[#D9C49C]"
              : "bg-[#1F3D2E] text-[#F4F0E8] hover:bg-[#14271E]"
          }`}
        >
          Get started
        </Link>
      </div>

      {/* ─────────────── MOBILE TRIGGER ─────────────── */}
      <button
        onClick={() => setMobileOpen(true)}
        className={`md:hidden flex items-center justify-center h-10 w-10 rounded-[6px] transition-colors ${
          isDark
            ? "text-[#F4F0E8] hover:bg-[rgba(244,240,232,0.08)]"
            : "text-[#1F3D2E] hover:bg-[rgba(20,39,30,0.06)]"
        }`}
        aria-label="Open menu"
        aria-expanded={mobileOpen}
      >
        <Menu className="h-5 w-5" strokeWidth={2} />
      </button>

      {/* ─────────────── MOBILE FULL-SCREEN OVERLAY ─────────────── */}
      {mobileOpen && (
        <MobileMenu isDark={isDark} onClose={() => setMobileOpen(false)} onNavigate={handleNavigate} />
      )}
    </>
  );
}

// ─────────────────────────────────────────────────────────────────
// SimpleDropdown — Product and Free tools
// ─────────────────────────────────────────────────────────────────

function SimpleDropdown({
  items,
  isDark,
  onNavigate,
}: {
  items: SimpleNavItem[];
  isDark: boolean;
  onNavigate: () => void;
}) {
  return (
    <div
      role="menu"
      className={`absolute left-0 top-[calc(100%+12px)] z-50 min-w-[240px] rounded-[10px] border py-2 shadow-lg ${
        isDark
          ? "border-[rgba(244,240,232,0.15)] bg-[#1F3D2E]"
          : "border-[rgba(20,39,30,0.1)] bg-[#F4F0E8]"
      }`}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onNavigate}
          role="menuitem"
          className={`block px-4 py-2 font-manrope text-[13px] no-underline transition-colors ${
            isDark
              ? "text-[rgba(244,240,232,0.85)] hover:bg-[rgba(184,153,104,0.12)] hover:text-[#F4F0E8]"
              : "text-[#14271E] hover:bg-[rgba(184,153,104,0.08)]"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// LearnMegaMenu — 2x2 grid with OG images
// ─────────────────────────────────────────────────────────────────

function LearnMegaMenu({
  items,
  isDark,
  onNavigate,
}: {
  items: LearnItem[];
  isDark: boolean;
  onNavigate: () => void;
}) {
  return (
    <div
      role="menu"
      className={`absolute left-0 top-[calc(100%+12px)] z-50 w-[720px] rounded-[12px] border p-5 shadow-xl ${
        isDark
          ? "border-[rgba(244,240,232,0.15)] bg-[#1F3D2E]"
          : "border-[rgba(20,39,30,0.1)] bg-[#F4F0E8]"
      }`}
    >
      <div className={`mb-4 font-mono text-[11px] uppercase tracking-[0.14em] ${
        isDark ? "text-[#D9C49C]" : "text-[#9A7E50]"
      }`}>
        Latest guides
      </div>

      <div className="grid grid-cols-2 gap-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            role="menuitem"
            className={`group flex flex-col overflow-hidden rounded-[10px] border no-underline transition-all ${
              isDark
                ? "border-[rgba(244,240,232,0.1)] bg-[rgba(244,240,232,0.03)] hover:border-[rgba(184,153,104,0.4)] hover:bg-[rgba(184,153,104,0.08)]"
                : "border-[rgba(20,39,30,0.08)] bg-[#FAF7F0] hover:border-[rgba(184,153,104,0.4)] hover:bg-[rgba(184,153,104,0.04)]"
            }`}
          >
            {/* OG image */}
            <div className={`relative aspect-[1200/630] w-full overflow-hidden ${
              isDark ? "bg-[rgba(20,39,30,0.4)]" : "bg-[#EFEAE0]"
            }`}>
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 720px) 50vw, 340px"
                className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1.5 p-3">
              <div className={`font-manrope text-[14px] font-medium leading-tight ${
                isDark ? "text-[#F4F0E8]" : "text-[#14271E]"
              }`}>
                {item.label}
              </div>
              <div className={`font-manrope text-[12px] leading-[1.4] ${
                isDark ? "text-[rgba(244,240,232,0.6)]" : "text-[#4A6B53]"
              }`}>
                {item.description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────
// MobileMenu — full-screen overlay
// ─────────────────────────────────────────────────────────────────

function MobileMenu({
  isDark,
  onClose,
  onNavigate,
}: {
  isDark: boolean;
  onClose: () => void;
  onNavigate: () => void;
}) {
  const bg = isDark ? "#14271E" : "#EFEAE0";
  const cardBg = isDark ? "rgba(244,240,232,0.04)" : "#FAF7F0";
  const textColor = isDark ? "text-[#F4F0E8]" : "text-[#14271E]";
  const subTextColor = isDark ? "text-[rgba(244,240,232,0.7)]" : "text-[#4A6B53]";
  const borderColor = isDark ? "rgba(244,240,232,0.1)" : "rgba(20,39,30,0.08)";
  const goldLabel = isDark ? "text-[#D9C49C]" : "text-[#9A7E50]";

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col overflow-y-auto md:hidden"
      style={{ background: bg }}
      role="dialog"
      aria-modal="true"
      aria-label="Main menu"
    >
      {/* Header row with close */}
      <div
        className="sticky top-0 flex items-center justify-between px-6 py-4"
        style={{ background: bg, borderBottom: `1px solid ${borderColor}` }}
      >
        <div className={`flex items-center gap-2 font-manrope text-[17px] font-bold ${textColor}`}>
          <span
            className={`relative inline-block h-6 w-6 shrink-0 rounded-[6px] ${isDark ? "bg-[#F4F0E8]" : "bg-[#1F3D2E]"}`}
            aria-hidden="true"
          >
            <span className="absolute inset-[6px] rounded-[2px] border-[1.5px] border-[#B89968]" />
          </span>
          metes
        </div>
        <button
          onClick={onClose}
          className={`flex h-10 w-10 items-center justify-center rounded-[6px] ${textColor}`}
          aria-label="Close menu"
        >
          <X className="h-5 w-5" strokeWidth={2} />
        </button>
      </div>

      {/* Menu sections */}
      <div className="flex flex-col gap-8 px-6 py-8">
        {/* Features */}
        <div>
          <div className={`mb-3 font-mono text-[11px] uppercase tracking-[0.14em] ${goldLabel}`}>
            Features
          </div>
          <div className="flex flex-col gap-1">
            {FEATURES_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={`py-2 font-manrope text-[16px] no-underline ${textColor}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Free tools */}
        <div>
          <div className={`mb-3 font-mono text-[11px] uppercase tracking-[0.14em] ${goldLabel}`}>
            Free tools
          </div>
          <div className="flex flex-col gap-1">
            {TOOLS_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={`py-2 font-manrope text-[16px] no-underline ${textColor}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Learn — with images */}
        <div>
          <div className={`mb-3 font-mono text-[11px] uppercase tracking-[0.14em] ${goldLabel}`}>
            Latest guides
          </div>
          <div className="flex flex-col gap-3">
            {LEARN_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={`flex gap-3 overflow-hidden rounded-[10px] border p-2 no-underline ${textColor}`}
                style={{ background: cardBg, borderColor }}
              >
                <div
                  className="relative aspect-[1200/630] h-16 shrink-0 overflow-hidden rounded-[6px]"
                  style={{ background: isDark ? "rgba(20,39,30,0.4)" : "#EFEAE0" }}
                >
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <div className={`font-manrope text-[14px] font-medium leading-tight ${textColor}`}>
                    {item.label}
                  </div>
                  <div className={`mt-1 font-manrope text-[12px] leading-tight ${subTextColor}`}>
                    {item.description.split(".")[0]}.
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky bottom CTA */}
      <div
        className="sticky bottom-0 mt-auto px-6 py-4"
        style={{ background: bg, borderTop: `1px solid ${borderColor}` }}
      >
        <Link
          href="/#pricing"
          onClick={onNavigate}
          className={`flex w-full items-center justify-center rounded-[8px] py-3.5 font-manrope text-[14px] font-medium no-underline ${
            isDark
              ? "bg-[#B89968] text-[#14271E]"
              : "bg-[#1F3D2E] text-[#F4F0E8]"
          }`}
        >
          Get started — $35
        </Link>
      </div>
    </div>
  );
}

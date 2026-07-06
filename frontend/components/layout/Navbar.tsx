import Link from "next/link";
import { StepIndicator } from "./StepIndicator";
import { cn } from "@/lib/utils";
import type { Step } from "@/types";

interface NavbarProps {
  /** Which step to highlight in the flow indicator. */
  currentStep?: Step;
  /** Show step labels below pips. Defaults on — it's the only orientation in the flow. */
  showStepLabels?: boolean;
  className?: string;
}

export function Navbar({
  currentStep,
  showStepLabels = true,
  className,
}: NavbarProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background",
        className
      )}
    >
      <div className="mx-auto flex h-[60px] w-full max-w-[1280px] items-center justify-between px-6 lg:px-12">
        {/* Logo — mark + wordmark, mirrors the marketing Header */}
        <Link
          href="/"
          aria-label="metes home"
          className="flex items-center gap-2 font-manrope text-[17px] font-bold text-[#1F3D2E] no-underline transition-opacity hover:opacity-90"
        >
          <span
            className="relative inline-block h-6 w-6 shrink-0 rounded-[6px] bg-[#1F3D2E]"
            aria-hidden="true"
          >
            <span className="absolute inset-[6px] rounded-[2px] border-[1.5px] border-[#B89968]" />
          </span>
          metes
        </Link>

        {/* Center — flow steps */}
        {currentStep && (
          <StepIndicator currentStep={currentStep} showLabels={showStepLabels} />
        )}

        {/* Right — spacer balancing the logo so the steps stay centered */}
        <div className="w-[76px]" aria-hidden="true" />
      </div>
    </header>
  );
}
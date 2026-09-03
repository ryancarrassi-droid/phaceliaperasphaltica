import { Emblem } from "@/components/emblem";
import { SITE } from "@/data/content";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  inverted?: boolean;
  showTagline?: boolean;
};

export function Logo({ className, inverted = false, showTagline = true }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Emblem
        tone={inverted ? "light" : "color"}
        className="size-10 shrink-0 sm:size-11"
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.35rem] font-medium tracking-[0.04em] sm:text-[1.5rem]",
            inverted ? "text-cream" : "text-forest",
          )}
        >
          stradenuove
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-0.5 text-[0.62rem] font-medium tracking-[0.14em] uppercase",
              inverted ? "text-lime" : "text-teal",
            )}
          >
            {SITE.tagline}
          </span>
        ) : null}
      </span>
    </span>
  );
}

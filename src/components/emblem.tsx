import { cn } from "@/lib/utils";

type EmblemProps = {
  className?: string;
  tone?: "color" | "light";
};

export function Emblem({ className, tone = "color" }: EmblemProps) {
  const ring = tone === "light" ? "#F3F6F2" : "#123D2E";
  const field = tone === "light" ? "#0A241C" : "#FAFBF8";
  const laneA = "#B8C94A";
  const laneB = tone === "light" ? "#2E7D6B" : "#1A4A38";

  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("block", className)}
      aria-hidden="true"
      role="img"
    >
      <title>Strade Nuove</title>
      <circle cx="32" cy="32" r="31" fill={ring} />
      <circle cx="32" cy="32" r="26.5" fill={field} />
      {Array.from({ length: 24 }).map((_, i) => {
        const a = (i / 24) * Math.PI * 2;
        const x1 = Number((32 + Math.cos(a) * 27.4).toFixed(2));
        const y1 = Number((32 + Math.sin(a) * 27.4).toFixed(2));
        const x2 = Number((32 + Math.cos(a) * 30.2).toFixed(2));
        const y2 = Number((32 + Math.sin(a) * 30.2).toFixed(2));
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={tone === "light" ? "#B8C94A" : "#FAFBF8"}
            strokeWidth={i % 6 === 0 ? 1.6 : 0.7}
            strokeLinecap="round"
          />
        );
      })}
      <path
        d="M11 46 C18 36 24 30 32 24 C40 18 46 16 54 12"
        fill="none"
        stroke={laneB}
        strokeWidth="7.2"
        strokeLinecap="round"
      />
      <path
        d="M13 50 C20 40 26 34 34 28 C42 22 48 20 55 16"
        fill="none"
        stroke={laneA}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M14 48.2 C21 38 27 32 35 26 C43 20 49 18 55.5 14.2"
        fill="none"
        stroke={tone === "light" ? "#FAFBF8" : "#123D2E"}
        strokeWidth="0.7"
        strokeDasharray="1.6 2.1"
        strokeLinecap="round"
      />
    </svg>
  );
}

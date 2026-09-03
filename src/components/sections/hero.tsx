import { useEffect, useState } from "react";
import { ArrowRight, CalendarDays, Download, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DOWNLOADS, EVENT_START, SITE } from "@/data/content";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function remaining(target: string): Parts {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
  };
}

function useCountdown(target: string) {
  const [parts, setParts] = useState<Parts>(() => remaining(target));

  useEffect(() => {
    const tick = () => setParts(remaining(target));
    tick();
    const id = window.setInterval(tick, 1_000);
    return () => window.clearInterval(id);
  }, [target]);

  return parts;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function HeroSection() {
  const parts = useCountdown(EVENT_START);

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-forest-deep text-cream"
    >
      <img
        src="/images/hero-highway.jpg"
        alt="Viadotto autostradale italiano al tramonto, tra boschi e montagne"
        className="hero-kenburns absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(10_36_28/0.55)_0%,rgb(10_36_28/0.35)_38%,rgb(10_36_28/0.78)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_20%,rgb(184_201_74/0.18),transparent_60%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-4 pb-10 pt-28 sm:px-6 sm:pb-14 lg:justify-center lg:pb-20 lg:pt-32">
        <p className="rise-in font-display text-xs tracking-[0.28em] text-lime uppercase sm:text-sm">
          Numero speciale · {SITE.event}
        </p>
        <h1 className="rise-in mt-4 max-w-4xl font-display text-5xl font-medium tracking-wide text-cream sm:text-7xl lg:text-8xl">
          {SITE.issue}
        </h1>
        <p className="rise-in mt-3 max-w-xl font-display text-2xl tracking-wide text-lime sm:text-3xl">
          {SITE.issueLine}
        </p>
        <p className="rise-in mt-6 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
          Porta prodotti, cantieri e casi di successo davanti a un pubblico
          altamente qualificato — imprese, enti, progettisti, università —
          prima, durante e dopo Asphaltica, attraverso il Network Strade Nuove.
        </p>

        <div className="rise-in mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild variant="lime" size="xl" className="w-full justify-center whitespace-normal text-center font-display tracking-[0.08em] uppercase sm:w-auto sm:whitespace-nowrap sm:tracking-[0.12em]">
            <a href="#pacchetti">
              Vedi i pacchetti dell’offerta
              <ArrowRight />
            </a>
          </Button>
          <Button
            asChild
            variant="inverse"
            size="xl"
            className="w-full justify-center whitespace-normal text-center font-display tracking-[0.08em] uppercase sm:w-auto sm:whitespace-nowrap sm:tracking-[0.12em]"
          >
            <a href={DOWNLOADS.modulo} download target="_blank" rel="noreferrer">
              <Download />
              Scarica il modulo di adesione
            </a>
          </Button>
        </div>

        <dl className="rise-in mt-10 grid max-w-3xl grid-cols-4 gap-2 sm:gap-4">
          {[
            { k: "Giorni", v: pad(parts.days) },
            { k: "Ore", v: pad(parts.hours) },
            { k: "Min", v: pad(parts.minutes) },
            { k: "Sec", v: pad(parts.seconds) },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-lg border border-white/15 bg-forest-deep/40 px-2 py-3 backdrop-blur-[2px] sm:px-4"
            >
              <dt className="text-[0.65rem] uppercase tracking-[0.18em] text-cream/70">
                {item.k}
              </dt>
              <dd
                suppressHydrationWarning
                className="font-display text-2xl tabular-nums tracking-wide text-lime sm:text-4xl"
              >
                {item.v}
              </dd>
            </div>
          ))}
        </dl>

        <div className="rise-in mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cream/85">
          <span className="inline-flex items-center gap-2">
            <CalendarDays className="size-4 text-lime" />
            {SITE.dates}
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="size-4 text-lime" />
            {SITE.venue} · {SITE.hall}
          </span>
        </div>
      </div>
    </section>
  );
}

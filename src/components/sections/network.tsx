import {
  Globe,
  Smartphone,
  Share2,
  Radio,
  Newspaper,
  BookOpen,
  Rss,
  Tv,
} from "lucide-react";
import { CHANNELS, SITE } from "@/data/content";
import { Emblem } from "@/components/emblem";
import { Button } from "@/components/ui/button";

const icons = {
  social: Share2,
  web: Globe,
  app: Smartphone,
  rco: Tv,
  magazine: BookOpen,
  yahoo: Newspaper,
  gnews: Rss,
  podcast: Radio,
} as const;

export function NetworkSection() {
  return (
    <section id="network" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xs tracking-[0.28em] text-teal uppercase">
            Il Network Strade Nuove
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-forest sm:text-5xl">
            Un sistema omnimediale, non un singolo inserto
          </h2>
          <p className="mt-5 text-muted">
            Cartaceo, web, social, podcast, app e TV. La tua presenza sul numero
            speciale Asphaltica si moltiplica su tutti i canali del Network.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="flex flex-col items-center justify-center rounded-2xl bg-forest p-8 text-center text-cream sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <Emblem tone="light" className="size-24" />
            <h3 className="mt-6 font-display text-3xl tracking-wide">
              Network Strade Nuove
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/75">
              Canali proprietari e in joint venture con RCO Europe. News, Web TV,
              podcast e app: Stradenuove+ è sempre con te.
            </p>
            <Button asChild variant="lime" className="mt-6">
              <a href={SITE.web} target="_blank" rel="noreferrer">
                Scopri stradenuove.net
              </a>
            </Button>
          </article>

          {CHANNELS.map((ch) => {
            const Icon = icons[ch.id as keyof typeof icons] ?? Globe;
            return (
              <article
                key={ch.id}
                className="rounded-2xl border border-line bg-white p-6"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-md bg-paper text-teal">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-xl tracking-wide text-forest">
                  {ch.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{ch.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { STATS } from "@/data/content";

export function StatsSection() {
  return (
    <section id="numeri" className="bg-forest-deep py-20 text-cream sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-xs tracking-[0.28em] text-lime uppercase">
              I numeri del Network
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide sm:text-5xl">
              Dati massimi registrati
            </h2>
          </div>
          <p className="max-w-sm text-sm text-cream/65">
            Aggiornati a fine luglio 2026. Fonte: strumenti analytics
            proprietari, Google Analytics, Facebook Insights e canali Network.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {STATS.map((stat) => (
            <article key={stat.label} className="bg-forest-deep p-6 sm:p-7">
              <p className="font-display text-3xl tracking-wide text-lime tabular-nums whitespace-nowrap sm:text-4xl">
                {stat.value}
              </p>
              <h3 className="mt-3 text-sm font-medium leading-snug text-cream">
                {stat.label}
              </h3>
              <p className="mt-2 text-xs text-cream/55">{stat.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

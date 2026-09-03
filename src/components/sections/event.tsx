import { CalendarDays, MapPin, Route } from "lucide-react";
import { SITE } from "@/data/content";

export function EventSection() {
  return (
    <section className="relative isolate overflow-hidden bg-forest text-cream">
      <img
        src="/images/pavilion.jpg"
        alt="Padiglione fieristico contemporaneo con luce naturale"
        className="absolute inset-0 size-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-forest/80" />
      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-3">
        <div className="flex gap-4">
          <CalendarDays className="mt-1 size-6 shrink-0 text-lime" />
          <div>
            <p className="font-display text-xs tracking-[0.22em] uppercase text-lime">
              Quando
            </p>
            <p className="mt-1 font-display text-2xl tracking-wide">{SITE.dates}</p>
            <p className="mt-1 text-sm text-cream/75">
              Quattro giorni di incontro, innovazione e filiera.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <MapPin className="mt-1 size-6 shrink-0 text-lime" />
          <div>
            <p className="font-display text-xs tracking-[0.22em] uppercase text-lime">
              Dove
            </p>
            <p className="mt-1 font-display text-2xl tracking-wide">
              {SITE.venue}, {SITE.hall}
            </p>
            <p className="mt-1 text-sm text-cream/75">
              Nuovo padiglione senza appoggi intermedi, massimo impatto espositivo.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <Route className="mt-1 size-6 shrink-0 text-lime" />
          <div>
            <p className="font-display text-xs tracking-[0.22em] uppercase text-lime">
              Il momento
            </p>
            <p className="mt-1 font-display text-2xl tracking-wide">
              L’incontro e l’innovazione
            </p>
            <p className="mt-1 text-sm text-cream/75">
              Con Strade Nuove la tua azienda è protagonista delle strade che
              cambiano l’Italia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

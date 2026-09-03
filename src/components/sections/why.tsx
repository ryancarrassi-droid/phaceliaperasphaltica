import { ArrowUpRight, Building2, Download, Landmark, GraduationCap, PenTool, Users } from "lucide-react";
import { AUDIENCE, DOWNLOADS, SITE, THEMES } from "@/data/content";
import { Button } from "@/components/ui/button";

const audienceIcons = [Building2, Landmark, PenTool, GraduationCap, Users];

export function WhySection() {
  return (
    <section id="perche" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="font-display text-xs tracking-[0.28em] text-teal uppercase">
            Perché partecipare
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-forest sm:text-5xl">
            Un pubblico che decide le strade del Paese
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Il numero speciale <strong className="font-semibold text-forest">{SITE.issue}</strong>{" "}
            {SITE.issueLine} rappresenta un’occasione concreta per presentare
            prodotti, servizi, tecnologie, cantieri e casi di successo a un{" "}
            <strong className="font-semibold text-forest">pubblico altamente qualificato</strong>{" "}
            composto da imprese, enti pubblici, progettisti, università e
            professionisti del settore.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            La partecipazione integra la presenza sul numero speciale con
            attività di comunicazione digitale attraverso il{" "}
            <a
              href={SITE.web}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-teal underline-offset-4 hover:underline"
            >
              Network Strade Nuove
            </a>
            , amplificando la visibilità del brand prima, durante e dopo{" "}
            {SITE.event}.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {AUDIENCE.map((label, i) => {
              const Icon = audienceIcons[i] ?? Users;
              return (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-2 text-sm text-forest"
                >
                  <Icon className="size-4 text-teal" />
                  {label}
                </li>
              );
            })}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="default" size="lg">
              <a href="#pacchetti">
                Vedi i pacchetti dell’offerta
                <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={DOWNLOADS.modulo} download target="_blank" rel="noreferrer">
                <Download />
                Scarica il modulo di adesione
              </a>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/paving.jpg"
              alt="Stesa di asfalto su un cantiere stradale al crepuscolo"
              className="aspect-video w-full object-cover outline outline-1 -outline-offset-1 outline-forest/10"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {THEMES.map((theme) => (
              <article
                key={theme.title}
                className="rounded-xl border border-line bg-white p-4"
              >
                <h3 className="font-display text-lg tracking-wide text-forest">
                  {theme.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{theme.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

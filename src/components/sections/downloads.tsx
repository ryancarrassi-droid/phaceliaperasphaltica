import { Download, FileText, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DOWNLOADS } from "@/data/content";

const FILES = [
  {
    href: DOWNLOADS.modulo,
    title: "Modulo di adesione",
    body: "Scheda di adesione al numero speciale Asphaltica 2026. Compilabile a schermo o a mano.",
    cta: "Scarica il modulo di adesione",
    icon: FileText,
    featured: true,
  },
  {
    href: DOWNLOADS.listino,
    title: "Listino partner rivista",
    body: "Pacchetto Premium (€ 1.000) e Official Partner (€ 2.000): prestazioni, canali e condizioni di partecipazione.",
    cta: "Scarica il listino",
    icon: List,
    featured: false,
  },
] as const;

export function DownloadsSection() {
  return (
    <section id="download" className="relative isolate overflow-hidden bg-paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-xs tracking-[0.28em] text-teal uppercase">
            Documenti
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-forest sm:text-5xl">
            Iscriviti. Scegli il pacchetto. Inizia a comunicare.
          </h2>
          <p className="mt-5 text-muted">
            Scarica il modulo di adesione e il listino ufficiale dei partner
            della rivista Strade Nuove per Asphaltica 2026. In alternativa
            compila il form: prepariamo noi la proposta.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl">
            <img
              src="/images/magazine.jpg"
              alt="Magazine cartaceo di infrastrutture su una scrivania"
              className="aspect-3/2 w-full object-cover outline outline-1 -outline-offset-1 outline-forest/10"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-7 lg:pt-10">
          {FILES.map((file) => {
            const Icon = file.icon;
            return (
              <article
                key={file.href}
                className={
                  file.featured
                    ? "flex flex-col rounded-2xl bg-forest p-7 text-cream sm:flex-row sm:items-center sm:gap-6"
                    : "flex flex-col rounded-2xl border border-line bg-white p-7 sm:flex-row sm:items-center sm:gap-6"
                }
              >
                <span
                  className={
                    file.featured
                      ? "inline-flex size-14 shrink-0 items-center justify-center rounded-xl bg-lime text-accent-foreground"
                      : "inline-flex size-14 shrink-0 items-center justify-center rounded-xl bg-paper text-teal"
                  }
                >
                  <Icon className="size-6" />
                </span>
                <div className="mt-4 flex-1 sm:mt-0">
                  <h3
                    className={
                      file.featured
                        ? "font-display text-2xl tracking-wide"
                        : "font-display text-2xl tracking-wide text-forest"
                    }
                  >
                    {file.title}
                  </h3>
                  <p
                    className={
                      file.featured
                        ? "mt-2 text-sm leading-relaxed text-cream/80"
                        : "mt-2 text-sm leading-relaxed text-muted"
                    }
                  >
                    {file.body}
                  </p>
                </div>
                <Button
                  asChild
                  variant={file.featured ? "lime" : "default"}
                  className="mt-5 shrink-0 sm:mt-0"
                >
                  <a href={file.href} download target="_blank" rel="noreferrer">
                    <Download />
                    {file.cta}
                  </a>
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

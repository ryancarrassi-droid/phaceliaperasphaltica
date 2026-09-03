import { Check, Download, Info } from "lucide-react";
import { DOWNLOADS, PACKAGES } from "@/data/content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PackagesSection() {
  return (
    <section id="pacchetti" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-xs tracking-[0.28em] text-teal uppercase">
              Opportunità di partecipazione
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-forest sm:text-5xl">
              Due pacchetti. Un’unica direzione editoriale.
            </h2>
          </div>
          <Button asChild variant="outline">
            <a href={DOWNLOADS.listino} download target="_blank" rel="noreferrer">
              <Download />
              Scarica il listino PDF
            </a>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.id}
              className={cn(
                "flex flex-col rounded-2xl p-7 sm:p-9",
                pkg.featured
                  ? "bg-forest text-cream shadow-border"
                  : "border border-line bg-white text-ink",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className={cn(
                      "font-display text-xs tracking-[0.22em] uppercase",
                      pkg.featured ? "text-lime" : "text-teal",
                    )}
                  >
                    {pkg.tag}
                  </p>
                  <h3 className="mt-2 font-display text-3xl tracking-wide">
                    {pkg.name}
                  </h3>
                </div>
                <p className="text-right">
                  <span className="font-display text-4xl tracking-wide">
                    € {pkg.price}
                  </span>
                </p>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {pkg.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <Check
                      className={cn(
                        "mt-0.5 size-4 shrink-0",
                        pkg.featured ? "text-lime" : "text-teal",
                      )}
                    />
                    <span className={pkg.featured ? "text-cream/90" : "text-muted"}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={pkg.featured ? "lime" : "default"}
                size="lg"
                className="mt-8 font-display tracking-[0.12em] uppercase"
              >
                <a href={`#contatti`} data-package={pkg.id}>
                  Richiedi {pkg.name}
                </a>
              </Button>
            </article>
          ))}
        </div>

        <p className="mt-8 flex items-start gap-3 rounded-xl border border-line bg-paper px-4 py-4 text-sm text-muted">
          <Info className="mt-0.5 size-4 shrink-0 text-teal" />
          I pacchetti sono personalizzabili su richiesta. Contattaci per
          costruire insieme la soluzione più adatta ai tuoi obiettivi di
          comunicazione.
        </p>
      </div>
    </section>
  );
}

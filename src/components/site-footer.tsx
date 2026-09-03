import { Emblem } from "@/components/emblem";
import { NAV, SITE, SOCIALS } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="bg-forest-deep text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <Emblem tone="light" className="size-12" />
            <div>
              <p className="font-display text-2xl tracking-wide">stradenuove</p>
              <p className="text-xs uppercase tracking-[0.16em] text-lime">
                {SITE.tagline}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/75">
            Testata di {SITE.publisher}. Il numero speciale {SITE.issue} porta
            la tua azienda al centro di {SITE.event} e del Network che racconta
            le strade che cambiano l’Italia.
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="font-display text-sm tracking-[0.16em] uppercase text-lime">
            Sezioni
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-cream/80 hover:text-lime">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="font-display text-sm tracking-[0.16em] uppercase text-lime">
            Contatti
          </p>
          <ul className="mt-4 space-y-2 text-sm text-cream/80">
            <li>
              <a className="hover:text-lime" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
            <li>
              <a className="hover:text-lime" href={SITE.phoneHref}>
                tel. {SITE.phone}
              </a>
            </li>
            <li>
              <a
                className="hover:text-lime"
                href={SITE.web}
                target="_blank"
                rel="noreferrer"
              >
                {SITE.webLabel}
              </a>
            </li>
          </ul>
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-[0.14em] text-cream/70">
            {SOCIALS.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-lime">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} {SITE.publisher} · {SITE.name}
          </p>
          <p>Partecipa. Comunica. Costruisci il futuro.</p>
        </div>
      </div>
    </footer>
  );
}

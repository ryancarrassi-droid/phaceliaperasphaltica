import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DOWNLOADS, SITE } from "@/data/content";
import { cn } from "@/lib/utils";

const PACK_OPTIONS = [
  { id: "premium", label: "Pacchetto Premium — € 1.000" },
  { id: "partner", label: "Official Partner — € 2.000" },
  { id: "custom", label: "Soluzione personalizzata" },
] as const;

type PackId = (typeof PACK_OPTIONS)[number]["id"];

export function ContactSection() {
  const [pack, setPack] = useState<PackId>("partner");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const apply = (id: string) => {
      if (id === "premium" || id === "partner" || id === "custom") setPack(id);
    };
    const stored = sessionStorage.getItem("asphaltica-pack");
    if (stored) apply(stored);

    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a[data-package]") as HTMLAnchorElement | null;
      const id = link?.dataset.package;
      if (id) {
        apply(id);
        sessionStorage.setItem("asphaltica-pack", id);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const company = String(data.get("company") ?? "").trim();
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const role = String(data.get("role") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const selected = PACK_OPTIONS.find((p) => p.id === pack)?.label ?? pack;

    if (!company || !name || !email) {
      toast.error("Inserisci almeno azienda, referente e email.");
      return;
    }

    setSending(true);
    const subject = `Adesione Asphaltica 2026 — ${company}`;
    const body = [
      `Adesione al numero speciale ${SITE.issue} — ${SITE.event}`,
      ``,
      `Azienda: ${company}`,
      `Referente: ${name}`,
      `Ruolo: ${role || "—"}`,
      `Email: ${email}`,
      `Telefono: ${phone || "—"}`,
      `Pacchetto: ${selected}`,
      ``,
      `Note:`,
      message || "—",
    ].join("\n");

    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    toast.success("Apriamo il tuo client di posta. In alternativa invia a " + SITE.email);
    window.setTimeout(() => setSending(false), 800);
  }

  return (
    <section id="contatti" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-display text-xs tracking-[0.28em] text-teal uppercase">
            Informazioni e adesioni
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-wide text-forest sm:text-5xl">
            Partecipa. Comunica. Costruisci il futuro.
          </h2>
          <p className="mt-5 text-muted">
            Compila la richiesta: la Direzione Editoriale e l’Ufficio Marketing
            ti ricontattano con la soluzione più adatta.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-line bg-white p-6 shadow-border sm:p-8 lg:col-span-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Azienda" htmlFor="company" className="sm:col-span-2">
              <Input id="company" name="company" required placeholder="Ragione sociale" autoComplete="organization" />
            </Field>
            <Field label="Referente" htmlFor="name">
              <Input id="name" name="name" required placeholder="Nome e cognome" autoComplete="name" />
            </Field>
            <Field label="Ruolo" htmlFor="role">
              <Input id="role" name="role" placeholder="Marketing, direzione…" autoComplete="organization-title" />
            </Field>
            <Field label="Email" htmlFor="email">
              <Input id="email" name="email" type="email" required placeholder="nina.v@example.com" autoComplete="email" />
            </Field>
            <Field label="Telefono" htmlFor="phone">
              <Input id="phone" name="phone" type="tel" placeholder="+39 …" autoComplete="tel" />
            </Field>
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-forest">Pacchetto di interesse</legend>
            <div className="mt-3 grid gap-2">
              {PACK_OPTIONS.map((option) => (
                <label
                  key={option.id}
                  className={cn(
                    "flex cursor-pointer items-center gap-3 rounded-md border px-3 py-3 text-sm transition-colors duration-150",
                    pack === option.id
                      ? "border-teal bg-paper text-forest"
                      : "border-line text-muted hover:border-teal/40",
                  )}
                >
                  <input
                    type="radio"
                    name="package"
                    value={option.id}
                    checked={pack === option.id}
                    onChange={() => setPack(option.id)}
                    className="size-4 accent-teal"
                  />
                  {option.label}
                </label>
              ))}
            </div>
          </fieldset>

          <Field label="Obiettivi o note" htmlFor="message" className="mt-6">
            <Textarea
              id="message"
              name="message"
              placeholder="Raccontaci prodotti, cantieri o il caso che vuoi portare sul numero speciale."
            />
          </Field>

          <p className="mt-4 text-xs text-muted">
            Inviando la richiesta autorizzi {SITE.publisher} a ricontattarti per
            l’adesione al numero speciale {SITE.event}. Nessun dato viene
            conservato su questo sito: il messaggio parte dal tuo client di posta.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button type="submit" variant="lime" size="lg" disabled={sending} className="font-display tracking-[0.12em] uppercase">
              <Send />
              Invia la richiesta
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={DOWNLOADS.modulo} download target="_blank" rel="noreferrer">
                Preferisco il modulo di adesione
              </a>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV, SITE } from "@/data/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,border-color] duration-200",
        scrolled
          ? "border-b border-line bg-cream/96 shadow-[0_8px_24px_-16px_rgb(18_61_46/0.35)]"
          : "border-b border-transparent bg-cream/80",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#top" className="shrink-0 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <Logo />
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Sezioni">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-[0.8rem] font-medium tracking-wide text-forest/80 transition-colors duration-150 hover:text-forest"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a href={SITE.web} target="_blank" rel="noreferrer">
              {SITE.webLabel}
            </a>
          </Button>
          <Button asChild variant="lime" size="sm">
            <a href="#contatti">Partecipa ora</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              aria-label="Apri il menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navigazione</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1" aria-label="Menu mobile">
              {NAV.map((item) => (
                <SheetClose asChild key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-md px-3 py-3 font-display text-xl tracking-wide text-forest hover:bg-paper"
                  >
                    {item.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2 pt-8">
              <SheetClose asChild>
                <Button asChild variant="lime" size="lg">
                  <a href="#contatti">Partecipa ora</a>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="outline" size="lg">
                  <a href={SITE.web} target="_blank" rel="noreferrer">
                    Vai a {SITE.webLabel}
                  </a>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

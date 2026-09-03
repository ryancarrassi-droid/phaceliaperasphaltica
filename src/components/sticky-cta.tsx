import { useEffect, useState } from "react";
import { Download, LayoutList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DOWNLOADS } from "@/data/content";
import { cn } from "@/lib/utils";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("top");
      const heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
      const covers = ["download", "contatti"].some((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight - 48 && r.bottom > 96;
      });
      setVisible(heroBottom < 80 && !covers);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-forest/15 bg-cream/96 p-3 shadow-[0_-12px_32px_-16px_rgb(18_61_46/0.45)] transition-transform duration-200 lg:hidden",
        visible ? "translate-y-0" : "translate-y-full",
      )}
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <Button asChild variant="outline" className="flex-1">
          <a href="#pacchetti">
            <LayoutList />
            Offerta
          </a>
        </Button>
        <Button asChild variant="lime" className="flex-1">
          <a href={DOWNLOADS.modulo} download target="_blank" rel="noreferrer">
            <Download />
            Modulo adesione
          </a>
        </Button>
      </div>
    </div>
  );
}

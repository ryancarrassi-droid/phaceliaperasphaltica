import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyCta } from "@/components/sticky-cta";
import { HeroSection } from "@/components/sections/hero";
import { WhySection } from "@/components/sections/why";
import { EventSection } from "@/components/sections/event";
import { NetworkSection } from "@/components/sections/network";
import { PackagesSection } from "@/components/sections/packages";
import { StatsSection } from "@/components/sections/stats";
import { DownloadsSection } from "@/components/sections/downloads";
import { ContactSection } from "@/components/sections/contact";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <>
      <a
        href="#contatti"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-md focus-visible:bg-lime focus-visible:px-4 focus-visible:py-2 focus-visible:text-accent-foreground"
      >
        Vai alla richiesta di partecipazione
      </a>
      <SiteHeader />
      <main className="pb-24 lg:pb-0">
        <HeroSection />
        <WhySection />
        <EventSection />
        <NetworkSection />
        <PackagesSection />
        <StatsSection />
        <DownloadsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <StickyCta />
      <Toaster position="top-center" richColors closeButton />
    </>
  );
}

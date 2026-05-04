import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Wheat, PackageCheck, ShieldCheck, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-agri.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ekvira Export House — From India's Fields to Global Markets" },
      { name: "description", content: "Pune-based merchant trading firm connecting Indian agri & farm produce with India and Middle East buyers." },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { icon: Globe2, title: "Middle East & India", sub: "Key Markets" },
  { icon: Wheat, title: "Agri & Farm Products", sub: "Core Expertise" },
  { icon: PackageCheck, title: "End-to-End Trading", sub: "Sourcing to Delivery" },
  { icon: ShieldCheck, title: "Quality First", sub: "Trusted by Buyers" },
];

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(60% 60% at 80% 20%, oklch(0.78 0.15 75 / 0.18), transparent 60%), radial-gradient(50% 50% at 10% 90%, oklch(0.42 0.09 135 / 0.12), transparent 60%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-medium text-primary soft-shadow">
                <Sprout className="h-3.5 w-3.5" />
                Agri Export · Pune, India
              </span>
              <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-foreground">
                From India's <span className="italic text-primary">Fields</span> to{" "}
                <span className="relative inline-block">
                  Global Markets
                  <span className="absolute left-0 right-0 -bottom-1 h-1.5 rounded-full bg-gold/70" />
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Ekvira Export House connects Indian agri and farm produce with buyers across
                India and the Middle East — with trust, quality, and speed.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90 px-6 h-12">
                  <Link to="/products">
                    Explore Our Products <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 h-12">
                  <a href="mailto:hello@ekviraexport.com">Contact Us</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-gold/20 rounded-[2.5rem] blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden bg-card soft-shadow-lg border border-border/50">
                <img src={heroImg} alt="Indian agricultural exports illustration" width={1024} height={1024} className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-gold/90">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-xl bg-gold-foreground/10 flex items-center justify-center text-gold-foreground">
                  <h.icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-serif text-lg text-gold-foreground leading-tight">{h.title}</div>
                  <div className="text-sm text-gold-foreground/75">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

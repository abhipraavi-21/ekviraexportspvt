import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ekvira Export House" },
      { name: "description", content: "Pune-based merchant trading firm specializing in agri & farm exports to India and the Middle East." },
    ],
  }),
  component: AboutPage,
});

const points = [
  "APEDA & FSSAI Compliant",
  "Farm-to-Port Coordination",
  "Transparent Documentation",
  "Reliable Quality Control",
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-primary font-medium">Who We Are</span>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              Your Trusted <span className="italic text-primary">Agri Trading</span> Partner
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Ekvira Export House is a Pune-based merchant trading firm specializing in the
              import and export of agricultural and farm products. We bridge Indian farmers
              and suppliers with domestic buyers and international markets, with a strong
              focus on the Middle East region. We are committed to quality, compliance, and
              building long-term trade relationships.
            </p>
          </div>

          <div className="bg-card soft-shadow rounded-3xl p-8 md:p-10 border border-border/60">
            <h3 className="font-serif text-xl text-foreground">What sets us apart</h3>
            <ul className="mt-6 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 h-7 w-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

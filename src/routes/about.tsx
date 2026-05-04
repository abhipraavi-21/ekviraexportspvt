import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Check,
  FileText,
  Globe2,
  Handshake,
  Leaf,
  ShieldCheck,
  Sprout,
  Truck,
} from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About - Ekvira Export House" },
      {
        name: "description",
        content:
          "Pune-based merchant trading firm specializing in agri and farm exports to India and the Middle East.",
      },
      { property: "og:title", content: "About Ekvira Export House" },
      {
        property: "og:description",
        content:
          "Your trusted agri trading partner - bridging Indian farms with global markets.",
      },
    ],
  }),
  component: AboutPage,
});

const checklist = [
  {
    icon: ShieldCheck,
    label: "APEDA & FSSAI Compliant",
    desc: "Fully registered for international trade and food safety standards.",
  },
  {
    icon: Truck,
    label: "Farm-to-Port Coordination",
    desc: "Seamless logistics from sourcing villages to shipping ports.",
  },
  {
    icon: FileText,
    label: "Transparent Documentation",
    desc: "Complete export paperwork, COO, phyto, and quality certificates.",
  },
  {
    icon: Award,
    label: "Reliable Quality Control",
    desc: "Multi-stage inspection at sourcing, packing, and dispatch.",
  },
];

const values = [
  {
    icon: Sprout,
    title: "Rooted in India",
    desc: "Direct relationships with farmers and APEDA-registered suppliers across Maharashtra and beyond.",
  },
  {
    icon: Globe2,
    title: "Built for the World",
    desc: "Trade corridors focused on the Middle East with growing reach into adjacent global markets.",
  },
  {
    icon: Handshake,
    title: "Trade as Partnership",
    desc: "Long-term relationships with buyers - not one-off shipments. Trust is our default.",
  },
  {
    icon: Leaf,
    title: "Quality at Every Step",
    desc: "From the soil it grew in to the container it ships in - quality is non-negotiable.",
  },
];

const stats = [
  { value: "20+", label: "Product Categories" },
  { value: "10+", label: "Source States in India" },
  { value: "GCC", label: "Primary Export Region" },
  { value: "100%", label: "Compliance Focus" },
];

function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-70"
            style={{
              background:
                "radial-gradient(55% 55% at 85% 15%, oklch(0.78 0.15 75 / 0.18), transparent 60%), radial-gradient(45% 45% at 5% 90%, oklch(0.42 0.09 135 / 0.10), transparent 60%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-12 md:pb-16 grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-medium text-primary soft-shadow">
                <Sprout className="h-3.5 w-3.5" />
                Who We Are
              </span>
              <h1 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground">
                Your Trusted <span className="italic text-primary">Agri Trading</span>{" "}
                <span className="relative inline-block">
                  Partner
                  <span className="absolute left-0 right-0 -bottom-1 h-1.5 rounded-full bg-gold/70" />
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Ekvira Export House is a Pune-based merchant trading firm specializing in
                the import and export of agricultural and farm products. We bridge Indian
                farmers and suppliers with domestic buyers and international markets, with
                a strong focus on the Middle East region.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We are committed to quality, compliance, and building long-term trade
                relationships - one shipment, one partnership at a time.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90 px-6 h-12"
                >
                  <Link to="/products">
                    See What We Trade <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 h-12"
                >
                  <a href="mailto:hello@ekviraexport.com">Talk to Us</a>
                </Button>
              </div>
            </div>

            <div className="bg-card soft-shadow-lg rounded-3xl p-8 md:p-10 border border-border/60">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl text-foreground">What sets us apart</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                  Standards
                </span>
              </div>
              <ul className="mt-7 space-y-5">
                {checklist.map((c) => (
                  <li key={c.label} className="flex items-start gap-4">
                    <span className="mt-0.5 h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="font-medium text-foreground">{c.label}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.22em] text-primary font-medium">
              Our Approach
            </span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground">
              Trade built on <span className="italic text-primary">trust, soil and seas</span>.
            </h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-card rounded-3xl p-7 border border-border/60 soft-shadow hover:-translate-y-1 hover:soft-shadow-lg transition-all"
              >
                <span className="h-12 w-12 rounded-2xl bg-gold/20 text-primary flex items-center justify-center">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-lg text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <div className="font-serif text-4xl md:text-5xl text-gold">{s.value}</div>
                <div className="mt-2 text-sm opacity-80">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="rounded-3xl bg-card border border-border/60 soft-shadow-lg p-10 md:p-14 text-center">
            <h3 className="font-serif text-3xl md:text-4xl text-foreground">
              Looking for a reliable Indian agri partner?
            </h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Tell us what you need - we'll source it, certify it, and ship it from India
              to your door.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90 px-6 h-12"
              >
                <a href="mailto:hello@ekviraexport.com">
                  Get a Quote <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 h-12"
              >
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

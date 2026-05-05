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
import aboutBreadcrumbBanner from "@/assets/about-breadcrumb-banner.jpg";
import { PageBreadcrumbHero } from "@/components/PageBreadcrumbHero";
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
        <PageBreadcrumbHero
          title="About Ekvira Export House"
          crumbLabel="About"
          description="A Pune-based agri export partner focused on trusted sourcing, compliant trade, and long-term buyer relationships."
          image={aboutBreadcrumbBanner}
          imagePosition="object-[72%_center]"
        />

        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-70"
            style={{
              background:
                "radial-gradient(55% 55% at 85% 15%, oklch(0.78 0.15 75 / 0.18), transparent 60%), radial-gradient(45% 45% at 5% 90%, oklch(0.42 0.09 135 / 0.10), transparent 60%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-12 md:pb-16 grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-medium text-primary soft-shadow">
                <Sprout className="h-3.5 w-3.5" />
                Who We Are
              </span>
              <h2 className="mt-6 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground">
                Your Trusted <span className="italic text-primary">Agri Trading</span>{" "}
                <span className="relative inline-block">
                  Partner
                  <span className="absolute left-0 right-0 -bottom-1 h-1.5 rounded-full bg-gold/70" />
                </span>
              </h2>
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
          <div className="max-w-4xl mx-auto text-center">
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

        <section className="relative overflow-hidden bg-primary text-primary-foreground">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
              backgroundSize: "72px 72px",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(40% 45% at 12% 16%, oklch(0.78 0.15 75 / 0.22), transparent 65%), radial-gradient(32% 38% at 88% 82%, oklch(0.78 0.15 75 / 0.18), transparent 70%)",
            }}
          />

          <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/76">
                Trade Snapshot
              </span>
              <h2 className="mt-5 font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.05] text-white">
                Numbers that reflect our <span className="italic text-gold">export focus</span>
              </h2>
              <p className="mt-4 text-sm md:text-base text-white/72 max-w-2xl mx-auto leading-relaxed">
                From sourcing depth to regional specialization, these metrics give a
                quick view of the trade capability we are building around Indian
                agricultural exports.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((s, index) => (
                <div
                  key={s.label}
                  className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/8 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/12 hover:shadow-[0_28px_60px_-28px_rgba(0,0,0,0.55)] md:p-7"
                >
                  <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-to-r from-gold/10 via-gold to-gold/10" />
                  <div className="text-[11px] font-medium uppercase tracking-[0.24em] text-white/45">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-5 font-serif text-5xl md:text-6xl leading-none text-gold">
                    {s.value}
                  </div>
                  <div className="mt-4 text-sm md:text-base font-medium text-white/84">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
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

import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Check,
  ClipboardCheck,
  FileText,
  Globe2,
  Handshake,
  Leaf,
  MapPin,
  Search,
  ShieldCheck,
  Sprout,
  Users2,
  Truck,
} from "lucide-react";
import aboutBreadcrumbBanner from "@/assets/about-breadcrumb-banner.jpg";
import { PageBreadcrumbHero } from "@/components/PageBreadcrumbHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

const supplierStory = [
  {
    icon: Search,
    step: "STEP 1",
    title: "Finding suppliers",
    desc: "We begin by finding suppliers who can provide the best goods and services.",
    accent: "#78d7cf",
    bubbleClass: "lg:left-[24%] lg:top-[84%]",
  },
  {
    icon: ClipboardCheck,
    step: "STEP 2",
    title: "Evaluating suppliers",
    desc: "Each option is checked for quality, pricing, consistency, and compliance.",
    accent: "#5d84b8",
    bubbleClass: "lg:left-[13%] lg:top-[45%]",
  },
  {
    icon: Users2,
    step: "STEP 3",
    title: "Onboarding suppliers",
    desc: "The right partners are onboarded with clear expectations and simple communication.",
    accent: "#f0bf39",
    bubbleClass: "lg:left-[58%] lg:top-[61%]",
  },
  {
    icon: BadgeCheck,
    step: "STEP 4",
    title: "Certificates",
    desc: "IEC, Spice Board in India, APEDA, FSSAI, and ISO close the story with trust.",
    accent: "#ef6251",
    bubbleClass: "lg:left-[83%] lg:top-[18%]",
  },
] as const;

const certificates = ["IEC", "Spice Board in India", "APEDA", "FSSAI", "ISO"] as const;

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
          <div className="max-w-7xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-12 md:pb-16">
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="font-serif text-4xl tracking-[-0.03em] text-foreground md:text-5xl lg:whitespace-nowrap lg:text-[clamp(3rem,4.2vw,4.5rem)] lg:leading-[0.96]">
                Your Trusted <span className="italic text-primary">Trading</span>{" "}
                <span className="relative inline-block">
                  Partner
                  <span className="absolute left-0 right-0 -bottom-1 h-1.5 rounded-full bg-gold/70" />
                </span>
              </h2>
            </div>

            <div className="mt-8 grid items-start gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div>
              <p className="mt-6 text-justify text-lg leading-relaxed text-muted-foreground">
                Ekvira Export House is a Pune-based merchant trading firm specializing in
                the import and export of agricultural and farm products. We bridge Indian
                farmers and suppliers with domestic buyers and international markets, with
                a strong focus on the Middle East region.
              </p>
              <p className="mt-4 text-justify text-lg leading-relaxed text-muted-foreground">
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
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.1] text-foreground">
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

        <section className="relative overflow-hidden border-y border-border/50 bg-[#faf7f0]">
          <div
            className="absolute inset-0 -z-10 opacity-70"
            style={{
              background:
                "radial-gradient(55% 55% at 18% 18%, oklch(0.78 0.15 75 / 0.14), transparent 60%), radial-gradient(45% 45% at 92% 78%, oklch(0.42 0.09 135 / 0.10), transparent 58%)",
            }}
          />

          <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="flex flex-col gap-12">
              <div className="max-w-xl">
                <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  What sets us apart
                </h2>
                <p className="mt-5 max-w-sm text-base leading-7 text-muted-foreground">
                  Finding, evaluating, and onboarding suppliers that can provide the best goods and
                  services.
                </p>
              </div>

              <div className="relative">
                <div className="lg:hidden">
                  <div className="rounded-[2.25rem] border border-border/60 bg-card p-6 soft-shadow-lg">
                    <div className="grid gap-4">
                      {supplierStory.map((step, index) => {
                        const isLast = index === supplierStory.length - 1;

                        return (
                          <div
                            key={step.title}
                            className="rounded-[1.75rem] border border-border/60 bg-background p-5"
                          >
                            <div className="flex items-start gap-4">
                              <span
                                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                                style={{ backgroundColor: `${step.accent}22`, color: step.accent }}
                              >
                                <step.icon className="h-5 w-5" />
                              </span>
                              <div className="min-w-0">
                                <div
                                  className="text-[11px] font-semibold uppercase tracking-[0.22em]"
                                  style={{ color: step.accent }}
                                >
                                  {step.step}
                                </div>
                                <h3 className="mt-1 font-serif text-2xl text-foreground">
                                  {step.title}
                                </h3>
                                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                                  {step.desc}
                                </p>
                                {isLast ? (
                                  <div className="mt-4 flex flex-wrap gap-2">
                                    {certificates.map((item) => (
                                      <span
                                        key={item}
                                        className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-primary"
                                      >
                                        {item}
                                      </span>
                                    ))}
                                  </div>
                                ) : null}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="relative hidden min-h-[1120px] overflow-hidden rounded-[3rem] bg-transparent lg:block">
                  <svg
                    viewBox="0 0 1200 1120"
                    className="absolute inset-0 h-full w-full"
                    aria-hidden="true"
                  >
                    <defs>
                      <filter id="roadShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow
                          dx="0"
                          dy="20"
                          stdDeviation="18"
                          floodColor="#1f223a"
                          floodOpacity="0.28"
                        />
                      </filter>
                    </defs>
                    <path
                      d="M 5 1040 C 90 1060 160 1040 220 980 C 285 915 260 830 210 770 C 155 705 105 660 112 585 C 120 500 200 470 260 420 C 320 370 338 290 416 276 C 500 260 540 332 610 414 C 675 492 757 530 826 496 C 900 460 915 375 990 300 C 1060 230 1130 210 1195 180"
                      fill="none"
                      stroke="#2a2848"
                      strokeWidth="148"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#roadShadow)"
                    />
                    <path
                      d="M 5 1040 C 90 1060 160 1040 220 980 C 285 915 260 830 210 770 C 155 705 105 660 112 585 C 120 500 200 470 260 420 C 320 370 338 290 416 276 C 500 260 540 332 610 414 C 675 492 757 530 826 496 C 900 460 915 375 990 300 C 1060 230 1130 210 1195 180"
                      fill="none"
                      stroke="#f9f6ef"
                      strokeWidth="15"
                      strokeDasharray="30 26"
                      strokeLinecap="round"
                      opacity="0.96"
                    />
                  </svg>

                  <div className="absolute left-[10%] top-[78%] hidden h-28 w-6 lg:block">
                    <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-[#c7c7cf]" />
                    <div className="absolute left-1/2 top-2 h-0 w-0 -translate-x-1/2 border-b-[16px] border-l-[24px] border-b-transparent border-l-[#f04f4f]" />
                  </div>

                  <div className="absolute right-[8%] top-[13%] hidden h-28 w-6 lg:block">
                    <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-[#c7c7cf]" />
                    <div className="absolute left-1/2 top-2 h-0 w-0 -translate-x-1/2 border-b-[16px] border-l-[24px] border-b-transparent border-l-[#f04f4f]" />
                  </div>

                  {supplierStory.map((step, index) => {
                    const isLast = index === supplierStory.length - 1;

                    return (
                      <div
                        key={step.title}
                        className={cn(
                          "absolute -translate-x-1/2 -translate-y-1/2",
                          step.bubbleClass,
                        )}
                      >
                        <div
                          className={cn(
                            "relative flex h-[250px] w-[250px] flex-col items-center justify-center rounded-full border border-black/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(243,241,238,0.92)_100%)] px-7 text-center shadow-[0_24px_45px_-28px_rgba(0,0,0,0.45)]",
                            isLast ? "h-[340px] w-[340px] px-8" : "",
                          )}
                        >
                          <div
                            className={cn(
                              "absolute left-1/2 -translate-x-1/2",
                              isLast ? "-top-4" : "-top-14",
                            )}
                          >
                            <MapPin
                              className="h-16 w-16 drop-shadow-[0_10px_12px_rgba(0,0,0,0.18)]"
                              style={{ color: step.accent }}
                            />
                          </div>

                          <div
                            className="text-[11px] font-semibold uppercase tracking-[0.24em]"
                            style={{ color: step.accent }}
                          >
                            {step.step}
                          </div>
                          <div
                            className={cn(
                              "mt-3 font-serif text-[1.9rem] leading-none text-foreground",
                              isLast ? "text-[1.75rem]" : "",
                            )}
                          >
                            {step.title}
                          </div>
                          <p
                            className={cn(
                              "mt-3 max-w-[16ch] text-[13px] leading-6 text-muted-foreground",
                              isLast ? "max-w-[19ch] text-[12px] leading-5" : "",
                            )}
                          >
                            {step.desc}
                          </p>

                          {isLast ? (
                            <div className="mt-5 flex flex-wrap justify-center gap-2 px-2">
                              {certificates.map((item) => (
                                <span
                                  key={item}
                                  className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-primary"
                                >
                                  {item}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
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
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-white/8 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/12 hover:shadow-[0_28px_60px_-28px_rgba(0,0,0,0.55)] md:p-7"
                >
                  <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-to-r from-gold/10 via-gold to-gold/10" />
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

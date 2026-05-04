import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import { ArrowRight, BadgeCheck, MapPin, MoveRight, Sprout } from "lucide-react";
import heroImg from "@/assets/hero-agri.jpg";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const trustPoints = [
  "20+ export-ready categories",
  "24-hour enquiry response",
  "India and GCC buyer focus",
] as const;

const productTags = ["Grains", "Spices", "Pulses", "Fresh Produce"] as const;

const bannerMetrics = [
  { value: "20+", label: "Product Lines" },
  { value: "24h", label: "Reply Window" },
  { value: "GCC", label: "Core Region" },
] as const;

function SlideFrame({
  children,
  overlay,
  imagePosition,
}: {
  children: ReactNode;
  overlay: string;
  imagePosition?: string;
}) {
  return (
    <section className="relative h-[480px] overflow-hidden bg-[#1f3115] text-white sm:h-[540px] md:h-[600px] lg:h-[660px] xl:h-[720px]">
      <img
        src={heroImg}
        alt="Agricultural produce ready for export"
        width={1200}
        height={600}
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          imagePosition ?? "object-center",
        )}
      />
      <div className={cn("absolute inset-0", overlay)} />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col px-5 pb-6 pt-2 md:px-8 md:pb-8 md:pt-3 lg:pb-10 lg:pt-4">
        {children}
      </div>
    </section>
  );
}

function GlassPanel({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] border border-white/15 bg-black/22 p-4 backdrop-blur-md sm:p-5",
        className,
      )}
    >
      {children}
    </div>
  );
}

function RouteStrip() {
  return (
    <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/72">
      <span className="inline-flex items-center gap-2">
        <MapPin className="h-4 w-4 text-gold" />
        Pune, India
      </span>
      <MoveRight className="hidden h-4 w-4 text-white/45 sm:block" />
      <span className="inline-flex items-center gap-2">
        <BadgeCheck className="h-4 w-4 text-gold" />
        India and GCC buyers
      </span>
    </div>
  );
}

function MetricRow() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {bannerMetrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-[1.35rem] border border-white/12 bg-white/10 px-3 py-4 text-center"
        >
          <div className="font-serif text-2xl text-white sm:text-3xl">{metric.value}</div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/68 sm:text-[11px]">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function OverviewSlide() {
  return (
    <SlideFrame
      imagePosition="object-[68%_center]"
      overlay="bg-[linear-gradient(100deg,rgba(18,33,12,0.96)_0%,rgba(24,45,17,0.86)_42%,rgba(24,45,17,0.46)_72%,rgba(24,45,17,0.22)_100%)]"
    >
      <div className="grid flex-1 content-start items-start gap-5 pt-6 sm:pt-8 md:pt-10 lg:grid-cols-[1.04fr_0.96fr] lg:pt-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/88">
            <Sprout className="h-3.5 w-3.5 text-gold" />
            Agri Export - Pune, India
          </span>

          <h1 className="mt-4 font-serif text-5xl leading-[0.96] text-white sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
            From India's <span className="italic text-gold">Fields</span> to Global Markets
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/82 sm:text-lg lg:text-[1.15rem]">
            Ekvira Export House connects Indian agri and farm produce with buyers across India and
            the Middle East with trust, quality, and speed.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-gold px-6 text-gold-foreground hover:bg-gold/90"
            >
              <Link to="/products">
                Explore Our Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-full border-white/20 bg-white/10 px-6 text-white hover:bg-white hover:text-primary"
            >
              <a href="mailto:ekviraexporthouse@gmail.com">Contact Us</a>
            </Button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {trustPoints.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/84 backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[30rem] lg:justify-self-end">
          <GlassPanel className="space-y-5">
            <RouteStrip />
            <div className="space-y-3">
              <div className="font-serif text-2xl text-white sm:text-3xl">
                Export-ready categories with cleaner digital presentation
              </div>
              <p className="text-sm leading-relaxed text-white/78 sm:text-[15px]">
                The current banner content is now arranged as a proper full-width hero with stronger
                hierarchy, cleaner spacing, and a more premium first impression.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {productTags.map((tag) => (
                <div
                  key={tag}
                  className="rounded-[1.2rem] border border-white/12 bg-white/10 px-4 py-3 text-sm font-medium uppercase tracking-[0.16em] text-white/84"
                >
                  {tag}
                </div>
              ))}
            </div>

            <MetricRow />
          </GlassPanel>
        </div>
      </div>
    </SlideFrame>
  );
}

export function DigitalExportBanner() {
  return (
    <div className="relative isolate overflow-hidden">
      <OverviewSlide />
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { Sprout } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

type PageBreadcrumbHeroProps = {
  title: string;
  description: string;
  crumbLabel: string;
  image: string;
  badge?: string;
  imagePosition?: string;
};

export function PageBreadcrumbHero({
  title,
  description,
  crumbLabel,
  image,
  badge = "Ekvira Export House",
  imagePosition,
}: PageBreadcrumbHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#1f3115] text-white">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        width={1983}
        height={793}
        className={cn(
          "absolute inset-0 h-full w-full object-cover",
          imagePosition ?? "object-center",
        )}
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(18,33,12,0.92)_0%,rgba(22,40,14,0.8)_42%,rgba(22,40,14,0.42)_100%)]" />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-18">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/88 backdrop-blur-sm">
            <Sprout className="h-3.5 w-3.5 text-gold" />
            {badge}
          </span>

          <Breadcrumb className="mt-5">
            <BreadcrumbList className="text-sm text-white/72">
              <BreadcrumbItem>
                <BreadcrumbLink asChild className="text-white/72 hover:text-white">
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-gold/80" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">{crumbLabel}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="mt-5 font-serif text-4xl leading-[1.02] text-white md:text-5xl lg:text-[3.6rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/82 md:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

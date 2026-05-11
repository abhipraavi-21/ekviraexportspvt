import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Apple, Bean, Carrot, Flame, Package, Wheat } from "lucide-react";
import productsBreadcrumbBanner from "@/assets/products-breadcrumb-banner.jpg";
import { PageBreadcrumbHero } from "@/components/PageBreadcrumbHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products - Ekvira Export House" },
      {
        name: "description",
        content:
          "Grains, pulses, spices, vegetables, fruits and farm commodities - sourced and exported from India.",
      },
    ],
  }),
  component: ProductsPage,
});

type PreviewItem = {
  name: string;
  info: string;
  image: string;
};

type Product = {
  icon: typeof Wheat;
  title: string;
  items: string;
  previewSummary: string;
  previewItems: PreviewItem[];
};

function svgDataUri(svg: string) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function makePreviewImage(
  title: string,
  accent: string,
  base: string,
  motif: "grain" | "pulse" | "spice" | "veg" | "fruit" | "commodity",
) {
  const titleSafe = title.replace(/&/g, "&amp;");

  const motifMarkup =
    motif === "grain"
      ? `
        <g stroke="${accent}" stroke-linecap="round" fill="none" opacity="0.92">
          <path d="M170 300 C160 250, 160 210, 168 150" stroke-width="7" />
          <path d="M218 302 C225 254, 232 214, 236 140" stroke-width="7" />
          <path d="M272 304 C281 255, 286 215, 292 150" stroke-width="7" />
        </g>
        <g fill="${accent}" opacity="0.96">
          <ellipse cx="158" cy="238" rx="12" ry="7" transform="rotate(-28 158 238)" />
          <ellipse cx="167" cy="210" rx="12" ry="7" transform="rotate(-28 167 210)" />
          <ellipse cx="175" cy="182" rx="12" ry="7" transform="rotate(-28 175 182)" />
          <ellipse cx="184" cy="154" rx="12" ry="7" transform="rotate(-28 184 154)" />
          <ellipse cx="204" cy="247" rx="12" ry="7" transform="rotate(26 204 247)" />
          <ellipse cx="214" cy="219" rx="12" ry="7" transform="rotate(26 214 219)" />
          <ellipse cx="223" cy="191" rx="12" ry="7" transform="rotate(26 223 191)" />
          <ellipse cx="232" cy="163" rx="12" ry="7" transform="rotate(26 232 163)" />
          <ellipse cx="266" cy="238" rx="12" ry="7" transform="rotate(-22 266 238)" />
          <ellipse cx="275" cy="210" rx="12" ry="7" transform="rotate(-22 275 210)" />
          <ellipse cx="284" cy="182" rx="12" ry="7" transform="rotate(-22 284 182)" />
          <ellipse cx="293" cy="154" rx="12" ry="7" transform="rotate(-22 293 154)" />
        </g>
      `
      : motif === "pulse"
        ? `
          <g fill="${accent}" opacity="0.92">
            <path d="M150 224 C130 198, 132 165, 160 151 C188 137, 218 151, 230 179 C242 208, 224 244, 196 250 C174 255, 160 242, 150 224 Z" />
            <path d="M228 214 C212 194, 214 167, 239 154 C264 142, 291 154, 302 178 C312 202, 298 231, 274 239 C254 246, 240 232, 228 214 Z" />
          </g>
          <g fill="${base}" opacity="0.85">
            <ellipse cx="164" cy="188" rx="7" ry="18" transform="rotate(-20 164 188)" />
            <ellipse cx="176" cy="173" rx="7" ry="18" transform="rotate(-10 176 173)" />
            <ellipse cx="189" cy="164" rx="7" ry="18" transform="rotate(8 189 164)" />
            <ellipse cx="244" cy="184" rx="7" ry="18" transform="rotate(-20 244 184)" />
            <ellipse cx="256" cy="172" rx="7" ry="18" transform="rotate(-10 256 172)" />
            <ellipse cx="269" cy="164" rx="7" ry="18" transform="rotate(8 269 164)" />
          </g>
        `
        : motif === "spice"
          ? `
            <g fill="${accent}" opacity="0.92">
              <circle cx="170" cy="192" r="18" />
              <circle cx="220" cy="156" r="14" />
              <circle cx="266" cy="184" r="16" />
              <circle cx="306" cy="152" r="12" />
            </g>
            <g fill="${base}" opacity="0.72">
              <path d="M154 236 L224 128" stroke="${base}" stroke-width="7" stroke-linecap="round" fill="none" />
              <path d="M202 244 L282 138" stroke="${base}" stroke-width="7" stroke-linecap="round" fill="none" />
              <path d="M252 240 L320 126" stroke="${base}" stroke-width="7" stroke-linecap="round" fill="none" />
            </g>
            <g fill="${accent}" opacity="0.8">
              <circle cx="178" cy="212" r="9" />
              <circle cx="194" cy="190" r="9" />
              <circle cx="236" cy="195" r="8" />
              <circle cx="252" cy="173" r="8" />
              <circle cx="284" cy="204" r="8" />
              <circle cx="300" cy="181" r="8" />
            </g>
          `
          : motif === "veg"
            ? `
              <g fill="${accent}" opacity="0.92">
                <path d="M150 222 C150 187, 173 160, 203 160 C233 160, 256 186, 256 222 C256 258, 233 286, 203 286 C173 286, 150 258, 150 222 Z" />
                <path d="M232 216 C232 184, 255 160, 285 160 C315 160, 338 184, 338 216 C338 248, 315 272, 285 272 C255 272, 232 248, 232 216 Z" />
              </g>
              <g fill="${base}" opacity="0.86">
                <rect x="195" y="130" width="10" height="72" rx="5" transform="rotate(-18 195 130)" />
                <rect x="282" y="128" width="10" height="72" rx="5" transform="rotate(18 282 128)" />
                <circle cx="203" cy="222" r="18" />
                <circle cx="286" cy="216" r="18" />
              </g>
            `
            : motif === "fruit"
              ? `
                <g fill="${accent}" opacity="0.92">
                  <circle cx="176" cy="226" r="36" />
                  <circle cx="244" cy="176" r="34" />
                  <circle cx="304" cy="230" r="32" />
                </g>
                <g fill="${base}" opacity="0.78">
                  <path d="M170 186 C168 168, 180 154, 198 150" stroke="${base}" stroke-width="8" stroke-linecap="round" fill="none" />
                  <path d="M240 145 C242 128, 254 118, 270 114" stroke="${base}" stroke-width="8" stroke-linecap="round" fill="none" />
                  <path d="M302 196 C304 180, 316 170, 332 166" stroke="${base}" stroke-width="8" stroke-linecap="round" fill="none" />
                  <circle cx="184" cy="224" r="10" />
                  <circle cx="252" cy="174" r="10" />
                  <circle cx="312" cy="230" r="10" />
                </g>
              `
              : `
                <g fill="${accent}" opacity="0.92">
                  <rect x="152" y="158" width="124" height="84" rx="24" />
                  <rect x="244" y="132" width="126" height="78" rx="20" />
                </g>
                <g fill="${base}" opacity="0.72">
                  <circle cx="186" cy="198" r="13" />
                  <circle cx="224" cy="176" r="11" />
                  <circle cx="280" cy="182" r="12" />
                  <circle cx="318" cy="158" r="10" />
                </g>
              `;

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420" role="img" aria-label="${titleSafe}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${base}" />
          <stop offset="100%" stop-color="#ffffff" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.45" />
          <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="640" height="420" fill="url(#bg)" />
      <circle cx="500" cy="92" r="148" fill="url(#glow)" />
      <circle cx="128" cy="324" r="126" fill="${accent}" opacity="0.12" />
      <path d="M 0 316 C 96 282, 156 280, 248 316 C 334 350, 404 352, 640 286 L 640 420 L 0 420 Z" fill="${accent}" opacity="0.12" />
      ${motifMarkup}
      <rect x="38" y="32" width="188" height="38" rx="19" fill="rgba(255,255,255,0.84)" />
      <text x="52" y="58" font-family="Georgia, 'Times New Roman', serif" font-size="24" font-weight="700" fill="#3b2a14">${titleSafe}</text>
    </svg>`;

  return svgDataUri(svg);
}

const products: Product[] = [
  {
    icon: Wheat,
    title: "Grains & Cereals",
    items: "Wheat, Rice, Maize, Sorghum",
    previewSummary: "Core bulk grains for milling, food supply and consistent export movement.",
    previewItems: [
      {
        name: "Wheat",
        info: "Durable milling grain for flour, semolina and bulk food supply.",
        image: makePreviewImage("Wheat", "#d8b365", "#fff5d8", "grain"),
      },
      {
        name: "Rice",
        info: "Clean, graded rice lots for retail, foodservice and bulk trade.",
        image: makePreviewImage("Rice", "#8cc9da", "#eff9fd", "pulse"),
      },
      {
        name: "Maize",
        info: "Reliable maize supply for feed, starch and industrial use.",
        image: makePreviewImage("Maize", "#f2b94b", "#fff3cc", "grain"),
      },
      {
        name: "Sorghum",
        info: "Versatile grain suited to food blends, fodder and regional trade.",
        image: makePreviewImage("Sorghum", "#8bb86b", "#eef8df", "grain"),
      },
    ],
  },
  {
    icon: Bean,
    title: "Pulses & Legumes",
    items: "Chana, Moong, Masoor, Toor Dal",
    previewSummary: "Reliable pulse lines prepared for food manufacturing and wholesale buyers.",
    previewItems: [
      {
        name: "Chana",
        info: "Firm pulse staple for kitchens, mills and bulk buyers.",
        image: makePreviewImage("Chana", "#c69b5f", "#fff2df", "pulse"),
      },
      {
        name: "Moong",
        info: "Light, clean lots suited for sprouting and daily cooking.",
        image: makePreviewImage("Moong", "#8fc98a", "#eefbe9", "pulse"),
      },
      {
        name: "Masoor",
        info: "Fast-cooking lentil for packed food and institutional supply.",
        image: makePreviewImage("Masoor", "#e0a57a", "#fff0e5", "pulse"),
      },
      {
        name: "Toor Dal",
        info: "Trusted split lentil for consistent demand and export packing.",
        image: makePreviewImage("Toor Dal", "#d59a51", "#fff4d3", "pulse"),
      },
    ],
  },
  {
    icon: Flame,
    title: "Spices & Condiments",
    items: "Turmeric, Cumin, Coriander, Chilli",
    previewSummary:
      "Aromatic, export-ready spice lines for blending, seasoning and food processing.",
    previewItems: [
      {
        name: "Turmeric",
        info: "Color-rich roots and powders with strong export demand.",
        image: makePreviewImage("Turmeric", "#e3b23c", "#fff7d2", "spice"),
      },
      {
        name: "Cumin",
        info: "Aromatic seed lots for seasoning, blending and retail packs.",
        image: makePreviewImage("Cumin", "#c68a45", "#fff4d8", "spice"),
      },
      {
        name: "Coriander",
        info: "Fresh, earthy spice used across trade and food manufacturing.",
        image: makePreviewImage("Coriander", "#7bb57c", "#eef9ea", "spice"),
      },
      {
        name: "Chilli",
        info: "Heat-forward product lines for sauces, blends and kitchens.",
        image: makePreviewImage("Chilli", "#dc6b4d", "#fff0ea", "spice"),
      },
    ],
  },
  {
    icon: Carrot,
    title: "Vegetables",
    items: "Onion, Garlic, Potato, Tomato",
    previewSummary:
      "Fresh vegetable sourcing tailored to wholesale, retail and foodservice demand.",
    previewItems: [
      {
        name: "Onion",
        info: "Crisp bulbs prepared for bulk handling and timely dispatch.",
        image: makePreviewImage("Onion", "#a94c47", "#fff2ef", "veg"),
      },
      {
        name: "Garlic",
        info: "Bold flavor stock for kitchens, foodservice and processors.",
        image: makePreviewImage("Garlic", "#e2d3b0", "#fffaf0", "veg"),
      },
      {
        name: "Potato",
        info: "Reliable tubers for everyday retail and wholesale supply.",
        image: makePreviewImage("Potato", "#b78b5c", "#fbf1e5", "veg"),
      },
      {
        name: "Tomato",
        info: "Versatile fresh produce for wholesale and processing demand.",
        image: makePreviewImage("Tomato", "#d65d4b", "#fff0ed", "veg"),
      },
    ],
  },
  {
    icon: Apple,
    title: "Fruits",
    items: "Mango, Pomegranate, Banana, Grapes",
    previewSummary: "Seasonal and steady fruit lines prepared for fresh-market buyers.",
    previewItems: [
      {
        name: "Mango",
        info: "Seasonal export fruit with strong market recognition.",
        image: makePreviewImage("Mango", "#e7a33d", "#fff4d2", "fruit"),
      },
      {
        name: "Pomegranate",
        info: "Bright, premium fruit for retail and gift supply.",
        image: makePreviewImage("Pomegranate", "#bf4d5d", "#fff1f4", "fruit"),
      },
      {
        name: "Banana",
        info: "High-volume fruit suited to steady daily movement.",
        image: makePreviewImage("Banana", "#d9bd50", "#fff8de", "fruit"),
      },
      {
        name: "Grapes",
        info: "Table grapes prepared for fresh market buyers.",
        image: makePreviewImage("Grapes", "#8262c4", "#f1ebff", "fruit"),
      },
    ],
  },
  {
    icon: Package,
    title: "Farm Commodities",
    items: "Jaggery, Oil Seeds, Animal Feed",
    previewSummary: "Flexible commodity sourcing for processors, traders and custom requirements.",
    previewItems: [
      {
        name: "Jaggery",
        info: "Traditional sweetener for retail packs and food use.",
        image: makePreviewImage("Jaggery", "#c48139", "#fff0d9", "commodity"),
      },
      {
        name: "Oil Seeds",
        info: "Seed lots for pressing, blending and processing.",
        image: makePreviewImage("Oil Seeds", "#8a7742", "#f8f4d9", "commodity"),
      },
      {
        name: "Animal Feed",
        info: "Bulk feed materials for livestock and farm channels.",
        image: makePreviewImage("Animal Feed", "#6f8b4d", "#eff6df", "commodity"),
      },
      {
        name: "Custom Sourcing",
        info: "Flexible sourcing options for buyer-specific trade requests.",
        image: makePreviewImage("Custom Sourcing", "#6f6f8f", "#f0f0fb", "commodity"),
      },
    ],
  },
] as const;

function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState<(typeof products)[number]>(products[0]);

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <PageBreadcrumbHero
          title="Export-Ready Farm Products"
          crumbLabel="Products"
          description="Browse our core agri categories sourced from India and prepared for dependable domestic and international trade."
          image={productsBreadcrumbBanner}
          imagePosition="object-[74%_center]"
        />

        <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.22em] text-primary font-medium">
              What We Trade
            </span>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              Farm Fresh. <span className="italic text-primary">Export Ready.</span>
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(320px,0.92fr)] lg:items-start">
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 lg:ml-auto lg:max-w-2xl lg:pr-8 xl:pr-12">
              {products.map((p) => (
                <button
                  key={p.title}
                  type="button"
                  className={`group flex w-full items-center gap-5 rounded-[2rem] border bg-card p-6 text-left soft-shadow transition-all hover:-translate-y-1 hover:soft-shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 ${
                    activeProduct.title === p.title
                      ? "border-primary/25 ring-1 ring-primary/15"
                      : "border-border/60"
                  }`}
                  onMouseEnter={() => setActiveProduct(p)}
                  onFocus={() => setActiveProduct(p)}
                  onClick={() => setActiveProduct(p)}
                >
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/20 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <p.icon className="h-7 w-7" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary/70">
                      Category
                    </div>
                    <h3 className="mt-2 font-serif text-2xl text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{p.items}</p>
                  </div>

                  <span className="hidden rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground lg:inline-flex">
                    Hover to preview
                  </span>
                </button>
              ))}
            </div>

            <aside className="lg:sticky lg:top-8">
              <div className="rounded-[2.2rem] border border-border/70 bg-card p-5 soft-shadow-lg md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Preview
                    </span>
                    <h3 className="mt-4 font-serif text-3xl leading-tight text-foreground">
                      {activeProduct.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                      {activeProduct.previewSummary}
                    </p>
                  </div>
                  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/20 text-primary">
                    <activeProduct.icon className="h-7 w-7" />
                  </span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {activeProduct.previewItems.map((item) => (
                    <div
                      key={item.name}
                      className="overflow-hidden rounded-[1.7rem] border border-border/60 bg-background"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-36 w-full object-cover object-center"
                      />
                      <div className="p-4">
                        <h4 className="font-serif text-xl text-foreground">{item.name}</h4>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <p className="mt-12 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            Specific product availability on request. We source directly from farms and
            APEDA-registered exporters.
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

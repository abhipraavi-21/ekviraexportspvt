import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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

type DetailSection = {
  label: string;
  items: string[];
};

type Product = {
  icon: typeof Wheat;
  title: string;
  items: string;
  previewSummary: string;
  previewItems: PreviewItem[];
  previewStyle?: "grid" | "carousel";
  details?: DetailSection[];
};

function chunkPreviewItems(items: PreviewItem[], size: number) {
  const chunks: PreviewItem[][] = [];
  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }
  return chunks;
}

function splitProductItems(items: string) {
  return items
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

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
    icon: Apple,
    title: "Vegetables & Fruits",
    items: "Green Chilli, Onion, Lemon, Drumstick, Garlic, Cabbage, Banana, Mango, Pomegranate, Grapes, Custard Apple, Guava, Dragon Fruit, Watermelon, Muskmelon, Tamarind",
    previewSummary: "Fresh produce lines sourced across India's key growing belts for export buyers.",
    previewItems: [
      {
        name: "Green Chilli",
        info: "",
        image: makePreviewImage("Green Chilli", "#79b85d", "#eef8df", "veg"),
      },
      {
        name: "Onion",
        info: "",
        image: makePreviewImage("Onion", "#c48f58", "#fff3df", "veg"),
      },
      {
        name: "Lemon",
        info: "",
        image: makePreviewImage("Lemon", "#e4c247", "#fff8d5", "fruit"),
      },
      {
        name: "Drumstick",
        info: "",
        image: makePreviewImage("Drumstick", "#7aa95a", "#edf9df", "veg"),
      },
      {
        name: "Garlic",
        info: "",
        image: makePreviewImage("Garlic", "#d9c8a2", "#fbf5e7", "veg"),
      },
      {
        name: "Cabbage",
        info: "",
        image: makePreviewImage("Cabbage", "#78b56d", "#edf8e8", "veg"),
      },
      {
        name: "Banana",
        info: "",
        image: makePreviewImage("Banana", "#e2c34f", "#fff8df", "fruit"),
      },
      {
        name: "Mango",
        info: "",
        image: makePreviewImage("Mango", "#e59d3d", "#fff2d0", "fruit"),
      },
      {
        name: "Pomegranate",
        info: "",
        image: makePreviewImage("Pomegranate", "#c84c5a", "#fff1f4", "fruit"),
      },
      {
        name: "Grapes",
        info: "",
        image: makePreviewImage("Grapes", "#8b67ca", "#f2ecff", "fruit"),
      },
      {
        name: "Custard Apple",
        info: "",
        image: makePreviewImage("Custard Apple", "#cfa85e", "#fff4de", "fruit"),
      },
      {
        name: "Guava",
        info: "",
        image: makePreviewImage("Guava", "#73b47a", "#edf8ea", "fruit"),
      },
      {
        name: "Dragon Fruit",
        info: "",
        image: makePreviewImage("Dragon Fruit", "#d35f84", "#fff0f5", "fruit"),
      },
      {
        name: "Watermelon",
        info: "",
        image: makePreviewImage("Watermelon", "#da6b5a", "#fff0ec", "fruit"),
      },
      {
        name: "Muskmelon",
        info: "",
        image: makePreviewImage("Muskmelon", "#d8ae58", "#fff8df", "fruit"),
      },
      {
        name: "Tamarind",
        info: "",
        image: makePreviewImage("Tamarind", "#9b7458", "#f7efe4", "veg"),
      },
    ],
    previewStyle: "carousel",
    details: [
      {
        label: "Products",
        items: [
          "Green Chilli",
          "Onion",
          "Lemon",
          "Drumstick",
          "Garlic",
          "Cabbage",
          "Banana",
          "Mango",
          "Pomegranate",
          "Grapes",
          "Custard Apple",
          "Guava",
          "Dragon Fruit",
          "Watermelon",
          "Muskmelon",
          "Tamarind",
        ],
      },
      {
        label: "Sourced From",
        items: ["Nashik", "Jalgaon", "Dhule", "Nandurbar", "Ratnagiri", "Solapur", "Satara", "Kolhapur"],
      },
      {
        label: "Major Export Markets",
        items: ["UAE", "Saudi Arabia", "Qatar", "Oman"],
      },
    ],
  },
  {
    icon: Bean,
    title: "Drinks & Spirits",
    items: "Red Wine, White Wine, Sparkling Wine, Fruit Wine, Grape Wine",
    previewSummary: "Beverage and spirits-focused lines for trade and hospitality supply.",
    previewItems: [
      {
        name: "Red Wine",
        info: "",
        image: makePreviewImage("Red Wine", "#8cc9da", "#eff9fd", "commodity"),
      },
      {
        name: "White Wine",
        info: "",
        image: makePreviewImage("White Wine", "#c68a45", "#fff4d8", "commodity"),
      },
      {
        name: "Sparkling Wine",
        info: "",
        image: makePreviewImage("Sparkling Wine", "#8262c4", "#f1ebff", "commodity"),
      },
      {
        name: "Fruit Wine",
        info: "",
        image: makePreviewImage("Fruit Wine", "#e0a57a", "#fff0e5", "commodity"),
      },
      {
        name: "Grape Wine",
        info: "",
        image: makePreviewImage("Grape Wine", "#d59a51", "#fff4d3", "commodity"),
      },
    ],
    previewStyle: "carousel",
    details: [
      {
        label: "Products",
        items: [
          "Red Wine",
          "White Wine",
          "Sparkling Wine",
          "Fruit Wine",
          "Grape Wine",
        ],
      },
      {
        label: "Sourced From",
        items: ["Nashik", "Mumbai", "Thane"],
      },
      {
        label: "Major Export Markets",
        items: ["Singapore", "United Kingdom", "USA", "Mauritius"],
      },
    ],


  },
  {
    icon: Flame,
    title: "Textiles",
    items: "Terry Towels, Napkins, Blankets, Cotton Dohar, Bedsheets",
    previewSummary: "Textile trade lines for apparel, home furnishing and industrial use.",
    previewItems: [
      {
        name: "Terry Towels",
        info: "",
        image: makePreviewImage("Terry Towels", "#d8b365", "#fff5d8", "grain"),
      },
      {
        name: "Napkins",
        info: "",
        image: makePreviewImage("Napkins", "#8cc9da", "#eff9fd", "pulse"),
      },
      {
        name: "Blankets",
        info: "",
        image: makePreviewImage("Blankets", "#f2b94b", "#fff3cc", "grain"),
      },
      {
        name: "Cotton Dohar",
        info: "",
        image: makePreviewImage("Cotton Dohar", "#8bb86b", "#eef8df", "grain"),
      },
      {
        name: "Bedsheets",
        info: "",
        image: makePreviewImage("Bedsheets", "#c48139", "#fff0d9", "grain"),
      },
    ],
    previewStyle: "carousel",
    details: [
      {
        label: "Products",
        items: [
          "Terry Towels (350-750 gsm, White & Colours - ideal for hotel industry)",
          "Napkins",
          "Blankets",
          "Cotton Dohar (Single & Double Bed)",
          "Bedsheets (Single & Double Bed)",
        ],
      },
      {
        label: "Sourced From",
        items: ["Solapur", "Malegaon", "Ichalkaranji", "Pondicherry"],
      },
      {
        label: "Major Export Markets",
        items: ["UAE", "Saudi Arabia", "Egypt", "South Africa"],
      },
    ],
  },
  {
    icon: Carrot,
    title: "Beverages",
    items: "Soda Water, Jeera Soda, Lemon Soda, Soft Drinks, Packaged Drinking Water",
    previewSummary: "Beverage-focused supply for daily consumption and retail channels.",
    previewItems: [
      {
        name: "Soda Water",
        info: "",
        image: makePreviewImage("Soda Water", "#c69b5f", "#fff2df", "fruit"),
      },
      {
        name: "Jeera Soda",
        info: "",
        image: makePreviewImage("Jeera Soda", "#8fc98a", "#eefbe9", "fruit"),
      },
      {
        name: "Lemon Soda",
        info: "",
        image: makePreviewImage("Lemon Soda", "#e0a57a", "#fff0e5", "fruit"),
      },
      {
        name: "Soft Drinks",
        info: "",
        image: makePreviewImage("Soft Drinks", "#d59a51", "#fff4d3", "fruit"),
      },
      {
        name: "Packaged Drinking Water",
        info: "",
        image: makePreviewImage("Packaged Drinking Water", "#6f8b4d", "#eff6df", "fruit"),
      },
    ],
    previewStyle: "carousel",
    details: [
      {
        label: "Products",
        items: [
          "Soda Water",
          "Jeera Soda",
          "Lemon Soda",
          "Soft Drinks",
          "Packaged Drinking Water",
        ],
      },
      {
        label: "Sourced From",
        items: ["Nashik", "Mumbai", "Thane"],
      },
      {
        label: "Major Export Markets",
        items: ["UAE", "Bahrain", "Kuwait", "Oman"],
      },
    ],
  },
  {
    icon: Apple,
    title: "Engineering Goods",
    items: "Available on enquiry - industrial components, hardware, and allied engineering products sourced from Maharashtra's manufacturing belt",
    previewSummary: "Industrial and hardware lines for fabrication, assembly and repair.",
    previewItems: [
      {
        name: "Industrial Components",
        info: "",
        image: makePreviewImage("Industrial Components", "#6f8b4d", "#eff6df", "commodity"),
      },
      {
        name: "Hardware",
        info: "",
        image: makePreviewImage("Hardware", "#6f6f8f", "#f0f0fb", "commodity"),
      },
      {
        name: "Allied Engineering",
        info: "",
        image: makePreviewImage("Allied Engineering", "#c48139", "#fff0d9", "commodity"),
      },
      {
        name: "Maharashtra Belt",
        info: "",
        image: makePreviewImage("Maharashtra Belt", "#8a7742", "#f8f4d9", "commodity"),
      },
    ],
    previewStyle: "carousel",
    details: [
      {
        label: "Products",
        items: [
          "Available on enquiry - industrial components, hardware, and allied engineering products sourced from Maharashtra's manufacturing belt.",
        ],
      },
      {
        label: "Sourced From",
        items: ["Pune", "Nashik", "Aurangabad"],
      },
      {
        label: "Major Export Markets",
        items: ["UAE", "Kuwait", "Germany", "USA"],
      },
    ],
  },
  {
    icon: Package,
    title: "Seasonal Products",
    items: "Ganpati / Ganapati Murtis, Festive Decorative Items, Puja Essentials, Cultural Artefacts",
    previewSummary: "Season-linked product lines for holidays, events and special demand peaks.",
    previewItems: [
      {
        name: "Ganpati Murtis",
        info: "",
        image: makePreviewImage("Ganpati Murtis", "#c48139", "#fff0d9", "commodity"),
      },
      {
        name: "Festive Decorative Items",
        info: "",
        image: makePreviewImage("Festive Decorative Items", "#8a7742", "#f8f4d9", "commodity"),
      },
      {
        name: "Puja Essentials",
        info: "",
        image: makePreviewImage("Puja Essentials", "#6f8b4d", "#eff6df", "commodity"),
      },
      {
        name: "Cultural Artefacts",
        info: "",
        image: makePreviewImage("Cultural Artefacts", "#6f6f8f", "#f0f0fb", "commodity"),
      },
    ],
    previewStyle: "carousel",
    details: [
      {
        label: "Products",
        items: [
          "Ganpati / Ganapati Murtis (Eco-friendly & Traditional)",
          "Festive Decorative Items",
          "Puja Essentials & Cultural Artefacts",
        ],
      },
      {
        label: "Sourced From",
        items: ["Pen (Raigad)", "Pune", "Mumbai"],
      },
      {
        label: "Major Export Markets",
        items: ["Australia", "USA", "United Kingdom", "Canada"],
      },
    ],
  },
] as const;

function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState<(typeof products)[number]>(products[0]);
  const [carouselPage, setCarouselPage] = useState(0);

  const activeCarouselPages =
    activeProduct.previewStyle !== "grid" ? chunkPreviewItems(activeProduct.previewItems, 2) : [];
  const activeProductDetails =
    activeProduct.details ?? [
      {
        label: "Products",
        items: splitProductItems(activeProduct.items),
      },
    ];

  useEffect(() => {
    setCarouselPage(0);
  }, [activeProduct.title]);

  useEffect(() => {
    if (activeProduct.previewStyle === "grid" || activeCarouselPages.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setCarouselPage((current) => (current + 1) % activeCarouselPages.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [activeCarouselPages.length, activeProduct.previewStyle, activeProduct.title]);

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

          <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(360px,1.06fr)] lg:items-start">
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 lg:ml-auto lg:max-w-2xl lg:pr-6 xl:pr-10">
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

                <div className="mt-6">
                  {activeProduct.previewStyle !== "grid" ? (
                    <div>
                      <div className="overflow-hidden rounded-[1.7rem] border border-border/60 bg-background">
                        <div
                          className="flex transition-transform duration-700 ease-out"
                          style={{ transform: `translateX(-${carouselPage * 100}%)` }}
                        >
                          {activeCarouselPages.map((page, pageIndex) => (
                            <div key={pageIndex} className="min-w-full p-3">
                              <div className="grid grid-cols-2 gap-3">
                                {page.map((item) => (
                                  <article
                                    key={item.name}
                                    className="overflow-hidden rounded-[1.45rem] border border-border/60 bg-card"
                                  >
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="h-[230px] w-full object-cover object-center"
                                    />
                                  </article>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {activeProductDetails ? (
                        <div
                          className={`mt-5 grid gap-4 ${
                            activeProductDetails.length === 1 ? "grid-cols-1" : "md:grid-cols-3"
                          }`}
                        >
                          {activeProductDetails.map((section) => (
                            <div
                              key={section.label}
                              className="rounded-[1.5rem] border border-border/60 bg-background p-4"
                            >
                              <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-primary/70">
                                {section.label}
                              </div>
                              <div className="mt-3 flex flex-wrap gap-2">
                                {section.items.map((item) => (
                                  <span
                                    key={item}
                                    className="w-full rounded-full border border-border/70 bg-secondary/50 px-3 py-1 text-[12px] text-foreground/80"
                                  >
                                    {item}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2">
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
                  )}
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

import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Apple, Bean, Carrot, Flame, Package, Sparkles, Wheat } from "lucide-react";
import productsBreadcrumbBanner from "@/assets/products-breadcrumb-banner.jpg";
import vegFruitTamarindImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.43 PM.jpeg";
import vegFruitMuskmelonImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.43 PM (1).jpeg";
import vegFruitDragonFruitImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.43 PM (2).jpeg";
import vegFruitWatermelonImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.43 PM (3).jpeg";
import vegFruitGuavaImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.43 PM (4).jpeg";
import vegFruitCustardAppleImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.43 PM (5).jpeg";
import vegFruitPomegranateImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.43 PM (6).jpeg";
import vegFruitMangoImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.43 PM (7).jpeg";
import vegFruitBananaImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.43 PM (8).jpeg";
import vegFruitCabbageImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.43 PM (9).jpeg";
import vegFruitDrumstickImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.44 PM.jpeg";
import vegFruitLemonImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.44 PM (1).jpeg";
import vegFruitOnionImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.44 PM (2).jpeg";
import vegFruitGarlicImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.44 PM (3).jpeg";
import vegFruitGreenChilliImage from "@/assets/product-page-images/Vegetables & Fruits/WhatsApp Image 2026-05-14 at 3.37.44 PM (4).jpeg";
import vegFruitGrapesImage from "@/assets/product-page-images/Vegetables & Fruits/grapes.png";
import drinksSpiritsGrapeWineImage from "@/assets/product-page-images/Drinks-Spirits/WhatsApp Image 2026-05-14 at 3.41.49 PM.jpeg";
import drinksSpiritsFruitWineImage from "@/assets/product-page-images/Drinks-Spirits/WhatsApp Image 2026-05-14 at 3.41.49 PM (1).jpeg";
import drinksSpiritsSparklingWineImage from "@/assets/product-page-images/Drinks-Spirits/WhatsApp Image 2026-05-14 at 3.41.49 PM (2).jpeg";
import drinksSpiritsWhiteWineImage from "@/assets/product-page-images/Drinks-Spirits/WhatsApp Image 2026-05-14 at 3.41.50 PM.jpeg";
import drinksSpiritsRedWineImage from "@/assets/product-page-images/Drinks-Spirits/WhatsApp Image 2026-05-14 at 3.41.50 PM (1).jpeg";
import textilesTerryTowelsImage from "@/assets/product-page-images/Textiles/WhatsApp Image 2026-05-14 at 4.00.38 PM.jpeg";
import textilesBlanketsImage from "@/assets/product-page-images/Textiles/WhatsApp Image 2026-05-14 at 4.00.38 PM (1).jpeg";
import textilesBedsheetsImage from "@/assets/product-page-images/Textiles/WhatsApp Image 2026-05-14 at 4.00.38 PM (2).jpeg";
import textilesCottonDoharImage from "@/assets/product-page-images/Textiles/WhatsApp Image 2026-05-14 at 4.00.38 PM (3).jpeg";
import textilesNapkinsImage from "@/assets/product-page-images/Textiles/WhatsApp Image 2026-05-14 at 4.00.38 PM (4).jpeg";
import beveragesGrapeWineImage from "@/assets/product-page-images/Beverages/WhatsApp Image 2026-05-14 at 3.51.19 PM.jpeg";
import beveragesFruitWineImage from "@/assets/product-page-images/Beverages/WhatsApp Image 2026-05-14 at 3.51.19 PM (1).jpeg";
import beveragesSparklingWineImage from "@/assets/product-page-images/Beverages/WhatsApp Image 2026-05-14 at 3.51.19 PM (2).jpeg";
import beveragesWhiteWineImage from "@/assets/product-page-images/Beverages/WhatsApp Image 2026-05-14 at 3.51.19 PM (3).jpeg";
import beveragesRedWineImage from "@/assets/product-page-images/Beverages/WhatsApp Image 2026-05-14 at 3.51.19 PM (4).jpeg";
import engineeringGearShaftImage from "@/assets/product-page-images/Engineering Goods/WhatsApp Image 2026-05-14 at 4.29.24 PM.jpeg";
import engineeringBearingHousingImage from "@/assets/product-page-images/Engineering Goods/WhatsApp Image 2026-05-14 at 4.29.24 PM (1).jpeg";
import engineeringGearImage from "@/assets/product-page-images/Engineering Goods/WhatsApp Image 2026-05-14 at 4.29.25 PM.jpeg";
import engineeringBearingImage from "@/assets/product-page-images/Engineering Goods/WhatsApp Image 2026-05-14 at 4.29.25 PM (2).jpeg";
import seasonalPoojaItemsImage from "@/assets/product-page-images/Seasonal Products/WhatsApp Image 2026-05-14 at 4.41.47 PM.jpeg";
import seasonalGaneshImage from "@/assets/product-page-images/Seasonal Products/WhatsApp Image 2026-05-14 at 4.41.47 PM (1).jpeg";
import seasonalDecorImage from "@/assets/product-page-images/Seasonal Products/WhatsApp Image 2026-05-14 at 4.41.47 PM (2).jpeg";
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
  detailItemLayout?: "stack" | "grid";
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

const honeyPreviewImageModules = import.meta.glob(
  "../assets/product-page-images/Honey/*.{jpeg,jpg,png}",
  {
    eager: true,
    import: "default",
  },
) as Record<string, string>;

const honeyPreviewImages = Object.entries(honeyPreviewImageModules)
  .sort(([left], [right]) => left.localeCompare(right))
  .map(([, image]) => image);

const products: Product[] = [
  {
    icon: Apple,
    title: "Vegetables & Fruits",
    items:
      "Green Chilli, Onion, Lemon, Drumstick, Garlic, Cabbage, Banana, Mango, Pomegranate, Grapes, Custard Apple, Guava, Dragon Fruit, Watermelon, Muskmelon, Tamarind",
    previewSummary:
      "Fresh produce lines sourced across India's key growing belts for export buyers.",
    previewItems: [
      {
        name: "Green Chilli",
        info: "",
        image: vegFruitGreenChilliImage,
      },
      {
        name: "Onion",
        info: "",
        image: vegFruitOnionImage,
      },
      {
        name: "Lemon",
        info: "",
        image: vegFruitLemonImage,
      },
      {
        name: "Drumstick",
        info: "",
        image: vegFruitDrumstickImage,
      },
      {
        name: "Garlic",
        info: "",
        image: vegFruitGarlicImage,
      },
      {
        name: "Cabbage",
        info: "",
        image: vegFruitCabbageImage,
      },
      {
        name: "Banana",
        info: "",
        image: vegFruitBananaImage,
      },
      {
        name: "Mango",
        info: "",
        image: vegFruitMangoImage,
      },
      {
        name: "Pomegranate",
        info: "",
        image: vegFruitPomegranateImage,
      },
      {
        name: "Grapes",
        info: "",
        image: vegFruitGrapesImage,
      },
      {
        name: "Custard Apple",
        info: "",
        image: vegFruitCustardAppleImage,
      },
      {
        name: "Guava",
        info: "",
        image: vegFruitGuavaImage,
      },
      {
        name: "Dragon Fruit",
        info: "",
        image: vegFruitDragonFruitImage,
      },
      {
        name: "Watermelon",
        info: "",
        image: vegFruitWatermelonImage,
      },
      {
        name: "Muskmelon",
        info: "",
        image: vegFruitMuskmelonImage,
      },
      {
        name: "Tamarind",
        info: "",
        image: vegFruitTamarindImage,
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
        items: [
          "Nashik",
          "Jalgaon",
          "Dhule",
          "Nandurbar",
          "Ratnagiri",
          "Solapur",
          "Satara",
          "Kolhapur",
        ],
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
        image: drinksSpiritsRedWineImage,
      },
      {
        name: "White Wine",
        info: "",
        image: drinksSpiritsWhiteWineImage,
      },
      {
        name: "Sparkling Wine",
        info: "",
        image: drinksSpiritsSparklingWineImage,
      },
      {
        name: "Fruit Wine",
        info: "",
        image: drinksSpiritsFruitWineImage,
      },
      {
        name: "Grape Wine",
        info: "",
        image: drinksSpiritsGrapeWineImage,
      },
    ],
    previewStyle: "carousel",
    details: [
      {
        label: "Products",
        items: ["Red Wine", "White Wine", "Sparkling Wine", "Fruit Wine", "Grape Wine"],
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
        image: textilesTerryTowelsImage,
      },
      {
        name: "Napkins",
        info: "",
        image: textilesNapkinsImage,
      },
      {
        name: "Blankets",
        info: "",
        image: textilesBlanketsImage,
      },
      {
        name: "Cotton Dohar",
        info: "",
        image: textilesCottonDoharImage,
      },
      {
        name: "Bedsheets",
        info: "",
        image: textilesBedsheetsImage,
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
        image: beveragesGrapeWineImage,
      },
      {
        name: "Jeera Soda",
        info: "",
        image: beveragesFruitWineImage,
      },
      {
        name: "Lemon Soda",
        info: "",
        image: beveragesSparklingWineImage,
      },
      {
        name: "Soft Drinks",
        info: "",
        image: beveragesWhiteWineImage,
      },
      {
        name: "Packaged Drinking Water",
        info: "",
        image: beveragesRedWineImage,
      },
    ],
    previewStyle: "carousel",
    details: [
      {
        label: "Products",
        items: ["Soda Water", "Jeera Soda", "Lemon Soda", "Soft Drinks", "Packaged Drinking Water"],
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
    items:
      "Available on enquiry - industrial components, hardware, and allied engineering products sourced from Maharashtra's manufacturing belt",
    previewSummary: "Industrial and hardware lines for fabrication, assembly and repair.",
    previewItems: [
      {
        name: "Industrial Components",
        info: "",
        image: engineeringGearShaftImage,
      },
      {
        name: "Hardware",
        info: "",
        image: engineeringBearingImage,
      },
      {
        name: "Allied Engineering",
        info: "",
        image: engineeringGearImage,
      },
      {
        name: "Maharashtra Belt",
        info: "",
        image: engineeringBearingHousingImage,
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
    items:
      "Ganpati / Ganapati Murtis, Festive Decorative Items, Puja Essentials, Cultural Artefacts",
    previewSummary: "Season-linked product lines for holidays, events and special demand peaks.",
    previewItems: [
      {
        name: "Ganpati Murtis",
        info: "",
        image: seasonalPoojaItemsImage,
      },
      {
        name: "Festive Decorative Items",
        info: "",
        image: seasonalDecorImage,
      },
      {
        name: "Puja Essentials",
        info: "",
        image: seasonalGaneshImage,
      },
      {
        name: "Cultural Artefacts",
        info: "",
        image: seasonalPoojaItemsImage,
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
  {
    icon: Sparkles,
    title: "Honey",
    items:
      "Floral, infused, and specialty honey varietals sourced from Indian bee belts for export-ready supply.",
    previewSummary:
      "A broad honey range spanning floral, infused, and specialty varietals for domestic and export trade.",
    previewItems: [
      "Leechi Flora Honey",
      "Coffee Infused Honey",
      "Lemon Infused Honey",
      "Vantulsi Flora Honey",
      "Karanj Flora Honey",
      "Jamun Flora Honey",
      "Ajwain Flora Honey",
      "Cinemyon Infused Honey",
      "Multi Flora Honey",
      "Saunf Flora Honey",
      "Acacia Flora Honey",
      "Sandalwood Infused Honey",
      "Berry Flora Honey",
      "Chocolate Infused Honey",
      "Sheesham Flora Honey",
      "Moringa Flora Honey",
      "ALeechiora Honey",
      "Mustard Flora Honey",
    ].map((name, index) => ({
      name,
      info: "",
      image: honeyPreviewImages[index] ?? honeyPreviewImages[0],
    })),
    previewStyle: "carousel",
    detailItemLayout: "grid",
    details: [
      {
        label: "Products",
        items: [
          "Karanj Flora Honey",
          "Van Tulsi Flora Honey",
          "Lemon Infused Honey",
          "Coffee Infused Honey",
          "Jamun Flora Honey",
          "Ajwain Flora Honey",
          "Cinnamon Infused Honey",
          "Multi Flora Honey",
          "Saunf Flora Honey",
          "Acacia Flora Honey",
          "Sandalwood Infused Honey",
          "Berry Flora Honey",
          "Chocolate Infused Honey",
          "Sheesham Flora Honey",
          "Moringa Flora Honey",
          "Litchi Flora Honey",
          "Mustard Flora Honey",
        ],
      },
      {
        label: "Sourced From",
        items: [
          "Pune",
          "Nashik",
          "Dhule",
          "Uttarakhand",
          "Kashmir",
          "Jharkhand",
          "Bihar",
          "Gujarat",
        ],
      },
      {
        label: "Major Export Markets",
        items: ["USA", "UAE", "Saudi Arabia", "Canada", "Bangladesh"],
      },
    ],
  },
] as const;

function ProductsPage() {
  const [activeProduct, setActiveProduct] = useState<(typeof products)[number]>(products[0]);
  const [carouselPage, setCarouselPage] = useState(0);

  const activeCarouselPages =
    activeProduct.previewStyle !== "grid" ? chunkPreviewItems(activeProduct.previewItems, 2) : [];
  const activeProductDetails = activeProduct.details ?? [
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
                    
                    <h3 className="mt-2 font-serif text-2xl text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{p.items}</p>
                  </div>

                 
                </button>
              ))}
            </div>

            <aside className="lg:sticky lg:top-8">
              <div className="rounded-[2.2rem] border border-border/70 bg-card p-5 soft-shadow-lg md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    {/* <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                      Preview
                    </span> */}
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
                              <div
                                className={`mt-3 ${
                                  activeProduct.detailItemLayout === "grid" &&
                                  section.label === "Products"
                                    ? "grid grid-cols-1 gap-2 sm:grid-cols-2"
                                    : "flex flex-wrap gap-2"
                                }`}
                              >
                                {section.items.map((item) => (
                                  <span
                                    key={item}
                                    className={`${
                                      activeProduct.detailItemLayout === "grid" &&
                                      section.label === "Products"
                                        ? "w-full rounded-2xl border border-border/70 bg-secondary/50 px-3 py-2 text-[12px] leading-5 text-foreground/80"
                                        : "w-full rounded-full border border-border/70 bg-secondary/50 px-3 py-1 text-[12px] text-foreground/80"
                                    }`}
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
                            className="h-40 w-full object-cover object-center"
                          />
                          <div className="p-4 md:p-5">
                            <h4 className="font-serif text-xl text-foreground md:text-2xl">
                              {item.name}
                            </h4>
                            <p className="mt-2 text-sm leading-6 text-muted-foreground">
                              {item.info}
                            </p>
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

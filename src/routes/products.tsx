import { createFileRoute } from "@tanstack/react-router";
import { Wheat, Bean, Flame, Carrot, Apple, Package } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Ekvira Export House" },
      { name: "description", content: "Grains, pulses, spices, vegetables, fruits and farm commodities — sourced and exported from India." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  { icon: Wheat, title: "Grains & Cereals", items: "Wheat, Rice, Maize, Sorghum" },
  { icon: Bean, title: "Pulses & Legumes", items: "Chana, Moong, Masoor, Toor Dal" },
  { icon: Flame, title: "Spices & Condiments", items: "Turmeric, Cumin, Coriander, Chilli" },
  { icon: Carrot, title: "Vegetables", items: "Onion, Garlic, Potato, Tomato" },
  { icon: Apple, title: "Fruits", items: "Mango, Pomegranate, Banana, Grapes" },
  { icon: Package, title: "Farm Commodities", items: "Jaggery, Oil Seeds, Animal Feed" },
];

function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.22em] text-primary font-medium">What We Trade</span>
            <h1 className="mt-3 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-foreground">
              Farm Fresh. <span className="italic text-primary">Export Ready.</span>
            </h1>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <div
                key={p.title}
                className="group bg-card rounded-3xl p-7 border border-border/60 soft-shadow hover:-translate-y-1 hover:soft-shadow-lg transition-all"
              >
                <span className="h-12 w-12 rounded-2xl bg-gold/20 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-xl text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.items}</p>
              </div>
            ))}
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

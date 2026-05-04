import { createFileRoute } from "@tanstack/react-router";
import { useState, type FocusEvent } from "react";
import {
  FileText,
  ArrowRight,
  ArrowUpRight,
  Bean,
  Clock,
  Flame,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  PackageCheck,
  Phone,
  ShieldCheck,
  Wheat,
} from "lucide-react";
import { DigitalExportBanner } from "@/components/DigitalExportBanner";
import { MarketsSection } from "@/components/MarketsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ekvira Export House - From India's Fields to Global Markets" },
      {
        name: "description",
        content:
          "Pune-based merchant trading firm connecting Indian agri and farm produce with India and Middle East buyers.",
      },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { icon: Globe2, title: "Middle East & India", sub: "Key Markets" },
  { icon: Wheat, title: "Agri & Farm Products", sub: "Core Expertise" },
  { icon: PackageCheck, title: "End-to-End Trading", sub: "Sourcing to Delivery" },
  { icon: ShieldCheck, title: "Quality First", sub: "Trusted by Buyers" },
];

const categories = [
  {
    icon: Flame,
    title: "Spices",
    eyebrow: "Category 01",
    description:
      "Export-focused spice offerings prepared for buyer requirements, processed formats, and ready-to-cook demand.",
    products: [
      "Red chilli powder",
      "Cumin powder",
      "Coriander powder",
      "Turmeric powder",
      "All types of processed spices",
      "Ready-to-cook powders",
    ],
  },
  {
    icon: Wheat,
    title: "Grains & Cereals",
    eyebrow: "Category 02",
    description:
      "Buyer-ready grain and cereal staples prepared for bulk sourcing, consistent packing, and export movement.",
    products: ["Wheat", "Rice", "Maize", "Sorghum", "Barley", "Millets"],
  },
  {
    icon: Bean,
    title: "Pulses & Legumes",
    eyebrow: "Category 03",
    description:
      "Reliable pulse selections suited for trade enquiries, food supply demand, and standard export handling.",
    products: ["Chana dal", "Moong dal", "Masoor dal", "Toor dal", "Urad dal", "Mixed pulses"],
  },
] as const;

const whyChooseUs = [
  {
    icon: ShieldCheck,
    title: "Compliance You Can Trust",
    description:
      "We work with export-ready processes and a strong focus on quality, documentation, and buyer confidence.",
  },
  {
    icon: PackageCheck,
    title: "Sourcing to Dispatch",
    description:
      "From product selection to packing and movement, we coordinate the trade flow end to end.",
  },
  {
    icon: FileText,
    title: "Clear Documentation",
    description:
      "Product details, shipment paperwork, and buyer communication are handled with clarity and consistency.",
  },
  {
    icon: Globe2,
    title: "India to GCC Focus",
    description:
      "Our supply approach is built around India and Middle East buyer requirements, timelines, and expectations.",
  },
] as const;

type Category = (typeof categories)[number];

function CategoryCard({ category }: { category: Category }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      className="group relative aspect-square min-h-[21rem] w-full cursor-pointer overflow-hidden rounded-[2rem] border border-border/70 bg-card text-left soft-shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:soft-shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 md:min-h-[23rem]"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={handleBlur}
      onClick={() => setIsOpen((value) => !value)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setIsOpen((value) => !value);
        }

        if (event.key === "Escape") {
          setIsOpen(false);
        }
      }}
    >
      <div
        className={`absolute inset-0 p-6 transition-all duration-300 md:p-8 ${
          isOpen ? "pointer-events-none opacity-0 scale-[0.97]" : "opacity-100"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-5">
            <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold/18 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <category.icon className="h-7 w-7" />
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-secondary/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Open List
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>

          <div className="mt-6 text-xs font-medium uppercase tracking-[0.22em] text-primary">
            {category.eyebrow}
          </div>
          <h3 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-4xl">
            {category.title}
          </h3>
          <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{category.description}</p>

          <div className="mt-auto pt-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-border/80 bg-secondary/60 px-4 py-2 text-sm font-medium text-foreground">
                {category.products.length} Products
              </span>
              <span className="text-sm text-muted-foreground">Hover or tap to open the list.</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(246,239,223,0.98)_100%)] p-6 transition-all duration-300 md:p-7 ${
          isOpen ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
        }`}
      >
        <div className="flex h-full flex-col rounded-[1.7rem] border border-border/70 bg-secondary/55 p-5 md:p-6">
          <div className="flex items-start justify-between gap-4 border-b border-border/70 pb-4">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                {category.title}
              </div>
              <div className="mt-2 font-serif text-2xl text-foreground">Products</div>
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {category.products.length} Items
            </div>
          </div>

          <div className="mt-4 min-h-0 flex-1 overflow-y-auto pr-1">
            <div className="grid gap-2.5">
              {category.products.map((product, index) => (
                <div
                  key={product}
                  className="rounded-2xl border border-border/70 bg-card px-4 py-3 text-sm text-foreground soft-shadow"
                >
                  <span className="mr-2 font-medium text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {product}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden">
          <DigitalExportBanner />
        </section>

        <section className="bg-gold/90">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-xl bg-gold-foreground/10 flex items-center justify-center text-gold-foreground">
                  <h.icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-serif text-lg text-gold-foreground leading-tight">
                    {h.title}
                  </div>
                  <div className="text-sm text-gold-foreground/75">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.985 0.012 85) 0%, oklch(0.975 0.018 85) 100%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-medium text-primary soft-shadow">
                <Flame className="h-3.5 w-3.5" />
                Product Categories
              </span>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05]">
                Explore Our <span className="italic text-primary">Categories</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
                A structured category section is now in place, starting with spices. We can keep
                adding more categories here in the same format.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {categories.map((category) => (
                <CategoryCard key={category.title} category={category} />
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="mb-10 text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-medium text-primary soft-shadow">
                <ShieldCheck className="h-3.5 w-3.5" />
                Why Choose Us
              </span>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05]">
                Why Choose <span className="italic text-primary">Us</span>
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {whyChooseUs.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[1.9rem] border border-border/70 bg-card p-6 soft-shadow transition-all duration-300 hover:-translate-y-1 hover:soft-shadow-lg md:p-7"
                >
                  <div className="absolute inset-x-6 top-0 h-1 rounded-b-full bg-gradient-to-r from-primary via-gold to-primary/40" />
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/18 text-primary">
                      <item.icon className="h-6 w-6" />
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-primary/70">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 max-w-[12ch] font-serif text-[2rem] leading-[1.02] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MarketsSection />

        <section id="contact" className="relative">
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(50% 50% at 20% 10%, oklch(0.42 0.09 135 / 0.08), transparent 60%), radial-gradient(50% 50% at 90% 90%, oklch(0.78 0.15 75 / 0.12), transparent 60%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-medium text-primary soft-shadow">
                <Mail className="h-3.5 w-3.5" />
                Get in Touch
              </span>
              <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.05]">
                Let's Start a <span className="italic text-primary">Conversation</span>
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Tell us what you're sourcing - we'll get back within 24 hours with availability,
                samples, and indicative pricing.
              </p>
            </div>

            <div className="mt-12 grid lg:grid-cols-5 gap-8">
              <form
                className="lg:col-span-3 bg-card rounded-3xl border border-border p-6 md:p-10 soft-shadow-lg"
                onSubmit={(e) => {
                  e.preventDefault();
                  const fd = new FormData(e.currentTarget);
                  const subject = encodeURIComponent(`Enquiry from ${fd.get("name") || "Website"}`);
                  const body = encodeURIComponent(
                    `Name: ${fd.get("name")}\nCompany: ${fd.get("company")}\nEmail: ${fd.get("email")}\nPhone: ${fd.get("phone")}\nProduct Interest: ${fd.get("product")}\n\nMessage:\n${fd.get("message")}`,
                  );
                  window.location.href = `mailto:ekviraexporthouse@gmail.com?subject=${subject}&body=${body}`;
                }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Company name"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" name="phone" placeholder="+91 ..." className="h-11" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="product">Product Interest</Label>
                    <Select name="product">
                      <SelectTrigger id="product" className="h-11">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Grains & Cereals">Grains & Cereals</SelectItem>
                        <SelectItem value="Pulses & Legumes">Pulses & Legumes</SelectItem>
                        <SelectItem value="Spices">Spices</SelectItem>
                        <SelectItem value="Vegetables">Vegetables</SelectItem>
                        <SelectItem value="Fruits">Fruits</SelectItem>
                        <SelectItem value="Farm Commodities">Farm Commodities</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Quantity, destination port, timeline, specifications..."
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="mt-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-7"
                >
                  Send Enquiry <ArrowRight className="h-4 w-4" />
                </Button>
              </form>

              <div className="lg:col-span-2 space-y-6">
                <div className="bg-primary text-primary-foreground rounded-3xl p-8 soft-shadow-lg">
                  <h3 className="font-serif text-2xl">Reach Us Directly</h3>
                  <ul className="mt-6 space-y-5 text-sm">
                    <li className="flex gap-3">
                      <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90 leading-relaxed">
                        A-620, Gera's Imperium Gateway,
                        <br />
                        Nashik Phata, PCMC, Pune - 411034
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <a
                        href="mailto:ekviraexporthouse@gmail.com"
                        className="text-primary-foreground/90 hover:text-gold transition-colors break-all"
                      >
                        ekviraexporthouse@gmail.com
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <a
                        href="tel:+917276533359"
                        className="text-primary-foreground/90 hover:text-gold transition-colors"
                      >
                        +91 72765 33359
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90">Mon-Sat: 9 AM - 6 PM IST</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card rounded-3xl border border-border p-8 soft-shadow">
                  <p className="text-sm text-muted-foreground">
                    We respond within 24 hours. WhatsApp enquiries welcome.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="mt-4 w-full rounded-full bg-gold text-gold-foreground hover:bg-gold/90 h-12"
                  >
                    <a href="https://wa.me/917276533359" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

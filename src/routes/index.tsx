import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Wheat, PackageCheck, ShieldCheck, Sprout, MapPin, Mail, Phone, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-agri.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ekvira Export House — From India's Fields to Global Markets" },
      { name: "description", content: "Pune-based merchant trading firm connecting Indian agri & farm produce with India and Middle East buyers." },
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

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(60% 60% at 80% 20%, oklch(0.78 0.15 75 / 0.18), transparent 60%), radial-gradient(50% 50% at 10% 90%, oklch(0.42 0.09 135 / 0.12), transparent 60%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-4 py-1.5 text-xs font-medium text-primary soft-shadow">
                <Sprout className="h-3.5 w-3.5" />
                Agri Export · Pune, India
              </span>
              <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-foreground">
                From India's <span className="italic text-primary">Fields</span> to{" "}
                <span className="relative inline-block">
                  Global Markets
                  <span className="absolute left-0 right-0 -bottom-1 h-1.5 rounded-full bg-gold/70" />
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                Ekvira Export House connects Indian agri and farm produce with buyers across
                India and the Middle East — with trust, quality, and speed.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90 px-6 h-12">
                  <Link to="/products">
                    Explore Our Products <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground px-6 h-12">
                  <a href="mailto:hello@ekviraexport.com">Contact Us</a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-gold/20 rounded-[2.5rem] blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden bg-card soft-shadow-lg border border-border/50">
                <img src={heroImg} alt="Indian agricultural exports illustration" width={1024} height={1024} className="w-full h-auto block" />
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="bg-gold/90">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((h) => (
              <div key={h.title} className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-xl bg-gold-foreground/10 flex items-center justify-center text-gold-foreground">
                  <h.icon className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-serif text-lg text-gold-foreground leading-tight">{h.title}</div>
                  <div className="text-sm text-gold-foreground/75">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Contact */}
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
                Tell us what you're sourcing — we'll get back within 24 hours with availability,
                samples, and indicative pricing.
              </p>
            </div>

            <div className="mt-12 grid lg:grid-cols-5 gap-8">
              {/* Form */}
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
                    <Input id="name" name="name" required placeholder="Your full name" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" placeholder="Company name" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="you@company.com" className="h-11" />
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
                    <Textarea id="message" name="message" required rows={5} placeholder="Quantity, destination port, timeline, specifications..." />
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

              {/* Contact info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-primary text-primary-foreground rounded-3xl p-8 soft-shadow-lg">
                  <h3 className="font-serif text-2xl">Reach Us Directly</h3>
                  <ul className="mt-6 space-y-5 text-sm">
                    <li className="flex gap-3">
                      <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90 leading-relaxed">
                        A-620, Gera's Imperium Gateway,<br />Nashik Phata, PCMC, Pune - 411034
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <a href="mailto:ekviraexporthouse@gmail.com" className="text-primary-foreground/90 hover:text-gold transition-colors break-all">
                        ekviraexporthouse@gmail.com
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <a href="tel:+917276533359" className="text-primary-foreground/90 hover:text-gold transition-colors">
                        +91 72765 33359
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <span className="text-primary-foreground/90">Mon–Sat: 9 AM – 6 PM IST</span>
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

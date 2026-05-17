import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt } from "react-icons/fa";
import ekviraLogo from "@/assets/ekvira-logo.jpeg";

const socialLinks = [
  {
    label: "Location",
    href: "https://www.google.com/maps/search/?api=1&query=A-620%2C%20Gera%27s%20Imperium%20Gateway%2C%20Nashik%20Phata%2C%20PCMC%2C%20Pune%20-%20411034",
    icon: FaMapMarkerAlt,
  },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
] as const;

const footerCategories = [
  "Vegetables & Fruits",
  "Drinks & Spirits",
  "Textiles",
  "Beverages",
  "Engineering Goods",
  "Seasonal Products",
  "Honey",
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto grid gap-6 px-5 py-9 md:grid-cols-2 md:px-8 md:py-10 xl:grid-cols-4 xl:gap-8">
        <div className="xl:pr-6">
          <Link to="/" className="inline-flex" aria-label="Ekvira Export House home">
            <img
              src={ekviraLogo}
              alt="Ekvira Export House"
              className="block h-12 w-auto md:h-16"
            />
          </Link>
          <div className="mt-2 text-[10px] uppercase tracking-[0.18em] opacity-70">Pune - India</div>
          <p className="mt-2 text-sm opacity-80 max-w-xs">
            Bridging Indian Agri to Global Markets.
          </p>

          <div className="mt-4">
            <div className="text-[11px] uppercase tracking-[0.18em] opacity-70">Follow Us</div>
            <div className="mt-2.5 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  title={social.label}
                  target={social.href === "#" ? undefined : "_blank"}
                  rel={social.href === "#" ? undefined : "noreferrer"}
                  onClick={social.href === "#" ? (event) => event.preventDefault() : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/15 bg-white/10 text-primary-foreground/90 transition-all hover:-translate-y-0.5 hover:border-gold hover:bg-gold hover:text-gold-foreground"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="xl:pt-1">
          <h4 className="mb-2.5 font-serif text-base">Quick Links</h4>
          <ul className="space-y-1.5 text-sm opacity-85">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" />
              <Link to="/" className="hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" />
              <Link to="/about" className="hover:text-gold transition-colors">
                About
              </Link>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" />
              <Link to="/products" className="hover:text-gold transition-colors">
                Products
              </Link>
            </li>
          </ul>
        </div>

        <div className="xl:pt-1">
          <h4 className="mb-2.5 font-serif text-base">Product Categories</h4>
          <ul className="grid gap-1.5 text-sm opacity-85">
            {footerCategories.map((category) => (
              <li key={category} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" />
                <span>{category}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="xl:pt-1">
          <h4 className="mb-2.5 font-serif text-base">Contact</h4>
          <ul className="space-y-1.5 text-sm opacity-85">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Pune, Maharashtra, India</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" />
              <a href="mailto:ekviraexporthouse@gmail.com" className="hover:text-gold break-all">
                ekviraexporthouse@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" />
              <a href="tel:+917276533359" className="whitespace-nowrap hover:text-gold">
                +91 7276533359
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" />
              <a href="tel:+917875803175" className="whitespace-nowrap hover:text-gold">
                +91 7875803175
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <div className="text-[11px] uppercase tracking-[0.18em] opacity-70">
              Company Details
            </div>
            <dl className="mt-2.5 space-y-2">
              <div className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" />
                <div className="flex items-center gap-2 whitespace-nowrap text-[13px]">
                  <dt className="shrink-0 opacity-65">CIN</dt>
                  <dd className="font-medium text-primary-foreground/95">
                    U46909PN2026PTC253999
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" />
                <div className="flex items-center gap-2 whitespace-nowrap text-[13px]">
                  <dt className="shrink-0 opacity-65">GST</dt>
                  <dd className="font-medium text-primary-foreground/95">
                    27AAJCE6086E1ZF
                  </dd>
                </div>
              </div>
                <div className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold/80" />
                <div className="flex items-center gap-2 whitespace-nowrap text-[13px]">
                  <dt className="shrink-0 opacity-65">IEC</dt>
                  <dd className="font-medium text-primary-foreground/95">
                     AAJCE6086E
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-5 py-3 text-center text-xs opacity-70 md:px-8">
          Copyright 2026 Ekvira Export House Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

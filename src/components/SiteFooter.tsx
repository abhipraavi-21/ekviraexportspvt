import { Link } from "@tanstack/react-router";
import { Sprout } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-10 w-10 rounded-xl bg-gold flex items-center justify-center">
              <Sprout className="h-5 w-5 text-gold-foreground" />
            </span>
            <div className="leading-tight">
              <div className="font-serif text-lg">Ekvira Export House</div>
              <div className="text-[10px] uppercase tracking-[0.18em] opacity-70">Pune · India</div>
            </div>
          </div>
          <p className="mt-4 text-sm opacity-80 max-w-xs">
            Bridging Indian Agri to Global Markets.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-base mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-85">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/products" className="hover:text-gold transition-colors">Products</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-base mb-3">Contact</h4>
          <ul className="space-y-2 text-sm opacity-85">
            <li>Pune, Maharashtra, India</li>
            <li><a href="mailto:hello@ekviraexport.com" className="hover:text-gold">hello@ekviraexport.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 text-xs opacity-70 text-center">
          © 2026 Ekvira Export House Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Sprout, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products", mobileLabel: "Products & Services" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-18 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center soft-shadow">
            <Sprout className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-lg text-foreground">Ekvira</span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Export House
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full bg-gold text-gold-foreground hover:bg-gold/90 shadow-none px-5"
          >
            <a href="mailto:hello@ekviraexport.com">Enquire Now</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-accent"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="px-5 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-start gap-2 px-3 py-2.5 rounded-lg text-foreground/85 hover:bg-accent"
                activeProps={{ className: "text-primary font-medium bg-accent" }}
              >
                <span className="whitespace-nowrap">{n.mobileLabel ?? n.label}</span>
                {n.to === "/products" ? (
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-foreground/70">
                    <ChevronDown className="h-3.5 w-3.5" />
                  </span>
                ) : null}
              </Link>
            ))}
            <Button
              asChild
              className="mt-2 rounded-full bg-gold text-gold-foreground hover:bg-gold/90"
            >
              <a href="mailto:hello@ekviraexport.com">Enquire Now</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

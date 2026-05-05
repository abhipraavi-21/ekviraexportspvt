import { SiWhatsapp } from "react-icons/si";

const whatsappLink =
  "https://wa.me/917276533359?text=Hello%20Ekvira%20Export%20House%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products.";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed right-5 z-50 inline-flex h-15 w-15 items-center justify-center rounded-full border-4 border-white/85 bg-[#25D366] text-white soft-shadow-lg transition-all hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      style={{ bottom: "max(1.25rem, env(safe-area-inset-bottom))" }}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366]/35 blur-md" aria-hidden="true" />
      <span className="absolute inset-0 rounded-full border border-white/25" aria-hidden="true" />
      <span className="relative flex h-full w-full items-center justify-center rounded-full">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/18 opacity-70" />
        <SiWhatsapp className="relative h-7 w-7" />
      </span>
    </a>
  );
}

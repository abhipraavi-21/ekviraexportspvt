import { useEffect, useRef, useState } from "react";
import { SiWhatsapp } from "react-icons/si";
import { cn } from "@/lib/utils";
import { buyerWhatsappLink, supplierWhatsappLink, whatsappLink } from "@/lib/whatsapp";

export function FloatingWhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const closeTimeoutRef = useRef<ReturnType<typeof window.setTimeout> | null>(null);
  const optionClassName =
    "min-w-[7.75rem] rounded-xl border border-white/75 bg-white/95 px-3.5 py-2 text-center text-xs font-medium text-slate-800 shadow-[0_12px_24px_rgba(37,211,102,0.18)] backdrop-blur-md transition-colors hover:bg-[#25D366]/10 focus-visible:bg-[#25D366]/10 focus-visible:outline-none active:bg-[#25D366]/14";

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimeout();
    setIsOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = window.setTimeout(() => {
      setIsOpen(false);
      closeTimeoutRef.current = null;
    }, 140);
  };

  const closeMenu = () => {
    clearCloseTimeout();
    setIsOpen(false);
  };

  useEffect(() => {
    const hoverMediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const updateHoverSupport = () => {
      setCanHover(hoverMediaQuery.matches);
    };

    updateHoverSupport();
    hoverMediaQuery.addEventListener("change", updateHoverSupport);

    return () => {
      hoverMediaQuery.removeEventListener("change", updateHoverSupport);
      clearCloseTimeout();
    };
  }, []);

  return (
    <>
      {isOpen ? (
        <button
          type="button"
          aria-label="Close WhatsApp contact options"
          className="fixed inset-0 z-40 bg-transparent"
          onClick={closeMenu}
        />
      ) : null}

      <div
        className="fixed right-4 z-50 sm:right-5"
        style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        <div
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
          className={cn(
            "absolute right-0 bottom-[calc(100%+0.55rem)] flex origin-bottom-right flex-col items-end gap-1.5 transition-all duration-200",
            isOpen
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-2 scale-95 opacity-0",
          )}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className={optionClassName}
          >
            General
          </a>
          <a
            href={supplierWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className={optionClassName}
          >
            Supplier
          </a>
          <a
            href={buyerWhatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className={optionClassName}
          >
            Buyer
          </a>
        </div>

        <button
          type="button"
          aria-label="Open WhatsApp contact options"
          aria-expanded={isOpen}
          aria-haspopup="true"
          title="Chat on WhatsApp"
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
          onClick={() => {
            clearCloseTimeout();
            if (canHover) {
              window.open(whatsappLink, "_blank", "noopener,noreferrer");
              setIsOpen(false);
              return;
            }

            setIsOpen((open) => !open);
          }}
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border-4 border-white/85 bg-[#25D366] text-white soft-shadow-lg transition-all hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#1ebe5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:h-15 sm:w-15"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366]/35 blur-md" aria-hidden="true" />
          <span className="absolute inset-0 rounded-full border border-white/25" aria-hidden="true" />
          <span className="relative flex h-full w-full items-center justify-center rounded-full">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/18 opacity-70" />
            <SiWhatsapp className="relative h-6 w-6 sm:h-7 sm:w-7" />
          </span>
        </button>
      </div>
    </>
  );
}

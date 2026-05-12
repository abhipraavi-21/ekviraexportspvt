const whatsappBaseUrl = "https://wa.me/917276533359";

function buildWhatsappLink(message: string) {
  return `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const whatsappPrefillMessage =
  "Hello Ekvira Export House, I came across your website and would like to connect regarding your products and trade services. Please get in touch at your earliest convenience.";

export const buyerWhatsappMessage =
  "Hello Ekvira Export House, I am interested in sourcing agri and farm products from you. Please share your product list and pricing. Looking forward to connecting";

export const supplierWhatsappMessage =
  "Hello Ekvira Export House, I am a producer based in India and would like to explore selling my products through your trading network. Please let me know how we can connect";

export const whatsappLink = buildWhatsappLink(whatsappPrefillMessage);
export const buyerWhatsappLink = buildWhatsappLink(buyerWhatsappMessage);
export const supplierWhatsappLink = buildWhatsappLink(supplierWhatsappMessage);

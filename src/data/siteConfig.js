export const SITE_CONFIG = {
  name: "Blissful Makeup Studio",
  legalName: "Blissful Essence Beauty Parlour & Makeup Studio",
  tagline: "Bridal Makeup Artist in Latur",
  instagramHandle: "@wangeanjali_blissfulmakeup",
  instagramUrl: "https://www.instagram.com/wangeanjali_blissfulmakeup",
  phone: "08734956362",
  // Digits-only, international format, no leading zero — used to build wa.me links.
  // Replace with the studio's verified WhatsApp Business number.
  whatsapp: "918734956362",
  location: "Latur, Maharashtra",
  address:
    "Shop No. 8, 9, 10, Opp. COCSIT College, Ajinkya City, Ambajogai Road, Latur, Maharashtra – 413512",
  addressLines: [
    "Shop No. 8, 9, 10,",
    "Opp. COCSIT College, Ajinkya City,",
    "Ambajogai Road, Latur, Maharashtra – 413512",
  ],
  mapsQuery:
    "Blissful Essence Beauty Parlour And Makeup Studio, Opp COCSIT College, Ganj Golai, Latur, Maharashtra 413512",
  since: "2012",
  yearsOfExperience: "12+",
  openingHours: "9:00 AM – 9:00 PM",
  openingDays: "Open all week",
  whatsappDefaultMessage:
    "Hello Blissful Makeup Studio, I would like to enquire about an appointment.",
};

export const getWhatsAppLink = (message = SITE_CONFIG.whatsappDefaultMessage) =>
  `https://wa.me/${SITE_CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;

export const getCallLink = () => `tel:${SITE_CONFIG.phone}`;

export const getMapsDirectionsLink = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    SITE_CONFIG.mapsQuery
  )}`;

export const getMapsEmbedSrc = () =>
  `https://maps.google.com/maps?q=${encodeURIComponent(
    SITE_CONFIG.mapsQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

export const BOOKING_EVENT_TYPES = [
  "Bridal Makeup",
  "Engagement Makeup",
  "Reception Makeup",
  "Party Makeup",
  "Haldi Makeup",
  "Mehendi Makeup",
  "Pre-Wedding Makeup",
  "Other",
];


export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Bridal", href: "/bridal" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

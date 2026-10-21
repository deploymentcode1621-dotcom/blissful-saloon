// Central services data. Replace `image` paths once real studio photography
// has been downloaded into /public/images/.

export const SIGNATURE_SERVICES = [
  {
    number: "01",
    title: "Bridal Makeup",
    slug: "bridal-makeup",
    image: "/images/bridal/bridal-1.svg",
    size: "large",
  },
  {
    number: "02",
    title: "Engagement Makeup",
    slug: "engagement-makeup",
    image: "/images/makeup/makeup-3.svg",
    size: "small",
  },
  {
    number: "03",
    title: "Party Makeup",
    slug: "party-makeup",
    image: "/images/makeup/makeup-2.svg",
    size: "small",
  },
  {
    number: "04",
    title: "Hair Styling",
    slug: "hair-styling",
    image: "/images/hairstyles/hair-1.svg",
    size: "medium",
  },
  {
    number: "05",
    title: "Skin & Facial Care",
    slug: "skin-facial-care",
    image: "/images/studio/studio-1.svg",
    size: "medium",
  },
  {
    number: "06",
    title: "Nail Art & Extensions",
    slug: "nail-art-extensions",
    image: "/images/nails/nails-1.svg",
    size: "small",
  },
  {
    number: "07",
    title: "Hair Spa & Care",
    slug: "hair-spa-care",
    image: "/images/hairstyles/hair-3.svg",
    size: "small",
  },
  {
    number: "08",
    title: "Home Services",
    slug: "home-services",
    image: "/images/studio/studio-2.svg",
    size: "large",
  },
];

export const SERVICE_CATEGORIES = [
  {
    category: "Makeup",
    items: [
      "Bridal Makeup",
      "Engagement Makeup",
      "Reception Makeup",
      "Party Makeup",
      "Photoshoot Makeup",
    ],
  },
  {
    category: "Hair",
    items: [
      "Hair Styling",
      "Bridal Hair",
      "Hair Spa",
      "Hair Care",
      "Hair Rebonding",
    ],
  },
  {
    category: "Skin",
    items: ["Facials", "Skin Care", "Face Firming", "Bleaching"],
  },
  {
    category: "Nails",
    items: ["Manicure", "Nail Extensions", "Nail Art"],
  },
  {
    category: "Other",
    items: ["Draping", "Home Beauty Services"],
  },
];

export const BOOKING_EVENT_TYPES = [
  "Bridal",
  "Engagement",
  "Reception",
  "Party Makeup",
  "Hair",
  "Skin",
  "Nails",
  "Other",
];

export const EXPERIENCE_STEPS = [
  {
    number: "01",
    title: "Understand Your Style",
    description:
      "A relaxed consultation to learn your features, outfit, jewellery and the mood of your day.",
  },
  {
    number: "02",
    title: "Create Your Look",
    description:
      "A trial or a considered plan, built around what suits you rather than a fixed template.",
  },
  {
    number: "03",
    title: "Perfect Every Detail",
    description:
      "Skin prep, precision application and finishing touches, done with patience.",
  },
  {
    number: "04",
    title: "Walk Out Confident",
    description:
      "A long-wearing, camera-ready look that still feels entirely like you.",
  },
];

export const BRIDAL_JOURNEY_STEPS = [
  { number: "01", title: "Consultation" },
  { number: "02", title: "Look Planning" },
  { number: "03", title: "Skin Preparation" },
  { number: "04", title: "Makeup & Hair" },
  { number: "05", title: "Final Styling" },
];

export const BRIDAL_LOOKS = [
  {
    title: "Traditional Bridal",
    description: "Rich, classic bridal glamour built for the mangalsutra moment.",
    image: "/images/bridal/bridal-3.svg",
  },
  {
    title: "Contemporary Bridal",
    description: "Modern colour stories for brides who want something less conventional.",
    image: "/images/bridal/bridal-4.svg",
  },
  {
    title: "Soft Glam Bridal",
    description: "Luminous, skin-first glam for daytime ceremonies and mehendi.",
    image: "/images/bridal/bridal-5.svg",
  },
  {
    title: "Reception Glamour",
    description: "Bold, photograph-ready looks for the evening reception.",
    image: "/images/bridal/bridal-6.svg",
  },
];

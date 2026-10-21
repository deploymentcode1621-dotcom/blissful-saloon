import { Cormorant_Garamond, Manrope, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import CustomCursor from "@/components/ui/CustomCursor";
import { SITE_CONFIG } from "@/data/siteConfig";

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const labelFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-label",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.blissfulmakeupstudio.com"),
  title: {
    default: `${SITE_CONFIG.name} | Bridal Makeup Artist in Latur`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Premium bridal makeup, professional makeup, hairstyling and beauty services by Blissful Makeup Studio in Latur, Maharashtra.",
  keywords: [
    "bridal makeup artist Latur",
    "makeup studio Latur",
    "beauty parlour Latur",
    "Blissful Makeup Studio",
  ],
  openGraph: {
    title: `${SITE_CONFIG.name} | Bridal Makeup Artist in Latur`,
    description:
      "Premium bridal makeup, professional makeup, hairstyling and beauty services in Latur, Maharashtra.",
    siteName: SITE_CONFIG.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: SITE_CONFIG.legalName,
    alternateName: SITE_CONFIG.name,
    image: "/images/hero/hero-bridal-1.svg",
    telephone: SITE_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 8, 9, 10, Opp. COCSIT College, Ajinkya City, Ambajogai Road",
      addressLocality: "Latur",
      addressRegion: "Maharashtra",
      postalCode: "413512",
      addressCountry: "IN",
    },
    openingHours: "Mo-Su 09:00-21:00",
    sameAs: [SITE_CONFIG.instagramUrl],
  };

  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${labelFont.variable}`}>
      <body className="font-body bg-ivory text-charcoal antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}

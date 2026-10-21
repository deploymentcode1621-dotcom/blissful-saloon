import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import BridalFeature from "@/components/home/BridalFeature";
import Transformation from "@/components/home/Transformation";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import Experience from "@/components/home/Experience";
import Testimonials from "@/components/home/Testimonials";
import InstagramSection from "@/components/home/InstagramSection";
import BookingCTA from "@/components/home/BookingCTA";

export const metadata = {
  title: "Bridal Makeup Artist in Latur",
  description:
    "Premium bridal makeup, professional makeup, hairstyling and beauty services by Blissful Makeup Studio in Latur, Maharashtra.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <AboutPreview />
      <ServicesPreview />
      <BridalFeature />
      <Transformation />
      <PortfolioPreview />
      <Experience />
      <Testimonials />
      <InstagramSection />
      <BookingCTA />
    </>
  );
}

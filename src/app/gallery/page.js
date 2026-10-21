import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata = {
  title: "Gallery",
  description:
    "Browse bridal, makeup, hairstyle and nail art photography from Blissful Makeup Studio in Latur.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-plum pb-16 pt-40 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
          <Reveal>
            <SectionLabel eyebrow="Portfolio" title="Real Brides. Real Moments." light />
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}

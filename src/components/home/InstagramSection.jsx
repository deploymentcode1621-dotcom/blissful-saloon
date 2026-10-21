import Image from "next/image";
import { Instagram } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { INSTAGRAM_IMAGES } from "@/data/gallery";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function InstagramSection() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
        <Reveal align="center" className="mx-auto text-center">
          <SectionLabel eyebrow="Follow Our Artistry" title={SITE_CONFIG.instagramHandle} align="center" />
        </Reveal>

        <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-3">
          {INSTAGRAM_IMAGES.map((img, i) => (
            <Reveal key={img.id} delay={i * 0.05} className="group relative aspect-square overflow-hidden">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="view"
                className="block h-full w-full"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 33vw, 16vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-plum/0 transition-colors duration-400 group-hover:bg-plum/60">
                  <span className="eyebrow flex items-center gap-1.5 text-ivory opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                    View on Instagram &rarr;
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal align="center" className="mt-12 flex justify-center">
          <Button href={SITE_CONFIG.instagramUrl} variant="secondary" target="_blank" rel="noopener noreferrer">
            <Instagram size={14} className="inline -mt-0.5 mr-1.5" />
            Follow on Instagram
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

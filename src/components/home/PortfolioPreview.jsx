"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import Lightbox from "@/components/gallery/Lightbox";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "@/data/gallery";

const PREVIEW_COUNT = 9;

export default function PortfolioPreview() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(() => {
    const list =
      active === "All"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === active);
    return list.slice(0, PREVIEW_COUNT);
  }, [active]);

  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
        <Reveal>
          <SectionLabel eyebrow="Real Brides. Real Moments." title="Our Portfolio" />
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`eyebrow px-5 py-2.5 transition-colors duration-300 ${
                active === cat
                  ? "bg-plum text-ivory"
                  : "bg-transparent text-charcoal/60 hover:text-plum border border-plum/15"
              }`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        <div className="mt-10 columns-2 gap-4 sm:columns-3 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.button
                key={img.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setLightboxIndex(i)}
                data-cursor="view"
                className="relative mb-4 block w-full break-inside-avoid overflow-hidden"
                style={{ aspectRatio: `1 / ${img.height / 300}` }}
                aria-label={`Open ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}

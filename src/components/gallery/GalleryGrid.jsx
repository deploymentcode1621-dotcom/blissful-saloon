"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import GalleryFilter from "@/components/gallery/GalleryFilter";
import Lightbox from "@/components/gallery/Lightbox";
import { GALLERY_IMAGES } from "@/data/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? GALLERY_IMAGES
        : GALLERY_IMAGES.filter((img) => img.category === active),
    [active]
  );

  return (
    <>
      <GalleryFilter active={active} onChange={setActive} />

      <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [column-fill:_balance]">
        <AnimatePresence mode="popLayout">
          {filtered.map((img, i) => (
            <motion.button
              key={img.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
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
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.button>
          ))}
        </AnimatePresence>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}

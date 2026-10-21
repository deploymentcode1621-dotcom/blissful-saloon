"use client";

import { useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const touchStartX = useRef(null);
  const current = images[index];

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + images.length) % images.length);
  }, [index, images.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((index + 1) % images.length);
  }, [index, images.length, onNavigate]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 60) goPrev();
    if (delta < -60) goNext();
    touchStartX.current = null;
  };

  if (typeof document === "undefined" || !current) return null;

  return createPortal(
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 px-4"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onClick={onClose}
      >
        <button
          aria-label="Close lightbox"
          onClick={onClose}
          className="absolute right-5 top-5 text-ivory/80 transition-colors hover:text-ivory"
        >
          <X size={28} />
        </button>

        <button
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            goPrev();
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 text-ivory/70 transition-colors hover:text-ivory sm:left-8"
        >
          <ChevronLeft size={32} />
        </button>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative h-[70vh] w-full max-w-3xl"
        >
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="90vw"
            className="object-contain"
          />
        </motion.div>

        <button
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            goNext();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 text-ivory/70 transition-colors hover:text-ivory sm:right-8"
        >
          <ChevronRight size={32} />
        </button>

        <p className="eyebrow absolute bottom-6 left-1/2 -translate-x-1/2 text-ivory/60">
          {index + 1} / {images.length} &middot; {current.category}
        </p>
      </motion.div>
    </AnimatePresence>,
    document.body
  );
}

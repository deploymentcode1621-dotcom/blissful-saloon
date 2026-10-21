"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/data/testimonials";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = TESTIMONIALS.length;
  const current = TESTIMONIALS[index];

  const goPrev = () => setIndex((i) => (i - 1 + total) % total);
  const goNext = () => setIndex((i) => (i + 1) % total);

  return (
    <section className="bg-blush/40 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
        <Reveal align="center" className="mx-auto max-w-xl text-center">
          <SectionLabel eyebrow="Love Notes" title="Words From Our Beautiful Clients" align="center" />
        </Reveal>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <Quote className="mx-auto text-rose" size={30} />
          <div className="relative mt-6 min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-2xl leading-snug text-plum sm:text-3xl">
                  &ldquo;{current.quote}&rdquo;
                </p>
                <p className="eyebrow mt-6 text-charcoal/60">
                  {current.name} &middot; {current.event}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              aria-label="Previous testimonial"
              onClick={goPrev}
              className="flex h-11 w-11 items-center justify-center border border-plum/20 text-plum transition-colors hover:bg-plum hover:text-ivory"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.name}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? "w-6 bg-rose" : "w-1.5 bg-plum/20"
                  }`}
                />
              ))}
            </div>
            <button
              aria-label="Next testimonial"
              onClick={goNext}
              className="flex h-11 w-11 items-center justify-center border border-plum/20 text-plum transition-colors hover:bg-plum hover:text-ivory"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

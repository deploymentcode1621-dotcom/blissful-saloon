"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] w-full items-stretch overflow-hidden bg-plum">
      {/* Background image, right-weighted */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.18 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero/hero-bridal-1.svg"
            alt="Bridal makeup by Blissful Makeup Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-plum via-plum/70 to-plum/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-transparent to-plum/20" />
      </div>

      {/* Vertical editorial label */}
      <div className="pointer-events-none absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 [writing-mode:vertical-rl] md:flex md:items-center md:gap-4 lg:right-14">
        <span className="hairline h-16 w-px bg-ivory/40" />
        <span className="eyebrow tracking-widest2 text-ivory/70">01 / Bridal Artistry</span>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-content flex-col justify-end px-6 pb-28 pt-40 md:justify-center md:px-10 md:pb-0 md:pt-32 lg:px-14">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="eyebrow tracking-widest2 text-blush"
        >
          Blissful Makeup Studio &middot; Latur
        </motion.p>

        <h1 className="mt-6 max-w-2xl font-display text-[3rem] leading-[1.02] text-ivory sm:text-[4rem] md:text-[5.2rem]">
          {["Every Bride", "Deserves Her", "Signature Look."].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 34 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.65 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-7 max-w-md text-[0.98rem] leading-relaxed text-ivory/80"
        >
          Professional bridal makeup, hair styling and beauty services crafted to
          make every celebration unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contact"
            data-cursor="arrow"
            className="eyebrow group inline-flex items-center gap-2.5 bg-ivory px-7 py-3.5 text-plum transition-colors hover:bg-blush"
          >
            Book Your Appointment
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            href="/bridal"
            data-cursor="arrow"
            className="eyebrow inline-flex items-center gap-2.5 border border-ivory/50 px-7 py-3.5 text-ivory transition-colors hover:border-ivory hover:bg-ivory/10"
          >
            View Bridal Work
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="mt-14 text-xs uppercase tracking-[0.2em] text-ivory/50"
        >
          Professional Makeup Artist &middot; Latur, Maharashtra
        </motion.p>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-6 z-10 flex items-center gap-3 md:left-10 lg:left-14"
      >
        <span className="h-10 w-px bg-ivory/40" />
        <span className="eyebrow text-ivory/60">Scroll</span>
      </motion.div>
    </section>
  );
}

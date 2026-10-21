"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { EXPERIENCE_STEPS } from "@/data/services";

export default function Experience() {
  return (
    <section className="bg-plum py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
        <Reveal>
          <SectionLabel
            eyebrow="From Consultation to the Final Look"
            title="The Blissful Process"
            light
          />
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-4 top-2 bottom-2 hidden w-px bg-ivory/15 md:block" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            style={{ originY: 0 }}
            className="absolute left-4 top-2 bottom-2 hidden w-px bg-rose md:block"
          />

          <div className="flex flex-col gap-12 md:gap-16">
            {EXPERIENCE_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08} className="relative flex gap-6 md:gap-10 md:pl-16">
                <span className="absolute left-0 top-0 hidden h-2 w-2 -translate-x-[3px] rounded-full bg-rose md:block" />
                <span className="font-display text-3xl text-rose/70 shrink-0 w-14 md:hidden">
                  {step.number}
                </span>
                <div>
                  <span className="eyebrow hidden text-blush/70 md:block">{step.number}</span>
                  <h3 className="mt-1 font-display text-2xl text-ivory sm:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ivory/70">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

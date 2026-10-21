"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";
import { SIGNATURE_SERVICES } from "@/data/services";

const SIZE_CLASSES = {
  large: "md:col-span-2 md:row-span-2 aspect-[4/5] md:aspect-auto",
  medium: "md:col-span-2 aspect-[4/3]",
  small: "aspect-[4/5]",
};

function ServiceCard({ service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden ${SIZE_CLASSES[service.size]}`}
    >
      <Link href="/services" data-cursor="view" className="block h-full w-full">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover transition-transform duration-700 ease-editorial group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/10 to-transparent transition-opacity duration-500" />
        </div>

        <div className="relative flex h-full flex-col justify-between p-6">
          <span className="eyebrow text-ivory/70 transition-transform duration-500 group-hover:translate-x-1">
            {service.number}
          </span>
          <div className="flex items-end justify-between gap-3">
            <span className="font-display text-2xl text-ivory sm:text-3xl">
              {service.title}
            </span>
            <ArrowUpRight
              size={20}
              className="mb-1 shrink-0 text-ivory opacity-0 transition-all duration-400 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 -translate-x-2 translate-y-2"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function ServicesPreview() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionLabel eyebrow="The Blissful Experience" title="Our Signature Services" />
          </Reveal>
          <Reveal delay={0.1}>
            <Link href="/services" className="eyebrow inline-flex items-center gap-2 text-plum hover:text-rose">
              View All Services
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[220px]">
          {SIGNATURE_SERVICES.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

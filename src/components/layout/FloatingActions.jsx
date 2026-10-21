"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, CalendarCheck } from "lucide-react";
import { getWhatsAppLink, getCallLink } from "@/data/siteConfig";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop floating WhatsApp */}
      <motion.a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.6 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-8 right-8 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-plum text-ivory shadow-lg shadow-plum/30 transition-colors hover:bg-charcoal sm:flex"
        style={{ pointerEvents: visible ? "auto" : "none" }}
      >
        <MessageCircle size={22} />
      </motion.a>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-plum/10 bg-ivory/95 backdrop-blur-sm sm:hidden">
        <a
          href={getCallLink()}
          className="flex flex-1 flex-col items-center gap-1 py-3 text-plum"
        >
          <Phone size={18} />
          <span className="eyebrow text-[0.6rem]">Call</span>
        </a>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 flex-col items-center gap-1 border-x border-plum/10 py-3 text-plum"
        >
          <MessageCircle size={18} />
          <span className="eyebrow text-[0.6rem]">WhatsApp</span>
        </a>
        <Link
          href="/contact"
          className="flex flex-1 flex-col items-center gap-1 bg-plum py-3 text-ivory"
        >
          <CalendarCheck size={18} />
          <span className="eyebrow text-[0.6rem]">Book</span>
        </Link>
      </div>
    </>
  );
}

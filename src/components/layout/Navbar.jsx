"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/data/siteConfig";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        transparent ? "bg-transparent" : "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(74,38,52,0.08)]"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-5 md:px-10 lg:px-14">
        <Link href="/" className="flex flex-col leading-none" data-cursor="arrow">
          <span
            className={`font-display text-2xl tracking-wide transition-colors duration-500 ${
              transparent ? "text-ivory" : "text-plum"
            }`}
          >
            Blissful
          </span>
          <span
            className={`eyebrow -mt-0.5 transition-colors duration-500 ${
              transparent ? "text-blush" : "text-rose"
            }`}
          >
            Makeup Studio
          </span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-cursor="arrow"
                  className={`eyebrow relative pb-1 transition-colors duration-300 ${
                    transparent ? "text-ivory/90 hover:text-ivory" : "text-charcoal/80 hover:text-plum"
                  } ${active ? (transparent ? "text-ivory" : "text-plum") : ""}`}
                >
                  {link.label}
                  {active && (
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px w-full ${
                        transparent ? "bg-ivory" : "bg-rose"
                      }`}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link
            href="/contact"
            data-cursor="arrow"
            className={`eyebrow border px-6 py-3 transition-colors duration-300 ${
              transparent
                ? "border-ivory text-ivory hover:bg-ivory hover:text-plum"
                : "border-plum text-plum hover:bg-plum hover:text-ivory"
            }`}
          >
            Book Appointment
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden ${transparent ? "text-ivory" : "text-plum"}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-ivory lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pt-4 pb-10">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                  className="border-b border-plum/10 py-4"
                >
                  <Link
                    href={link.href}
                    className="font-display text-3xl text-plum"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="px-6">
              <Link
                href="/contact"
                className="eyebrow inline-block w-full border border-plum px-6 py-4 text-center text-plum"
              >
                Book Appointment
              </Link>
              <p className="mt-6 text-sm text-charcoal/60">
                {SITE_CONFIG.location} &middot; {SITE_CONFIG.openingHours}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

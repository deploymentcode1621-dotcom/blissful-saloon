import Link from "next/link";
import { Instagram, Facebook, Phone, MapPin, Clock } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, getCallLink } from "@/data/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-plum text-ivory">
      <div className="mx-auto max-w-content px-6 py-20 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <p className="font-display text-4xl leading-[0.95]">
              Blissful
              <br />
              Makeup Studio
            </p>
            <p className="eyebrow mt-5 text-blush">
              Professional Makeup Artist
              <br />
              {SITE_CONFIG.location}
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="flex h-11 w-11 items-center justify-center border border-ivory/30 transition-colors hover:border-ivory hover:bg-ivory hover:text-plum"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                aria-label="Visit our Facebook"
                className="flex h-11 w-11 items-center justify-center border border-ivory/30 transition-colors hover:border-ivory hover:bg-ivory hover:text-plum"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-rose">Navigation</p>
            <ul className="mt-6 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-ivory/85 transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow text-rose">Studio</p>
            <ul className="mt-6 flex flex-col gap-3 text-sm text-ivory/85">
              <li className="flex items-start gap-2">
                <Instagram size={15} className="mt-0.5 shrink-0" />
                <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                  {SITE_CONFIG.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={15} className="mt-0.5 shrink-0" />
                <a href={getCallLink()} className="hover:text-ivory">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={15} className="mt-0.5 shrink-0" />
                <span>{SITE_CONFIG.openingHours}</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-rose">Visit Us</p>
            <p className="mt-6 flex items-start gap-2 text-sm leading-relaxed text-ivory/85">
              <MapPin size={15} className="mt-0.5 shrink-0" />
              <span>{SITE_CONFIG.address}</span>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/15 pt-8 text-xs text-ivory/60 sm:flex-row sm:items-center">
          <p>&copy; {new Date().getFullYear()} Blissful Makeup Studio. All Rights Reserved.</p>
          <p>Est. {SITE_CONFIG.since} &middot; {SITE_CONFIG.location}</p>
        </div>
      </div>
    </footer>
  );
}

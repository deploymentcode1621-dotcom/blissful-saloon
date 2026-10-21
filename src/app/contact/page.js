import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import BookingForm from "@/components/booking/BookingForm";
import {
  SITE_CONFIG,
  getWhatsAppLink,
  getCallLink,
  getMapsDirectionsLink,
  getMapsEmbedSrc,
} from "@/data/siteConfig";

export const metadata = {
  title: "Contact & Booking",
  description:
    "Book an appointment with Blissful Makeup Studio in Latur. Call, WhatsApp, or send an appointment request online.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-plum pb-16 pt-40 md:pb-20 md:pt-48">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
          <Reveal>
            <SectionLabel eyebrow="Get in Touch" title="Let's Create Your Look." light />
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <div className="mx-auto grid max-w-content grid-cols-1 gap-16 px-6 md:grid-cols-[1fr_0.85fr] md:px-10 lg:px-14">
          <Reveal>
            <h2 className="font-display text-2xl text-plum sm:text-3xl">
              Request an Appointment
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-charcoal/70">
              Share a few details and we&rsquo;ll get back to you to confirm
              availability. For urgent enquiries, call or WhatsApp us directly.
            </p>
            <div className="mt-10">
              <BookingForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 border border-plum/10 p-7">
              <span className="eyebrow text-rose">Quick Contact</span>
              <a href={getCallLink()} className="flex items-center gap-3 font-display text-xl text-plum hover:text-rose">
                <Phone size={18} /> {SITE_CONFIG.phone}
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-display text-xl text-plum hover:text-rose"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>

            <div className="flex flex-col gap-3 border border-plum/10 p-7">
              <span className="eyebrow text-rose">Studio Address</span>
              <p className="flex items-start gap-3 text-sm leading-relaxed text-charcoal/75">
                <MapPin size={18} className="mt-0.5 shrink-0 text-plum" />
                {SITE_CONFIG.address}
              </p>
              <p className="flex items-center gap-3 text-sm text-charcoal/75">
                <Clock size={18} className="shrink-0 text-plum" />
                {SITE_CONFIG.openingHours}
              </p>
              <a
                href={getMapsDirectionsLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow mt-2 inline-flex w-fit items-center gap-2 border border-plum px-5 py-3 text-plum transition-colors hover:bg-plum hover:text-ivory"
              >
                <Navigation size={14} /> Get Directions
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-blush/30 py-16 md:py-20">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
          <Reveal>
            <span className="eyebrow text-rose">Find Us</span>
            <h2 className="mt-3 font-display text-2xl text-plum sm:text-3xl">
              Opp. COCSIT College, Ambajogai Road, Latur
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 aspect-[16/9] w-full overflow-hidden border border-plum/10 md:aspect-[21/9]">
            <iframe
              title="Blissful Makeup Studio location map"
              src={getMapsEmbedSrc()}
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

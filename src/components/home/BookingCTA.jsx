import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { getWhatsAppLink } from "@/data/siteConfig";

export default function BookingCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[560px] w-full">
        <Image
          src="/images/bridal/bridal-6.svg"
          alt="Bridal look by Blissful Makeup Studio"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/50 to-plum/30" />

        <div className="relative flex h-full min-h-[560px] items-center justify-center px-6 py-24 text-center">
          <Reveal align="center" className="mx-auto max-w-xl">
            <h2 className="font-display text-[2.4rem] leading-[1.05] text-ivory sm:text-[3.4rem]">
              Your Perfect Look
              <br />
              Starts Here.
            </h2>
            <p className="mt-6 text-[0.98rem] leading-relaxed text-ivory/80">
              Have an upcoming wedding, event or celebration? Let&rsquo;s create
              your look together.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="light">
                Book Appointment
              </Button>
              <Button href={getWhatsAppLink()} variant="ghost" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

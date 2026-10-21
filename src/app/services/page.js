import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { SERVICE_CATEGORIES } from "@/data/services";

export const metadata = {
  title: "Services",
  description:
    "Explore bridal makeup, hair, skin and nail services at Blissful Makeup Studio in Latur. Contact for pricing and consultation.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-plum md:min-h-[65vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/studio/studio-1.svg"
            alt="Inside Blissful Makeup Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/60 to-plum/10" />
        </div>
        <div className="relative mx-auto w-full max-w-content px-6 pb-16 pt-40 md:px-10 lg:px-14">
          <Reveal>
            <span className="eyebrow text-blush">Services</span>
            <h1 className="mt-5 max-w-2xl font-display text-[2.6rem] leading-[1.05] text-ivory sm:text-[4rem]">
              Beauty, Designed
              <br />
              Around You.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
          <div className="flex flex-col gap-16">
            {SERVICE_CATEGORIES.map((cat, ci) => (
              <Reveal key={cat.category} delay={ci * 0.05}>
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-lg text-rose">{`0${ci + 1}`}</span>
                  <h2 className="font-display text-3xl text-plum sm:text-4xl">
                    {cat.category}
                  </h2>
                </div>
                <div className="mt-6 hairline text-plum" />
                <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex flex-wrap items-center justify-between gap-4 border-b border-plum/10 py-4"
                    >
                      <div>
                        <p className="font-display text-xl text-charcoal">{item}</p>
                        <p className="mt-1 text-xs uppercase tracking-widest text-charcoal/45">
                          Starting price available on consultation
                        </p>
                      </div>
                      <Button href="/contact" variant="secondary" className="!px-5 !py-2.5 shrink-0">
                        Book This Service
                      </Button>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blush/40 py-20 text-center md:py-24">
        <Reveal align="center" className="mx-auto max-w-lg px-6">
          <h2 className="font-display text-3xl text-plum sm:text-4xl">
            Not sure what you need?
          </h2>
          <p className="mt-4 text-sm text-charcoal/70">
            Reach out and we&rsquo;ll help you choose the right service for your
            event.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="primary">
              Contact for Pricing
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}

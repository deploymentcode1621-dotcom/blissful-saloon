import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { BRIDAL_LOOKS, BRIDAL_JOURNEY_STEPS } from "@/data/services";

export const metadata = {
  title: "Bridal Makeup",
  description:
    "The Bridal Edit — traditional, contemporary and soft glam bridal makeup by Blissful Makeup Studio in Latur, Maharashtra.",
};

export default function BridalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-plum">
        <div className="absolute inset-0">
          <Image
            src="/images/bridal/bridal-2.svg"
            alt="Bride wearing bridal makeup by Blissful Makeup Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/50 to-plum/10" />
        </div>
        <div className="relative mx-auto w-full max-w-content px-6 pb-20 pt-40 md:px-10 lg:px-14">
          <Reveal>
            <span className="eyebrow text-blush">The Bridal Edit</span>
            <h1 className="mt-5 max-w-xl font-display text-[2.6rem] leading-[1.05] text-ivory sm:text-[4rem]">
              For the moment
              <br />
              you&rsquo;ve always
              <br />
              imagined.
            </h1>
            <div className="mt-9">
              <Button href="/contact" variant="light">
                Check Date Availability
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Looks */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
          <Reveal>
            <SectionLabel eyebrow="Bridal Styles" title="A Look for Every Bride" />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {BRIDAL_LOOKS.map((look, i) => (
              <Reveal key={look.title} delay={i * 0.08} className="group relative aspect-[4/5] overflow-hidden">
                <Image
                  src={look.image}
                  alt={look.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/85 via-plum/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl text-ivory">{look.title}</h3>
                  <p className="mt-2 max-w-xs text-sm text-ivory/75">{look.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions strip */}
      <section className="bg-blush/40 py-16">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
          <Reveal>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
              {["Bridal Makeup", "Engagement", "Reception", "Traditional Bridal", "Contemporary Bridal", "Soft Glam Bridal"].map(
                (item) => (
                  <li key={item} className="eyebrow text-plum">
                    {item}
                  </li>
                )
              )}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
          <Reveal align="center" className="mx-auto text-center">
            <SectionLabel eyebrow="Step by Step" title="Your Bridal Journey" align="center" />
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-5 md:gap-6">
            {BRIDAL_JOURNEY_STEPS.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.08} className="relative text-center">
                <span className="font-display text-4xl text-rose/60">{step.number}</span>
                <p className="mt-3 font-display text-xl text-plum">{step.title}</p>
                {i < BRIDAL_JOURNEY_STEPS.length - 1 && (
                  <span className="absolute right-0 top-5 hidden h-px w-full translate-x-1/2 bg-plum/10 md:block" />
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio strip */}
      <section className="grid grid-cols-2 sm:grid-cols-4">
        {["bridal-1", "bridal-3", "bridal-4", "bridal-6"].map((img) => (
          <div key={img} className="relative aspect-square overflow-hidden">
            <Image
              src={`/images/bridal/${img}.svg`}
              alt="Bridal makeup portfolio"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="bg-plum py-20 text-center md:py-28">
        <Reveal align="center" className="mx-auto max-w-lg px-6">
          <h2 className="font-display text-3xl text-ivory sm:text-4xl">
            Have a date in mind?
          </h2>
          <p className="mt-4 text-sm text-ivory/70">
            Bridal dates fill quickly during wedding season &mdash; check
            availability early.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="light">
              Check Date Availability
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}

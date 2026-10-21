import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { SITE_CONFIG } from "@/data/siteConfig";

export default function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-ivory py-24 md:py-32">
      <span className="ghost-type pointer-events-none absolute -top-6 left-1/2 hidden -translate-x-1/2 text-[10rem] md:block">
        BLISSFUL
      </span>

      <div className="relative mx-auto grid max-w-content grid-cols-1 gap-16 px-6 md:grid-cols-2 md:px-10 md:gap-10 lg:px-14">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden">
            <Image
              src="/images/about/about-3.svg"
              alt="Inside Blissful Makeup Studio"
              fill
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-4 h-40 w-32 overflow-hidden border-8 border-ivory shadow-xl sm:w-44 sm:h-52 sm:-right-8">
            <Image
              src="/images/studio/studio-1.svg"
              alt="Blissful Makeup Studio detail"
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col justify-center pt-10 md:pt-0">
          <span className="eyebrow text-rose">Our Story</span>
          <h2 className="mt-4 font-display text-[2.1rem] leading-[1.1] text-plum sm:text-[2.6rem]">
            Beauty is personal.
            <br />
            Your makeup should be too.
          </h2>
          <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-charcoal/75">
            Since {SITE_CONFIG.since}, Blissful Essence Beauty Parlour &amp; Makeup
            Studio has been quietly building a reputation in {SITE_CONFIG.location}{" "}
            for makeup that feels less like a mask and more like a truer version
            of you. Every appointment begins with a conversation, not a template
            &mdash; your features, your outfit, your day.
          </p>
          <p className="mt-4 max-w-md text-[0.98rem] leading-relaxed text-charcoal/75">
            From first bridal trials to reception glamour, the studio's approach
            stays the same: enhance rather than overwrite, and treat every detail,
            down to how a look holds up in photographs, as part of the craft.
          </p>
          <div className="mt-9">
            <Button href="/about" variant="secondary">
              Discover Our Story
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

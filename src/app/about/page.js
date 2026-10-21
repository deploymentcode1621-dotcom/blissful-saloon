import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import SectionLabel from "@/components/ui/SectionLabel";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata = {
  title: "About the Studio",
  description:
    "Meet the artist behind Blissful Makeup Studio and discover the philosophy that has guided bridal makeup in Latur since 2012.",
};

const STORY_BLOCKS = [
  {
    eyebrow: "Started in 2012",
    title: "Our Story",
    body: `Blissful Essence Beauty Parlour & Makeup Studio opened its doors in ${SITE_CONFIG.since} with a simple intention: to make every client feel genuinely beautiful, not simply made-up. What began as a modest studio in Latur has grown, appointment by appointment, into a name brides across the region trust with their most photographed day.`,
    image: "/images/about/about-1.svg",
  },
  {
    eyebrow: "Philosophy",
    title: "Beauty Philosophy",
    body: "The studio's guiding belief is that makeup should enhance rather than mask. Every look starts with the skin underneath it, and every technique is chosen to bring out what's already there, not to replace it with someone else's face.",
    image: "/images/about/about-2.svg",
  },
  {
    eyebrow: "12+ Years",
    title: "Experience",
    body: "Over a decade of bridal mornings, engagement shoots, receptions and everyday transformations has shaped a steady hand and a sharp eye for what actually holds up through a long day, warm weather and hundreds of photographs.",
    image: "/images/studio/studio-1.svg",
  },
  {
    eyebrow: "Bridal",
    title: "Approach to Bridal Makeup",
    body: "Bridal work begins well before the wedding morning — understanding the outfit, the jewellery, the venue lighting and the bride herself. Trials aren't rushed, because a bride should never see her final look for the first time on the actual day.",
    image: "/images/bridal/bridal-3.svg",
  },
  {
    eyebrow: "What Sets Us Apart",
    title: "What Makes Blissful Different",
    body: "Personal attention over volume. A conversation before a brush ever touches skin. Products and techniques suited to Indian skin tones and long wedding days. And an honest answer, always, about what will genuinely suit you.",
    image: "/images/bridal/bridal-5.svg",
  },
  {
    eyebrow: "Visit Us",
    title: "Studio Experience",
    body: `Located on Ambajogai Road opposite COCSIT College, the studio is a calm, private space designed so clients — brides especially — can relax through what is often a long, important morning.`,
    image: "/images/studio/studio-2.svg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-plum md:min-h-[80vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/about/about-1.svg"
            alt="Portrait of the makeup artist at Blissful Makeup Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-plum via-plum/60 to-plum/10" />
        </div>
        <div className="relative mx-auto w-full max-w-content px-6 pb-20 pt-40 md:px-10 lg:px-14">
          <Reveal>
            <span className="eyebrow text-blush">Est. {SITE_CONFIG.since} &middot; {SITE_CONFIG.location}</span>
            <h1 className="mt-5 max-w-2xl font-display text-[2.6rem] leading-[1.05] text-ivory sm:text-[4rem]">
              The Artist
              <br />
              Behind the Art
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story blocks */}
      {STORY_BLOCKS.map((block, i) => (
        <section
          key={block.title}
          className={`py-20 md:py-28 ${i % 2 === 1 ? "bg-blush/30" : "bg-ivory"}`}
        >
          <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
            <div
              className={`grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={block.image}
                  alt={block.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <SectionLabel eyebrow={block.eyebrow} title={block.title} />
                <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-charcoal/75">
                  {block.body}
                </p>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-plum py-20 text-center md:py-28">
        <Reveal align="center" className="mx-auto max-w-lg px-6">
          <h2 className="font-display text-3xl text-ivory sm:text-4xl">
            Ready to talk through your look?
          </h2>
          <p className="mt-4 text-sm text-ivory/70">
            Every consultation starts with a conversation, not a checklist.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="light">
              Book Your Consultation
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}

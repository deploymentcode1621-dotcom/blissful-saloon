import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

const POINTS = ["Bridal Makeup", "Bridal Hair", "Draping", "Engagement", "Reception", "Pre-Wedding"];

export default function BridalFeature() {
  return (
    <section className="relative overflow-hidden bg-plum">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[640px]">
          <Image
            src="/images/bridal/bridal-2.svg"
            alt="Indian bride wearing bridal makeup by Blissful Makeup Studio"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="flex items-center px-6 py-16 md:px-14 md:py-0 lg:px-20">
          <Reveal>
            <span className="eyebrow text-blush">The Bridal Edit</span>
            <h2 className="mt-5 font-display text-[2.3rem] leading-[1.08] text-ivory sm:text-[3rem]">
              Your Day.
              <br />
              Your Story.
              <br />
              Your Signature Look.
            </h2>
            <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-ivory/75">
              From timeless elegance to contemporary bridal glamour, each look is
              thoughtfully designed around your features, outfit, jewellery and
              personality.
            </p>

            <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-ivory/80">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-rose" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href="/bridal" variant="ghost">
                Explore Bridal Makeup
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

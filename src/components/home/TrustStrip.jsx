import Reveal from "@/components/ui/Reveal";

const ITEMS = [
  "12+ Years of Beauty",
  "Bridal Specialists",
  "Professional Makeup",
  "Personalised Looks",
  "Latur",
];

export default function TrustStrip() {
  return (
    <section className="border-y border-plum/10 bg-ivory">
      <div className="mx-auto max-w-content px-6 py-8 md:px-10 lg:px-14">
        <Reveal>
          <ul className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4">
            {ITEMS.map((item, i) => (
              <li key={item} className="flex items-center gap-3">
                {i !== 0 && <span className="hidden h-1 w-1 rounded-full bg-rose sm:block" />}
                <span className="eyebrow text-charcoal/70">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

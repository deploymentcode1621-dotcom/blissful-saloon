import { GALLERY_CATEGORIES } from "@/data/gallery";

export default function GalleryFilter({ active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
      {GALLERY_CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          aria-pressed={active === cat}
          className={`eyebrow px-5 py-2.5 transition-colors duration-300 ${
            active === cat
              ? "bg-plum text-ivory"
              : "border border-plum/15 bg-transparent text-charcoal/60 hover:text-plum"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

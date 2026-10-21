export default function SectionLabel({ eyebrow, title, align = "left", light = false }) {
  return (
    <div
      className={`flex flex-col gap-3 ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      {eyebrow && (
        <div className="flex items-center gap-3">
          {align !== "center" && <span className="hairline w-8" />}
          <span
            className={`eyebrow ${light ? "text-blush" : "text-rose"}`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      {title && (
        <h2
          className={`font-display text-balance ${
            light ? "text-ivory" : "text-plum"
          } text-[2.1rem] leading-[1.08] sm:text-[2.6rem] md:text-[3.1rem]`}
        >
          {title}
        </h2>
      )}
    </div>
  );
}

"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import Reveal from "@/components/ui/Reveal";

export default function Transformation() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [containerWidth, setContainerWidth] = useState(0);
  const dragging = useRef(false);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    updateFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  };
  const stopDrag = () => {
    dragging.current = false;
  };

  const onTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      updateFromClientX(e.touches[0].clientX);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
  };

  return (
    <section className="bg-blush/40 py-24 md:py-32">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-14">
        <Reveal align="center" className="mx-auto max-w-xl text-center">
          <SectionLabel eyebrow="The Transformation" title="Before &rarr; After" align="center" />
        </Reveal>

        <Reveal delay={0.15} className="mx-auto mt-14 max-w-2xl">
          <div
            ref={containerRef}
            role="slider"
            tabIndex={0}
            aria-label="Before and after comparison slider"
            aria-valuenow={Math.round(position)}
            aria-valuemin={0}
            aria-valuemax={100}
            onKeyDown={onKeyDown}
            onMouseDown={onPointerDown}
            onMouseMove={onPointerMove}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onTouchStart={(e) => e.touches[0] && updateFromClientX(e.touches[0].clientX)}
            onTouchMove={onTouchMove}
            className="relative aspect-[4/5] w-full cursor-ew-resize select-none overflow-hidden focus:outline-none sm:aspect-[16/10]"
          >
            <Image
              src="/images/makeup/after.svg"
              alt="After makeup application"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="pointer-events-none object-cover"
            />
            <div
              className="pointer-events-none absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <div
                className="relative h-full"
                style={{ width: containerWidth || "100%" }}
              >
                <Image
                  src="/images/makeup/before.svg"
                  alt="Before makeup application"
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
            </div>

            <div
              className="pointer-events-none absolute top-0 bottom-0 w-px bg-ivory"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ivory text-plum shadow-lg">
                <MoveHorizontal size={18} />
              </div>
            </div>

            <span className="eyebrow absolute left-4 top-4 bg-plum/70 px-3 py-1.5 text-ivory">Before</span>
            <span className="eyebrow absolute right-4 top-4 bg-plum/70 px-3 py-1.5 text-ivory">After</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

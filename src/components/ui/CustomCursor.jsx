"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState("default");
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 28, stiffness: 380, mass: 0.5 });
  const springY = useSpring(cursorY, { damping: 28, stiffness: 380, mass: 0.5 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setEnabled(true);
    document.body.classList.add("cursor-hide");

    const move = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target.closest("[data-cursor]");
      setVariant(target ? target.dataset.cursor : "default");
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.body.classList.remove("cursor-hide");
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  const sizes = {
    default: { w: 0, h: 0, text: "" },
    view: { w: 76, h: 76, text: "VIEW" },
    arrow: { w: 52, h: 52, text: "→" },
  };

  const active = sizes[variant] || sizes.default;

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: active.w,
        height: active.h,
        opacity: active.w ? 1 : 0,
      }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {active.text}
    </motion.div>
  );
}

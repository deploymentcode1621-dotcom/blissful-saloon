"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageReveal({
  src,
  alt,
  fill = true,
  width,
  height,
  priority = false,
  sizes = "100vw",
  className = "",
  wrapperClassName = "",
  delay = 0,
}) {
  return (
    <div className={`relative overflow-hidden ${wrapperClassName}`}>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
        style={{ originX: 0 }}
        className="absolute inset-0 z-10 bg-blush"
      />
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, delay: delay + 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={fill ? "absolute inset-0" : "relative"}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={`object-cover ${className}`}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={`h-full w-full object-cover ${className}`}
          />
        )}
      </motion.div>
    </div>
  );
}

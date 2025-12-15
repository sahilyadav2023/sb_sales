"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const gallery = [
  {
    src: "/images/past-works/steel-railing/steel-railing-1.png",
    title: "Steel Railing — Modern Balcony",
  },
  {
    src: "/images/past-works/aluminium-partition/aluminium-partition-1.png",
    title: "Aluminium Partition — Office Space",
  },
  {
    src: "/images/past-works/toughened-glass-12mm/toughened-glass-12mm-1.png",
    title: "12mm Toughened Glass — Facade",
  },
  {
    src: "/images/past-works/main-gates/work-1.jpg",
    title: "Main Gate — Designer Entrance",
  },
  {
    src: "/images/past-works/ducting-air-cooling-system/ducting-air-cooling-system-1.png",
    title: "Ducting Air Cooling System — Factory Setup",
  },
  {
    src: "/images/past-works/steel-railing/steel-railing-2.png",
    title: "Steel Railing — Spiral Staircase",
  },
];

export function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = () => setLightbox(null);
  const next = () =>
    setLightbox((prev) => (prev === null ? null : (prev + 1) % gallery.length));
  const prev = () =>
    setLightbox((prev) =>
      prev === null ? null : (prev - 1 + gallery.length) % gallery.length
    );

  // Keyboard navigation
  if (typeof window !== "undefined") {
    window.onkeydown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
  }

  return (
    <section className="section bg-white">
      <div className="container">
        <motion.h2
          className="h2 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Recent Work
        </motion.h2>
        <p className="mt-2 text-center text-steel-mid">
          A glimpse of our installations — crafted with precision and style.
        </p>

        {/* Gallery Grid */}
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {gallery.map((img, i) => (
            <motion.figure
              key={i}
              className="relative overflow-hidden rounded-xl2 border bg-white shadow-soft cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.title}
                width={1200}
                height={900}
                className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white p-3 text-sm">
                {img.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightbox !== null && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src={gallery[lightbox].src}
                  alt={gallery[lightbox].title}
                  width={1600}
                  height={1000}
                  className="max-w-[90vw] max-h-[85vh] object-contain rounded-xl shadow-2xl"
                />
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm opacity-80">
                  {gallery[lightbox].title}
                </p>

                {/* Controls */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  className="absolute left-6 text-3xl text-white bg-black/50 hover:bg-black rounded-full px-3 py-1"
                >
                  ◀
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  className="absolute right-6 text-3xl text-white bg-black/50 hover:bg-black rounded-full px-3 py-1"
                >
                  ▶
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    closeLightbox();
                  }}
                  className="absolute top-6 right-6 text-2xl text-white bg-black/70 hover:bg-black px-3 py-1 rounded"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

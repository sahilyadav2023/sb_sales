"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const metadata = { title: "Projects — SteelCraft Fabricators" };

const categories = [
  {
    title: "Steel Railing",
    images: [
      "/images/past-works/steel-railing/steel-railing-1.png",
      "/images/past-works/steel-railing/steel-railing-2.png",
      "/images/past-works/steel-railing/steel-railing-3.png",
    ],
  },
  {
    title: "Aluminium Partition",
    images: [
      "/images/past-works/aluminium-partition/aluminium-partition-1.png",
      "/images/past-works/aluminium-partition/aluminium-partition-2.png",
    ],
  },
  {
    title: "12mm Toughened Glass",
    images: [
      "/images/past-works/toughened-glass-12mm/toughened-glass-12mm-1.png",
      "/images/past-works/toughened-glass-12mm/toughened-glass-12mm-2.png",
    ],
  },
  {
    title: "Main Gates",
    images: [
      "/images/past-works/main-gates/work-1.jpg",
      "/images/past-works/main-gates/work-2.jpg",
    ],
  },
  {
    title: "Ducting Air Cooling System",
    images: [
      "/images/past-works/ducting-air-cooling-system/ducting-air-cooling-system-1.png",
      "/images/past-works/ducting-air-cooling-system/ducting-air-cooling-system-2.png",
    ],
  },
];

export default function ProjectsPage() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  return (
    <section className="section">
      <div className="container">
        <h1 className="h1 text-center mb-4">Our Projects</h1>
        <p className="text-center text-steel-mid mb-10">
          A showcase of our craftsmanship across categories — click any photo to view in fullscreen.
        </p>

        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold mb-4 border-l-4 border-steel pl-3">{cat.title}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {cat.images.map((src, j) => (
                <motion.figure
                  key={j}
                  className="relative overflow-hidden rounded-xl2 border bg-white shadow-soft cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setLightbox({ src, title: cat.title })}
                >
                  <Image
                    src={src}
                    alt={`${cat.title} ${j + 1}`}
                    width={1200}
                    height={900}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                  <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-3 text-sm">
                    {cat.title} — {`#${j + 1}`}
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
              onClick={() => setLightbox(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Image
                  src={lightbox.src}
                  alt={lightbox.title}
                  width={1600}
                  height={1000}
                  className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center text-sm opacity-90">
                  {lightbox.title}
                </p>
                <button
                  className="absolute top-4 right-4 text-3xl text-white bg-black/70 hover:bg-black px-3 py-1 rounded"
                  onClick={() => setLightbox(null)}
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

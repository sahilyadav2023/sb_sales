"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function WorksPage() {
  const categories = [
    {
      title: "Steel Railing",
      images: [
        "/images/past-works/steel-railing/steel-railing-1.png",
        "/images/past-works/steel-railing/steel-railing-2.png",
        "/images/past-works/steel-railing/steel-railing-3.png",
        "/images/past-works/steel-railing/steel-railing-4.png",
        "/images/past-works/steel-railing/steel-railing-5.jpg",
      ],
    },
    {
      title: "Aluminium Partition",
      images: [
        "/images/past-works/aluminium-partition/aluminium-partition-1.png",
        "/images/past-works/aluminium-partition/aluminium-partition-2.png",
        "/images/past-works/aluminium-partition/aluminium-partition-3.png",
      ],
    },
    {
      title: "12mm Toughened Glass",
      images: [
        "/images/past-works/toughened-glass-12mm/toughened-glass-12mm-1.png",
        "/images/past-works/toughened-glass-12mm/toughened-glass-12mm-2.png",
        "/images/past-works/toughened-glass-12mm/toughened-glass-12mm-3.png",
        "/images/past-works/toughened-glass-12mm/toughened-glass-12mm-4.png",
         "/images/past-works/toughened-glass-12mm/toughened-glass-12mm-5.png",
      ],
    },
    {
      title: "Main Gates",
      images: [
        "/images/past-works/main-gates/work-1.jpg",
        "/images/past-works/main-gates/work-2.jpg",
        "/images/past-works/main-gates/work-3.jpg",
        "/images/past-works/main-gates/work-4.jpg",
      ],
    },
    {
      title: "Ducting Air Cooling System",
      images: [
        "/images/past-works/ducting-air-cooling-system/ducting-air-cooling-system-1.png",
        "/images/past-works/ducting-air-cooling-system/ducting-air-cooling-system-2.png",
        "/images/past-works/ducting-air-cooling-system/ducting-air-cooling-system-3.png",
        "/images/past-works/ducting-air-cooling-system/ducting-air-cooling-system-4.png",
        "/images/past-works/ducting-air-cooling-system/ducting-air-cooling-system-5.png",
      ],
    },
  ];

  const [active, setActive] = useState(categories.map(() => 0));
  const [lightbox, setLightbox] = useState<{ cat: number; img: number } | null>(
    null
  );

  // auto slideshow
  useEffect(() => {
    const timers = categories.map((cat, i) =>
      setInterval(() => {
        setActive((prev) => {
          const next = [...prev];
          next[i] = (next[i] + 1) % cat.images.length;
          return next;
        });
      }, 4000)
    );
    return () => timers.forEach(clearInterval);
  }, []);

  const next = (i: number) =>
    setActive((prev) => {
      const next = [...prev];
      next[i] = (next[i] + 1) % categories[i].images.length;
      return next;
    });

  const prev = (i: number) =>
    setActive((prev) => {
      const next = [...prev];
      next[i] =
        (next[i] - 1 + categories[i].images.length) %
        categories[i].images.length;
      return next;
    });

  const openLightbox = (cat: number, img: number) =>
    setLightbox({ cat, img });
  const closeLightbox = () => setLightbox(null);

  const nextLightbox = () => {
    if (!lightbox) return;
    setLightbox((prev) => {
      if (!prev) return null;
      const len = categories[prev.cat].images.length;
      return { cat: prev.cat, img: (prev.img + 1) % len };
    });
  };

  const prevLightbox = () => {
    if (!lightbox) return;
    setLightbox((prev) => {
      if (!prev) return null;
      const len = categories[prev.cat].images.length;
      return { cat: prev.cat, img: (prev.img - 1 + len) % len };
    });
  };

  // close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  return (
    <section className="section space-y-20">
      <div className="container">
        <h1 className="h1 text-center mb-10">Past Works</h1>
        <p className="text-center text-steel-mid mb-12">
          Browse our projects category by category. Each section below slides
          automatically with manual control — click any image to view full
          screen.
        </p>

        {categories.map((cat, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl border bg-white shadow-soft mb-16"
          >
            <div
              className="relative w-full h-[26rem] sm:h-[32rem] cursor-pointer"
              onClick={() => openLightbox(i, active[i])}
            >
              <Image
                src={cat.images[active[i]]}
                alt={`${cat.title} ${active[i] + 1}`}
                fill
                className="object-cover transition-all duration-700 ease-in-out"
                priority={i < 1}
              />

              {/* controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  prev(i);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md text-lg"
              >
                ◀
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  next(i);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md text-lg"
              >
                ▶
              </button>

              {/* dots */}
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1">
                {cat.images.map((_, j) => (
                  <span
                    key={j}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive((prev) => {
                        const next = [...prev];
                        next[i] = j;
                        return next;
                      });
                    }}
                    className={`h-2 w-2 rounded-full cursor-pointer border transition ${
                      active[i] === j
                        ? "bg-steel border-steel scale-110"
                        : "bg-white/70 border-white/80"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent text-white p-6">
              <h2 className="text-2xl font-semibold">{cat.title}</h2>
              <p className="text-sm opacity-90">
                Image {active[i] + 1} of {cat.images.length}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <Image
            src={categories[lightbox.cat].images[lightbox.img]}
            alt="Expanded view"
            width={1600}
            height={1000}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-6 text-white text-3xl"
          >
            ◀
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-6 text-white text-3xl"
          >
            ▶
          </button>
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-2xl text-white bg-black/60 hover:bg-black px-3 py-1 rounded"
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
}

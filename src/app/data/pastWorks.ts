export type WorkItem = { src: string; title?: string };
export type WorkCategory = { slug: string; title: string; items: WorkItem[] };

export const PAST_WORKS: WorkCategory[] = [
  {
    slug: "steel-railing",
    title: "Steel railing",
    items: Array.from({ length: 6 }).map((_, i) => ({
      src: `/images/past-works/steel-railing/steel-railing-${i + 1}.png`,
      title: `Steel railing #${i + 1}`,
    })),
  },
  {
    slug: "aluminium-partition",
    title: "Aluminium partition",
    items: Array.from({ length: 6 }).map((_, i) => ({
      src: `/images/past-works/aluminium-partition/aluminium-partition-${i + 1}.png`,
      title: `Aluminium partition #${i + 1}`,
    })),
  },
  {
    slug: "toughened-glass-12mm",
    title: "12mm toughened glass",
    items: Array.from({ length: 6 }).map((_, i) => ({
      src: `/images/past-works/toughened-glass-12mm/toughened-glass-12mm-${i + 1}.png`,
      title: `12mm toughened glass #${i + 1}`,
    })),
  },
  {
    slug: "glass-glazing",
    title: "Glass glazing",
    items: Array.from({ length: 6 }).map((_, i) => ({
      src: `/images/past-works/glass-glazing/glass-glazing-${i + 1}.png`,
      title: `Glass glazing #${i + 1}`,
    })),
  },
  {
    slug: "ducting-air-cooling-system",
    title: "Ducting Air cooling system",
    items: Array.from({ length: 6 }).map((_, i) => ({
      src: `/images/past-works/ducting-air-cooling-system/ducting-air-cooling-system-${i + 1}.png`,
      title: `Ducting Air cooling system #${i + 1}`,
    })),
  },
];

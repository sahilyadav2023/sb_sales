import Link from "next/link";

const items = [
  {
    title: "Stairs & Railings",
    desc: "Custom MS/SS staircases & railings built to code, clean welds, long‑lasting finish.",
    href: "/services/stairs",
    img: "/images/service-stairs.jpg",
  },
  {
    title: "Gates & Grills",
    desc: "Sliding/swing gates, balcony & window grills—strength with style.",
    href: "/services/gates",
    img: "/images/service-gates.jpg",
  },
  {
    title: "Industrial Fabrication",
    desc: "Frames, platforms, racks, machine guards from drawings to install.",
    href: "/services/industrial",
    img: "/images/service-industrial.jpg",
  },
  {
    title: "Cabinets & Storage",
    desc: "Rugged metal cabinets, lockers, and shelving for workshops & warehouses.",
    href: "/services/cabinets",
    img: "/images/service-cabinets.jpg",
  },
];

export function Services() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">Services</h2>
        <p className="mt-2 text-steel-mid">Everything you need — design, fabrication, finishing, and installation.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s) => (
            <Link key={s.title} href={s.href} className="group block border rounded-xl2 overflow-hidden bg-white shadow-soft">
              <img src={s.img} alt={s.title} className="h-36 w-full object-cover group-hover:scale-[1.02] transition" />
              <div className="p-4">
                <div className="h3 text-lg">{s.title}</div>
                <p className="mt-1 text-sm text-steel-mid">{s.desc}</p>
                <span className="mt-3 inline-block text-sm underline">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

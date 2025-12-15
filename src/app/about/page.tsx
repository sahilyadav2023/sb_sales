export const metadata = { title: "About — SteelCraft Fabricators" };

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="h1">About SteelCraft</h1>
          <p className="mt-3 text-steel-mid">
            We are a Jaipur‑based iron & steel fabrication workshop serving homes and industry since 2012.
            Our focus: solid engineering, neat finishing, and predictable timelines.
          </p>
          <ul className="mt-4 list-disc pl-6 space-y-2">
            <li>In‑house welding & finishing</li>
            <li>On‑site measurement & installation</li>
            <li>Warranty & after‑sales support</li>
          </ul>
        </div>
        <div>
          <img src="/images/hero-stair.jpg" alt="Workshop" className="rounded-xl2 shadow-soft" />
        </div>
      </div>
    </section>
  );
}

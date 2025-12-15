export function Hero() {
  return (
    <section className="section bg-gradient-to-b from-white to-steel-light">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="badge">Jaipur • Since 2012</div>
          <h1 className="h1 mt-3">Strong, Custom Ironwork — Stairs, Gates & Fabrication Done Right.</h1>
          <p className="mt-4 text-lg text-steel-mid">
            We design, fabricate, and install durable metalwork for homes and industry in Jaipur. Site visits, quick quotes, and on‑time delivery.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="btn btn-primary">Get a Quote</a>
            <a href="tel:+919876543210" className="btn btn-outline">Call Now</a>
          </div>
          <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
            <li className="badge">MS/SS</li>
            <li className="badge">Powder Coating</li>
            <li className="badge">Warranty Included</li>
          </ul>
        </div>
        <div>
          <img
            src="/images/hero-stair.jpg"
            alt="Fabricated steel staircase with railing"
            className="w-full rounded-xl2 shadow-soft"
          />
        </div>
      </div>
    </section>
  );
}

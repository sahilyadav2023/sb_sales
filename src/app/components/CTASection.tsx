export function CTASection() {
  return (
    <section className="section bg-steel-dark text-white">
      <div className="container grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h3 className="h3 text-white">Free Site Visit within 24 Hours*</h3>
          <p className="mt-2 text-white/80">
            Share your location and requirements, and our team will measure, plan, and quote.
          </p>
        </div>
        <div className="flex md:justify-end gap-3">
          <a href="/contact" className="btn btn-outline bg-transparent text-white border-white">Get a Quote</a>
          <a href="https://wa.me/919876543210?text=Hi%20SteelCraft,%20I%20need%20a%20site%20visit."
             target="_blank"
             className="btn btn-primary">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

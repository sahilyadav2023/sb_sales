import { SITE } from "../data/site";
import { MapPin, Phone, Navigation } from "lucide-react";

export const metadata = { title: `Contact — ${SITE.brand}` };

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-8">

        {/* LEFT CONTACT CARD — UNTOUCHED */}
        <div className="card p-6">
          <h1 className="h1">Contact</h1>
          <p className="mt-2 muted">We’re available {SITE.hours}.</p>
          <div className="mt-4 space-y-2">
            <p>
              WhatsApp:{" "}
              <a
                className="underline"
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
              >
                Chat now
              </a>
            </p>
            <p>
              Phone:{" "}
              <a className="underline" href={`tel:${SITE.phone}`}>
                {SITE.phone}
              </a>
            </p>
            <p>
              Email:{" "}
              <a className="underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
            <p>
              Address: {SITE.addressLine}, {SITE.city} {SITE.pincode}
            </p>
          </div>
        </div>

        {/* RIGHT PREMIUM MAP CARD */}
        <div className="w-full">
          <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">

            {/* Header */}
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-blue-600" />
              Our Location
            </h2>

            {/* Address + Buttons */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">{SITE.phone}</span>
              </div>

              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=26.9134159,75.7177771`}
                target="_blank"
                className="flex items-center gap-2 bg-blue-600 text-white font-medium rounded-xl p-3 justify-center hover:bg-blue-700 transition"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </a>
            </div>

            {/* Map */}
            <div className="w-full overflow-hidden rounded-xl shadow-md border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3558.4764867405887!2d75.7177771!3d26.9134159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1710500000000"
                width="100%"
                height={300}
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

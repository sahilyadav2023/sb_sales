// src/app/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "./data/site";
import { motion } from "framer-motion";

// helper: fade-up with per-item delay (works with new framer-motion types)
const easeOutBezier = [0.16, 1, 0.3, 1] as const;
const fade = (i = 0) =>
  ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { delay: 0.08 * i, duration: 0.5, ease: easeOutBezier },
    viewport: { once: true },
  } as const);

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Fabrication workshop interior"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,13,24,.68),rgba(7,13,24,.38)_45%,rgba(244,246,251,1)_100%)]" />
        </div>

        <div className="container relative pt-28 pb-12">
          <div className="max-w-2xl text-white">
            <motion.div
              {...fade(0)}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur"
            >
              <span className="text-xs">GSTIN</span>
              <span className="text-xs font-semibold">{SITE.gstin}</span>
              <span className="text-xs opacity-80">• {SITE.city}</span>
              <span className="text-xs opacity-80">• Since 2017</span>
            </motion.div>

            <motion.h1 className="h1 mt-4" {...fade(1)}>
              Interior metalwork that matters.
            </motion.h1>

            <motion.p className="mt-3 text-white/90 leading-relaxed" {...fade(2)}>
              {SITE.brand} by {SITE.owner} designs, fabricates and installs stairs,
              railings, gates, cabinets and industrial structures — precise welding,
              neat finishing, on-time delivery.
            </motion.p>

            <motion.div className="mt-6 flex flex-wrap gap-3" {...fade(3)}>
              <Link href="/contact" className="btn btn-primary">
                Get a quote
              </Link>
              <Link href="/works" className="btn btn-outline text-white border-white">
                See past works
              </Link>
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%20need%20a%20site%20visit`}
                target="_blank"
                className="btn btn-outline text-white border-white"
              >
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>

        {/* glass cards row */}
        <div className="container relative pb-10">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { h: "On-site measurements", p: "Accurate surveying before fabrication." },
              { h: "Clean, durable finish", p: "Primer + paint or powder coating." },
              { h: "Assured timelines", p: "Typical small jobs in 7–10 days." },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.45, ease: easeOutBezier }}
                className="card p-5 -mt-8"
              >
                <div className="h2 text-lg">{c.h}</div>
                <p className="mt-1 muted">{c.p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT + IMAGE PANEL */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-6 items-stretch">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easeOutBezier }}
            className="card overflow-hidden"
          >
            <Image
              src="/images/panel.jpg"
              alt="Detail of railing & staircase"
              width={1600}
              height={1000}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div className="card p-8 flex flex-col justify-center">
            <motion.div className="h2" {...fade(0)}>
              About the firm
            </motion.div>
            <motion.p className="mt-2 muted" {...fade(1)}>
              We are a Jaipur-based workshop focused on precision fabrication for
              homes and industry. Our team handles the complete cycle: design support,
              cutting & welding (MIG/TIG/ARC), surface prep, finishing, and installation.
            </motion.p>
            <motion.ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm" {...fade(2)}>
              <li>• Materials: MS, SS, Aluminium</li>
              <li>• Finishes: Epoxy primer & paint, powder coating</li>
              <li>• Drawings: We can work from site sketches or CAD</li>
              <li>• Warranty: 12 months on fabrication workmanship</li>
            </motion.ul>
            <motion.div {...fade(3)}>
              <a href="/contact" className="btn btn-primary mt-6 w-fit">
                Book a site visit
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-10">
        <div className="container card p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { n: "12+", l: "Years experience" },
              { n: "450+", l: "Projects delivered" },
              { n: "24–48h", l: "Quote turnaround" },
              { n: "4.8/5", l: "Avg. client rating" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.03 * i, duration: 0.4, ease: easeOutBezier }}
              >
                <div className="text-3xl font-semibold">{s.n}</div>
                <div className="mt-1 muted">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="section">
        <div className="container">
          <div className="h2">How we work</div>
          <p className="mt-2 muted">A clear, predictable process from first call to handover.</p>

          <div className="mt-6 grid md:grid-cols-4 gap-4">
            {[
              { t: "1. Enquiry", d: "Share photos, sizes & location on WhatsApp." },
              { t: "2. Site Visit", d: "Measurements and design suggestions." },
              { t: "3. Fabrication", d: "Cutting, welding, surface prep and finishing." },
              { t: "4. Installation", d: "Final fitment, QA checks, handover & warranty." },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="card p-5"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.45, ease: easeOutBezier }}
              >
                <div className="font-semibold">{s.t}</div>
                <p className="mt-1 muted text-sm">{s.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS PREVIEW */}
      <section className="container pb-16">
        <div className="flex items-end justify-between">
          <div>
            <div className="h2">Recent work</div>
            <p className="mt-1 muted">A quick peek — explore the full gallery on the Past Works page.</p>
          </div>
          <Link href="/works" className="btn btn-outline">
            View all
          </Link>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.03 * i, duration: 0.45, ease: easeOutBezier }}
              className="card overflow-hidden group"
            >
              <Image
                src={`/images/work-${i}.jpg`}
                alt={`Past work ${i}`}
                width={1200}
                height={900}
                className="w-full h-56 object-cover transition group-hover:scale-[1.02]"
              />
              <figcaption className="p-3 text-sm muted">Project #{i} — Jaipur</figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* FAQs */}
<section className="section bg-[#f3f6fc]">
  <div className="container max-w-5xl">
    <h2 className="h2 mb-6">FAQs</h2>

    <div className="space-y-4">
      {[
        {
          q: "Do you provide drawings and design help?",
          a: "Yes. Share references or a rough sketch; we’ll confirm dimensions during the site visit and can work from your architect/contractor drawings.",
        },
        {
          q: "What is the usual timeline?",
          a: "Small residential jobs take about 7–10 working days after confirmation. Larger or industrial projects vary by scope.",
        },
        {
          q: "Which finishes can I choose?",
          a: "Common options are epoxy primer + paint (for MS) and powder coating. Stainless steel can be brushed or mirror finished.",
        },
      ].map((f, i) => (
        <motion.div
          key={i}
          className="card p-5"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.04 * i, duration: 0.4, ease: easeOutBezier }}
        >
          <div className="font-semibold">{f.q}</div>
          <p className="mt-1 muted text-sm leading-relaxed">{f.a}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* FINAL CTA */}
      <section className="py-16">
        <div className="container card p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="h2">Free site visit in Jaipur</div>
            <p className="mt-1 muted">Mon–Sat, 9:00 AM – 6:00 PM • GST verified • Quick quotes</p>
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="btn btn-primary">
              Book now
            </Link>
            <a className="btn btn-outline" href={`https://wa.me/${SITE.whatsapp}`} target="_blank">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

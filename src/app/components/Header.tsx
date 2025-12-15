"use client";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">

      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="h3">SteelCraft</span>
          <span className="text-sm text-steel-mid">Fabricators</span>
        </Link>

<nav className="hidden md:flex items-center gap-6 text-sm">
  <Link
    href="/"
    className="text-slate-700 hover:text-blue-600 transition-colors"
  >
    Home
  </Link>
  <Link
    href="/works"
    className="text-slate-700 hover:text-blue-600 transition-colors"
  >
    Past Works
  </Link>
  <Link
    href="/services"
    className="text-slate-700 hover:text-blue-600 transition-colors"
  >
    Services
  </Link>
  <Link
    href="/projects"
    className="text-slate-700 hover:text-blue-600 transition-colors"
  >
    Projects
  </Link>
  <Link
    href="/about"
    className="text-slate-700 hover:text-blue-600 transition-colors"
  >
    About
  </Link>
  <Link
    href="/contact"
    className="text-slate-700 hover:text-blue-600 transition-colors"
  >
    Contact
  </Link>

  <a
    href="tel:+919876543210"
    className="btn btn-outline text-sm"
  >
    Call: +91 98765 43210
  </a>
  <a
    className="btn btn-primary text-sm"
    href="https://wa.me/919876543210?text=Hi%20SteelCraft,%20I%20need%20a%20quote."
    target="_blank"
  >
    WhatsApp Quote
  </a>
</nav>


        <button
          className="md:hidden p-2 border rounded-xl2"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 flex flex-col gap-3">
            <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <a href="tel:+919876543210" className="btn btn-outline">Call Us</a>
            <a
              className="btn btn-primary"
              href="https://wa.me/919876543210?text=Hi%20SteelCraft,%20I%20need%20a%20quote."
              target="_blank"
            >
              WhatsApp Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

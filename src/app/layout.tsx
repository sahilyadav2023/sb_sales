import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// Update the path below to the correct location of your site data file
import { SITE } from "./data/site";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: `${SITE.brand} | Iron & Fabrication Works in Jaipur`,
  description: `GSTIN ${SITE.gstin}. ${SITE.brand} by ${SITE.owner}. ${SITE.addressLine}, ${SITE.city}.`,
  openGraph: { images: [SITE.ogImage] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="container h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-wide">{SITE.brand}</Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/works">Past Works</Link>
          <Link href="/contact">Contact</Link>
          <a className="btn btn-outline" href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%20need%20a%20quote`} target="_blank">WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="container py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-semibold">{SITE.brand}</div>
          <p className="mt-1 muted">GSTIN {SITE.gstin}</p>
          <p className="mt-2">{SITE.addressLine}, {SITE.city}, {SITE.state} {SITE.pincode}</p>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <p>Phone/WhatsApp: <a className="underline" href={`tel:${SITE.phone}`}>{SITE.phone}</a></p>
          <p>Email: <a className="underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
          <p>Hours: {SITE.hours}</p>
        </div>
        <div>
          <div className="font-semibold">Pages</div>
          <ul className="mt-1 space-y-1">
            <li><Link className="underline" href="/">Home</Link></li>
            <li><Link className="underline" href="/works">Past Works</Link></li>
            <li><Link className="underline" href="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-xs muted">© {new Date().getFullYear()} {SITE.brand}. All rights reserved.</div>
      </div>
    </footer>
  );
}

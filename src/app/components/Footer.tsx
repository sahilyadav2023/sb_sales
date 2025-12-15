export function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="h3 mb-2">SteelCraft Fabricators</div>
          <p className="text-steel-mid">
            Strong, custom iron & steel works — stairs, gates, railings, cabinets, industrial fabrication.
          </p>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p>Girdhar Marg, Malviya Nagar, Jaipur</p>
          <p>Mon–Sat: 9:00am–7:00pm</p>
          <p>Phone: <a href="tel:+919876543210" className="underline">+91 98765 43210</a></p>
          <p>Email: <a href="mailto:hello@steelcraft.in" className="underline">hello@steelcraft.in</a></p>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul className="space-y-1">
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/projects" className="hover:underline">Projects</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-4 text-sm text-steel-mid">
          © {new Date().getFullYear()} SteelCraft Fabricators. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

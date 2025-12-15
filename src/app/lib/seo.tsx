export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SteelCraft Fabricators",
    "image": "https://example.com/images/hero-stair.jpg",
    "telephone": "+91 98765 43210",
    "email": "hello@steelcraft.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Girdhar Marg, Malviya Nagar",
      "addressLocality": "Jaipur",
      "addressRegion": "RJ",
      "postalCode": "302017",
      "addressCountry": "IN"
    },
    "areaServed": ["Jaipur", "Ajmer", "Tonk", "Sikar"],
    "url": "https://example.com",
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "19:00"
    }],
    "sameAs": [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

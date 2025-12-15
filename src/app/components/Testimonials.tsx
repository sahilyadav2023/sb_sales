const data = [
  { name: "Rahul, Malviya Nagar", text: "Excellent staircase and timeline. Smooth installation and finish!" },
  { name: "Anita, Vaishali Nagar", text: "Loved our new gate design. Prompt site visit and fair pricing." },
  { name: "S. Kumar, Industrial Area", text: "They fabricated platforms & guards exactly to our drawings." },
];

export function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="h2">What Clients Say</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {data.map((t, i) => (
            <blockquote key={i} className="bg-white border rounded-xl2 p-5 shadow-soft">
              <p>“{t.text}”</p>
              <footer className="mt-3 text-sm text-steel-mid">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

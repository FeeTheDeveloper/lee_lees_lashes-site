import SectionHeading from "./SectionHeading";
import Button from "./Button";

const lashSets = [
  {
    name: "Classic Set",
    description:
      "A single lash extension applied to each natural lash for a subtle, naturally enhanced look.",
    duration: "1.5 – 2 hours",
    price: "From $120",
    features: [
      "Natural, everyday elegance",
      "Lightweight & comfortable",
      "Perfect for lash beginners",
    ],
  },
  {
    name: "Hybrid Set",
    description:
      "A blend of classic and volume techniques for added dimension and texture.",
    duration: "2 – 2.5 hours",
    price: "From $160",
    popular: true,
    features: [
      "Best of both worlds",
      "Textured, wispy finish",
      "Our most requested style",
    ],
  },
  {
    name: "Volume Set",
    description:
      "Handmade fans of ultra-fine lashes for a full, dramatic, luxurious look.",
    duration: "2.5 – 3 hours",
    price: "From $200",
    features: [
      "Full, fluffy volume",
      "Glamorous finish",
      "Lightweight mega fans",
    ],
  },
];

export default function SignatureSets() {
  return (
    <section id="services" className="py-20 md:py-28 bg-blush/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Signature Sets"
          subtitle="Handcrafted lash styles designed to enhance your natural beauty, from subtle to stunning."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lashSets.map((set, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl p-8 shadow-card hover:shadow-soft transition-shadow duration-300 ${
                set.popular ? "ring-2 ring-rose/30" : ""
              }`}
            >
              {set.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-rose text-white text-xs font-sans font-medium px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h3 className="font-serif text-2xl text-brown mb-2">
                {set.name}
              </h3>
              <p className="text-charcoal/60 text-sm font-sans mb-4 leading-relaxed">
                {set.description}
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-serif text-3xl text-brown">
                  {set.price}
                </span>
              </div>

              <div className="text-sm text-charcoal/50 font-sans mb-6 flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-gold"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {set.duration}
              </div>

              <ul className="space-y-3 mb-8">
                {set.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-charcoal/70 font-sans"
                  >
                    <svg
                      className="w-4 h-4 text-rose flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href="#contact"
                variant={set.popular ? "primary" : "secondary"}
                className="w-full"
              >
                Book This Set
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    name: "Jasmine R.",
    text: "Lee Lee is an absolute artist! My lashes look so natural yet glamorous. I've never received so many compliments. Wouldn't go anywhere else!",
    rating: 5,
    service: "Volume Set",
  },
  {
    name: "Mia T.",
    text: "The attention to detail is incredible. She took the time to understand exactly what I wanted and delivered beyond my expectations. A true professional.",
    rating: 5,
    service: "Hybrid Set",
  },
  {
    name: "Alexis W.",
    text: "I've been going to Lee Lee for over a year now, and my lashes have never looked better. She's gentle, thorough, and incredibly talented.",
    rating: 5,
    service: "Classic Set",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-gold" : "text-blush"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Real experiences from real clients who trust Lee Lee's Lashes for their beauty needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-8 shadow-card"
            >
              {/* Rose accent line */}
              <div className="absolute top-0 left-8 right-8 h-0.5 bg-rose/30 rounded-full" />

              <div className="pt-4">
                <StarRating rating={testimonial.rating} />

                <blockquote className="mt-5 text-charcoal/70 text-sm leading-relaxed font-sans italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-serif text-brown font-medium">
                      {testimonial.name}
                    </p>
                    <p className="text-charcoal/50 text-xs font-sans mt-0.5">
                      {testimonial.service}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blush flex items-center justify-center">
                    <span className="text-brown font-serif text-sm font-medium">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

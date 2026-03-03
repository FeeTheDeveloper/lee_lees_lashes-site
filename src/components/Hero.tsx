import Button from "./Button";

export default function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center pt-20"
      style={{
        background: "linear-gradient(180deg, #F7F1EE 0%, #E8CFC8 100%)",
      }}
    >
      {/* Subtle decorative element */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-white/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Small gold accent line */}
        <div className="w-10 h-0.5 bg-gold mx-auto mb-8" role="presentation" />

        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brown mb-6 leading-tight text-balance">
          Elevate Your
          <br />
          Natural Beauty
        </h1>

        {/* Rose accent underline */}
        <div className="w-24 h-0.5 bg-rose mx-auto mb-8" role="presentation" />

        <p className="text-charcoal/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
          Premium lash extensions tailored to enhance your unique features.
          Experience the artistry and luxury you deserve.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#contact" size="lg">
            Book Your Appointment
          </Button>
          <Button href="#services" variant="secondary" size="lg">
            Explore Services
          </Button>
        </div>

        {/* Small trust indicator */}
        <div className="mt-14 flex items-center justify-center gap-6 text-brown/50 text-sm font-sans">
          <span className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4 text-gold"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            5-Star Rated
          </span>
          <span className="w-px h-4 bg-brown/20" />
          <span>Certified Lash Artist</span>
          <span className="w-px h-4 bg-brown/20 hidden sm:block" />
          <span className="hidden sm:inline">Premium Products</span>
        </div>
      </div>
    </section>
  );
}

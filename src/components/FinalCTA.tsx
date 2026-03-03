import Image from "next/image";
import Button from "./Button";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-20 md:py-28 bg-blush/50 overflow-hidden">
      {/* Background detail image */}
      <Image
        src="/gallery/closeup-lash-detail.png"
        alt=""
        fill
        className="object-cover opacity-10"
        sizes="100vw"
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Small gold accent */}
        <div className="w-10 h-0.5 bg-gold mx-auto mb-8" role="presentation" />

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brown mb-6 text-balance">
          Ready for Your
          <br />
          Lash Transformation?
        </h2>

        <div className="w-20 h-0.5 bg-rose mx-auto mb-6" role="presentation" />

        <p className="text-charcoal/70 text-lg font-sans mb-10 max-w-xl mx-auto leading-relaxed">
          Book your appointment today and experience the luxury of perfectly
          crafted lash extensions designed just for you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="#" size="lg">
            Book Your Appointment
          </Button>
          <Button href="#" variant="secondary" size="lg">
            Contact Us
          </Button>
        </div>

        <p className="mt-8 text-charcoal/40 text-sm font-sans">
          New clients welcome · Flexible scheduling · Satisfaction guaranteed
        </p>
      </div>
    </section>
  );
}

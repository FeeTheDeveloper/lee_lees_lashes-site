import Hero from "@/components/Hero";
import Authority from "@/components/Authority";
import SignatureSets from "@/components/SignatureSets";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import SplashIntro from "@/components/SplashIntro";

export default function Home() {
  return (
    <>
      <SplashIntro />
      <Hero />
      <Authority />
      <SignatureSets />
      <Testimonials />
      <FinalCTA />
    </>
  );
}

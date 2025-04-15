import { CtaSection } from "@/app/(main)/_components/cta-section";
import { FeaturesSection } from "@/app/(main)/_components/features-section";
import { HeroSection } from "@/app/(main)/_components/hero-section";
import { HowItWorks } from "@/app/(main)/_components/how-it-works";
import { Pricing } from "@/app/(main)/_components/pricing";
import { Testimonials } from "@/app/(main)/_components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CtaSection />
    </>
  );
}

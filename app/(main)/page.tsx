import { FeaturesSection } from "@/app/(main)/_components/features-section";
import { HeroSection } from "@/app/(main)/_components/hero-section";
import { HowItWorks } from "@/app/(main)/_components/how-it-works";
import { Testimonials } from "@/app/(main)/_components/testimonials";
import { Pricing } from "@/app/(main)/_components/pricing";
import { CtaSection } from "@/app/(main)/_components/cta-section";

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

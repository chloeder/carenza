import { CtaSection } from "@/app/(home)/_components/cta-section";
import { FeaturesSection } from "@/app/(home)/_components/features-section";
import { HeroSection } from "@/app/(home)/_components/hero-section";
import { HowItWorks } from "@/app/(home)/_components/how-it-works";
import { Pricing } from "@/app/(home)/_components/pricing";
import { Testimonials } from "@/app/(home)/_components/testimonials";

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

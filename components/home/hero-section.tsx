import { CLERK_SIGN_IN_URL } from "@/constants";
import Link from "next/link";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { Spotlight } from "../ui/spotlight-new";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <Spotlight />
      <div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-[70%] mb-12 lg:mb-0 mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-[5rem] font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 text-center">
            Elevate Your Career With AI-Powered Coaching
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 text-center">
            Personalized career guidance, resume optimization, and interview
            preparation powered by advanced AI to help you land your dream job.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
              <Link href={`${CLERK_SIGN_IN_URL}`}>Get Started Free</Link>
            </HoverBorderGradient>
          </div>
        </div>
      </div>
    </section>
  );
}

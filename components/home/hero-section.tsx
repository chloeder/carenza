import Link from "next/link";
import { Button } from "../ui/button";
import { Spotlight } from "../ui/spotlight-new";
import { CLERK_SIGN_IN_URL } from "@/constants";

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
            <Link href={`${CLERK_SIGN_IN_URL}`}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
              >
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

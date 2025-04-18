import { Spotlight } from "@/components/ui/spotlight";
import OnboardingFlow from "../_components/onboarding-flow";
import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

export default async function Onboarding() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (isOnboarded) {
    redirect("/dashboard");
  }
  return (
    <main className="min-h-screen text-white relative">
      <Spotlight
        className="-top-40 left-0 md:-top-[50rem] md:-left-[30rem] opacity-100"
        fill="#740b80"
      />
      <OnboardingFlow />
    </main>
  );
}

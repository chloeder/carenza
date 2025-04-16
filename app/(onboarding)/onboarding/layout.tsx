import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";
export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // check if user has onboarded
  const { isOnboarded } = await getUserOnboardingStatus();
  if (isOnboarded) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}

import { getUserOnboardingStatus } from "@/actions/user";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { isOnboarded } = await getUserOnboardingStatus();

  if (!isOnboarded) redirect("/onboarding");
  return <div>Dashboard</div>;
}

import { checkUser } from "@/lib/checkUser";
import { redirect } from "next/navigation";

export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await checkUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}

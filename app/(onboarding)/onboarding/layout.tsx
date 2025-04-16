export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // check if user has onboarded

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-y-auto">{children}</div>
    </div>
  );
}

import { checkUser } from "@/lib/checkUser";

export default async function AuthHandler({
  children,
}: {
  children: React.ReactNode;
}) {
  await checkUser();

  return children;
}

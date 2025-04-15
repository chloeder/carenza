import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";

export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {" "}
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // The root layout (app/layout.tsx) already provides html, body, and providers
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}

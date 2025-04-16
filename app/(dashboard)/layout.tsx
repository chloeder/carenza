"use client";

import type React from "react";
import { Suspense, useState } from "react";
import { MobileMenu } from "./_components/mobile-menu";
import { Sidebar } from "./_components/sidebar";
import { TopNavigation } from "./_components/top-navigation";
import { comingSoonNavItems } from "@/data/dashboard";
import { mainNavItems } from "@/data/dashboard";
import { BarLoader } from "react-spinners";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200">
      <TopNavigation onMobileMenuToggle={handleMobileMenuToggle} />

      <div className="flex">
        <Sidebar
          mainNavItems={mainNavItems}
          comingSoonNavItems={comingSoonNavItems}
        />

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={handleMobileMenuClose}
          mainNavItems={mainNavItems}
          comingSoonNavItems={comingSoonNavItems}
        />

        {/* Main Content */}
        <Suspense
          fallback={<BarLoader className="mt-4" width={"100%"} color="gray" />}
        >
          <main className="flex-1">{children}</main>
        </Suspense>
      </div>
    </div>
  );
}

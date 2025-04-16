import { Button } from "@/components/ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Bell, Layers, Menu } from "lucide-react";
import React from "react";

interface TopNavigationProps {
  onMobileMenuToggle: () => void;
}

export const TopNavigation: React.FC<TopNavigationProps> = ({
  onMobileMenuToggle,
}) => {
  return (
    <header className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="px-4 mx-auto h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-gradient-to-br from-zinc-400 to-zinc-600 p-1">
            <Layers className="h-6 w-6 text-zinc-950" />
          </div>
          <div className="font-semibold text-zinc-100 hidden sm:block">
            <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              AI Career Coach
            </span>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-400 hover:text-zinc-200"
          >
            <Bell className="h-5 w-5" />
          </Button>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-400 hover:text-zinc-200 md:hidden"
            onClick={onMobileMenuToggle}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

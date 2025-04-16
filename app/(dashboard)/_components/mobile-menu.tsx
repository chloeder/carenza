import React from "react";
import Link from "next/link"; // Needed for NavItem
import { Layers, User2 } from "lucide-react";
import { useUser } from "@clerk/nextjs";
// Define the structure for a navigation item again, as it's needed by NavItem
interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  badge?: string;
  isActive?: boolean;
}

// Internal NavItem component copied from Sidebar for use here
function NavItem({ href, icon, label, badge, isActive }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
        isActive
          ? "bg-zinc-800 text-zinc-200"
          : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
      }`}
    >
      {icon}
      <span>{label}</span>
      {badge && (
        <span className="ml-auto rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">
          {badge}
        </span>
      )}
    </Link>
  );
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  mainNavItems: NavItemProps[];
  comingSoonNavItems: NavItemProps[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  mainNavItems,
  comingSoonNavItems,
}) => {
  const { user } = useUser();
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-40 md:hidden"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Menu Content */}
      <div className="fixed inset-y-0 left-0 w-64 bg-zinc-900 border-r border-zinc-800 overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="rounded-md bg-gradient-to-br from-zinc-400 to-zinc-600 p-1">
              <Layers className="h-6 w-6 text-zinc-950" />
            </div>
            <div className="font-semibold text-zinc-100">
              <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                AI Career Coach
              </span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 flex-grow" onClick={onClose}>
          {" "}
          {/* Close menu on nav item click */}
          <div className="space-y-1">
            {mainNavItems.map((item, index) => (
              <NavItem key={`mobile-main-${index}`} {...item} />
            ))}
          </div>
          <div className="mt-8">
            <h3 className="text-xs uppercase text-zinc-500 font-medium mb-2 px-3">
              Coming Soon
            </h3>
            <div className="space-y-1">
              {comingSoonNavItems.map((item, index) => (
                <NavItem key={`mobile-soon-${index}`} {...item} />
              ))}
            </div>
          </div>
        </nav>

        {/* Footer/User Info */}
        <div className="p-4 border-t border-zinc-800 mt-auto">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-zinc-400 to-zinc-600 flex items-center justify-center">
              <User2 className="h-5 w-5 text-zinc-950" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-200">
                {user?.fullName}
              </p>
              <p className="text-xs text-zinc-500">
                {user?.primaryEmailAddress?.emailAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

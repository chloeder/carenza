import React from "react";
import Link from "next/link";
import { User2 } from "lucide-react";
import { useUser } from "@clerk/nextjs";
// Define the structure for a navigation item
export interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  badge?: string;
  isActive?: boolean;
}

interface SidebarProps {
  mainNavItems: NavItemProps[];
  comingSoonNavItems: NavItemProps[];
}

// Internal NavItem component (could be moved to a shared location if used elsewhere)
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

export const Sidebar: React.FC<SidebarProps> = ({
  mainNavItems,
  comingSoonNavItems,
}) => {
  const { user } = useUser();
  return (
    <aside className="hidden md:block w-64 border-r border-zinc-800 h-[calc(100vh-4rem)] sticky top-16 bg-zinc-900/30">
      <nav className="p-4 flex flex-col h-full">
        <div className="space-y-1">
          {mainNavItems.map((item, index) => (
            <NavItem key={`main-${index}`} {...item} />
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-xs uppercase text-zinc-500 font-medium mb-2 px-3">
            Coming Soon
          </h3>
          <div className="space-y-1">
            {comingSoonNavItems.map((item, index) => (
              <NavItem key={`soon-${index}`} {...item} />
            ))}
          </div>
        </div>

        {/* User Info at the bottom */}
        <div className="mt-auto border-t border-zinc-800 pt-4">
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
      </nav>
    </aside>
  );
};

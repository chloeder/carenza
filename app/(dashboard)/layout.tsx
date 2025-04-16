"use client";

import { Button } from "@/components/ui/button";
import {
  BarChart3,
  Bell,
  FileText,
  Home,
  Layers,
  Menu,
  MessageSquare,
  PenTool,
  Route,
  Search,
  Settings,
  User2,
} from "lucide-react";
import Link from "next/link";
import type React from "react";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Top Navigation */}
      <header className="border-b border-zinc-800 bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-4 mx-auto  h-16 flex items-center justify-between">
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
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-zinc-200 md:hidden"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-zinc-200"
            >
              <Settings className="h-5 w-5" />
            </Button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-zinc-400 to-zinc-600 flex items-center justify-center">
              <User2 className="h-4 w-4 text-zinc-950" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-zinc-400 hover:text-zinc-200 md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar - Desktop */}
        <aside className="hidden md:block w-64 border-r border-zinc-800 h-[calc(100vh-4rem)] sticky top-16 bg-zinc-900/30">
          <nav className="p-4">
            <div className="space-y-1">
              <NavItem
                href="/"
                icon={<Home className="h-4 w-4" />}
                label="Dashboard"
                isActive
              />
              <NavItem
                href="#"
                icon={<BarChart3 className="h-4 w-4" />}
                label="Career Analytics"
              />
              <NavItem
                href="#"
                icon={<PenTool className="h-4 w-4" />}
                label="Cover Letter Builder"
              />
              <NavItem
                href="#"
                icon={<FileText className="h-4 w-4" />}
                label="Resume Feedback"
              />
            </div>

            <div className="mt-8">
              <h3 className="text-xs uppercase text-zinc-500 font-medium mb-2 px-3">
                Coming Soon
              </h3>
              <div className="space-y-1">
                <NavItem
                  href="#"
                  icon={<MessageSquare className="h-4 w-4" />}
                  label="Interview Coaching"
                  badge="Soon"
                />
                <NavItem
                  href="#"
                  icon={<FileText className="h-4 w-4" />}
                  label="Resume Builder"
                  badge="Soon"
                />
                <NavItem
                  href="#"
                  icon={<User2 className="h-4 w-4" />}
                  label="Career Suggestion"
                  badge="Soon"
                />
                <NavItem
                  href="#"
                  icon={<Route className="h-4 w-4" />}
                  label="Career Roadmap"
                  badge="Soon"
                />
              </div>
            </div>
          </nav>

          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-zinc-400 to-zinc-600 flex items-center justify-center">
                <User2 className="h-5 w-5 text-zinc-950" />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-200">John Doe</p>
                <p className="text-xs text-zinc-500">john.doe@example.com</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            ></div>
            <div className="fixed inset-y-0 left-0 w-64 bg-zinc-900 border-r border-zinc-800 overflow-y-auto">
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

              <nav className="p-4">
                <div className="space-y-1">
                  <NavItem
                    href="/"
                    icon={<Home className="h-4 w-4" />}
                    label="Dashboard"
                    isActive
                  />
                  <NavItem
                    href="#"
                    icon={<BarChart3 className="h-4 w-4" />}
                    label="Career Analytics"
                  />
                  <NavItem
                    href="#"
                    icon={<PenTool className="h-4 w-4" />}
                    label="Cover Letter Builder"
                  />
                  <NavItem
                    href="#"
                    icon={<FileText className="h-4 w-4" />}
                    label="Resume Feedback"
                  />
                </div>

                <div className="mt-8">
                  <h3 className="text-xs uppercase text-zinc-500 font-medium mb-2 px-3">
                    Coming Soon
                  </h3>
                  <div className="space-y-1">
                    <NavItem
                      href="#"
                      icon={<MessageSquare className="h-4 w-4" />}
                      label="Interview Coaching"
                      badge="Soon"
                    />
                    <NavItem
                      href="#"
                      icon={<FileText className="h-4 w-4" />}
                      label="Resume Builder"
                      badge="Soon"
                    />
                    <NavItem
                      href="#"
                      icon={<User2 className="h-4 w-4" />}
                      label="Career Suggestion"
                      badge="Soon"
                    />
                    <NavItem
                      href="#"
                      icon={<Route className="h-4 w-4" />}
                      label="Career Roadmap"
                      badge="Soon"
                    />
                  </div>
                </div>
              </nav>

              <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-zinc-400 to-zinc-600 flex items-center justify-center">
                    <User2 className="h-5 w-5 text-zinc-950" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-200">
                      John Doe
                    </p>
                    <p className="text-xs text-zinc-500">
                      john.doe@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

function NavItem({
  href,
  icon,
  label,
  badge,
  isActive,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  badge?: string;
  isActive?: boolean;
}) {
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

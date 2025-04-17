"use client";

import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  FileText,
  Home,
  KanbanSquare,
  MessageSquare,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const pathname = usePathname();

  const routes = [
    {
      title: "Main",
      items: [
        {
          title: "Dashboard",
          icon: Home,
          href: "/",
        },
      ],
    },
    {
      title: "Career Tools",
      items: [
        {
          title: "Resume Reviewer",
          icon: FileText,
          href: "/resume-reviewer",
        },
        {
          title: "Job Fit Recommender",
          icon: BriefcaseBusiness,
          href: "/job-recommender",
        },
        {
          title: "Interview Simulator",
          icon: MessageSquare,
          href: "/interview-simulator",
        },
        {
          title: "Career Roadmap",
          icon: BookOpen,
          href: "/career-roadmap",
        },
        // {
        //   title: "Job Tracker",
        //   icon: KanbanSquare,
        //   href: "/job-tracker",
        // },
      ],
    },
    {
      title: "Account",
      items: [
        {
          title: "Profile",
          icon: User,
          href: "/profile",
        },
      ],
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center py-4">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">CareerMate AI</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {routes.map((route) => (
          <SidebarGroup key={route.title}>
            <SidebarGroupLabel>{route.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {route.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.href}
                      tooltip={item.title}
                    >
                      <Link href={item.href}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-2 rounded-lg bg-muted p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-medium text-primary-foreground">
              JD
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">John Doe</span>
            <span className="text-xs text-muted-foreground">
              john.doe@example.com
            </span>
          </div>
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

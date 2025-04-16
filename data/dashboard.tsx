import {
  Home,
  BarChart3,
  PenTool,
  FileText,
  MessageSquare,
  User2,
  Route,
} from "lucide-react";

// --- Data Definitions ---
export const mainNavItems = [
  {
    href: "/", // Assuming root is dashboard
    icon: <Home className="h-4 w-4" />,
    label: "Dashboard",
    isActive: true, // This might need to be dynamic based on route
  },
  {
    href: "#",
    icon: <BarChart3 className="h-4 w-4" />,
    label: "Career Analytics",
  },
  {
    href: "#",
    icon: <PenTool className="h-4 w-4" />,
    label: "Cover Letter Builder",
  },
  {
    href: "#",
    icon: <FileText className="h-4 w-4" />,
    label: "Resume Feedback",
  },
];

export const comingSoonNavItems = [
  {
    href: "#",
    icon: <MessageSquare className="h-4 w-4" />,
    label: "Interview Coaching",
    badge: "Soon",
  },
  {
    href: "#",
    icon: <FileText className="h-4 w-4" />,
    label: "Resume Builder",
    badge: "Soon",
  },
  {
    href: "#",
    icon: <User2 className="h-4 w-4" />,
    label: "Career Suggestion",
    badge: "Soon",
  },
  {
    href: "#",
    icon: <Route className="h-4 w-4" />,
    label: "Career Roadmap",
    badge: "Soon",
  },
];

import {
  BarChart3,
  FileText,
  MessageSquare,
  PenTool,
  Route,
  User2,
} from "lucide-react";
import { CareerToolsSection } from "../_components/career-tools-section";
import { ComingSoonSection } from "../_components/coming-soon-section";

const careerToolsData = [
  {
    title: "Career Analytics",
    icon: <BarChart3 className="h-5 w-5 text-zinc-400" />,
    description:
      "Get insights into industry trends and career opportunities based on your profile.",
    previewIcon: <BarChart3 />,
    previewText: "Analytics Preview",
    buttonText: "Explore Insights",
  },
  {
    title: "Cover Letter Builder",
    icon: <PenTool className="h-5 w-5 text-zinc-400" />,
    description:
      "Create personalized cover letters tailored to specific job applications.",
    previewIcon: <PenTool />,
    previewText: "Document Preview",
    buttonText: "Create Letter",
  },
  {
    title: "Resume Feedback",
    icon: <FileText className="h-5 w-5 text-zinc-400" />,
    description:
      "Get AI-powered feedback and suggestions to improve your resume.",
    previewIcon: <FileText />,
    previewText: "Resume Preview",
    buttonText: "Upload Resume",
  },
];

const comingSoonData = [
  {
    title: "Interview Coaching",
    icon: <MessageSquare className="h-5 w-5 text-zinc-400" />,
    description:
      "Practice interviews with AI and get feedback to improve your performance.",
  },
  {
    title: "Resume Builder",
    icon: <FileText className="h-5 w-5 text-zinc-400" />,
    description:
      "Create professional resumes with AI assistance tailored to your industry.",
  },
  {
    title: "Career Suggestion",
    icon: <User2 className="h-5 w-5 text-zinc-400" />,
    description:
      "Get personalized career path suggestions based on your skills and interests.",
  },
  {
    title: "Career Roadmap",
    icon: <Route className="h-5 w-5 text-zinc-400" />,
    description:
      "Explore detailed roadmaps and curated learning resources for your chosen career path.",
  },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent mb-2">
          Welcome to AI Career Coach
        </h1>
        <p className="text-zinc-400 mb-6">
          Your AI-powered platform for career development and growth
        </p>
      </div>
      <CareerToolsSection tools={careerToolsData} />
      <ComingSoonSection features={comingSoonData} />
    </div>
  );
}

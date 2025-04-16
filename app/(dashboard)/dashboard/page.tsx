import type React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart3,
  FileText,
  MessageSquare,
  PenTool,
  Route,
  User2,
  TrendingUp,
  Users,
  Briefcase,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
  return (
    <div className="p-6">
      {/* Header with Stats */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent mb-2">
          Welcome back, John
        </h1>
        <p className="text-zinc-400 mb-6">
          Here&apos;s what&apos;s happening with your career journey
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            icon={<TrendingUp className="h-5 w-5 text-emerald-500" />}
            title="Profile Views"
            value="124"
            change="+22%"
            trend="up"
          />
          <StatCard
            icon={<Users className="h-5 w-5 text-blue-500" />}
            title="Network Size"
            value="56"
            change="+5"
            trend="up"
          />
          <StatCard
            icon={<Briefcase className="h-5 w-5 text-amber-500" />}
            title="Job Matches"
            value="18"
            change="New"
          />
          <StatCard
            icon={<Award className="h-5 w-5 text-purple-500" />}
            title="Skills Verified"
            value="12/24"
            change="50%"
          />
        </div>
      </div>

      {/* Main Features */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-zinc-200 mb-4">
          Career Tools
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Analytics Card */}
          <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-zinc-700/20 to-zinc-600/10 rounded-bl-full"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-zinc-200">Career Analytics</CardTitle>
              <div className="p-1.5 rounded-full bg-zinc-800">
                <BarChart3 className="h-5 w-5 text-zinc-400" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-zinc-400 mb-4">
                Get insights into industry trends and career opportunities based
                on your profile.
              </CardDescription>
              <div className="h-32 bg-zinc-800/50 rounded-md flex items-center justify-center mb-4">
                <div className="text-center text-zinc-500">
                  <BarChart3 className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Analytics Preview</p>
                </div>
              </div>
              <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200">
                Explore Insights
              </Button>
            </CardContent>
          </Card>

          {/* Cover Letter Builder Card */}
          <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-zinc-700/20 to-zinc-600/10 rounded-bl-full"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-zinc-200">
                Cover Letter Builder
              </CardTitle>
              <div className="p-1.5 rounded-full bg-zinc-800">
                <PenTool className="h-5 w-5 text-zinc-400" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-zinc-400 mb-4">
                Create personalized cover letters tailored to specific job
                applications.
              </CardDescription>
              <div className="h-32 bg-zinc-800/50 rounded-md flex items-center justify-center mb-4">
                <div className="text-center text-zinc-500">
                  <PenTool className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Document Preview</p>
                </div>
              </div>
              <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200">
                Create Letter
              </Button>
            </CardContent>
          </Card>

          {/* Resume Feedback Card */}
          <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-zinc-700/20 to-zinc-600/10 rounded-bl-full"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-zinc-200">Resume Feedback</CardTitle>
              <div className="p-1.5 rounded-full bg-zinc-800">
                <FileText className="h-5 w-5 text-zinc-400" />
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-zinc-400 mb-4">
                Get AI-powered feedback and suggestions to improve your resume.
              </CardDescription>
              <div className="h-32 bg-zinc-800/50 rounded-md flex items-center justify-center mb-4">
                <div className="text-center text-zinc-500">
                  <FileText className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Resume Preview</p>
                </div>
              </div>
              <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200">
                Upload Resume
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Coming Soon Features */}
      <div>
        <h2 className="text-xl font-semibold text-zinc-200 mb-4">
          Coming Soon
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <ComingSoonCard
            title="Interview Coaching"
            icon={<MessageSquare className="h-5 w-5 text-zinc-400" />}
            description="Practice interviews with AI and get feedback to improve your performance."
          />
          <ComingSoonCard
            title="Resume Builder"
            icon={<FileText className="h-5 w-5 text-zinc-400" />}
            description="Create professional resumes with AI assistance tailored to your industry."
          />
          <ComingSoonCard
            title="Career Suggestion"
            icon={<User2 className="h-5 w-5 text-zinc-400" />}
            description="Get personalized career path suggestions based on your skills and interests."
          />
          <ComingSoonCard
            title="Career Roadmap"
            icon={<Route className="h-5 w-5 text-zinc-400" />}
            description="Explore detailed roadmaps and curated learning resources for your chosen career path."
          />
        </div>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  title,
  value,
  change,
  trend,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  change: string;
  trend?: "up" | "down";
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <div className="p-2 rounded-md bg-zinc-800/80">{icon}</div>
        {trend && (
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              trend === "up"
                ? "bg-emerald-900/30 text-emerald-400"
                : "bg-red-900/30 text-red-400"
            }`}
          >
            {change}
          </span>
        )}
        {!trend && (
          <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-400">
            {change}
          </span>
        )}
      </div>
      <p className="text-sm text-zinc-400">{title}</p>
      <p className="text-2xl font-bold text-zinc-200">{value}</p>
    </div>
  );
}

function ComingSoonCard({
  title,
  icon,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  description: string;
}) {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors relative overflow-hidden">
      <div className="absolute inset-0 bg-zinc-900/80 backdrop-blur-sm flex items-center justify-center z-10">
        <span className="bg-zinc-800 text-zinc-300 px-3 py-1 rounded-full text-sm font-medium">
          Coming Soon
        </span>
      </div>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-zinc-200 text-base">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-zinc-400 text-sm">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

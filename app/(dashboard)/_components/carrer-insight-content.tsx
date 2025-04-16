"use client";

import type React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import {
  BarChart3,
  Briefcase,
  Calendar,
  Download,
  FileText,
  Filter,
  LineChart,
  PieChart,
  RefreshCw,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";

export function CareerInsightsContent() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="p-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Career Insights
          </h1>
          <p className="text-zinc-400 mt-1">
            Comprehensive insights into your career progress and market position
          </p>
        </div>
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <Button
            variant="outline"
            size="sm"
            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
          >
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
          >
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="border-zinc-700 text-zinc-300 hover:bg-zinc-800"
          >
            <Download className="mr-2 h-4 w-4" /> Export
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs
        defaultValue="overview"
        className="mb-6"
        onValueChange={setActiveTab}
        value={activeTab}
      >
        <TabsList className="bg-zinc-800 border border-zinc-700">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-zinc-700"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="skills"
            className="data-[state=active]:bg-zinc-700"
          >
            Skills Analysis
          </TabsTrigger>
          <TabsTrigger
            value="market"
            className="data-[state=active]:bg-zinc-700"
          >
            Job Market
          </TabsTrigger>
          <TabsTrigger
            value="salary"
            className="data-[state=active]:bg-zinc-700"
          >
            Salary Insights
          </TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="mt-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <MetricCard
              title="Market Value"
              value="$85,000"
              change="+12%"
              trend="up"
              description="Based on your skills & experience"
              icon={<TrendingUp className="h-5 w-5 text-emerald-500" />}
            />
            <MetricCard
              title="Job Applications"
              value="18"
              change="+5"
              trend="up"
              description="This month"
              icon={<Briefcase className="h-5 w-5 text-blue-500" />}
            />
            <MetricCard
              title="Interview Rate"
              value="42%"
              change="+8%"
              trend="up"
              description="From last month"
              icon={<Users className="h-5 w-5 text-purple-500" />}
            />
            <MetricCard
              title="Skills Gap"
              value="3"
              change="-2"
              trend="down"
              description="Critical skills needed"
              icon={<FileText className="h-5 w-5 text-amber-500" />}
            />
          </div>

          {/* Career Growth Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="lg:col-span-2 bg-zinc-900 border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-zinc-200">
                    Career Growth Trajectory
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    Your career progression based on skills, experience, and
                    market demand
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-zinc-400 hover:text-zinc-300"
                  >
                    <LineChart className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-zinc-400 hover:text-zinc-300"
                  >
                    <BarChart3 className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-zinc-800/50 rounded-md flex items-center justify-center">
                  <div className="text-center text-zinc-500">
                    <LineChart className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Career Growth Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-200">
                  Skills Breakdown
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  Distribution of your current skill set
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-zinc-800/50 rounded-md flex items-center justify-center">
                  <div className="text-center text-zinc-500">
                    <PieChart className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Skills Breakdown Chart</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {skillsBreakdownData.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-2">
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: getSkillColor(skill.name) }}
                      ></div>
                      <span className="text-xs text-zinc-400">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Recommendations */}
          <Card className="bg-zinc-900 border-zinc-800 mb-6">
            <CardHeader>
              <CardTitle className="text-zinc-200">
                AI Career Recommendations
              </CardTitle>
              <CardDescription className="text-zinc-400">
                Personalized recommendations based on your profile and market
                trends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <RecommendationItem
                  title="Enhance Cloud Computing Skills"
                  description="AWS certification would increase your market value by approximately 15% based on current industry demand."
                  icon={<TrendingUp className="h-5 w-5 text-emerald-500" />}
                  actionLabel="View Learning Path"
                />
                <RecommendationItem
                  title="Update LinkedIn Profile"
                  description="Adding your recent project experience could attract 30% more recruiter views."
                  icon={<Users className="h-5 w-5 text-blue-500" />}
                  actionLabel="Get Profile Tips"
                />
                <RecommendationItem
                  title="Explore Product Management"
                  description="Your skills align well with Product Management roles, which offer 20% higher average salaries."
                  icon={<Briefcase className="h-5 w-5 text-amber-500" />}
                  actionLabel="Explore Roles"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Skills Analysis Tab */}
        <TabsContent value="skills" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-200">
                  Skill Proficiency
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  Your proficiency level in key skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-zinc-800/50 rounded-md flex items-center justify-center">
                  <div className="text-center text-zinc-500">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Skill Proficiency Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-200">
                  Skill Development
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  Track your progress in developing key skills
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-5">
                  {skillDevelopmentData.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-zinc-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-zinc-400">
                          {skill.progress}%
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Progress
                          value={skill.progress}
                          className="h-2 flex-1 bg-zinc-800"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 text-xs border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                        >
                          Improve
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900 border-zinc-800 mb-6">
            <CardHeader>
              <CardTitle className="text-zinc-200">
                Skill Gap Analysis
              </CardTitle>
              <CardDescription className="text-zinc-400">
                Skills you need to develop for your target roles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillGapData.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-medium text-zinc-200 mb-1">
                          {skill.name}
                        </h3>
                        <p className="text-xs text-zinc-400 mb-3">
                          {skill.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-zinc-500">Demand:</span>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div
                                key={i}
                                className={`h-1.5 w-4 ${
                                  i < skill.demand
                                    ? "bg-emerald-500"
                                    : "bg-zinc-700"
                                } ${i > 0 ? "ml-0.5" : ""}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-7 text-xs border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Job Market Tab */}
        <TabsContent value="market" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="lg:col-span-2 bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-200">
                  Industry Demand Trends
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  Job market demand for your skills over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-zinc-800/50 rounded-md flex items-center justify-center">
                  <div className="text-center text-zinc-500">
                    <LineChart className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Industry Demand Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-200">
                  Job Application Status
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  Current status of your job applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-zinc-800/50 rounded-md flex items-center justify-center">
                  <div className="text-center text-zinc-500">
                    <PieChart className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Application Status Chart</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  {jobApplicationData.map((status) => (
                    <div
                      key={status.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{
                            backgroundColor: getJobStatusColor(status.name),
                          }}
                        ></div>
                        <span className="text-sm text-zinc-300">
                          {status.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-zinc-400">
                        {status.value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900 border-zinc-800 mb-6">
            <CardHeader>
              <CardTitle className="text-zinc-200">
                Matching Job Opportunities
              </CardTitle>
              <CardDescription className="text-zinc-400">
                Jobs that match your skills and experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {jobOpportunities.map((job) => (
                  <div
                    key={job.title}
                    className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-medium text-zinc-200 mb-1">
                          {job.title}
                        </h3>
                        <p className="text-xs text-zinc-400 mb-1">
                          {job.company}
                        </p>
                        <p className="text-xs text-zinc-500 mb-3">
                          {job.location} • {job.type}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs px-2 py-0.5 bg-zinc-800 rounded-full text-zinc-400"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-zinc-200">
                          {job.salary}
                        </p>
                        <p className="text-xs text-zinc-500 mb-3">
                          {job.posted}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 text-xs border-zinc-700 text-zinc-300 hover:bg-zinc-800"
                        >
                          View Job
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Salary Insights Tab */}
        <TabsContent value="salary" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <Card className="lg:col-span-2 bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-200">
                  Salary Comparison
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  Your potential salary compared to industry averages
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 bg-zinc-800/50 rounded-md flex items-center justify-center">
                  <div className="text-center text-zinc-500">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Salary Comparison Chart</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-zinc-200">
                  Salary Growth Projection
                </CardTitle>
                <CardDescription className="text-zinc-400">
                  Projected salary growth over the next 5 years
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-zinc-800/50 rounded-md flex items-center justify-center">
                  <div className="text-center text-zinc-500">
                    <LineChart className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Salary Growth Chart</p>
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">
                      Current Salary
                    </span>
                    <span className="text-sm font-medium text-zinc-300">
                      $85K
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">
                      5-Year Projection
                    </span>
                    <span className="text-sm font-medium text-zinc-300">
                      $145K
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-zinc-400">Growth Rate</span>
                    <span className="text-sm font-medium text-emerald-400">
                      +70.6%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-zinc-900 border-zinc-800 mb-6">
            <CardHeader>
              <CardTitle className="text-zinc-200">Salary Factors</CardTitle>
              <CardDescription className="text-zinc-400">
                Factors influencing your salary potential
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {salaryFactors.map((factor) => (
                  <div
                    key={factor.name}
                    className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-full bg-zinc-800 text-zinc-400">
                        {factor.icon}
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-zinc-200 mb-1">
                          {factor.name}
                        </h3>
                        <p className="text-xs text-zinc-400">
                          {factor.description}
                        </p>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs text-zinc-500">Impact:</span>
                          <div className="flex">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <div
                                key={i}
                                className={`h-1.5 w-4 ${
                                  i < factor.impact
                                    ? "bg-blue-500"
                                    : "bg-zinc-700"
                                } ${i > 0 ? "ml-0.5" : ""}`}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function MetricCard({
  title,
  value,
  change,
  trend,
  description,
  icon,
}: {
  title: string;
  value: string;
  change: string;
  trend?: "up" | "down";
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <Card className="bg-zinc-900 border-zinc-800">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-zinc-400 mb-1">{title}</p>
            <div className="flex items-baseline gap-2">
              <p className="text-2xl font-bold text-zinc-200">{value}</p>
              {trend && (
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    trend === "up"
                      ? "bg-emerald-900/30 text-emerald-400"
                      : "bg-red-900/30 text-red-400"
                  }`}
                >
                  {change}
                </span>
              )}
              {!trend && (
                <span className="text-xs text-zinc-500">{change}</span>
              )}
            </div>
            <p className="text-xs text-zinc-500 mt-1">{description}</p>
          </div>
          <div className="p-2 rounded-md bg-zinc-800">{icon}</div>
        </div>
      </CardContent>
    </Card>
  );
}

function RecommendationItem({
  title,
  description,
  icon,
  actionLabel,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  actionLabel: string;
}) {
  return (
    <div className="p-4 bg-zinc-800/50 rounded-lg border border-zinc-700">
      <div className="flex gap-4">
        <div className="p-2 rounded-full bg-zinc-800 shrink-0">{icon}</div>
        <div>
          <h3 className="text-sm font-medium text-zinc-200 mb-1">{title}</h3>
          <p className="text-xs text-zinc-400 mb-3">{description}</p>
          <Button
            variant="outline"
            size="sm"
            className="h-7 text-xs border-zinc-700 text-zinc-300 hover:bg-zinc-800"
          >
            {actionLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}

// Sample data
const skillsBreakdownData = [
  { name: "Technical", value: 40 },
  { name: "Leadership", value: 15 },
  { name: "Communication", value: 20 },
  { name: "Problem Solving", value: 15 },
  { name: "Domain Knowledge", value: 10 },
];

const skillDevelopmentData = [
  { name: "Cloud Computing", progress: 65 },
  { name: "Machine Learning", progress: 40 },
  { name: "UI/UX Design", progress: 75 },
  { name: "Leadership", progress: 60 },
];

const skillGapData = [
  {
    name: "DevOps",
    description:
      "Knowledge of CI/CD pipelines, containerization, and infrastructure as code",
    demand: 5,
  },
  {
    name: "Data Science",
    description:
      "Statistical analysis, machine learning, and data visualization",
    demand: 4,
  },
  {
    name: "Cloud Architecture",
    description: "Designing and implementing cloud-based solutions",
    demand: 5,
  },
];

const jobApplicationData = [
  { name: "Applied", value: 12 },
  { name: "Interview", value: 5 },
  { name: "Offer", value: 1 },
  { name: "Rejected", value: 6 },
];

const jobOpportunities = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "Remote",
    type: "Full-time",
    salary: "$120K - $150K",
    posted: "Posted 2 days ago",
    skills: ["React", "TypeScript", "UI/UX", "GraphQL"],
  },
  {
    title: "Full Stack Engineer",
    company: "InnovateTech",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130K - $160K",
    posted: "Posted 5 days ago",
    skills: ["Node.js", "React", "MongoDB", "AWS"],
  },
  {
    title: "Product Manager",
    company: "GrowthStartup",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110K - $140K",
    posted: "Posted 1 week ago",
    skills: ["Product Strategy", "Agile", "User Research", "Analytics"],
  },
];

const salaryFactors = [
  {
    name: "Experience Level",
    description:
      "Your 6+ years of experience positions you in the senior range for your role",
    impact: 4,
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    name: "Technical Skills",
    description:
      "Your specialized skills in React and TypeScript are in high demand",
    impact: 5,
    icon: <FileText className="h-4 w-4" />,
  },
  {
    name: "Location",
    description: "Remote work flexibility affects your compensation range",
    impact: 3,
    icon: <Briefcase className="h-4 w-4" />,
  },
  {
    name: "Industry",
    description:
      "The tech industry offers higher compensation than other sectors",
    impact: 4,
    icon: <BarChart3 className="h-4 w-4" />,
  },
];

// Helper functions
function getSkillColor(skillName: string) {
  const colorMap: Record<string, string> = {
    Technical: "#a1a1aa",
    Leadership: "#d4d4d8",
    Communication: "#71717a",
    "Problem Solving": "#52525b",
    "Domain Knowledge": "#3f3f46",
  };
  return colorMap[skillName] || "#a1a1aa";
}

function getJobStatusColor(statusName: string) {
  const colorMap: Record<string, string> = {
    Applied: "#a1a1aa",
    Interview: "#d4d4d8",
    Offer: "#71717a",
    Rejected: "#52525b",
  };
  return colorMap[statusName] || "#a1a1aa";
}

function getProgressColor(progress: string) {
  if (progress < "40") return "bg-red-600";
  if (progress < "70") return "bg-amber-600";
  return "bg-emerald-600";
}

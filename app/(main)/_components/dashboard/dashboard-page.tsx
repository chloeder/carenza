"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BookOpen,
  BriefcaseBusiness,
  FileText,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Bar, BarChart } from "recharts";

const data = [
  { date: "Jan", applications: 5, interviews: 2 },
  { date: "Feb", applications: 8, interviews: 3 },
  { date: "Mar", applications: 12, interviews: 5 },
  { date: "Apr", applications: 15, interviews: 7 },
  { date: "May", applications: 18, interviews: 9 },
  { date: "Jun", applications: 20, interviews: 10 },
];

export function DashboardPage() {
  return (
    <div className="flex flex-col p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, John!
          </h1>
          <p className="text-muted-foreground">
            Here&apos;s an overview of your career journey
          </p>
        </div>
        <Button>
          <TrendingUp className="mr-2 h-4 w-4" />
          View Analytics
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Applications
            </CardTitle>
            <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Resumes Reviewed
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">+4 since last week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Interviews Simulated
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+3 since last week</p>
          </CardContent>
        </Card>
      </div>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Career Progress</CardTitle>
          <CardDescription>
            Your application and interview activity over time
          </CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ChartContainer config={{}}>
            <BarChart data={data}>
              <Bar dataKey="value" />
              <ChartTooltip content={<ChartTooltipContent />} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Resume Reviewer
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Get AI feedback on your resume
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/resume-reviewer">Review Resume</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Job Recommender
            </CardTitle>
            <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Find jobs that match your skills
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/job-recommender">Find Jobs</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Interview Simulator
            </CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Practice with AI interviewer
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/interview-simulator">Start Practice</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Career Roadmap
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-muted-foreground">
              Track your skills development
            </p>
            <Button asChild variant="outline" className="w-full">
              <Link href="/career-roadmap">View Roadmap</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

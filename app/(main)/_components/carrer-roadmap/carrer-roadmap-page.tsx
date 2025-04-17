"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  GraduationCap,
  Plus,
} from "lucide-react";

const roadmapItems = [
  {
    id: 1,
    title: "HTML & CSS Fundamentals",
    type: "Skill",
    progress: 100,
    status: "completed",
    resources: [
      { title: "MDN Web Docs", url: "#" },
      { title: "CSS Tricks", url: "#" },
    ],
  },
  {
    id: 2,
    title: "JavaScript Basics",
    type: "Skill",
    progress: 100,
    status: "completed",
    resources: [
      { title: "JavaScript.info", url: "#" },
      { title: "Eloquent JavaScript", url: "#" },
    ],
  },
  {
    id: 3,
    title: "React Fundamentals",
    type: "Skill",
    progress: 85,
    status: "in-progress",
    resources: [
      { title: "React Documentation", url: "#" },
      { title: "React for Beginners", url: "#" },
    ],
  },
  {
    id: 4,
    title: "TypeScript Essentials",
    type: "Skill",
    progress: 60,
    status: "in-progress",
    resources: [
      { title: "TypeScript Handbook", url: "#" },
      { title: "TypeScript Deep Dive", url: "#" },
    ],
  },
  {
    id: 5,
    title: "State Management",
    type: "Skill",
    progress: 40,
    status: "in-progress",
    resources: [
      { title: "Redux Documentation", url: "#" },
      { title: "Zustand GitHub", url: "#" },
    ],
  },
  {
    id: 6,
    title: "Testing with Jest & RTL",
    type: "Skill",
    progress: 20,
    status: "in-progress",
    resources: [
      { title: "Jest Documentation", url: "#" },
      { title: "Testing Library Docs", url: "#" },
    ],
  },
  {
    id: 7,
    title: "Advanced React Patterns",
    type: "Skill",
    progress: 0,
    status: "not-started",
    resources: [
      { title: "Advanced React Patterns", url: "#" },
      { title: "React Design Patterns", url: "#" },
    ],
  },
  {
    id: 8,
    title: "React Performance Optimization",
    type: "Skill",
    progress: 0,
    status: "not-started",
    resources: [
      { title: "React Performance", url: "#" },
      { title: "Web Performance", url: "#" },
    ],
  },
];

export function CareerRoadmapPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Career Roadmap</h1>
          <p className="text-muted-foreground">
            Track your progress and build your skills for a successful career
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Skill
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Overall Progress</CardTitle>
            <CardDescription>Your career development journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">
                  Frontend Development
                </span>
                <span className="text-sm text-muted-foreground">65%</span>
              </div>
              <Progress value={65} className="h-2" />
            </div>
            <div className="flex justify-between text-sm">
              <div className="flex items-center">
                <Badge variant="outline" className="mr-1 bg-green-50">
                  <CheckCircle2 className="h-3 w-3 mr-1 text-green-500" />
                  <span>2 Completed</span>
                </Badge>
              </div>
              <div className="flex items-center">
                <Badge variant="outline" className="mr-1 bg-amber-50">
                  <Clock className="h-3 w-3 mr-1 text-amber-500" />
                  <span>4 In Progress</span>
                </Badge>
              </div>
              <div className="flex items-center">
                <Badge variant="outline" className="bg-slate-50">
                  <span>2 Not Started</span>
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Recommended Courses</CardTitle>
            <CardDescription>Based on your career goals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium">
                    Advanced React Patterns
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Frontend Masters
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium">
                    TypeScript for React Developers
                  </h3>
                  <p className="text-xs text-muted-foreground">Udemy</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <GraduationCap className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium">
                    Testing React Applications
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    TestingJavaScript.com
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              View All Courses
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Career Milestones</CardTitle>
            <CardDescription>Key achievements to aim for</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                  1
                </div>
                <div>
                  <h3 className="text-sm font-medium">
                    Build Portfolio Website
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Showcase your skills
                  </p>
                </div>
                <Badge className="ml-auto" variant="outline">
                  Completed
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                  2
                </div>
                <div>
                  <h3 className="text-sm font-medium">
                    Contribute to Open Source
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Make 5+ contributions
                  </p>
                </div>
                <Badge className="ml-auto" variant="outline">
                  In Progress
                </Badge>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium">
                  3
                </div>
                <div>
                  <h3 className="text-sm font-medium">
                    Complete Major Project
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Full-stack application
                  </p>
                </div>
                <Badge className="ml-auto" variant="outline">
                  Not Started
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Skills Roadmap</CardTitle>
          <CardDescription>
            Track your progress on key skills and competencies
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {roadmapItems.map((item) => (
              <div key={item.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={`${
                        item.status === "completed"
                          ? "bg-green-50"
                          : item.status === "in-progress"
                          ? "bg-amber-50"
                          : "bg-slate-50"
                      }`}
                    >
                      {item.type}
                    </Badge>
                    <h3 className="text-sm font-medium">{item.title}</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {item.progress}%
                    </span>
                    {item.status === "completed" && (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                </div>
                <Progress value={item.progress} className="h-2" />
                <div className="flex flex-wrap gap-2 pt-1">
                  {item.resources.map((resource, index) => (
                    <Button
                      key={index}
                      variant="link"
                      className="h-auto p-0 text-xs"
                      asChild
                    >
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {resource.title}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

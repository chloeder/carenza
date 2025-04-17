"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, Clock, MoreHorizontal, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type JobStatus = "applied" | "interviewing" | "offer" | "rejected";

type Job = {
  id: number;
  company: string;
  position: string;
  location: string;
  date: string;
  logo: string;
  status: JobStatus;
  notes?: string;
  salary?: string;
  url?: string;
};

export function JobTrackerPage() {
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      company: "TechCorp Inc.",
      position: "Frontend Developer",
      location: "San Francisco, CA (Remote)",
      date: "2023-04-15",
      logo: "T",
      status: "applied",
      notes:
        "Applied through company website. Followed up with hiring manager on LinkedIn.",
    },
    {
      id: 2,
      company: "DesignHub",
      position: "UX/UI Designer",
      location: "New York, NY (Hybrid)",
      date: "2023-04-18",
      logo: "D",
      status: "applied",
      notes: "Submitted portfolio and resume. Waiting for response.",
    },
    {
      id: 3,
      company: "GrowthStartup",
      position: "Full Stack Developer",
      location: "Austin, TX (On-site)",
      date: "2023-04-10",
      logo: "G",
      status: "interviewing",
      notes:
        "First interview completed. Technical assessment scheduled for next week.",
    },
    {
      id: 4,
      company: "InnovateCo",
      position: "Product Manager",
      location: "Seattle, WA (Remote)",
      date: "2023-04-05",
      logo: "I",
      status: "interviewing",
      notes: "Second interview scheduled with the team lead.",
    },
    {
      id: 5,
      company: "BigTech",
      position: "Software Engineer",
      location: "Mountain View, CA (On-site)",
      date: "2023-03-28",
      logo: "B",
      status: "offer",
      notes:
        "Received offer: $120k base + benefits. Need to respond by next week.",
      salary: "$120,000",
    },
    {
      id: 6,
      company: "StartupX",
      position: "Frontend Engineer",
      location: "Remote",
      date: "2023-03-20",
      logo: "S",
      status: "rejected",
      notes: "Received rejection email. Asked for feedback.",
    },
  ]);

  const getJobsByStatus = (status: JobStatus) => {
    return jobs.filter((job) => job.status === status);
  };

  const moveJob = (jobId: number, newStatus: JobStatus) => {
    setJobs(
      jobs.map((job) =>
        job.id === jobId ? { ...job, status: newStatus } : job
      )
    );
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Job Tracker</h1>
          <p className="text-muted-foreground">
            Track and manage your job applications
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Job
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Applied Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">Applied</h2>
              <Badge variant="outline" className="ml-2">
                {getJobsByStatus("applied").length}
              </Badge>
            </div>
            <Button variant="ghost" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-3">
            {getJobsByStatus("applied").map((job) => (
              <Card key={job.id} className="shadow-sm">
                <CardHeader className="p-3 pb-0">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {job.logo}
                      </div>
                      <div>
                        <CardTitle className="text-sm">{job.company}</CardTitle>
                        <CardDescription className="text-xs">
                          {job.position}
                        </CardDescription>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => moveJob(job.id, "interviewing")}
                        >
                          Move to Interviewing
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => moveJob(job.id, "offer")}
                        >
                          Move to Offer
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => moveJob(job.id, "rejected")}
                        >
                          Move to Rejected
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="p-3 pt-2">
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <Building2 className="h-3 w-3 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    Applied on {new Date(job.date).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interviewing Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">Interviewing</h2>
              <Badge variant="outline" className="ml-2">
                {getJobsByStatus("interviewing").length}
              </Badge>
            </div>
            <Button variant="ghost" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-3">
            {getJobsByStatus("interviewing").map((job) => (
              <Card key={job.id} className="shadow-sm">
                <CardHeader className="p-3 pb-0">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {job.logo}
                      </div>
                      <div>
                        <CardTitle className="text-sm">{job.company}</CardTitle>
                        <CardDescription className="text-xs">
                          {job.position}
                        </CardDescription>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => moveJob(job.id, "applied")}
                        >
                          Move to Applied
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => moveJob(job.id, "offer")}
                        >
                          Move to Offer
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => moveJob(job.id, "rejected")}
                        >
                          Move to Rejected
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="p-3 pt-2">
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <Building2 className="h-3 w-3 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    Interview in progress
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Offer Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">Offer</h2>
              <Badge variant="outline" className="ml-2">
                {getJobsByStatus("offer").length}
              </Badge>
            </div>
            <Button variant="ghost" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-3">
            {getJobsByStatus("offer").map((job) => (
              <Card key={job.id} className="shadow-sm border-green-200">
                <CardHeader className="p-3 pb-0">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                        {job.logo}
                      </div>
                      <div>
                        <CardTitle className="text-sm">{job.company}</CardTitle>
                        <CardDescription className="text-xs">
                          {job.position}
                        </CardDescription>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => moveJob(job.id, "applied")}
                        >
                          Move to Applied
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => moveJob(job.id, "interviewing")}
                        >
                          Move to Interviewing
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => moveJob(job.id, "rejected")}
                        >
                          Move to Rejected
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="p-3 pt-2">
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <Building2 className="h-3 w-3 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-xs text-green-600 font-medium">
                    Offer: {job.salary}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rejected Column */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold">Rejected</h2>
              <Badge variant="outline" className="ml-2">
                {getJobsByStatus("rejected").length}
              </Badge>
            </div>
            <Button variant="ghost" size="icon">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-3">
            {getJobsByStatus("rejected").map((job) => (
              <Card key={job.id} className="shadow-sm opacity-75">
                <CardHeader className="p-3 pb-0">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-muted-foreground">
                        {job.logo}
                      </div>
                      <div>
                        <CardTitle className="text-sm">{job.company}</CardTitle>
                        <CardDescription className="text-xs">
                          {job.position}
                        </CardDescription>
                      </div>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() => moveJob(job.id, "applied")}
                        >
                          Move to Applied
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => moveJob(job.id, "interviewing")}
                        >
                          Move to Interviewing
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => moveJob(job.id, "offer")}
                        >
                          Move to Offer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardHeader>
                <CardContent className="p-3 pt-2">
                  <div className="flex items-center text-xs text-muted-foreground mb-2">
                    <Building2 className="h-3 w-3 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" />
                    Rejected on {new Date(job.date).toLocaleDateString()}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

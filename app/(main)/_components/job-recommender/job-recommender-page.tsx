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
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Building2, MapPin, Briefcase } from "lucide-react";

const jobSuggestions = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA (Remote)",
    description:
      "We're looking for a Frontend Developer with experience in React, TypeScript, and modern CSS frameworks.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Git"],
    salary: "$90,000 - $120,000",
    match: 95,
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "DesignHub",
    location: "New York, NY (Hybrid)",
    description:
      "Join our creative team to design intuitive and beautiful user interfaces for web and mobile applications.",
    skills: ["Figma", "UI Design", "User Research", "Prototyping"],
    salary: "$85,000 - $110,000",
    match: 88,
  },
  {
    id: 3,
    title: "Full Stack Developer",
    company: "GrowthStartup",
    location: "Austin, TX (On-site)",
    description:
      "Help us build our next-generation platform using modern web technologies and cloud infrastructure.",
    skills: ["JavaScript", "Node.js", "React", "AWS"],
    salary: "$100,000 - $130,000",
    match: 82,
  },
  {
    id: 4,
    title: "Product Manager",
    company: "InnovateCo",
    location: "Seattle, WA (Remote)",
    description:
      "Lead product development initiatives and work closely with engineering and design teams to deliver exceptional products.",
    skills: ["Product Strategy", "Agile", "User Stories", "Roadmapping"],
    salary: "$110,000 - $140,000",
    match: 78,
  },
];

export function JobRecommenderPage() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Job Fit Recommender
        </h1>
        <p className="text-muted-foreground">
          Discover job opportunities that match your skills and experience
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Jobs</CardTitle>
          <CardDescription>
            Find jobs by title, company, or location
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Job title or keywords"
                className="pl-8"
              />
            </div>
            <div className="relative flex-1">
              <Building2 className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="text" placeholder="Company" className="pl-8" />
            </div>
            <div className="relative flex-1">
              <MapPin className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="text" placeholder="Location" className="pl-8" />
            </div>
            <Button className="md:w-auto">Search</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Recommended for You</h2>
          <p className="text-sm text-muted-foreground">
            Based on your profile and resume
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {jobSuggestions.map((job) => (
            <Card key={job.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <Building2 className="h-3 w-3 mr-1" />
                      {job.company}
                    </CardDescription>
                  </div>
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 border-none">
                    {job.match}% Match
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 pb-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Briefcase className="h-3 w-3 mr-1" />
                  {job.salary}
                </div>
                <p className="text-sm line-clamp-2">{job.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {job.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between pt-2">
                <Button variant="outline" size="sm">
                  Save
                </Button>
                <Button size="sm">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

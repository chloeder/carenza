"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { FileUp, Loader2, Sparkles } from "lucide-react";

export function ResumeReviewerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [resumeText, setResumeText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [feedback, setFeedback] = useState<null | {
    score: number;
    strengths: string[];
    improvements: string[];
    keywords: string[];
  }>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      // In a real app, you would parse the file content
      setResumeText(
        "Sample resume content extracted from the uploaded file..."
      );
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
      // In a real app, you would parse the file content
      setResumeText(
        "Sample resume content extracted from the uploaded file..."
      );
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const analyzeResume = () => {
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setFeedback({
        score: 85,
        strengths: [
          "Clear presentation of work experience",
          "Quantifiable achievements",
          "Relevant skills highlighted",
        ],
        improvements: [
          "Add more industry-specific keywords",
          "Elaborate on project outcomes",
          "Include relevant certifications",
        ],
        keywords: [
          "React",
          "JavaScript",
          "UI/UX",
          "Project Management",
          "Agile",
        ],
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Resume Reviewer</h1>
        <p className="text-muted-foreground">
          Upload your resume and get AI-powered feedback to improve your chances
          of landing interviews
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upload Resume</CardTitle>
              <CardDescription>
                Upload your resume in PDF, DOCX, or TXT format
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={() =>
                  document.getElementById("resume-upload")?.click()
                }
              >
                <input
                  type="file"
                  id="resume-upload"
                  className="hidden"
                  accept=".pdf,.docx,.txt"
                  onChange={handleFileChange}
                />
                <FileUp className="h-10 w-10 text-muted-foreground mb-2" />
                <p className="text-sm text-center font-medium">
                  {file
                    ? file.name
                    : "Drag and drop your resume or click to browse"}
                </p>
                {file && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resume Content</CardTitle>
              <CardDescription>
                Review or paste your resume content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Textarea
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your resume content here or upload a file above..."
                className="min-h-[200px]"
              />
            </CardContent>
            <CardFooter>
              <Button
                onClick={analyzeResume}
                disabled={!resumeText || isAnalyzing}
                className="w-full"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Analyze Resume
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>AI Feedback</CardTitle>
              <CardDescription>
                Get personalized feedback to improve your resume
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {!feedback && !isAnalyzing ? (
                <div className="flex flex-col items-center justify-center h-[400px] text-center">
                  <Sparkles className="h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">
                    Upload your resume and click &quot;Analyze Resume&quot; to
                    get AI feedback
                  </p>
                </div>
              ) : isAnalyzing ? (
                <div className="flex flex-col items-center justify-center h-[400px]">
                  <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
                  <p className="text-muted-foreground">
                    Analyzing your resume...
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Resume Score</h3>
                    <div className="flex items-center">
                      <span className="text-2xl font-bold mr-2">
                        {feedback?.score}/100
                      </span>
                      <Badge
                        variant={
                          feedback?.score && feedback.score >= 80
                            ? "default"
                            : "secondary"
                        }
                      >
                        {feedback?.score && feedback.score >= 80
                          ? "Good"
                          : "Needs Improvement"}
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">Strengths</h3>
                    <ul className="space-y-2">
                      {feedback?.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start">
                          <Badge variant="outline" className="mr-2 bg-green-50">
                            ✓
                          </Badge>
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Areas for Improvement
                    </h3>
                    <ul className="space-y-2">
                      {feedback?.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start">
                          <Badge variant="outline" className="mr-2 bg-amber-50">
                            !
                          </Badge>
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Detected Keywords
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {feedback?.keywords.map((keyword, index) => (
                        <Badge key={index} variant="secondary">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

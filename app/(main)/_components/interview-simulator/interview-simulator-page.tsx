"use client";

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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, Mic, Sparkles } from "lucide-react";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

export function InterviewSimulatorPage() {
  const [jobRole, setJobRole] = useState("frontend-developer");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hello! I'm your AI interviewer today. I'll be asking you some questions for the Frontend Developer position. Let's start with: Can you tell me about your experience with React and how you've used it in your previous projects?",
      timestamp: new Date(),
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isInterviewStarted, setIsInterviewStarted] = useState(true);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;

    // Add user message
    const newUserMessage: Message = {
      id: messages.length + 1,
      role: "user",
      content: userInput,
      timestamp: new Date(),
    };

    setMessages([...messages, newUserMessage]);
    setUserInput("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "That's great experience! Now, can you explain how you handle state management in complex React applications?",
        "Interesting approach. How do you ensure your code is maintainable and scalable?",
        "Good point. Can you tell me about a challenging project you worked on and how you overcame the obstacles?",
        "I see. How do you stay updated with the latest frontend technologies and best practices?",
      ];

      const randomResponse =
        aiResponses[Math.floor(Math.random() * aiResponses.length)];

      const newAiMessage: Message = {
        id: messages.length + 2,
        role: "assistant",
        content: randomResponse,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, newAiMessage]);
    }, 1000);
  };

  const startNewInterview = () => {
    setMessages([
      {
        id: 1,
        role: "assistant",
        content: `Hello! I'm your AI interviewer today. I'll be asking you some questions for the ${
          jobRole === "frontend-developer"
            ? "Frontend Developer"
            : jobRole === "ux-designer"
            ? "UX Designer"
            : "Product Manager"
        } position. Let's start with: Can you tell me about your experience with ${
          jobRole === "frontend-developer"
            ? "React"
            : jobRole === "ux-designer"
            ? "user research"
            : "product development"
        } and how you've used it in your previous projects?`,
        timestamp: new Date(),
      },
    ]);
    setIsInterviewStarted(true);
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Interview Simulator
        </h1>
        <p className="text-muted-foreground">
          Practice your interview skills with our AI interviewer
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Interview Settings</CardTitle>
            <CardDescription>
              Customize your interview experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Job Role</label>
              <Select value={jobRole} onValueChange={setJobRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a job role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="frontend-developer">
                    Frontend Developer
                  </SelectItem>
                  <SelectItem value="ux-designer">UX Designer</SelectItem>
                  <SelectItem value="product-manager">
                    Product Manager
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Difficulty Level</label>
              <Select defaultValue="intermediate">
                <SelectTrigger>
                  <SelectValue placeholder="Select difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Interview Duration</label>
              <Select defaultValue="15">
                <SelectTrigger>
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 minutes</SelectItem>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={startNewInterview}
              className="w-full"
              variant={isInterviewStarted ? "outline" : "default"}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              {isInterviewStarted ? "Restart Interview" : "Start Interview"}
            </Button>
          </CardFooter>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Interview Session</CardTitle>
            <CardDescription>
              Respond to the interviewer&apos;s questions as you would in a real
              interview
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4 h-[400px] overflow-y-auto p-2">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "assistant"
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >
                  <div
                    className={`flex max-w-[80%] ${
                      message.role === "assistant"
                        ? "flex-row"
                        : "flex-row-reverse"
                    }`}
                  >
                    <Avatar
                      className={`h-8 w-8 ${
                        message.role === "assistant" ? "mr-2" : "ml-2"
                      }`}
                    >
                      <AvatarFallback>
                        {message.role === "assistant" ? "AI" : "ME"}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`rounded-lg p-3 ${
                        message.role === "assistant"
                          ? "bg-muted text-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="border-t p-3">
            <div className="flex w-full items-center space-x-2">
              <Button variant="outline" size="icon">
                <Mic className="h-4 w-4" />
              </Button>
              <Textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your response..."
                className="flex-1 min-h-[60px]"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={!userInput.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

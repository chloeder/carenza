import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export interface ToolCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  buttonText: string;
}

export const ToolCard: React.FC<ToolCardProps> = ({
  title,
  icon,
  description,
  buttonText,
}) => {
  return (
    <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden relative flex flex-col">
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-zinc-700/20 to-zinc-600/10 rounded-bl-full -z-10"></div>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 z-10 relative">
        <CardTitle className="text-zinc-200 leading-normal lg:text-2xl">
          {title}
        </CardTitle>
        <div className="p-1.5 rounded-full bg-zinc-800">{icon}</div>
      </CardHeader>
      <CardContent className="z-10 relative flex flex-col flex-grow">
        <CardDescription className="text-zinc-400 mb-4 lg:text-lg">
          {description}
        </CardDescription>
        <Button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 mt-auto">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
};

import React from "react";
import { ToolCard } from "./tool-card";

// Reuse the ToolCardProps definition if available, otherwise define inline or import
// Assuming ToolCardProps is exported from tool-card.tsx
import type { ToolCardProps } from "./tool-card";

interface CareerToolsSectionProps {
  tools: ToolCardProps[];
}

export const CareerToolsSection: React.FC<CareerToolsSectionProps> = ({
  tools,
}) => {
  return (
    <div className="mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </div>
    </div>
  );
};

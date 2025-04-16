import React from "react";
import { ComingSoonCard } from "./comingsoon-card";

// Define the props type based on ComingSoonCard's definition
interface ComingSoonCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface ComingSoonSectionProps {
  features: ComingSoonCardProps[];
}

export const ComingSoonSection: React.FC<ComingSoonSectionProps> = ({
  features,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold text-zinc-200 mb-4">Coming Soon</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <ComingSoonCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

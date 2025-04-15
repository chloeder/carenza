"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Plus, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useOnboarding } from "../context/onboarding-context";

export default function SkillsStep() {
  const { data, addSkill, removeSkill } = useOnboarding();
  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    if (newSkill.trim() && !data.skills.includes(newSkill.trim())) {
      addSkill(newSkill.trim());
      setNewSkill("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddSkill();
    }
  };

  // Suggested skills for different career paths
  const suggestedSkills = {
    tech: [
      "JavaScript",
      "React",
      "Node.js",
      "Python",
      "UI/UX Design",
      "Data Analysis",
    ],
    business: [
      "Project Management",
      "Marketing",
      "Sales",
      "Leadership",
      "Communication",
    ],
    creative: [
      "Graphic Design",
      "Content Writing",
      "Video Editing",
      "Photography",
    ],
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4 mb-6"
      >
        <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
          <Lightbulb className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Skills & Expertise</h2>
          <p className="text-gray-400">
            Add your skills to help us identify your strengths and growth
            opportunities
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex space-x-2">
          <Input
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a skill (e.g., JavaScript, Project Management)"
            className="bg-gray-800 border-gray-700 focus:border-green-500 focus:ring-green-500"
          />
          <Button
            onClick={handleAddSkill}
            disabled={!newSkill.trim()}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <AnimatePresence>
            {data.skills.map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center bg-gray-800 border border-gray-700 rounded-full px-3 py-1 text-sm"
              >
                <span>{skill}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSkill(skill)}
                  className="h-5 w-5 ml-1 p-0 text-gray-400 hover:text-red-400 hover:bg-transparent"
                >
                  <X className="h-3 w-3" />
                </Button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {data.skills.length === 0 && (
          <p className="text-gray-500 text-sm italic">
            No skills added yet. Add your skills above or select from the
            suggestions below.
          </p>
        )}

        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-medium">Suggested Skills</h3>

          <div className="space-y-4">
            {Object.entries(suggestedSkills).map(([category, skills]) => (
              <div key={category} className="space-y-2">
                <h4 className="text-sm font-medium text-gray-400 capitalize">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <motion.button
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        if (!data.skills.includes(skill)) {
                          addSkill(skill);
                        }
                      }}
                      disabled={data.skills.includes(skill)}
                      className={`text-sm px-3 py-1 rounded-full border ${
                        data.skills.includes(skill)
                          ? "bg-gray-700 border-gray-600 text-gray-400 cursor-not-allowed"
                          : "bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-gray-600"
                      }`}
                    >
                      {skill}
                    </motion.button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Plus, Trash2, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  useOnboarding,
  type Experience,
} from "../../_context/onboarding-context";

export default function ExperienceStep() {
  const { data, addExperience, removeExperience } = useOnboarding();
  const [isAdding, setIsAdding] = useState(false);
  const [isCurrentlyWorking, setIsCurrentlyWorking] = useState(false);
  const [newExperience, setNewExperience] = useState<Experience>({
    id: "",
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleAddExperience = () => {
    const id = Date.now().toString();
    addExperience({
      ...newExperience,
      id,
      endDate: isCurrentlyWorking ? "" : newExperience.endDate,
    });
    setNewExperience({
      id: "",
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    });
    setIsCurrentlyWorking(false);
    setIsAdding(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewExperience((prev) => ({ ...prev, [name]: value }));
  };

  const handleCurrentlyWorkingChange = (checked: boolean) => {
    setIsCurrentlyWorking(checked);
    if (checked) {
      setNewExperience((prev) => ({ ...prev, endDate: "" }));
    }
  };

  return (
    <div className="space-y-6 h-full">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4 mb-6"
      >
        <div className="w-12 h-12 rounded-full bg-pink-600 flex items-center justify-center">
          <Briefcase className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Work Experience</h2>
          <p className="text-gray-400">
            Add your professional experience to help us understand your career
            path
          </p>
        </div>
      </motion.div>

      <div className="space-y-4">
        <AnimatePresence>
          {data.experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg">{exp.position}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>
                          {exp.startDate} - {exp.endDate || "Present"}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-300">
                        {exp.description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeExperience(exp.id)}
                      className="text-gray-400 hover:text-red-400 hover:bg-gray-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {isAdding ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-800 border-gray-700 border-dashed">
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={newExperience.company}
                        onChange={handleChange}
                        placeholder="Company name"
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="position">Position</Label>
                      <Input
                        id="position"
                        name="position"
                        value={newExperience.position}
                        onChange={handleChange}
                        placeholder="Job title"
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input
                        id="startDate"
                        name="startDate"
                        type="month"
                        value={newExperience.startDate}
                        onChange={handleChange}
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="endDate">End Date</Label>
                      <Input
                        id="endDate"
                        name="endDate"
                        type="month"
                        value={newExperience.endDate}
                        onChange={handleChange}
                        placeholder="Present"
                        className="bg-gray-700 border-gray-600"
                        disabled={isCurrentlyWorking}
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <Switch
                      id="currentlyWorking"
                      checked={isCurrentlyWorking}
                      onCheckedChange={handleCurrentlyWorkingChange}
                    />
                    <Label
                      htmlFor="currentlyWorking"
                      className="text-sm font-medium"
                    >
                      I currently work here
                    </Label>
                  </div>

                  <div className="space-y-2 mb-4">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={newExperience.description}
                      onChange={handleChange}
                      placeholder="Describe your responsibilities and achievements"
                      className="bg-gray-700 border-gray-600 min-h-[100px]"
                    />
                  </div>

                  <div className="flex justify-end space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => setIsAdding(false)}
                      className="bg-gray-700 border-gray-600 hover:bg-gray-600"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={handleAddExperience}
                      disabled={
                        !newExperience.company || !newExperience.position
                      }
                      className="bg-pink-600 hover:bg-pink-700"
                    >
                      Add Experience
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <Button
                variant="outline"
                onClick={() => setIsAdding(true)}
                className="w-full py-6 border-dashed border-gray-700 bg-gray-800 hover:bg-gray-700"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Work Experience
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

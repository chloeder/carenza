"use client";

import type React from "react";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Plus, Trash2, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useOnboarding, type Education } from "../context/onboarding-context";

export default function EducationStep() {
  const { data, addEducation, removeEducation } = useOnboarding();
  const [isAdding, setIsAdding] = useState(false);
  const [newEducation, setNewEducation] = useState<Education>({
    id: "",
    institution: "",
    degree: "",
    field: "",
    startDate: "",
    endDate: "",
  });

  const handleAddEducation = () => {
    const id = Date.now().toString();
    addEducation({ ...newEducation, id });
    setNewEducation({
      id: "",
      institution: "",
      degree: "",
      field: "",
      startDate: "",
      endDate: "",
    });
    setIsAdding(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEducation((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4 mb-6"
      >
        <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
          <GraduationCap className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Education</h2>
          <p className="text-gray-400">
            Add your educational background to help us understand your
            qualifications
          </p>
        </div>
      </motion.div>

      <div className="space-y-4">
        <AnimatePresence>
          {data.education.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-lg">{edu.degree}</h3>
                      <p className="text-gray-400">{edu.institution}</p>
                      <p className="text-sm text-purple-400">{edu.field}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>
                          {edu.startDate} - {edu.endDate || "Present"}
                        </span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeEducation(edu.id)}
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
                      <Label htmlFor="institution">Institution</Label>
                      <Input
                        id="institution"
                        name="institution"
                        value={newEducation.institution}
                        onChange={handleChange}
                        placeholder="University or school name"
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="degree">Degree</Label>
                      <Input
                        id="degree"
                        name="degree"
                        value={newEducation.degree}
                        onChange={handleChange}
                        placeholder="Bachelor's, Master's, etc."
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <Label htmlFor="field">Field of Study</Label>
                    <Input
                      id="field"
                      name="field"
                      value={newEducation.field}
                      onChange={handleChange}
                      placeholder="Computer Science, Business, etc."
                      className="bg-gray-700 border-gray-600"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="eduStartDate">Start Date</Label>
                      <Input
                        id="eduStartDate"
                        name="startDate"
                        type="month"
                        value={newEducation.startDate}
                        onChange={handleChange}
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eduEndDate">End Date</Label>
                      <Input
                        id="eduEndDate"
                        name="endDate"
                        type="month"
                        value={newEducation.endDate}
                        onChange={handleChange}
                        placeholder="Present"
                        className="bg-gray-700 border-gray-600"
                      />
                    </div>
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
                      onClick={handleAddEducation}
                      disabled={
                        !newEducation.institution || !newEducation.degree
                      }
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Add Education
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
                Add Education
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

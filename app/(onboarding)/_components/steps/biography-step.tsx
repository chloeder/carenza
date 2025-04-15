"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useOnboarding } from "../context/onboarding-context";

export default function BiographyStep() {
  const { data, updateBiography } = useOnboarding();
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateBiography({ [name]: value });
  };

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center space-x-4 mb-6"
      >
        <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
          <User className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Tell us about yourself</h2>
          <p className="text-gray-400">
            This helps us personalize your career coaching experience
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="space-y-4"
      >
        <div className="space-y-2">
          <Label htmlFor="about">About You</Label>
          <div
            className={`relative transition-all duration-300 ${
              focused === "about" ? "transform scale-[1.02]" : ""
            }`}
          >
            <Textarea
              id="about"
              name="about"
              value={data.biography.about}
              onChange={handleChange}
              onFocus={() => setFocused("about")}
              onBlur={() => setFocused(null)}
              placeholder="Tell us about yourself, your background, interests, and what brings you here..."
              className="bg-gray-800 border-gray-700 focus:border-purple-500 focus:ring-purple-500 min-h-[200px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

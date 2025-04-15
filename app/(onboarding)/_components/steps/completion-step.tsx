"use client";

import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight } from "lucide-react";
import { useOnboarding } from "../context/onboarding-context";

export default function CompletionStep() {
  const { data } = useOnboarding();
  console.log(data);
  const handleComplete = () => {
    // In a real application, you would submit the data to your backend here
    console.log("Onboarding data:", data);
    alert(
      "Profile created successfully! You can now access your AI Career Coach dashboard."
    );
  };

  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
          <CheckCircle className="h-16 w-16 text-white" />
        </div>
      </motion.div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold mb-4"
      >
        Profile Complete!
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-400 mb-8 max-w-2xl"
      >
        Thank you for completing your profile. Your AI Career Coach is now ready
        to provide personalized guidance based on your background and goals.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <HoverBorderGradient
          onClick={handleComplete}
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 py-4 px-8"
        >
          Start Your AI Carrer Journey
          <ChevronRight className="ml-2 h-5 w-5" />
        </HoverBorderGradient>
      </motion.div>
    </div>
  );
}

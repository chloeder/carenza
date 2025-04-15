"use client";

import { motion } from "framer-motion";
import { Rocket, Sparkles, Users } from "lucide-react";

export default function WelcomeStep() {
  return (
    <div className="flex flex-col items-center text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
          <Sparkles className="h-16 w-16 text-white" />
        </div>
      </motion.div>

      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl font-bold mb-4"
      >
        Welcome to AI Career Coach
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-400 mb-8 max-w-2xl"
      >
        Let&apos;s set up your profile to personalize your career coaching
        experience. We&apos;ll collect some information about you to help tailor
        our AI coaching to your needs.
      </motion.p>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl mb-8"
      >
        {[
          {
            icon: <Users className="h-8 w-8 mb-2 text-purple-400" />,
            title: "Personal Profile",
            description: "Tell us about yourself and your career goals",
          },
          {
            icon: <Rocket className="h-8 w-8 mb-2 text-pink-400" />,
            title: "Career History",
            description: "Share your experience and education background",
          },
          {
            icon: <Sparkles className="h-8 w-8 mb-2 text-blue-400" />,
            title: "Skills Assessment",
            description: "Identify your strengths and areas for growth",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            className="bg-gray-800 p-4 rounded-lg"
          >
            <div className="flex flex-col items-center text-center">
              {item.icon}
              <h3 className="font-medium mb-1">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

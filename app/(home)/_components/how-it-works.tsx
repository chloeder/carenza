"use client";

import { motion, useInView } from "framer-motion";
import { Rocket, Sparkles, UserCircle } from "lucide-react";
import { useRef } from "react";
const steps = [
  {
    icon: <UserCircle className="w-12 h-12 text-purple-400" />,
    title: "Create Your Profile",
    description:
      "Sign up and build your professional profile with your experience, skills, and career goals.",
  },
  {
    icon: <Sparkles className="w-12 h-12 text-indigo-400" />,
    title: "Get AI Analysis",
    description:
      "Our AI analyzes your profile and provides personalized recommendations for improvement.",
  },
  {
    icon: <Rocket className="w-12 h-12 text-blue-400" />,
    title: "Accelerate Your Career",
    description:
      "Apply the insights, practice with our tools, and land your dream job faster than ever.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="how-it-works" className="py-20 bg-zinc-500/20 relative">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Three simple steps to transform your career journey with our
            AI-powered platform
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-5xl mx-auto"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center max-w-xs"
            >
              <div className="w-24 h-24 rounded-full dark:bg-[linear-gradient(180deg,#27272a,#18181b)] flex items-center justify-center mb-6 relative">
                {step.icon}
                <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-lg font-bold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

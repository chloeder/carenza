"use client";

import { motion, useInView } from "framer-motion";
import { Briefcase, FileText, MessageSquare, TrendingUp } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: <FileText className="w-10 h-10 text-purple-400" />,
    title: "Resume Optimization",
    description:
      "Our AI analyzes your resume against job descriptions to highlight your strengths and suggest improvements for maximum impact.",
  },
  {
    icon: <MessageSquare className="w-10 h-10 text-indigo-400" />,
    title: "Interview Preparation",
    description:
      "Practice with our AI interviewer that simulates real interviews and provides feedback to improve your performance.",
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-blue-400" />,
    title: "Career Path Planning",
    description:
      "Get personalized career roadmaps based on your skills, experience, and goals to navigate your professional journey.",
  },
  {
    icon: <Briefcase className="w-10 h-10 text-cyan-400" />,
    title: "Job Match Analysis",
    description:
      "Our AI matches your profile with thousands of job listings to find opportunities that align with your skills and aspirations.",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="features" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI-powered platform offers a comprehensive suite of tools to
            accelerate your career growth
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className=" rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border "
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

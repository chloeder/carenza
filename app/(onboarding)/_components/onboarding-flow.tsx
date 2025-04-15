"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import WelcomeStep from "././steps/welcome-step";
import BiographyStep from "././steps/biography-step";
import ExperienceStep from "././steps/experience-step";
import EducationStep from "././steps/education-step";
import SkillsStep from "././steps/skills-step";
import CompletionStep from "././steps/completion-step";
import { OnboardingProvider } from "./context/onboarding-context";

export default function OnboardingFlow() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { id: "welcome", component: <WelcomeStep /> },
    { id: "biography", component: <BiographyStep /> },
    { id: "experience", component: <ExperienceStep /> },
    { id: "education", component: <EducationStep /> },
    { id: "skills", component: <SkillsStep /> },
    { id: "completion", component: <CompletionStep /> },
  ];

  const goToNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <OnboardingProvider>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="w-full max-w-4xl bg-gray-900 rounded-xl shadow-2xl overflow-hidden border border-gray-800">
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                AI Career Coach
              </h1>
              <div className="text-sm text-gray-400">
                Step {currentStep + 1} of {steps.length}
              </div>
            </div>

            <div className="relative min-h-[400px] md:min-h-[500px] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="absolute w-full h-full overflow-y-auto"
                >
                  {steps[currentStep].component}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={goToPreviousStep}
                disabled={currentStep === 0}
                className="bg-gray-800 border-gray-700 hover:bg-gray-700 text-white"
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              {currentStep !== steps.length - 1 && (
                <Button
                  onClick={goToNextStep}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </OnboardingProvider>
  );
}

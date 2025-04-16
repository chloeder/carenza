"use client";

// Remove useState if no longer needed for focus tracking
// import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { useOnboarding } from "../../_context/onboarding-context";

// Import RHF and Zod
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"; // Assuming Form components exist
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { careerIndustries } from "@/data/carrer-insight";
import {
  BiographyFormData,
  biographySchema,
} from "../../_schema/biography-schema";
import { forwardRef, useImperativeHandle } from "react";

// Define the type for the exposed handle
// Ensure this type is exported
export type BiographyStepHandle = {
  triggerValidation: () => Promise<boolean>;
};

// Wrap component definition with forwardRef
// Use unknown instead of {} for components without specific props
const BiographyStep = forwardRef<BiographyStepHandle, unknown>((props, ref) => {
  const { data, updateBiography } = useOnboarding();

  // Setup react-hook-form
  const form = useForm<BiographyFormData>({
    resolver: zodResolver(biographySchema),
    defaultValues: {
      about: data.biography?.about || "",
      industry: data.biography?.industry || "",
    },
    mode: "onChange", // Validate on change for immediate feedback
  });

  // Expose the trigger function using useImperativeHandle
  useImperativeHandle(
    ref,
    () => ({
      triggerValidation: async () => {
        const isValid = await form.trigger(); // Trigger validation for all fields
        console.log("Validation triggered, isValid:", isValid);
        return isValid;
      },
    }),
    [form]
  ); // Add form as a dependency

  return (
    // Use the Form component from shadcn/ui which integrates with RHF
    <Form {...form}>
      {/* Removed the outer <form> tag, assuming navigation handles submission */}
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

        {/* About You Field */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="space-y-4 px-3"
        >
          <FormField
            control={form.control}
            name="about"
            render={({ field }) => (
              <FormItem>
                {/* Use FormLabel for consistency */}
                <FormLabel htmlFor="about">About You</FormLabel>
                <FormControl>
                  <Textarea
                    id="about"
                    placeholder="Tell us about yourself, your background, interests, and what brings you here..."
                    className="bg-gray-800 border-gray-700 focus:border-purple-500 focus:ring-purple-500 min-h-[150px]"
                    // Spread field props from RHF
                    {...field}
                    // Update context alongside RHF state
                    onChange={(e) => {
                      field.onChange(e); // Important: Update RHF first
                      updateBiography({ about: e.target.value }); // Then update context
                    }}
                    // RHF handles onBlur, no need for manual focus state
                  />
                </FormControl>
                {/* Display validation errors */}
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        {/* Career Industry Field */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-2 px-3"
        >
          <FormField
            control={form.control}
            name="industry"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="industry">
                  Current or Desired Industry
                </FormLabel>
                <Select
                  // Connect Select to RHF Controller state
                  onValueChange={(value) => {
                    field.onChange(value); // Update RHF first
                    // Check if value is non-empty before updating context,
                    // prevents sending empty string if placeholder is re-selected (though schema prevents saving it)
                    if (value) {
                      updateBiography({ industry: value }); // Then update context
                    }
                  }}
                  value={field.value || ""} // Ensure value is controlled, fallback to empty string
                >
                  <FormControl>
                    <SelectTrigger
                      id="industry"
                      // Add aria-invalid for accessibility based on RHF error state
                      aria-invalid={!!form.formState.errors.industry}
                      className={`w-full bg-gray-800 border-gray-700 focus:border-purple-500 focus:ring-purple-500 ${
                        field.value ? "text-white" : "text-gray-400" // Style placeholder text color
                      }`}
                      // RHF handles onBlur
                    >
                      {/* Use field.value from RHF */}
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-gray-800 border-gray-700 text-white max-h-[200px] overflow-y-auto">
                    {careerIndustries.map((industry) => (
                      <SelectItem
                        key={industry}
                        value={industry}
                        className="cursor-pointer hover:bg-gray-700 data-[state=checked]:bg-purple-600 data-[state=checked]:text-white"
                      >
                        {industry}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {/* Display validation errors */}
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>
      </div>
    </Form>
  );
});

BiographyStep.displayName = "BiographyStep";
export default BiographyStep;

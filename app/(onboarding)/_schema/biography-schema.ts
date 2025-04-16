import { z } from "zod";

// Define Zod schema
export const biographySchema = z.object({
  about: z
    .string()
    .min(50, {
      message:
        "Please tell us a bit more about yourself (at least 50 characters).",
    })
    .max(1000, {
      message: "Please keep your biography under 1000 characters.",
    })
    .nonempty({ message: "Please tell us a bit more about yourself." }),
  industry: z
    .string({
      required_error: "Please select your current or desired industry.",
    })
    .nonempty({ message: "Please select your current or desired industry." }),
});

// Generate TypeScript type from schema
export type BiographyFormData = z.infer<typeof biographySchema>;

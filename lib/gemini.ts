import { GEMINI_API_KEY } from "@/constants";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const ai = new GoogleGenerativeAI(GEMINI_API_KEY);
export const gemini = ai.getGenerativeModel({
  model: "gemini-1.5-flash",
});

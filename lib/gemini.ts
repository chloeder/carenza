import { GEMINI_API_KEY } from "@/constants";
import { GoogleGenAI } from "@google/genai";

export const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

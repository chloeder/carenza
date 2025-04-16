import { gemini } from "@/lib/gemini";

export async function generateCarrerInsights(industry: string) {
  const prompt = `
  Generate a list of 5 career paths for ${industry}
    `;

  const response = await gemini.generateContent(prompt);
  const responseText = response.text();

  console.log(responseText);
}

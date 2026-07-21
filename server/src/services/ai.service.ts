import ai from "../config/gemini";

export const analyzeRepository = async (readme: string) => {
  const prompt = `
You are an expert software engineer and open-source mentor.

Analyze the following GitHub README.

Return ONLY valid JSON in this format:

{
  "summary": "...",
  "techStack": [],
  "difficulty": "",
  "roadmap": [],
  "contributionGuide": []
}

README:

${readme}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-flash-latest",
      contents: prompt,
    });

    const text = response.text ?? "";

    const cleaned = text.replace(/```json|```/g, "").trim();

    return JSON.parse(cleaned);
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};
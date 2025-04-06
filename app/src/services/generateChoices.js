import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_KEY);

export const generateChoices = async (term, definition) => {
  try {
    const prompt = `Generate 3 plausible, but incorrect answer options for the following term or question and definition or correct answer. Avoid duplicates or overly obvious answers.
        Term: "${term}"
        Correct Answer: "${definition}"
        
        Let one of the options be the correct answer.
    
        Return the output using this exact format without any quotes around answer:
            { answer: "choice1" }, { answer: "choice2" }, { answer: "choice3" }, { answer: "choice4" };`;
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
    });
    const result = await model.generateContent(prompt, {
      generationConfig: {
        maxOutputTokens: 50,
        temperature: 0.5,
      },
    });
    const formattedResult = result.response.text().split(",");

    const parsedObjects = formattedResult.map(str => {
        // Clean up whitespace and trailing characters
        const cleaned = str.trim().replace(/;$/, "");
      
        // Replace single JS object syntax with JSON-compatible format
        const jsonReady = cleaned.replace(/(\w+):/g, '"$1":');
      
        return JSON.parse(jsonReady);
      });
    return parsedObjects;
  } catch (error) {
    console.error("Error generating choices:", error);
    return null;
  }
};

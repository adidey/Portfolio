
import { GoogleGenAI, Type } from "@google/genai";
import { AIConceptResult } from "../types";

// The API key is sourced directly from process.env.API_KEY per standard requirements.

/**
 * Generates a creative design concept using the Gemini 3 Flash model.
 * The response is constrained to a specific JSON schema for UI rendering.
 */
export const generateDesignConcept = async (userPrompt: string): Promise<AIConceptResult> => {
  // Initialize the Gemini client with the named parameter as required.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Generate a sophisticated design concept for a brand or project based on this prompt: "${userPrompt}". 
    The tone should be professional, creative, and insightful.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          brandName: { 
            type: Type.STRING,
            description: "The name of the generated brand"
          },
          vision: { 
            type: Type.STRING,
            description: "The core vision or mission statement"
          },
          visualDirection: { 
            type: Type.STRING,
            description: "Detailed description of the visual style and atmosphere"
          },
          colorPalette: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "A list of hex codes representing the primary brand colors"
          },
          typography: { 
            type: Type.STRING,
            description: "Recommended typefaces and their intended impact"
          },
          suggestedFeatures: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Proposed unique features or digital experiences"
          }
        },
        required: ["brandName", "vision", "visualDirection", "colorPalette", "typography", "suggestedFeatures"]
      }
    }
  });

  // Extract the response text using the property getter as specified in the guidelines.
  const text = response.text;
  if (!text) {
    throw new Error("Failed to receive a response from the model.");
  }

  // Clean the string and parse the JSON result.
  const jsonStr = text.trim();
  return JSON.parse(jsonStr);
};

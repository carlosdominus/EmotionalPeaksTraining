import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedReply } from "../types";

export const analyzeStoryImage = async (base64Image: string): Promise<GeneratedReply[]> => {
  // Initialize client inside the function to ensure process.env is ready and avoid top-level crashes
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  try {
    const modelId = "gemini-2.5-flash"; // Using flash for fast multimodal analysis
    
    // Extract actual base64 data if it has the prefix
    const base64Data = base64Image.includes('base64,') 
      ? base64Image.split('base64,')[1] 
      : base64Image;

    const response = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: "image/png", // Assuming PNG/JPEG, API is flexible
              data: base64Data
            }
          },
          {
            text: "You are an expert dating coach named ChatDate. Analyze this Instagram Story screenshot. Provide 3 distinct, creative, and engaging replies in American English that the user could send to start a conversation. Avoid generic greetings. Make them context-aware based on the visual content."
          }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              id: { type: Type.STRING },
              text: { type: Type.STRING },
              tone: { type: Type.STRING, enum: ['flirty', 'funny', 'casual'] }
            },
            required: ['id', 'text', 'tone']
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as GeneratedReply[];
    }
    
    throw new Error("No response generated");

  } catch (error) {
    console.error("Gemini Analysis Failed:", error);
    throw error;
  }
};
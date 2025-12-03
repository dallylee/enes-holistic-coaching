import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getPersonalizedTip = async (goal: string, lifestyle: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are Enes, a warm, empathetic, and holistic personal trainer. 
      A user has visited your website. They have the following goal: "${goal}" and describe their lifestyle as: "${lifestyle}".
      
      Provide a single, short (max 2 sentences), encouraging, and specific health or mindset tip for them. 
      Do not be generic. Be friendly and inviting. Emphasize that small steps matter.
      Sign it off with "- Enes".
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "Remember, the journey of a thousand miles begins with a single step. Let's find what works for you. - Enes";
  } catch (error) {
    console.error("Error fetching tip:", error);
    return "Every small step counts towards a healthier you. I'd love to discuss this more in person! - Enes";
  }
};

export const generateEnesGymImage = async (base64Image: string): Promise<string | null> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: base64Image
            }
          },
          {
            text: 'Generate a photorealistic, high-quality professional portrait of this man in a modern, warm, and inviting gym setting in London. He should look friendly and approachable. Soft natural lighting. 4k resolution.'
          }
        ]
      },
      config: {
        // We want a landscape image for the hero section if possible, or we crop it. 
        // Note: Aspect ratio support depends on the specific model version capabilities, 
        // but 1:1 is safest if others fail. Let's try standard.
        // Actually, for nano banana, standard generation config applies.
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
};

import { GoogleGenerativeAI } from "@google/generative-ai";

// Define API Key directly (NOT SECURE for production)
const apiKey = "AIzaSyA8vmM0BbpD0TmxMaPv95MkD34z1itheBc";

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function runChat(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [],
  });

  const result = await chatSession.sendMessage(prompt);
  const response = result.response;
  console.log(response.text());
  return response.text();
}

export default runChat;

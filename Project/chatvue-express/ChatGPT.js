import { OpenAIApi, Configuration } from "openai";
import dotenv from "dotenv";
dotenv.config();
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

class ChatGPTClient {
  constructor() {
    const configuration = new Configuration({
      apiKey: OPENAI_API_KEY,
    });
    this.openAI = new OpenAIApi(configuration);
  }

  async respond(chatGPTMessages) {
    try {
      if (!chatGPTMessages) {
        return {
          text: "No chatGPTMessages",
        };
      }

      const request = {
        messages: chatGPTMessages,
        model: "gpt-3.5-turbo",
      };

      const response = await this.openAI.createChatCompletion(request);
      if (!response.data || !response.data.choices) {
        return {
          text: "The bot didn't respond. Please try again later.",
        };
      }

      return {
        text: response.data.choices[0].message?.content,
        messageId: response.data.id,
      };
    } catch (error) {
      console.log("E: ", error);
      throw new Error(error);
    }
  }
}
export default {
  chatgpt: new ChatGPTClient(),
};

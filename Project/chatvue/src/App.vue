<template>
  <PageHeader id="header"></PageHeader>
  <TextField id="textfield"></TextField>
  <InputField id="Inputfield"></InputField>
  <PageFooter id="footer"></PageFooter>
</template>

<script>
import PageHeader from "./components/header/PageHeader.vue";
import TextField from "./components/body/TextField.vue";
import InputField from "./components/body/InputField.vue";
import PageFooter from "./components/footer/PageFooter.vue";

const OPENAI_API_KEY = process.env.VUE_APP_OPENAI_API_KEY;

import { OpenAIApi, Configuration } from "openai";

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
import { ChatCompletionRequestMessageRoleEnum } from "openai";

const chatGptMessages = [
  {
    role: ChatCompletionRequestMessageRoleEnum.System,
    content: "You are a helpful assistant.",
  },
  {
    role: ChatCompletionRequestMessageRoleEnum.User,
    content: "give me some random name",
  },
];

const client = new ChatGPTClient();

const sendChatRequest = async function () {
  const result = await client.respond(chatGptMessages);
  console.log(result);
};

sendChatRequest();

export default {
  name: "App",
  components: { PageHeader, PageFooter, TextField, InputField },
};
</script>

<style>
* {
  text-align: center;
}

#header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14005e;
  color: white;
}
#footer {
  position: absolute;
  bottom: 0px;
  width: 99%;
  height: 6rem;
  justify-content: center;
  align-items: center;
  background-color: lightskyblue;
}
#textfield {
  width: 100%;
  background-color: lightgrey;
  height: 45rem;
}
</style>

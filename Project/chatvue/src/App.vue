<template>
  <PageHeader id="header"></PageHeader>
  <TextField id="textfield" :savedMessages="savedMessages"></TextField>
  <InputField id="Inputfield" @send="setMessage"></InputField>
  <PageFooter id="footer"></PageFooter>
</template>

<script>
import PageHeader from "./components/header/PageHeader.vue";
import TextField from "./components/body/TextField.vue";
import InputField from "./components/body/InputField.vue";
import PageFooter from "./components/footer/PageFooter.vue";
import ChatGPT from "./components/ChatGPT.vue";

import { ChatCompletionRequestMessageRoleEnum } from "openai";
const client = ChatGPT.chatgpt;

export default {
  name: "App",
  components: { PageHeader, PageFooter, TextField, InputField },
  data() {
    return {
      savedMessages: [],
      counter: 0,
    };
  },
  methods: {
    setMessage(message) {
      this.savedMessages.push({
        id: this.counter++,
        message: message,
      });
      const chatGptMessages = [
        {
          role: ChatCompletionRequestMessageRoleEnum.System,
          content: "You are a helpful assistant.",
        },
        {
          role: ChatCompletionRequestMessageRoleEnum.User,
          content: message,
        },
      ];
      const result = async function () {
        return await client.respond(chatGptMessages);
      };
      result().then((n) => {
        this.savedMessages.push({
          id: this.counter++,
          message: n.text,
        });
      });
    },
  },
};
</script>
<style></style>

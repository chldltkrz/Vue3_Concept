<template>
  <PageHeader id="header"></PageHeader>
  <TextField id="textfield" :returnedMessage="returnedMessage"></TextField>
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
      returnedMessage: "",
    };
  },
  methods: {
    setMessage(message) {
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
        const resultMessage = await client.respond(chatGptMessages);
        console.log(resultMessage.text);
        return resultMessage.text;
      };
      this.returnedMessage = result().then();
    },
  },
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

<template>
  <div v-if="login">
    <PageHeader id="header"></PageHeader>
    <TextField id="textfield" :savedMessages="savedMessages"></TextField>
    <InputField id="Inputfield" @send="setMessage"></InputField>
    <PageFooter id="footer"></PageFooter>
  </div>
</template>

<script>
import PageHeader from "./components/header/PageHeader.vue";
import TextField from "./components/body/TextField.vue";
import InputField from "./components/body/InputField.vue";
import PageFooter from "./components/footer/PageFooter.vue";
import axios from "axios";

export default {
  name: "App",
  components: { PageHeader, PageFooter, TextField, InputField },
  data() {
    return {
      savedMessages: [],
      counter: 0,
      login: false,
    };
  },
  beforeMount() {
    this.password();
  },
  methods: {
    password() {
      let password = prompt("Please enter the password");
      if (password === "ANFYcotwnlvlxl1!") {
        this.login = true;
      } else {
        alert(
          "You cannot use this chatgpt without permission email 'chldltkrz@gmail.com' for more detail"
        );
      }
    },
    setMessage(message) {
      this.savedMessages.push({
        id: this.counter++,
        message: message,
      });

      const result = async function () {
        return axios.post(`http://localhost:3334/gpt`, {
          message: message,
        });
      };
      result().then((response) => {
        console.log(response.data.message.message),
          this.savedMessages.push({
            id: this.counter++,
            message: response.data.message.message,
          });
      });
    },
  },
};
</script>
<style></style>

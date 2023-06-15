<template>
  <div v-if="login">
    <PageHeader id="header"></PageHeader>
    <TextField id="textfield" :savedMessages="savedMessages"></TextField>
    <InputField id="Inputfield" @send="setMessage" :turn="turn"></InputField>
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
      turn: false,
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
      // if (password === "ANFYcotwnlvlxl1!") {
      if (password === "1111") {
        this.login = true;
      } else {
        alert(
          "You cannot use this chatgpt without permission email 'chldltkrz@gmail.com' for more detail"
        );
      }
    },

    async setMessage(message) {
      if (this.turn) return;
      this.turn = true;
      this.savedMessages.push({
        id: this.counter++,
        isItMe: true,
        message: message,
      });
      const result = await function () {
        return axios.post(`http://localhost:3334/gpt`, {
          message: message,
        });
      };
      result().then((response) => {
        this.savedMessages.push({
          id: this.counter++,
          isItMe: false,
          message: JSON.stringify(response.data),
        });
        console.log(response.data);
        this.turn = false;
      });
    },
  },
};
</script>
<style></style>

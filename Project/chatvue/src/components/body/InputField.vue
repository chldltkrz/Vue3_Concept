<template>
  <div>
    <input type="text" id="question" ref="question" v-model="message" />
    <button @click.prevent="send">ASK!</button>
    <button class="btn btn_red"><span class="tts"></span>TTS</button>
    <button class="btn btn_red"><span class="stt"></span>SST</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  emits: ["send"],
  methods: {
    send() {
      this.$refs.question.value = "";
      this.$emit("send", this.message);
    },
  },
};
</script>

<style scoped>
div {
  position: fixed;
  bottom: calc(5rem);
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightyellow;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
input {
  width: 70%;
}
.btn span.tts {
  background: url(../../assets/tts.png) no-repeat;
  float: left;
  width: 20px;
  height: 20px;
}
.btn span.stt {
  background: url(../../assets/stt.png) no-repeat;
  float: left;
  width: 20px;
  height: 20px;
}
</style>

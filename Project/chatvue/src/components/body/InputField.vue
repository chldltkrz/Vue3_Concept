<template>
  <div>
    <input type="text" id="question" />
    <button>ASK!</button>
    <button class="btn btn_red"><span class="tts"></span>TTS</button>
    <button class="btn btn_red"><span class="stt"></span>SST</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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

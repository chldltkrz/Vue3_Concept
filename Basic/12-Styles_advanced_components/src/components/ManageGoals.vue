<template>
  <div>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <!-- slight problem that following element should be the higher order of html
         because there will be error on styling and html tag order
         There we use the concept of "teleporting elements"

         following error-alert will be inserted just below the app div!
    -->
    <teleport to="#app">
      <error-alert v-if="inputIsInvalid">
        <h2>Input is Invalud</h2>
        <p>Please Input something</p>
        <button @click="confirmError">OKAY</button>
      </error-alert>
    </teleport>
  </div>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: {
    "error-alert": ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      console.log(enteredValue);
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

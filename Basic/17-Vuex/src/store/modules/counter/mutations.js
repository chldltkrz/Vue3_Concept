export default {
  // state is current state
  increment(state) {
    state.counter++;
    // this is bad practice case to execute
    //   setTimeout(function () {
    //     state.counter++;
    //   }, 2000);
  },
  // It is an object or anything to user provide when commit happens
  increase(state, payload) {
    state.counter = state.counter + payload.value;
  },
};

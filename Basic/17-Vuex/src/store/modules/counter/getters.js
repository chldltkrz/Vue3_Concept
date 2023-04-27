export default {
  finalCounter(state, getters) {
    getters;
    return state.counter * 2;
  },
  normalizedCounter(state, getters) {
    // Assume variable is assigned, then it can be subsituded by getters
    // const finalCounter = state.counter * 3;
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
};

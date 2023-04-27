import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
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
  },
  // in action an async code can be executed!
  actions: {
    increment(context) {
      // commit will execute a method in mutation
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      // commit will execute a method in mutation
      context.commit('increase', payload);
    },
  },
  getters: {
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
  },
});
const app = createApp(App);

app.use(store);
app.mount('#app');

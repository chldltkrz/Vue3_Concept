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
    },
    // It is an object or anything to user provide when commit happens
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
});
const app = createApp(App);

app.use(store);
app.mount('#app');

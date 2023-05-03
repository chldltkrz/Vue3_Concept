import { createStore } from "vuex";
import coaches from "./modules/coaches/index.js";
import requests from "./modules/requests/index.js";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    coaches: coaches,
    requests: requests,
  },
});

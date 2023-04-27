import counterMutations from './mutations.js';
import counterActions from './actions';
import counterGetters from './getters';

// can modulize the store in to object unit
export default {
  // entire module is seperated from the main store if use namespace
  namespaced: true,
  state() {
    return { counter: 0 };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};

export default {
  namespaced: true,
  state() {
    return {
      requests: [],
    };
  },
  getters: {
    // instead of showing all reqeusts of all coaches,
    // we need to make the page to show the specific coache's message
    // requests(state) {
    //   return state.requests;
    // },
    requests(state, _, _2, rootGetters) {
      const coachId = rootGetters.userId;
      return state.requests.filter((req) => req.coachId === coachId);
    },
    hasRequests(state, getters) {
      //this will return either true or false
      return getters.requests && getters.requests.length > 0;
    },
  },
  mutations: {
    addRequest(state, payload) {
      state.requests.push(payload);
    },
  },
  actions: {
    contactCoach(context, payload) {
      const newRequest = {
        id: new Date().toISOString(),
        coachId: payload.coachId,
        userEmail: payload.email,
        message: payload.message,
      };
      context.commit("addRequest", newRequest);
    },
  },
};

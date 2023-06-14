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
    setRequest(state, payload) {
      state.requests = payload;
    },
  },
  actions: {
    async contactCoach(context, payload) {
      const newRequest = {
        // Firebase will add ID for me
        // id: new Date().toISOString(),
        // coachId: payload.coachId,
        userEmail: payload.email,
        message: payload.message,
      };
      const response = await fetch(
        `https://vue-http-coach-e3ba2-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${payload.coachId}.json`,
        { method: "POST", body: JSON.stringify(newRequest) }
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to send request"
        );
        throw error;
      }
      newRequest.id = responseData.name;
      newRequest.coachId = payload.coachId;
      context.commit("addRequest", newRequest);
    },
    async fetchRequest(context) {
      const coachId = context.rootGetters.userId;
      const response = await fetch(
        `https://vue-http-coach-e3ba2-default-rtdb.asia-southeast1.firebasedatabase.app/requests/${coachId}.json`
      );
      const responseData = await response.json();
      if (!response.ok) {
        const error = new Error(
          responseData.message || "Failed to fetch request"
        );
        throw error;
      }

      const requests = [];
      for (const key in responseData) {
        const request = {
          id: key,
          coachId: coachId,
          userEmail: responseData[key].userEmail,
          message: responseData[key].message,
        };
        requests.push(request);
      }
      context.commit("setRequest", requests);
    },
  },
};

export default {
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
};

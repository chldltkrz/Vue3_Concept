// from Vue script import from html page, make the Vue app
const app = Vue.createApp({
  // there are certain keyworkds like data, methods and others that Vue are looking for at the start of the app
  data() {
    // Data returns ONLY an Object not String, numbers, others
    // in the Object, it takes all the key:value pair data
    return {
      Goal: "FINISH this one",
      goalA: "Master",
      goalB: "Novice",
      htmlA: "<p>Hi world</p>",
      htmlB: "<p>Hello world</p>",
      vueLink: "https://www.naver.com",
    };
  },
  // set of methods(keyword is reserved)
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? "Learn Vue!" : "Master Vue!";
    },
    // "this" keyword can let methods access to data property!(IMPORTANT)
    outputSmallGoal() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? this.goalA : this.goalB;
    },
  },
});

// After createing the app, it must be mounted on the html element
app.mount("#user-goal");

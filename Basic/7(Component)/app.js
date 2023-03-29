const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      friends: [
        {
          id: "manual",
          name: "manual",
          phone: "01234 51203 2039",
          email: "manuel@.localhost.com",
        },
        {
          id: "Issac",
          name: "Issac Choi",
          phone: "01234 58718 2039",
          email: "Issac@.localhost.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
}).mount("#app");

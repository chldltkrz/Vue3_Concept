const app = Vue.createApp({
  data() {
    return {
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
});
// component is like CUSTOM HTML Code!
// need to make html tag that contains dash(-) and two words[rule of thumb]
// second argument is also app, but it is more likely sidecar app that connected to the main app
// needs also the template to apply!
app.component("friend-contact", {
  template: `
         <li>
          <h2>{{ friend.name }}</h2>
          <!-- !!!PROBLEM!!! 
                that if button is clicked, all friends' Detail is Open!!
          -->
          <button @click="toggleDetails()">
            {{ detailsAreVisible ? 'Hide' : 'Show' }}
          </button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manual",
        name: "manual",
        phone: "01234 51203 2039",
        email: "manuel@.localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");

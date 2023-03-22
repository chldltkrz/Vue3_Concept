const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm(event) {
      event.preventDefault();
      alert("Submitted!");
    },
    setName(e) {
      this.name = e.target.value;
    },
    add() {
      this.counter++;
    },

    reduce() {
      this.counter--;
    },
  },
});

app.mount("#events");

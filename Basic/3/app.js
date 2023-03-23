const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastname: "",
      fullname: "",
    };
  },
  watch: {
    // following code is when watcher is shined
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      }
    },
    // following method will be executed whenever name property in data is changed!!!
    // the value of the value variable will be the
    name(value) {
      this.fullname = value + " " + this.lastname;
    },
    lastname(value) {
      this.fullname = this.name + " " + value;
    },
  },
  computed: {
    // fullname() {
    //   if (this.name === "") {
    //     return "";
    //   }
    //   return this.name + " " + "SacSac";
    // },
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");

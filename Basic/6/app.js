const app = Vue.createApp({
  // if empty html element, it templete will be shown
  templete: `
    <p> Hi there </p>
    <p> {{message}} </p>
  `,
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value;
    },
    beforeCreate() {
      // See through the break point on browser
      console.log("beforeCreate()");
    },
    created() {
      console.log("created()");
    },
    beforeMount() {
      console.log("beforeMount()");
    },
    mounted() {
      console.log("Mounted()");
    },
    beforeUpdate() {
      console.warn("beforeUpdate()");
    },
    updated() {
      console.warn("updated()");
    },
    beforeUnmount() {
      console.error("beforeUnmount()");
    },
    unmounted() {
      console.errpr("unmounted()");
    },
  },
});

// Vue can have more than one app!
// each vue app is independent to each other!!
//
app.mount("#app");

// Proof that JS is not reactive,
// long message is not changed after modification
let message = "Hello";
let longMessage = message + " world!";
console.log(longMessage);
message = "HElOEoe!!!!!";
console.log(longMessage);

// JS Proxy, Vue is working kinda similar way,
// Vue wraps all the data in proxy!
const data = {
  message: "hello!",
  longMessage: "Hello! World!",
};
const handler = {
  set(target, key, value) {
    // console.log(target);
    // console.log(key);
    // console.log(value);
    if (key === "message") {
      target.longMessage = value + " World!!";
    }
    target.message = value;
  },
};
const proxy = new Proxy(data, handler);
proxy.message = "Hello!!!!!";
console.log(proxy.longMessage);
// app.unmount();

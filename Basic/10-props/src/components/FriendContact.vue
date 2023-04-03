<template>
  <li>
    <h2>{{ name }} - {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">toggle Favorite status</button>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>
</template>

<script>
// One flaw of this example is that the data is hardcoded inside the script tag!
// Need to get out of this thing out of the script and dynamically get the input from the other components
export default {
  // props: [
  //   // camelCase is used because if used kebobCase, it would be invalid js format when using this keyword
  //   "name",
  //   "phoneNumber",
  //   "emailAddress",
  //   "isFavorite",
  // ],
  // -> in order to limit the type of the input the component get,
  // -> object inside props can be used!
  // -> ERROR will be caused if other types are coming into the props
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    emailAddress: String,
    isFavorite: {
      // String, Number, Boolean, Array, Object, Date, Function, Symbol types can be used
      type: Boolean,
      // if required is false, we can set the default value of the props
      // a method can be placed in value of the default
      required: false,
      default: false,
      // validator validates the value provided!
      // it returns either true or false
      // // validator: function (value) {
      // //   return value === "1" || value === "0";
      // // },
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      // // friend: {
      // //   id: "manuel",
      // //   name: "Manuel Lorenz",
      // //   phone: "0123 45678 90",
      // //   email: "manuel@localhost.com",
      // // },
      // one way to change the status of props is to inherite the parent value into local variable
      // so that it can be changed freely inside the scope of the component(child)
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    // this is prohibited to change data in props and called uni-directional data flow
    // simply put, the data from parent cannot changed in the child!
    // toggleFavorite() {
    //   if (this.isFavorite === "1") {
    //     this.isFavorite = "0";
    //   } else {
    //     this.isFavorite = "1";
    //   }
    // },

    // following is about temp solution of uni-directional movement
    // toggleFavorite() {
    //   this.friendIsFavorite = !this.friendIsFavorite;
    // },

    // in order to fire the event from child to the parent,
    // use following method!
    toggleFavorite() {
      // always use kebob-case no matter where it is
      this.$emit("toggle-favorite", this.id);
    },
  },
};
</script>

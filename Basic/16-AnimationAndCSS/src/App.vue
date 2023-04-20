<template>
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      PIsVisible: false,
      usersAreVisible: false,
    };
  },
  methods: {
    // beforeEnter will be receiving an argument, the element
    // there are multiple enter and leave event(combination of before, after, enter, leave..)
    beforeEnter(element) {
      console.log('beforeEnter');
      console.log(element);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.PIsVisible = !this.PIsVisible;
    },
    animateBlock() {
      this.animatedBlock = true;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-50px); */
  animation: slide-fade 5s ease-out forwards;
}

/* user defind animation */
@keyframes slide-fade {
  0% {
    transform: translateX(-150px) scale(1);
  }
  70% {
    transform: translateY(120px) scale(1.5);
  }
  100% {
    transform: translateX(500px) scale(1);
  }
}
.v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.v-enter-active {
  transition: all 0.3s ease-out;
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-active {
  transition: all 0.3s ease-out;
}
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.3s ease-out;
}
.fade-leave-active {
  transition: opacity 0.3s ease-in reverse;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.route-enter-active {
  animation: slide-scale 0.4s ease-out;
}
.route-leave-active {
  animation: slide-scale 0.4s ease-out reverse;
}
@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
/* @keyframes test {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
} */
</style>

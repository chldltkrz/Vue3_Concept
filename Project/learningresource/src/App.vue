<template>
  <the-header title="Remember me"></the-header>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: {
    "the-header": TheHeader,
  },
  data() {
    return {
      storedResources: [
        {
          id: "official-guide",
          title: "official-guide",
          description: "Lorem ipsum",
          link: "https://vuejs.org",
        },
        {
          id: "google",
          title: "google",
          description: "Lorem ipsum",
          link: "https://google.com",
        },
      ],
    };
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>

<template>
  <the-header title="Remember me"></the-header>
  <stored-resource :resources="storedResources"></stored-resource>
</template>

<script>
import StoredResource from "./components/learning-resources/StoredResource.vue";
import TheHeader from "./components/layouts/TheHeader.vue";

export default {
  components: {
    "stored-resource": StoredResource,
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

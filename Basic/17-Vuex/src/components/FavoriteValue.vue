<template>
  <h3>{{ counter }}</h3>
  <p>More things to come</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters.finalCounter;
    },
  },
};
</script>

<template>
  <h3>{{ $store.state.counter }}</h3>
</template>

<script>
export default {
  computed: {
    counter() {
      // This is how to use mutation in the component
      return this.$store.commit('increment');
    },
  },
};
</script>

<template>
  <h3>{{ finalCounter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // counter() {
    // This is how to use mutation in the component
    //   return this.$store.getters.normalizedCounter;
    // },

    // No drilling variables, just calling multiple getter
    ...mapGetters('numbers', ['finalCounter']),
  },
};
</script>

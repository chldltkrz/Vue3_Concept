<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="register">Register as Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <li v-for="c in filteredCoaches" :key="c.id">
        {{ c.firstName }}
      </li>
    </ul>
    <h3 v-else>Currently has no coache Available</h3>
  </section>
</template>
<script>
export default {
  computed: {
    filteredCoaches() {
      return this.$store.getters["coaches/coaches"];
    },
    hasCoaches() {
      return this.$store.getters["coaches/hasCoaches"];
    },
  },
};
</script>

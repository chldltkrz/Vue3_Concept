<template>
  <section>Filter</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="register">Register as Coach</router-link>
    </div>
    <ul v-if="hasCoaches">
      <coach-item
        v-for="c in filteredCoaches"
        :key="c.id"
        :id="c.id"
        :first-name="c.firstName"
        :last-name="c.lastName"
        :areas="c.areas"
        :rate="c.hourlyRate"
      >
      </coach-item>
    </ul>
    <h3 v-else>Currently has no coache Available</h3>
  </section>
</template>
<script>
import CoachItem from "../../components/coaches/CoachItem.vue";

export default {
  components: {
    CoachItem,
  },
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

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>

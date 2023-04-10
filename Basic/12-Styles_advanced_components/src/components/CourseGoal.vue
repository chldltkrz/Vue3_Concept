<template>
  <ul>
    <!-- if have following code, then if want to access the props -->
    <li v-for="goal in goals" :key="goal">
      <!-- if bind it to the some specific value, -> refer to App.vue -->
      <slot :item="goal" another-props="..."></slot>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      goals: ["finished the course", "Learn Vue"],
    };
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="sm in savedMessages" :key="sm.id">
        {{ sm.id }} - {{ sm.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    savedMessages: Array,
  },
};
</script>

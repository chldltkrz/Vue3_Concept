<template>
  <div>
    <ul>
      <li>{{ returnedMessage }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    returnedMessage: String,
  },
};
</script>

<template>
  <section>
    <base-card>
      <!-- in order to use named slot feature name of element of wrapper 
          should be the "template with v-slot:[argument]"
      -->
      <!-- <template #header> -->
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<script scoped>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>
<!-- since the css code in the file will be compiled before the markup is sent to the slot, 
      All the css should be moved to the Slot wrapper file!
-->
<!-- 
<style>
/* section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
} */

section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style> -->

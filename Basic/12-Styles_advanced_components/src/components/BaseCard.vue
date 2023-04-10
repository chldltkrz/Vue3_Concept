<template>
  <div>
    <!-- this slot element will be replaced with the parent html code! -->
    <!-- if there is no name in the slot, that slot will be the default slot to dispaly -->
    <!-- if there is name in the slot, matching html element will be placed in there -->
    <header>
      <slot name="header">
        <h2>
          This is default element if there is no content is passed to this slot
        </h2>
      </slot>
    </header>
    <slot></slot>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>

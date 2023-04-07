<template>
  <header>
    <h1>Welcome to the chatvue</h1>
  </header>
</template>

<script>
export default {};
</script>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
h1 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
  padding: 10px;
}
</style>

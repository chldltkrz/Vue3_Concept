<template>
  <footer>
    <h2>V1. Made by Issac Choi</h2>
    <h4>Started at 230405</h4>
  </footer>
</template>

<script>
export default {};
</script>
<style>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
li:nth-child(even) {
  order: 2;
  margin-left: auto;
  width: 50%;
}
li:nth-child(odd) {
  order: 1;
  margin-right: auto;
  width: 50%;
}
</style>

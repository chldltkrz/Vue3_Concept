<template>
  <div>
    <ul>
      <li
        v-for="sm in savedMessages"
        :key="sm.id"
        :class="sm.isItMe ? 'left' : 'right'"
      >
        {{ sm.isItMe ? "Me" : "chatGPT" }} - {{ sm.message }}
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
<style scoped>
div {
  position: fixed;
  top: calc(5rem);
  left: 0;
  width: 100%;
  height: calc(100% - 15rem);
  width: 100%;
  background-color: lightgrey;
  color: white;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: scroll;
}
li {
  color: black;
  list-style-type: none;
}
li:right {
  order: 2;
  margin-left: auto;
}
li.left {
  order: 1;
  margin-right: auto;
}
</style>

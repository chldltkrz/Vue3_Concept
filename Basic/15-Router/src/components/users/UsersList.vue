<template>
  <button @click="confirmInput()">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changedSaved: false,
    };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changedSaved = true;
    },
  },
  // If not want to add navigationguard to the route level, one can add it in here
  beforeRouteEnter(to, from, next) {
    next();
  },
  // this will be called before leave the route(Also the other type of the navigationGuard)
  beforeRouteLeave(to, from, next) {
    if (this.changedSaved) next();
    else {
      const leave = confirm('Wanna go out?');
      next(leave);
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>

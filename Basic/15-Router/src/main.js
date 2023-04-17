import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import notFound from './components/nav/NotFound.vue';

const router = createRouter({
  // create browser default history managing behavior!
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      path: '/teams',
      component: TeamsList,
      //   alias: '/',
    },
    {
      path: '/users',
      component: UsersList,
    },
    // dynamic component variable
    {
      path: '/teams/:teamId',
      component: TeamMembers,
      props: true,
    },
    {
      path: '/:notFound(.*)',
      component: notFound,
    },
  ],
});
const app = createApp(App);
app.use(router);
app.mount('#app');

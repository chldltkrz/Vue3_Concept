import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import notFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
  // create browser default history managing behavior!
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/teams',
    },
    {
      name: 'teams',
      path: '/teams',
      meta: {
        needsAuth: true,
      },
      components: { default: TeamsList, footer: TeamsFooter },
      //   component: TeamsList,
      //   alias: '/',

      // for nested route use children keyword with the array as an input
      children: [
        // dynamic component variable
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },
    {
      path: '/users',
      components: { default: UsersList, footer: UsersFooter },
      // NavigationGuard that execute before enter the pag
      beforeEnter(to, from, next) {
        console.log('BeforeEnter');
        console.log(to, from);
        next();
      },
      //   component: UsersList,
    },

    {
      path: '/:notFound(.*)',
      component: notFound,
    },
  ],
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    console.log(to, from, savedPosition);
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
    // scroll to the top!
    // return { left: 0, top: 0 };
  },
});

// called before each navigation is called
router.beforeEach(function (to, from, next) {
  console.log('beforeEACh');
  console.log(to, from);
  if (to.meta.needsAuth) {
    console.log('NeedsAuthentication');
    next();
  } else {
    next();
  }
  //  I allow allow next page to open
  //   next();
  // Following Code will redirect all connect to the team-members/t2 page
  //   if (to.name === 'team-members') {
  //     next();
  //   } else {
  //     next({ name: 'team-members', params: { teamId: 't2' } });
  //   }
  next();
});
router.afterEach(function (to, from) {
  // like sending analytics data
  to = to + from;
});

const app = createApp(App);
app.use(router);
app.mount('#app');

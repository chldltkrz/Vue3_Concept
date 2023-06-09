import { createRouter, createWebHistory } from "vue-router";

import CoachDetails from "../pages/coaches/CoachDetails.vue";
import CoachesList from "../pages/coaches/CoachesList.vue";
import CoachRegistration from "../pages/coaches/CoachRegistration.vue";
import ContactCoach from "../pages/requests/ContactCoach.vue";
import RequestsReceived from "../pages/requests/RequestsReceived.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/coaches",
  },
  {
    path: "/coaches",
    component: CoachesList,
  },
  {
    path: "/coaches/:id",
    component: CoachDetails,
    props: true,
    children: [{ path: "contact", component: ContactCoach }],
  },
  {
    path: "/register",
    component: CoachRegistration,
  },
  {
    path: "/requests",
    component: RequestsReceived,
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CompetenceView from "../views/CompetenceView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectsView.vue"),
    },
    {
      path: "/competence",
      name: "competence",
      component: CompetenceView,
    },
    {
      path: "/projects/pec",
      name: "pec",
      component: () => import("../components/PecProject.vue"),
    },
    {
      path: "/welcome",
      name: "welcome",
      component: () => import("../components/TheWelcome.vue"),
    },
  ],
});

export default router;

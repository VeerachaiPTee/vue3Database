import { createRouter, createWebHistory } from "vue-router";
import CovidView from "../views/CovidView.vue";
import HomeView from "../views/HomeView.vue";
import CovidForm from "../components/CovidForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/covidform",
      name: "covidform",
      component: CovidForm,
    },
    {
      path: "/covidview",
      name: "covidview",
      component: CovidView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;

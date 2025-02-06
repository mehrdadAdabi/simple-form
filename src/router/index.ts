import { createRouter, createWebHistory } from "vue-router";

const home = () => import("@/views/home.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: home,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_UR),
  routes,
});

export default router;

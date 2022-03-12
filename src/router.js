import { createRouter, createWebHashHistory } from "vue-router";
import Card from "./view/Card.vue";
import NameCard from "./view/NameCard.vue";

const routes = [
  { path: "/", component: NameCard },
  { path: "/card", component: Card },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

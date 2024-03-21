import Home from "@/pages/Home.vue";

import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const routes = [
  { path: "/", component: Home },
  { path: "/pokemon", component: () => import("@/pages/Pokemon.vue") },
  { path: "/pokedex/:id", component: () => import("@/pages/PokemonPage.vue") },
];

export const router = createRouter({
  // 4. Provide the history implementation to use. We
  // are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

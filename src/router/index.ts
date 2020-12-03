import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "@/views/Home.vue";
import Socials from "@/views/Socials.vue";
import Projects from "@/views/Projects.vue";
import NotFound from "@/views/404.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/socials",
    name: "Socials",
    component: Socials,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "*",
    name: "404",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

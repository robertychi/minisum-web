import Vue from "vue";
import VueRouter from "vue-router";

import RootView from "@/views/RootView.vue";
import HomeView from "@/views/HomeView.vue";
import DownloadView from "@/views/DownloadView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: RootView,
    meta: {},
    children: [
      {
        path: "",
        component: HomeView,
        name: "HomeView",
      },
      {
        path: "Download",
        component: DownloadView,
        name: "DownloadView",
      },
    ],
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

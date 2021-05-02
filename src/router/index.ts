import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import CONTACT from "../views/Contact.vue";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "Error404",
  //   component: Error404
  // },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: CONTACT,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
  },
  {
    path: "/dashboard/item/:id(\\d+)?",
    name: "DashboardItemDetailsView",
    component: () =>
      import(
        /* webpackChunkName: "DashboardItemDetails" */ "../views/DashboardItemDetails.vue"
      ),
    props: (route) => ({
      id: route.params.id ? Number(route.params.id) : null,
    }),
  },
  {
    path: "/dashboard/item/:id(\\d+)/edit",
    name: "DashboardItemDetailsEdit",
    component: () =>
      import(
        /* webpackChunkName: "DashboardItemDetails" */ "../views/DashboardItemDetails.vue"
      ),
    props: (route) => ({ id: Number(route.params.id) }),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

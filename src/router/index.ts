import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "../views/public/Home.vue"

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
    name: "PublicAbout",
    component: () => import(/* webpackChunkName: "PublicAbout" */ "../views/public/About.vue"),
  },
  {
    path: "/admin",
    name: "AdminDashboard",
    component: () =>
      import(/* webpackChunkName: "AdminDashboard" */ "../views/admin/Dashboard.vue"),
    // beforeEnter and check is logged in and admin?
    children: [
      {
        path: "items",
        name: "AdminItemList",
        component: () =>
          import(/* webpackChunkName: "AdminItemList" */ "../views/admin/item/ItemList.vue"),
      },
      {
        path: "item/:id(\\d+)/edit",
        name: "AdminItemEdit",
        component: () =>
          import(/* webpackChunkName: "AdminItemEdit" */ "../views/admin/item/ItemEdit.vue"),
        props: (route) => ({
          id: route.params.id ? Number(route.params.id) : null,
        }),
      },
      {
        path: "item/create",
        name: "AdminItemCreate",
        component: () =>
          import(/* webpackChunkName: "AdminItemEdit" */ "../views/admin/item/ItemCreate.vue"),
      },
      {
        path: "reviews",
        name: "AdminReviews",
        component: () =>
          import(/* webpackChunkName: "AdminReviews" */ "../views/admin/review/ReviewList.vue"),
      },
    ],
  },
  {
    path: "/item/:id(\\d+)/edit",
    name: "PublicItemDetail",
    component: () =>
      import(/* webpackChunkName: "itemDetails" */ "../views/public/item/ItemDetail.vue"),
    props: (route) => ({
      id: route.params.id ? Number(route.params.id) : null,
    }),
  },
  {
    path: "/contact",
    name: "PublicContact",
    component: () => import(/* webpackChunkName: "PublicContact" */ "../views/public/Contact.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

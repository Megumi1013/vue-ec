import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Home from "../views/public/Home.vue"

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/:pathMatch(.*)*",
  //   name: "Error404",
  //   component: Error404
  // },

  // Home

  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "Home" */ "../views/public/Home.vue"),
  },

  // Contact

  {
    path: "/contact",
    name: "PublicContact",
    component: () => import(/* webpackChunkName: "PublicContact" */ "../views/public/Contact.vue"),
  },

  // Products

  {
    path: "/products",
    name: "PublicProductList",
    component: () =>
      import(/* webpackChunkName: "PublicProductList" */ "../views/public/product/ProductList.vue"),
  },
  {
    path: "/products/:id/:slug",
    name: "PublicProductDetail",
    component: () =>
      import(
        /* webpackChunkName: "PublicProductDetail" */ "../views/public/product/ProductDetail.vue"
      ),
    props: (route) => ({
      id: route.params.id ? Number(route.params.id) : null,
      slug: route.params.slug,
    }),
  },

  // Admin

  {
    path: "/admin",
    name: "AdminDashboard",
    component: () =>
      import(/* webpackChunkName: "AdminDashboard" */ "../views/admin/Dashboard.vue"),
    // beforeEnter and check is logged in and admin?
    children: [
      {
        path: "products",
        name: "AdminProductList",
        component: () =>
          import(
            /* webpackChunkName: "AdminProductList" */ "../views/admin/product/ProductList.vue"
          ),
      },
      {
        path: "products/:id(\\d+)/edit",
        name: "AdminProductEdit",
        component: () =>
          import(
            /* webpackChunkName: "AdminProductEdit" */ "../views/admin/product/ProductEdit.vue"
          ),
        props: (route) => ({
          id: route.params.id ? Number(route.params.id) : null,
        }),
      },
      {
        path: "products/create",
        name: "AdminProductCreate",
        component: () =>
          import(
            /* webpackChunkName: "AdminProductEdit" */ "../views/admin/product/ProductCreate.vue"
          ),
      },
      {
        path: "reviews",
        name: "AdminReviews",
        component: () =>
          import(/* webpackChunkName: "AdminReviews" */ "../views/admin/review/ReviewList.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

import { createRouter, createWebHistory } from "vue-router"
import { useHeroStore } from "../stores/hero";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("../views/LoginView.vue")
        },
        {
            path: "/",
            name: "adventure",
            component: () => import("../views/AdventureView.vue"),
            meta: { requiresAuth: true }
        },
        {
            path: "/adventure/location/:id",
            name: "location",
            component: () => import("../views/LocationView.vue"),
            meta: { requiresAuth: true }
        },
        {
            path: "/shop",
            name: "shop",
            component: () => import("../views/ShopView.vue"),
            meta: { requiresAuth: true }
        },
        {
            path: "/boss",
            name: "boss",
            component: () => import("../views/BossView.vue"),
            meta: { requiresAuth: true }
        },
        {
            path: "/:catchall(.*)*",
            name: "not found",
            component: () => import("../views/404View.vue")
        },
    ]
})

router.beforeEach((to) => {
    const { nickname } = useHeroStore()
      if (to.meta.requiresAuth && !nickname) return '/login'
})



export default router
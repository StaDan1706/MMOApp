import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "login",
            component: () => import("../views/AppLoginView.vue")
        },
        {
            path: "/adventure",
            name: "adventure",
            component: () => import("../views/AdventureView.vue")
        },
        {
            path: "/adventure/location/:id",
            name: "location",
            component: () => import("../views/LocationView.vue")
        },
        {
            path: "/shop",
            name: "shop",
            component: () => import("../views/ShopView.vue")
        },
        {
            path: "/boss",
            name: "boss",
            component: () => import("../views/BossView.vue")
        },
        {
            path: "/:catchall(.*)*",
            name: "not found",
            component: () => import("../views/404View.vue")
        },
    ]
})



export default router
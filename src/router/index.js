import { createRouter, createWebHistory } from "vue-router"
const AdventuresView = () => import("../views/AdventureView.vue")
const LocationView = () => import("../views/LocationView.vue")
const BossView = () => import("../views/BossView.vue")
const ShopView = () => import("../views/ShopView.vue")
const NotFound = () => import("../views/404View.vue")
const HeroView = () => import("../views/HeroView.vue")

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/hero",
            name: "hero",
            component: HeroView
        },
        {
            path: "/adventure",
            name: "adventure",
            component: AdventuresView
        },
        {
            path: "/location/:id",
            name: "location",
            component: LocationView
        },
        {
            path: "/shop",
            name: "shop",
            component: ShopView
        },
        {
            path: "/boss",
            name: "boss",
            component: BossView
        },
        {
            path: "/:catchall(.*)*",
            name: "not found",
            component: NotFound
        },
    ]
})

export default router
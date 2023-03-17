import { createRouter, createWebHistory } from "vue-router"
const LocationsView = () => import("../views/LocationsView.vue")
const LocationView = () => import("../views/LocationView.vue")
const BossView = () => import("../views/BossView.vue")
const ShopView = () => import("../views/ShopView.vue")
const MainView = () => import("../views/MainView.vue")
const NotFound = () => import("../views/404View.vue")

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "menu",
            component: MainView
        },
        {
            path: "/locations",
            name: "locations",
            component: LocationsView
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
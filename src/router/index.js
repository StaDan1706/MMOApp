import { createRouter, createWebHistory } from "vue-router"
import LocationsView from "../views/LocationsView.vue"
import LocationView from "../views/LocationView.vue"
import BossView from "../views/BossView.vue"
import ShopView from "../views/ShopView.vue"
import MainView from "../views/MainView.vue"
import NotFound from "../views/404View.vue"

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
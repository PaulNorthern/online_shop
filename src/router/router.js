import {createRouter, createWebHistory} from 'vue-router'
import Catalog from "@/components/Catalog";
import Card from "@/components/Card";

const routes = [
    {
        path: '/',
        name: 'catalog',
        component: Catalog
    },
    {
        path: '/cart',
        name: 'cart',
        component: Card,
        props: true
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
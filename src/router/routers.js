import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import("../views/Home.vue"),
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: "nav-link",
})
export default router;

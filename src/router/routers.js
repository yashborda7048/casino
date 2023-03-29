import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import("../views/Home.vue"),
    },
    {
        name: 'online_casinos',
        path: '/online_casinos',
        component: () => import("../views/Online_casinos.vue"),
    },
    {
        name: 'games',
        path: '/games',
        component: () => import("../views/Games.vue"),
    },
    {
        name: 'bonuses',
        path: '/bonuses',
        component: () => import("../views/Bonuses.vue"),
    },
    {
        name: 'guides',
        path: '/guides',
        component: () => import("../views/Guides.vue"),
    },
    {
        name: 'complaints',
        path: '/complaints',
        component: () => import("../views/Complaints.vue"),
    },
    {
        name: 'user_reviews',
        path: '/user_reviews',
        component: () => import("../views/User_reviews.vue"),
    },
    {
        name: 'news',
        path: '/news',
        component: () => import("../views/News.vue"),
    },
   
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: "nav-link",
})
export default router;

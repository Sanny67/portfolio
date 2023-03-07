import { createRouter, createWebHistory } from "vue-router";
import homePage from '../components/pages/home/index.vue';
import loginPage from '../components/auth/login.vue';
import dashboard from '../components/pages/user/dashboard.vue';
import aboutPage from '../components/pages/about/index.vue';
import notFoundPage from '../components/pages/static/notFound.vue';

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/login',
        component: loginPage
    },
    {
        path: '/dashboard',
        component: dashboard
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/:pathMatch(.*)*',
        component: notFoundPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
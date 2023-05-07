import { createRouter, createWebHistory } from "vue-router";
import homePage from '../components/pages/home/index.vue';
import loginPage from '../components/auth/login.vue';
import dashboard from '../components/pages/user/dashboard.vue';
import clientHome from '../components/pages/user/home.vue';
import aboutPage from '../components/pages/about/index.vue';
import notFoundPage from '../components/pages/static/notFound.vue';
// import store from '../store';

const routes = [
    {
        path: '/',
        name: "Home",
        component: homePage,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/login',
        name: "Login",
        component: loginPage,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/clienthome',
        name: "clientHome",
        component: clientHome,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/dashboard',
        name: "dashboard",
        component: dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/about',
        name: "about",
        component: aboutPage,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/:pathMatch(.*)*',
        name: "notFound",
        component: notFoundPage,
        meta: {
            requiresAuth: false
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from) => {

    console.log("routes")
    console.log(to)
    console.log(from)
    console.log(localStorage.getItem('token'))
    
    if(to.meta.requiresAuth && !localStorage.getItem('token')){
        return {name: 'Login'}
    }

    if(to.meta.requiresAuth == false && localStorage.getItem('token')){
        return {name: 'clientHome'}
    }

});

export default router;
import { createRouter, createWebHistory } from 'vue-router'
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Home from "./pages/Home.vue";
import UserList from "./pages/UserList.vue";
import NoSidebar from "./layouts/NoSidebar.vue";
import Default from "./layouts/Default.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name:'home',
            component: Home,
            meta: {
                layout: 'no-sidebar'
            }
        },
        {
            path: '/users',
            name:'users',
            component: UserList,
            meta: {
                layout: 'default'
            }
        },
        {
            path: '/contact',
            name:'contact',
            component: Contact,
            meta: {
                layout: 'default'
            }
        },
        {
            path: '/about',
            name:'about',
            component: About,
            meta: {
                layout: 'default'
            }
        },
        {
            path: '/',
            name:'',
            component: Home,
            meta: {
                layout: 'no-sidebar'
            }
        },
    ]
});

export default router;

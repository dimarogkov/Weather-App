import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '@/views/Home';
import Weather from '@/views/Weather';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/weather/:slug',
        name: 'weather',
        component: Weather,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Guide from './views/Guide.vue'
import Play from './views/Play.vue'
import About from './views/About.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/guide', component: Guide },
    { path: '/play', component: Play },
    { path: '/about', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

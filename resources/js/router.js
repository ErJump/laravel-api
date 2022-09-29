import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import About from './pages/About.vue';
import Home from './pages/Home.vue';
import SinglePost from './pages/SinglePost.vue';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/posts/:id',
            name: 'singlepost',
            component: SinglePost
        }
    ]
});

export default router;
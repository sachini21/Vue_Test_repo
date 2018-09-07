import Vue from 'vue';
import VueRouter from 'vue-router';

import Hello from './components/Hello.vue';
import HelloWorld from './components/HelloWorld.vue';
import Auth from './components/auth/Auth.vue';
import Register from './components/auth/Register.vue';
import Login from './components/auth/Login.vue';
import Dash from './components/dash/Dash.vue';
import Newsfeed from './components/dash/Newsfeed.vue';


Vue.use(VueRouter);

var router = new VueRouter({
    routes: [
        {
            path: '/hello',
            component: Hello
        },
        {
            path: '/helloworld',
            component: HelloWorld
        },
        {
            path: '/auth',
            component: Auth,
            redirect: '/auth/login',
            children: [
                {
                    path: 'register',
                    component: Register,
                    meta:{ requiresGuest: true}
                },
                {
                    path: 'login',
                    component: Login,
                    meta: { requiresGuest: true}
                }
            ]

        },
        {
            path: '/',
            component: Dash,
            redirect: '/newsfeed',
            children: [
                {
                    path: 'newsfeed',
                    component: Newsfeed,
                    meta: { requiresAuth: true }
                }
            ]
        }
    ]

});

export default router;
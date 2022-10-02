import Home from "@/pages/Home";
import ThreadShow from "@/pages/ThreadShow";
import NotFound from "@/pages/NotFound";
import Forum from "@/pages/Forum";

import { createRouter, createWebHistory } from "vue-router";
import sourceData from '@/data.json';

const routes = [
    {
        path: '/',
        name:'Home',
        component: Home
    },
    {
        path: '/forum/:id',
        name:'Forum',
        component: Forum,
        props: true,
    },
    {
        path: '/thread/:id',
        name:'ThreadShow',
        component: ThreadShow,
        props: true,
        beforeEnter: (to, from, next) => {
            const threadExist = sourceData.threads.find((thread) => thread.id === to.params.id)
            if (threadExist){
                return next();
            } else{
                next({ name:'PageNotFound', params: { pathMatch: to.path.substring(1).split('/') }})
            }
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'PageNotFound',
        component: NotFound
    },
]

export default createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})
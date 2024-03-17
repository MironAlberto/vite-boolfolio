import { createRouter, createWebHistory } from "vue-router";

import IndexPage from './pages/IndexPage.vue';
import ProjectPage from './pages/ProjectPage.vue';
import ShowProjectPage from './pages/ShowProjectPage.vue';
import NotFoundPage from './pages/NotFound.vue';

const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: IndexPage
        },
        {
            path: '/projects',
            name: 'projects.index',
            component: ProjectPage
        },
        {
            path: '/projects/:id',
            name: 'projects.show',
            component: ShowProjectPage
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage
        }

    ]
});

export { router };
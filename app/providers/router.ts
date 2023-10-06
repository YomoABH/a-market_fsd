import { createRouter, createWebHashHistory } from 'vue-router';
import { routes } from '@pages/index.ts';

const router = createRouter({
	history: createWebHashHistory(),
	routes,
})

export { router }
import Routing from './index.vue';

const routes = [
	{ path: '/', component: () => import('./main-page/index.ts') },
	{ path: '/card', component: () => import('./card-page/index.ts') },
	{
		path: '/login',
		component: () => import('./login-page/index.ts'),
		meta: {
			layout: 'none',
			type: 'login'
		}
	},
	{
		path: '/registration',
		component: () => import('./login-page/index.ts'),
		meta: {
			layout: 'none',
			type: 'registration'
		}
	},
];

export { routes, Routing }
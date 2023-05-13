import { createRouter, createWebHistory } from 'vue-router';
import autoRoutes from '~pages';


const routes = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/',
    component: () => import('@/components/layout'),
    children: autoRoutes
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/components/not-found'),
    hidden: true,
    meta: {
      title: '404',
      routerTabIgnore: true 
    }
  }
];
const router = createRouter({ 
  history: createWebHistory(import.meta.env.BASE_URL),
  routes 
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/components/MainPage';

const routes = [
  {
    path: '/',
    name: 'main-page',
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

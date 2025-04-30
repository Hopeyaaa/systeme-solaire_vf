import { createRouter, createWebHistory } from 'vue-router';
import BodyListView from '../views/BodyListView.vue';
import BodyDetailView from '../views/BodyDetailView.vue';

const routes = [
  { path: '/', name: 'Home', component: BodyListView },
  { path: '/body/:id', name: 'BodyDetail', component: BodyDetailView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import AboutComponent from '../components/AboutComponent.vue';

const Home = { template: '<div>Home</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
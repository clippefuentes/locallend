import { createRouter, createWebHistory } from 'vue-router';
import AboutComponent from '../components/AboutComponent.vue';
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/about', component: AboutComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import AboutComponent from '../views/AboutComponent.vue';
import HelloWorld from '../views/HelloWorld.vue';
import Login from '../views/Login/Login.vue';
import Register from '../views/Register/Register.vue';
import Marketplace from '../views/Marketplace/Marketplace.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/about', component: AboutComponent },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/marketplace', component: Marketplace },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
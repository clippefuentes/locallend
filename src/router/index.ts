import { createRouter, createWebHistory } from 'vue-router';
import AboutComponent from '../views/AboutComponent.vue';
import HelloWorld from '../views/HelloWorld.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/about', component: AboutComponent },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
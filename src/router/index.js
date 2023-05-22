import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Contact from '../views/Contact.vue';
import Cart from '../views/Cart.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Home,
  },
  {
    path: '/products',
    name: 'ProductsView',
    component: Products,
  },
  {
    path: '/contact',
    name: 'ContactView',
    component: Contact,
  },
  {
    path: '/cart',
    name: 'CartView',
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

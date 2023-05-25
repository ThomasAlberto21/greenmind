import Home from '../views/Home.vue';
import Products from '../views/Products.vue';
import Contact from '../views/Contact.vue';
import Cart from '../views/Cart.vue';
import AllProductDetail from '../views/AllProductDetail.vue';
import BestProductDetail from '../views/BestProductDetail.vue';
import TrendingProductDetail from '../views/TrendingProductDetail.vue';
import SuccessOrder from '../views/SuccessOrder.vue';
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
    path: '/products/:id',
    name: 'AllProductDetailView',
    component: AllProductDetail,
  },
  {
    path: '/best_products_detail/:id',
    name: 'BestProductDetailView',
    component: BestProductDetail,
  },
  {
    path: '/trending_products_detail/:id',
    name: 'TrendingProductDetailView',
    component: TrendingProductDetail,
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
  {
    path: '/success_order',
    name: 'SuccessOrderView',
    component: SuccessOrder,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

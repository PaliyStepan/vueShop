import Vue from 'vue';
import VueRouter from 'vue-router';
import Catalog from '../components/catalog/catalog';
import Cart from '../components/cart/cart';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: Catalog
  },
  {
    path: '/cart',
    name: 'Cart',
    props: true,
    component: Cart
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router

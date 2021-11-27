import { createRouter, createWebHistory } from "vue-router";
import Menu from "../views/Menu.vue";
import ItemPage from "../views/ItemPage.vue";
import Shop from '../views/Shop.vue';

const routes = [
  {
    path: "/",
    name: "Menu",
    component: Menu,
  },
  {
    path: "/item/:id",
    name: "ItemPage",
    component: ItemPage,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  }

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router; 
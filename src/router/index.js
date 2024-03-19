import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/user/HomeView.vue";
import CartView from "@/views/user/CartView.vue";
import CheckoutView from "@/views/user/CheckoutView.vue";
import ProfileView from "@/views/user/ProfileView.vue";
import SearchView from "@/views/user/SearchView.vue";
import SuccessView from "@/views/user/SuccessView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchView,
    },
    {
      path: "/success",
      name: "success",
      component: SuccessView,
    },
  ],
});

export default router;

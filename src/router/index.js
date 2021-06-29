import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/auth/Login.vue'
import SellProductsPage from "../views/SellProductsPage";
import PartsPage from "../views/PartsPage";
import StockPage from "../views/StockPage";
import ProfileLayout from "../layouts/ProfileLayout";
import ViewProfile from "../views/profile/ViewProfile";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfileLayout,
    children: [
      {
        path: '/',
        name: 'ViewProfile',
        component: ViewProfile,
      }
    ]
  },
  {
    path: '/sell',
    name: 'SellProducts',
    component: SellProductsPage
  },

  {
    path: '/parts',
    name: 'Parts',
    component: PartsPage
  },

  {
    path: '/stock',
    name: 'Stock',
    component: StockPage
  },
]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router

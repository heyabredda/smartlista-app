import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Home from '../views/Home.vue';
import MyList from '../views/MyList.vue';
import Smartlist from '../views/Smartlist.vue';
import Profile from '../views/Profile.vue';
import JoinSmartlist from '../views/JoinSmartlist.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login/',
    component: Login,
  },
  {
    path: '/signup',
    component: Signup
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/home',
        redirect: '/smartlist'
      },
      {
        path: '/smartlist',
        component: Smartlist
      }
    ]
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: "/smartlist/:id",
    component: MyList
  },
  {
    path: '/smartlist/join/:code',
    component: JoinSmartlist
  }
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

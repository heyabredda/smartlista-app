import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Home from '../views/Home.vue';
import MyList from '../views/MyList.vue';
import Smartlist from '../views/Smartlist.vue';
import Profile from '../views/Profile.vue';
import JoinSmartlist from '../views/JoinSmartlist.vue';

import { Storage } from '@ionic/storage';
import axios from 'axios';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },
  {
    path: '',
    redirect: '/smartlist',
    name: 'smartlist',
    component: Home,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'smartlist',
        component: Smartlist,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: '/smartlist/:id',
        component: MyList,
        meta: {
          requiresAuth: true
        },
      },
      {
        path: '/smartlist/:id/join/:code',
        component: JoinSmartlist,
        meta: {
          requiresAuth: true
        },
      },
    ]
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: '/smartlist/join/:code',
  //   component: JoinSmartlist
  // }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from, next) => {
  const store = new Storage();
  await store.create();
  // const token = await store.remove('authorization_token');
  const token = await store.get('authorization_token');

  // Fetch token and set it to the axios instance
  // to avoid sending it to every request
  axios.defaults.headers.common = {
    'Authorization': `Bearer ${token}`
  };

  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!token) {
      console.log('User is not authenticated');
      next({ name: 'login' })
    } else {
      console.log('User is authenticated');
      // go to wherever I'm going  
      next()
    }
  } else {
    console.log('Auth is not required, carry on with request');
    // does not require auth, make sure to always call next()!

    if (token) {
      if (to.name === 'login' || to.name === 'signup') {
        router.push('/');
      }
    }

    next()
  }
})

export default router

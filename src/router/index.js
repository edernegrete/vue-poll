import Vue from 'vue';
import Router from 'vue-router';
import App from '../pages/Main';
import Admin from '../pages/Dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App,
    },
    {
      path: '/dashboard',
      name: 'Admin',
      component: Admin,
    },
  ],
});

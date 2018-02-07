import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Autocomplete from '@/components/Autocomplete';
import RouteDetails from '@/components/RouteDetails';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          // Autocomplete will be rendered inside Home's <router-view>
          path: '',
          component: Autocomplete,
        },
        {
          // RouteDetails will be rendered inside Home's <router-view>
          path: '/route/:id',
          component: RouteDetails,
        },
      ],
    },
  ],
});

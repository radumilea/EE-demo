import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Victory from './views/Victory.vue';
import Failed from './views/Failed.vue';
import store from './store';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: (to, from, next) => {
        // IF Hero HP <= 0 redirect to failed page
        const heroHP = store.state.hero.HP;
        if (heroHP <= 0) {
          next('/failed');
        }

        // IF Enemy HP <= 0 redirect to victory page
        const enemyHP = store.state.enemy.HP;
        if (enemyHP <= 0) {
          next('/victory');
        }

        // Go to Home page
        next();
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/victory',
      name: 'victory',
      component: Victory,
    },
    {
      path: '/failed',
      name: 'failed',
      component: Failed,
    },
  ],
});

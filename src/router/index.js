import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },

  routes: [

    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: () => import('../views/Cadastro.vue'),
    },
    {
      path: '/lista-usuarios',
      name: 'Lista Usuarios',
      component: () => import('../views/Lista-usuarios.vue'),
    },

  ],
});

export default router;

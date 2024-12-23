import { createRouter, createWebHistory } from 'vue-router'
 

const router = createRouter({
  //history: createWebHistory(import.meta.env.VITE_BASE_URL),
 history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'login',component: () => import('../components/Login.vue'),
    },
    {
      path: '/direcciones',
      name: 'direcciones',component: () => import('../views/DireccionesList.vue'),
    },
    {
      path: '/nuevo',
      name: 'nuevo',component: () => import('../views/DireccionesAdd.vue'),
    },
    {
      path: '/editar/:id',
      name: 'editar',component: () => import('../views/DireccionesEdit.vue'),
    }     
  ],
})

export default router
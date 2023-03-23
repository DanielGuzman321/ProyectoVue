import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import CrearCliente from '../components/CrearCliente.vue'
import ListarCliente from '../components/ListarCliente.vue'
import editarCliente from '../components/EditarCliente.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: DashboardView
    },
    {
      path: '/listarcliente',
      name: 'listarcliente',
      component: ListarCliente
    },
    {
      path: '/crearcliente',
      name: 'crearcliente',
      component: CrearCliente
    },
    {
      path: '/editarcliente',
      name: 'editarcliente',
      component: editarCliente
    }
  ]
})

export default router

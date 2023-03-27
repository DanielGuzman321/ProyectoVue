import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import CrearCliente from '../components/CrearCliente.vue'
import ListarCliente from '../components/ListarCliente.vue'
import EditarCliente from '../components/EditarCliente.vue'
import ListarDepartamento from '../components/Departamento/ListarDepartamento.vue'
import CrearDepartamento from '../components/Departamento/CrearDepartamento.vue'
import EditarDepartamento from '../components/Departamento/EditarDepartamento.vue'
import ListarEmpleado from '../components/Empleado/ListarEmpleado.vue'
import CrearEmpleado from '../components/Empleado/CrearEmpleado.vue'
import EditarEmpleado from '../components/Empleado/EditarEmpleado.vue'
import ListarFactura from '../components/Factura/ListarFactura.vue'
import CrearFactura from '../components/Factura/CrearFactura.vue'
import EditarFactura from '../components/Factura/EditarFactura.vue'
import ListarPuesto from '../components/Puesto/ListarPuesto.vue'
import CrearPuesto from '../components/Puesto/CrearPuesto.vue'
import EditarPuesto from '../components/Puesto/EditarPuesto.vue'
import ListarRol from '../components/Rol/ListarRoles.vue'
import CrearRol from '../components/Rol/CrearRoles.vue'
import EditarRol from '../components/Rol/EditarRol.vue'
import ListarUsuario from '../components/Usuario/ListarUsuario.vue'
import EditarUsuario from '../components/Usuario/EditarUsuario.vue'
import CrearUsuario from '../components/Usuario/CrearUsuario.vue'

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
      path: '/editar/:pkCliente',
      name: 'editar',
      component: EditarCliente
    },
    {
      path: '/listardepartamento',
      name: 'listardepartamento',
      component: ListarDepartamento
    },
    {
      path: '/creardepartamento',
      name: 'creardepartamento',
      component: CrearDepartamento
    },
    {
      path: '/editardepartamento/:pkDepartamento',
      name: 'editardepartamento',
      component: EditarDepartamento
    },
    {
      path: '/listarempleado',
      name: 'listarempleado',
      component: ListarEmpleado
    },
    {
      path: '/crearempleado',
      name: 'crearempleado',
      component: CrearEmpleado
    },
    {
      path: '/editarempleado/:pkEmpleado',
      name: 'editarempleado',
      component: EditarEmpleado
    },
    {
      path: '/listarfactura',
      name: 'listarfactura',
      component: ListarFactura
    },
    {
      path: '/crearfactura',
      name: 'crearfactura',
      component: CrearFactura
    },
    {
      path: '/editarFactura/:pkFactora',
      name: 'editarFactura',
      component: EditarFactura
    },
    {
      path: '/listarpuesto',
      name: 'listarpuesto',
      component: ListarPuesto
    },
    {
      path: '/crearpuesto',
      name: 'crearpuesto',
      component: CrearPuesto
    },
    {
      path: '/editarPuesto/:pkPuesto',
      name: 'editarPuesto',
      component: EditarPuesto
    },
    {
      path: '/crearrol',
      name: 'crearrol',
      component: CrearRol
    },
    {
      path: '/listarrol',
      name: 'listarrol',
      component: ListarRol
    },
    {
      path: '/editarRol/:pkRol',
      name: 'editarRol',
      component: EditarRol
    },
    {
      path: '/editarusuario/:pkUsuario',
      name: 'editarusuario',
      component: EditarUsuario
    },
    {
      path: '/listarusuario',
      name: 'listarusuario',
      component: ListarUsuario
    },
    {
      path: '/crearusuario',
      name: 'crearusuario',
      component: CrearUsuario
    },

  ]
})

export default router

import { createRouter, createWebHistory} from 'vue-router'

import EquiposView from '../views/EquiposView.vue'

import NuevoEquipoView from '../views/NuevoEquipoView.vue'

import EquipoDetalleView from '../views/EquipoDetalleView.vue'


const routes = [
  {
    path: '/',
    component: EquiposView,
  },
  {
  path: '/equipos/nuevo',
  component: NuevoEquipoView
},{
 path: '/equipos/:id',
 component: EquipoDetalleView,
}

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
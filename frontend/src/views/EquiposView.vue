<script setup>

import { ref, computed, onMounted } from 'vue'

import {
  obtenerEquipos,
  eliminarEquipo,
} from '../services/equiposServices'

const equipos = ref([])

const cargando = ref(true)

const error = ref('')

const busqueda = ref('')

const filtroEstado = ref('')

const filtroTipo = ref('')

const equiposFiltrados = computed(() => {

  return equipos.value.filter(equipo => {

    const texto = busqueda.value.toLowerCase()

    const coincideBusqueda =

      equipo.nombre.toLowerCase().includes(texto)

      ||

      equipo.codigoInventario
        .toLowerCase()
        .includes(texto)

    const coincideEstado =

      !filtroEstado.value

      ||

      equipo.estado === filtroEstado.value

    const coincideTipo =

      !filtroTipo.value

      ||

      equipo.tipo === filtroTipo.value

    return (

      coincideBusqueda

      &&

      coincideEstado

      &&

      coincideTipo

    )

  })

})

async function cargar() {

  try {

    cargando.value = true

    error.value = ''

    equipos.value = await obtenerEquipos()

  } catch (e) {

    error.value = e.message

  } finally {

    cargando.value = false
  }

}

async function borrar(id) {

  if (!confirm('¿Eliminar equipo?')) return

  try {

    await eliminarEquipo(id)

    await cargar()

  } catch (e) {

    error.value = e.message

  }

}

onMounted(cargar)

</script>

<template>

<div class="container">

<h1>Inventario Tecnológico</h1>

<p>

Total:

<strong>

{{ equiposFiltrados.length }}

</strong>

equipo(s)

</p>

<div class="filtros">

<input

v-model="busqueda"

placeholder="Buscar por nombre o código"

/>

<select v-model="filtroTipo">

<option value="">

Todos los tipos

</option>

<option>

Notebook

</option>

<option>

PC

</option>

<option>

Monitor

</option>

<option>

Proyector

</option>

</select>

<select v-model="filtroEstado">

<option value="">

Todos los estados

</option>

<option>

Disponible

</option>

<option>

En uso

</option>

<option>

Mantención

</option>

<option>

Baja

</option>

</select>

</div>

<p v-if="cargando">

Cargando...

</p>

<p v-else-if="error">

{{ error }}

</p>

<table v-else>

<thead>

<tr>

<th>Código</th>

<th>Nombre</th>

<th>Tipo</th>

<th>Estado</th>

<th>Ubicación</th>

<th>Acciones</th>

</tr>

</thead>

<tbody>

<tr

v-for="equipo in equiposFiltrados"

:key="equipo.id"

>

<td>

{{ equipo.codigoInventario }}

</td>

<td>

{{ equipo.nombre }}

</td>

<td>

{{ equipo.tipo }}

</td>

<td>

{{ equipo.estado }}

</td>

<td>

{{ equipo.ubicacion }}

</td>

<td>

<RouterLink
 :to="`/equipos/${equipo.id}`"
>
 Ver
</RouterLink>


<button
@click="borrar(equipo.id)"
>

Eliminar

</button>

</td>

</tr>

</tbody>

</table>

</div>

</template>
<script setup>

import { ref, onMounted } from 'vue'

import { useRoute } from 'vue-router'

import {
  obtenerEquipo,
  actualizarEquipo
} from '../services/equiposServices'

const route = useRoute()

const equipo = ref(null)

const error = ref('')

const guardando = ref(false)

async function cargar() {

  try {

    equipo.value =
      await obtenerEquipo(
        route.params.id
      )

  } catch (e) {

    error.value = e.message

  }

}

async function guardar() {

  try {

    guardando.value = true

    await actualizarEquipo(
      route.params.id,
      equipo.value
    )

    alert(
      'Equipo actualizado correctamente'
    )

  } catch (e) {

    error.value = e.message

  } finally {

    guardando.value = false

  }

}

onMounted(cargar)

</script>


<template>

<div>

<div class="header-detalle">

  <h1>
    Editar Equipo
  </h1>

  <RouterLink to="/">
    <button class="btn-primary">
      ← Volver al Inventario
    </button>
  </RouterLink>

</div>



<p v-if="error">

{{ error }}

</p>

<form
v-if="equipo"
@submit.prevent="guardar"
>

<input
v-model="equipo.codigoInventario"
/>

<input
v-model="equipo.nombre"
/>

<input
v-model="equipo.marca"
/>

<input
v-model="equipo.modelo"
/>

<input
v-model="equipo.ubicacion"
/>

<select
v-model="equipo.tipo"
>

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

<select
v-model="equipo.estado"
>

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

<input
type="date"
v-model="equipo.fechaAdquisicion"
/>

<textarea
v-model="equipo.observaciones"
></textarea>

<button
:disabled="guardando"
>

{{ guardando
 ? 'Guardando...'
 : 'Guardar cambios'
}}

</button>

</form>

</div>

</template>
<script setup>

import { ref } from 'vue'

import { useRouter } from 'vue-router'

import {
  crearEquipo
} from '../services/equiposServices'

const router = useRouter()

const error = ref('')

const guardando = ref(false)

const equipo = ref({

  codigoInventario: '',

  nombre: '',

  tipo: '',

  marca: '',

  modelo: '',

  ubicacion: '',

  estado: 'Disponible',

  fechaAdquisicion: '',

  observaciones: ''

})

async function guardar() {

  try {

    guardando.value = true

    error.value = ''

    await crearEquipo(equipo.value)

    router.push('/')

  } catch (e) {

    error.value = e.message

  } finally {

    guardando.value = false

  }

}

</script>

<template>

<div class="container">

<h1>Nuevo Equipo</h1>

<form @submit.prevent="guardar">

<input
v-model="equipo.codigoInventario"
placeholder="Código Inventario"
required
/>

<input
v-model="equipo.nombre"
placeholder="Nombre"
required
/>

<select
v-model="equipo.tipo"
required
>

<option value="">
Seleccione tipo
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

<input
v-model="equipo.marca"
placeholder="Marca"
/>

<input
v-model="equipo.modelo"
placeholder="Modelo"
/>

<input
v-model="equipo.ubicacion"
placeholder="Ubicación"
/>

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
placeholder="Observaciones"
></textarea>

<p v-if="error">

{{ error }}

</p>

<button
:disabled="guardando"
>

{{ guardando ? 'Guardando...' : 'Guardar Equipo' }}

</button>

</form>

</div>

</template>
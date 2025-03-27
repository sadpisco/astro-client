<template>
  <div>
    <h1>Contador: {{ count }}</h1>
    <button @click="increment">Incrementar</button>
    <button @click="decrement">Decrementar</button>
    <button @click="reset">Resetear</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Definir una variable reactiva para el contador
const count = ref(0);

// Función para incrementar el contador
const increment = () => {
  count.value++;
};

// Función para decrementar el contador
const decrement = () => {
  count.value--;
};

// Función para resetear el contador
const reset = () => {
  count.value = 0;
};
</script>

<style scoped>
button {
  margin: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}
</style>

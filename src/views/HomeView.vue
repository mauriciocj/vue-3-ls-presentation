<script setup lang="ts">
import { ref } from 'vue';

const message = ref('hey!')
const showMessage = ref(false)

const toggleMessage = () => {
  showMessage.value = !showMessage.value;
}
</script>

<template>
  <main class="container">
    <h1>Home</h1>
    <span v-if="showMessage">{{ message }}</span>
    <!-- <button @click="toggleMessage">Toggle message</button> -->
    <label for="toggle">Toggle message</label>
    <input type="checkbox" name="toggle" v-model="showMessage">
  </main>
</template>

<style scoped>

</style>

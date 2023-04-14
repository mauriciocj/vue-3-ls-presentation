<script setup lang="ts">
import { provide } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
provide('key', 'value')
</script>

<template>
  <nav>
    <ul>
      <li>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="40" height="40" />
      </li>
    </ul>
    <ul>
      <li>
        <RouterLink to="/" role="button">
          Home
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/posts" role="button">
          Posts
        </RouterLink>
      </li>
    </ul>
  </nav>

  <RouterView />

  <footer>
    <span>Learning Session Encora</span>
    <span>Maurício Cantú</span>
    <span>14Abr2023</span>
  </footer>
</template>

<style scoped>
  nav {
    display: flex;
  }

  footer {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    padding: 16px;
    background-color: var(--primary);
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

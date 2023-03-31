<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavBar from './components/layout/TheNavBar.vue';
</script>

<template>
  <header>
    <TheNavBar />
  </header>

  <RouterView />
</template>

<style scoped>
</style>

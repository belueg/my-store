<script setup>
import { RouterView } from 'vue-router'
import TheNavBar from './components/layout/TheNavBar.vue';
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <header>
    <TheNavBar />
  </header>

  <RouterView :key="route.path" />
</template>

<style scoped></style>

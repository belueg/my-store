<script setup>
defineProps({
  product: {
    type: String,
    required: true
  },

})
</script>

<template>
  <h2>{{ product.name }}</h2>
  <img :src="`${product.image}`" />
  <RouterLink>Ver Producto</RouterLink>
</template>

<style scoped></style>

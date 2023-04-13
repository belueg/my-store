<script setup>
import { useCartStore } from '../stores/useCartStore'
const store = useCartStore()
</script>

<template>
  <h1>Cart</h1>
  <p>{{ store.cart }}</p>
</template>

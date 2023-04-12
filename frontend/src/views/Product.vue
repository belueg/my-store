<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const id = route.params.productId
console.log(id)
const product = ref({})
onMounted(async () => {
  const { data } = await axios.get(`http://localhost:3001/api/products/${id}`)
  product.value = data

})
</script>

<template>
  <h1>{{ product.name }}</h1>
  <img :src="`${product.image}`" alt="product img">
</template>

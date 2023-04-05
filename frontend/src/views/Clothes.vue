<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router';

const clothes = ref([])
const route = useRoute();

console.log(route.params.id)
async function getClothes(id) {
  const { data } = await axios.get(`http://localhost:3001/api/categories/${id}`)
  clothes.value = data
}

onMounted(async () => {
  await getClothes(route.params.id)
})
</script>

<template>
  <h1>clothes view {{ clothes.name }}</h1>
  <div v-for="clothe in clothes.products">{{ clothe.name }}</div>
</template>

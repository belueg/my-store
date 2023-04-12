<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router';
import ProductBox from '../components/ProductCard.vue';

const clothes = ref([])
const route = useRoute();

async function getClothes(id) {
  const { data } = await axios.get(`http://localhost:3001/api/categories/${id}`)
  clothes.value = data
}

onMounted(async () => {
  await getClothes(route.params.id)
})
</script>

<template>
  <div class="container">
    <h1> {{ clothes.name }}</h1>
    <div class="cardContainer">
      <ProductBox v-for="item in clothes.products" :product="item" />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  width: 80%;
  text-align: center;
}

.cardContainer {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

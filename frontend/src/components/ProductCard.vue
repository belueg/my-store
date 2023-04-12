<script setup>
import { computed } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  },

})

const productSlug = computed(() => {
  const lowerName = props.product.name.toLowerCase()
  const slug = lowerName.split(" ").join("-")
  return slug
})

</script>

<template>
  <RouterLink :to="{
    name: 'product', params: { productId: product.id, productSlug }
  }">
    <div class="product-card">
      <h2 class="product-card__title">{{ product.name }}</h2>
      <img class="product-card__image" :src="`${product.image}`" />
      <span class="product-card__price">{{ product.price }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.product-card {
  border: 1px solid #b8b8b870;
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 232px;
  margin: 10px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}


.product-card__title {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.product-card__image {
  width: 80px;
  height: 80px;
  height: auto;
  margin-bottom: 1rem;
}

.product-card__price {
  font-weight: bold;
  font-size: 1.25rem;
  color: green;
}
</style>

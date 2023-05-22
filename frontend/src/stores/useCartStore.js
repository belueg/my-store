import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cart = ref([])

  function addToCart(product) {
    cart.value.push(product)
  }

  const cartCount = computed(() => cart.value.length)


  return { cart, addToCart, cartCount }
})

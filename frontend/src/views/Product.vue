<script setup>
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useCartStore } from '../stores/useCartStore';

const route = useRoute()
const store = useCartStore()

const id = route.params.productId
const product = ref({})
const amount = ref(0)


onMounted(async () => {
  const { data } = await axios.get(`http://localhost:3001/api/products/${id}`)
  product.value = data

})

function decrease() {
  if (amount.value > 0) amount.value--
}


const productCart = computed(() => {
  return {
    name: product.value.name,
    price: product.value.price,
    amount: amount.value
  }
})


function addToCartProduct(productCart) {
  store.addToCart(productCart)
  amount.value = 0
}
</script>

<template>
  <button class="product__button back" @click="$router.back()">back</button>
  <div class="container">
    <h1 class="product__title">{{ product.name }}</h1>
    <div class="product">
      <img class="product__img" :src="`${product.image}`" width="300" alt="product img">

      <div class="product__details">

        <div class="product__price">
          <b>Price</b>
          <span>${{ product.price }}</span>
        </div>

        <div class="product__amount">
          <b>Amount</b>
          <button @click="decrease">-</button>
          <span>{{ amount }}</span>
          <button @click="amount++">+</button>
        </div>

        <button class="product__button" @click="addToCartProduct(productCart)">Add to cart</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.product {
  display: flex;
  align-items: flex-end;
  justify-content: center;

  &__title {
    margin-bottom: 40px;
  }

  &__details {
    height: 100%;
    width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
  }

  &__price,
  &__amount {
    margin-bottom: 20px;

    b {
      margin-right: 10px;
    }

  }

  &__amount {
    span {
      margin: 0px 5px;
    }

    button {
      background-color: none;
      border: none;
      border-radius: 50%;
      padding: 5px 10px;
      cursor: pointer;

    }

  }

  &__button {
    border: 1px solid black;
    background-color: white;
    border-radius: 6px;
    padding: 5px;
    cursor: pointer;

  }
}

.back {
  margin: 20px;
}
</style>



<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
const menuItems = ref([])

onMounted(async () => {
  try {
    const { data } = await axios.get('http://localhost:3001/api/categories')
    menuItems.value = data
  } catch (error) {
    console.error(error)
  }
})

</script>

<template>
  <div class="nav">
    <RouterLink to="/">Brand</RouterLink>
    <div class="nav__list">
      <ul class="nav__list--items">
        <RouterLink :to="{ name: 'clothes', params: { id: item.id } }" class="nav__list--item" v-for="item in menuItems">
          {{ item.name }}
        </RouterLink>
        <li class="nav__list--item">Login</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.nav {
  background-color: aquamarine;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  &__list {
    width: 50%;

    &--items {
      display: flex;
      justify-content: space-around;
    }

    &--item {
      list-style-type: none;
    }
  }
}
</style>

<script setup>
import { onMounted, ref, computed } from 'vue'
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
const categories = computed(() => {
  return menuItems.value.map((category) => {
    const slug = category.name.toLowerCase()

    return {
      ...category,
      slug
    }
  })
})
</script>

<template>
  <div class="nav">
    <RouterLink to="/">Tienda online</RouterLink>
    <div class="nav__list">
      <ul class="nav__list--items">
        <RouterLink :to="{ name: 'clothes', params: { id: item.id, slug: item.slug } }" class="nav__list--item"
          v-for="item in categories">
          {{ item.name }}
        </RouterLink>
        <li class="nav__list--item">Login</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.nav {
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  a {
    text-decoration: none;
    color: inherit;
  }

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

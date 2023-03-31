<script setup>
import { ref } from 'vue'

const menuItems = ref(['Remeras', 'Vestidos', 'Pantalones'])

</script>

<template>
  <div class="nav">
    <RouterLink to="/" >Brand</RouterLink>
    <div class="nav__list">
      <ul class="nav__list--items">
        <!-- Reemplazar  <li> por routerLink -->
        <li class="nav__list--item" v-for="item in menuItems">
          {{ item }}
        </li>
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
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    &--item{
      list-style-type: none;
    }
  }
}

</style>

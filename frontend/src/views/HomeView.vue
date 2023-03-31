<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const users = ref([])

async function getUser() {
  try {
    const { data } = await axios.get('http://localhost:3001/api/users');
    return data.users
  } catch (error) {
    console.error(error);
  }
}
onMounted(async () => {
  users.value = await getUser()

})

</script>

<template>
  <main>
    <h1>{{ users }}</h1>

  </main>
</template>

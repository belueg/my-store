import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoginStore = defineStore('login', () => {
  const isLoggedIn = ref(false)

  const updateLogIn = () => {
    isLoggedIn.value = !isLoggedIn
  }

  return { isLoggedIn, updateLogIn }
})

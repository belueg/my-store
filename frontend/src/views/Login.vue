<template>
  <div class="container">
    <h1>Tienda Online</h1>
    <form @submit.prevent="login">
      <div class="input__container">
        <label for="email">email:</label>
        <input class="input__field" type="email" id="email" v-model="email" required>
      </div>
      <div class="input__container">
        <label for="password">Password:</label>
        <input class="input__field" type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router'


const email = ref('');
const password = ref('');
const router = useRouter()

const login = async () => {
  try {
    console.log('email:', email.value);
    console.log('Password:', password.value);

    const { data } = await axios.post('http://localhost:3001/api/auth/login', {
      email: email.value,
      password: password.value
    })

    localStorage.setItem('token', data.token);

    email.value = '';
    password.value = '';
    router.push({ name: 'dashboard' })
  } catch (error) {
    console.error(error)
  }


};
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 5px;
}

.input__field {
  padding: 10px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: rgba(15, 15, 15, 0.904);
}
</style>
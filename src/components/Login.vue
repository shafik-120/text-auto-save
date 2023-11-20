<script setup>
import { ref, reactive } from 'vue'
import { auth } from '../stores/Auth';


const login = reactive({
    userName: '',
    password: ''
})
</script>

<template>
<div class="container">
  <div class="login-form">
    <h2 class="text-center">Login</h2>
    <form @submit.prevent="auth.login(login)">
      <div class="form-group">
        <label for="username">Username:</label>
        <input v-model="login.userName" type="text" class="form-control" id="username" placeholder="Enter your username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="login.password" type="password" class="form-control" id="password" placeholder="Enter your password" required>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Login</button>
    </form>
    <p>or <router-link to="signup">singup</router-link></p>
  </div>
</div>
</template>

<style scoped>
    .login-form {
      width: 300px;
      margin: 150px auto;
    }
</style>
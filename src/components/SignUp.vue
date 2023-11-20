<script setup>
import { ref, reactive } from 'vue'
import { auth } from '../stores/Auth';


const signup = reactive({
    userName: '',
    password: '',
    email: '',
    confrimPassword: ''
})
</script>

<template>
<div class="container">
  <div class="signup-form">
    <h2 class="text-center">Sign Up</h2>
    <form @submit.prevent="auth.signUP(signup)">
      <div class="form-group">
        <label for="name">User Name:</label>
        <input v-model="signup.userName" type="text" class="form-control" id="name" placeholder="Enter your name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input v-model="signup.email" type="email" class="form-control" id="email" placeholder="Enter your email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input v-model="signup.password" type="password" class="form-control" id="password" placeholder="Enter your password" required>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input v-model="signup.confrimPassword" type="password" class="form-control" id="confirm-password" placeholder="Confirm your password" required>
      </div>
      <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
    </form>
  </div>
</div>

</template>

<style scoped>
.signup-form {
      width: 300px;
      margin: 150px auto;
    }
</style>
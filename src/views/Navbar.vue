<script setup>
//import { ref, reactive } from 'vue'
//import  from '.'
import { auth } from '../stores/Auth';

</script>

<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <RouterLink to="/" class="navbar-brand" >( {{ auth.userName }} )</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active" aria-current="page" >Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/shafikul-text" class="nav-link" >Shafikul</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/muslima" class="nav-link" >Muslima</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/product" class="nav-link" >Product</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/login" class="nav-link" >login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/testwork" class="nav-link " >Test</RouterLink>
        </li> 

      </ul>
      <form class="" >
        <button @click="auth.logout()" class="btn btn-outline-success" type="button">Log-Out</button>
      </form>
    </div>
  </div>
</nav>
</template>

<style scoped>
 
</style>
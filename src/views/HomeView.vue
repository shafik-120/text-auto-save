<script setup>
import { ref, reactive } from 'vue'
//import  from '.'

const sideLoadImage = ref('')
window.onload = () => {
    sideLoadImage.value = true
}

window.onclick = () => {
    sideLoadImage.value = false
}
</script>

<template>
    <div class="loadImge" v-if="sideLoadImage">
        <img class="iamge"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ141L9qMH8ke7Y-d_IzYQjmUIyPONWPsLFEXd3ATUh&s" alt="">
    </div>
    <div class="">
        <h1>This is a Home Page</h1>
    </div>
</template>

<style scoped>
.iamge {
    width: 80%;
    height: 80vh;
}

.loadImge {
    position: absolute;
    top: 5rem;
    left: 10%;

}
</style>
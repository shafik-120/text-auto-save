<script setup>
import { ref, reactive, onMounted } from 'vue'
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase';
//import  from '.'

const getProductData = ref([])
onMounted(() => {
    onSnapshot(collection(db, "product"), (querySnapshot) => {
        const product = [];
        querySnapshot.forEach((doc) => {
            const getFetchData = {
                id: doc.id,
                title: doc.data().title,
                description: doc.data().description,
                price: doc.data().price,
                image: doc.data().image,
                brand: doc.data().brand,
            }
            product.push(getFetchData)
        });
        getProductData.value = product
    });
})

const addingItem = ref({
    title: '',
    description: '',
    price: ''
})
const addingData = () => {
    addDoc(collection(db, "product"), {
        title: addingItem.value.title,
        description: addingItem.value.description,
        price: addingItem.value.price
    });
    addingItem.value = ''
}

const removeData = (id) => {
   deleteDoc(doc(collection(db, "product"), id))
}

const updateData = (id) =>{
    console.log(id);
}



</script>

<template>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Product
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="addingData()">
                        <div class="form-group">
                            <label for="productTitle">Product Title:</label>
                            <input v-model="addingItem.title" type="text" class="form-control" id="productTitle" placeholder="Enter product Title">
                        </div>
                        <div class="form-group">
                            <label for="productDescription">Product Text:</label>
                            <textarea v-model="addingItem.description" class="form-control" id="productDescription" rows="3"
                                placeholder="Enter product description"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="productPrice">Product Price:</label>
                            <input v-model="addingItem.price" type="number" class="form-control" id="productPrice" placeholder="Enter product price">
                        </div>
                        <button type="submit" class="btn btn-primary">Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!--  -->
    <div v-for="item in getProductData" :key="item.id">
        <div class="card border-4" style="width: 300px;">
            <img :src="item.image" alt="" style="width: 200px; ">
            <h4>{{ item.title }}</h4>
            <code>{{ item.price }}</code>
            <p>{{ item.description }}</p>
            <div class="d-flex">
                <button @click="removeData(item.id)" class="btn btn-danger ">Remove</button>
                <button @click="updateData(item.id)" class="btn btn-success ">Update</button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
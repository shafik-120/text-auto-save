<script setup>
import { ref, reactive, onMounted } from 'vue'
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from '../firebase/index';

const textInput = ref([])

onMounted(() => {
    onSnapshot(collection(db, "allusertext"), (querySnapshot) => {
        const fetchTextData = [];
        querySnapshot.forEach((doc) => {
            const getFetchData = {
                id: doc.id,
                allusertext: doc.data().text
            }
            // console.log(getFetchData);
            fetchTextData.push(getFetchData)
        });
        // console.log(fetchTextData);
        textInput.value = fetchTextData
    });
})



const updateText = (updatedText) => {
  const docRef = doc(db, "allusertext", updatedText.id);
  updateDoc(docRef, {
    text: updatedText.allusertext,
  })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
};

// Calculate Row
const calculateRows = (text) => {
  return text.split("\n").length;
};

</script>

<template>
    <button @click="AddingInput">Add Item</button>
    <div class="container-fluid" v-for="(inputFiled, index) in textInput" :key="index">
        <div class="row">
            <!-- {{ inputFiled }} -->
            <div class="col-md-12 bg-primary-subtle my-2 p-3">
                <div class="d-flex justify-content-between">
                    <label for="exampleFormControlTextarea1" class="form-label textAreaFontSize">Enter Your Text
                        Here</label>
                    <div class=""><i class="fa-solid fa-angle-down"></i></div>
                </div>
                <textarea v-model="inputFiled.allusertext" @input="updateText(inputFiled)" class="form-control" id="exampleFormControlTextarea1"
                    :rows="calculateRows(inputFiled.allusertext)"></textarea>
             </div>
        </div>
    </div>
</template>

<style scoped>
.textAreaFontSize {
    font-size: 1.5rem;
    font-weight: 600;
}
</style>

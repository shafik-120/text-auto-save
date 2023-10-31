<script setup>
import { ref, onMounted } from "vue";
import { collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
const getText = ref([]);

onMounted(() => {
  onSnapshot(collection(db, "muslima"), (querySnapshot) => {
    const products = [];
    querySnapshot.forEach((document) => {
      const getFetchData = {
        id: document.id,
        text: document.data().text,
      };
      products.push(getFetchData);
    });
    getText.value = products;
  });
});

const updateText = (updatedText) => {
  const docRef = doc(db, "muslima", updatedText.id);
  updateDoc(docRef, {
    text: updatedText.text,
  })
    .catch((error) => {
      console.error("Error updating document: ", error);
    });
};

const calculateRows = (text) => {
  // Calculate the number of line breaks in the text and adjust rows accordingly
  return text.split("\n").length;
};
</script>
<template>
  <div class="container-fluid mb-5">
    <div class="row">
      <div class="col-md-12">
        <div class="text" v-for="text in getText" :key="text.id">
          <h3 class="mb-3">Please Insert Your Text</h3>
          <div class="form-floating">
            <textarea name="" v-model="text.text" @input="updateText(text)" :rows="calculateRows(text.text)"
              placeholder="Leave a comment here" id="floatingTextarea2" cols="30" class=""></textarea>
            <!-- rows="1" -->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- Add your styles here -->
<style scoped>
textarea {
  width: 100%;
    min-height: 200px;
    box-shadow: 0px 0px 8px 1px #000000a6;
    border-radius: 6px;
    border: 4px double black;
    padding: 8px;
}
textarea:focus{
  box-shadow: none;
    outline: none;
    background: rgba(0, 0, 0, 0.301);
    color: rgb(0, 0, 0);
    border: 4px double rgb(1, 202, 45);
}
</style>

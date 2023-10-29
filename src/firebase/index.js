// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyALfRqrPUwFU_oNghcvQZn7MnDFKBbFseU",
//   authDomain: "prodcut-95349.firebaseapp.com",
//   projectId: "prodcut-95349",
//   storageBucket: "prodcut-95349.appspot.com",
//   messagingSenderId: "724687233750",
//   appId: "1:724687233750:web:caecc554917eefc7d91f77",
//   measurementId: "G-988TP3DZZ8"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
// export {db}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZZy0mrBFZYC-zyaD8vGPMjVW21-zgnxQ",
  authDomain: "autosavetext.firebaseapp.com",
  projectId: "autosavetext",
  storageBucket: "autosavetext.appspot.com",
  messagingSenderId: "750773867597",
  appId: "1:750773867597:web:b298f84e59f92f6e83b804",
  measurementId: "G-E4NPH07CN2"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db }
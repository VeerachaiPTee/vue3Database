import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBBerZ9fe_42pboxiuztX6rMctaKRxuILQ",
  authDomain: "vue3database-c7fa6.firebaseapp.com",
  projectId: "vue3database-c7fa6",
  storageBucket: "vue3database-c7fa6.appspot.com",
  messagingSenderId: "122829180924",
  appId: "1:122829180924:web:a5db6cd73cec3c203fec79",
  measurementId: "G-W40FV0M9H5",
});

const db = getFirestore(firebaseApp);
export default db;

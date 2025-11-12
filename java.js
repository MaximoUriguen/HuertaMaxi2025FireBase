// Import the functions you need from the SDKs you need
import { initializeApp } from "https://huertamaxi2025-default-rtdb.firebaseio.com/";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getDatabase, ref, set} from  "https://huertamaxi2025-default-rtdb.firebaseio.com/";
// Your web app's Firebase configuration"
const firebaseConfig = {
  apiKey: "AIzaSyBHDz5GJ5wlqLakuPxyhocRRp1SNE7J1JE",
  authDomain: "huertamaxi2025.firebaseapp.com",
  projectId: "huertamaxi2025",
  storageBucket: "huertamaxi2025.firebasestorage.app",
  messagingSenderId: "532519022993",
  appId: "1:532519022993:web:d962a55afb97d02db9ea30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)
let parrafoSuelo = document.querySelector("#Suelo");
let parrafoAire = document.querySelector("#Aire");
const refDatos = ref(db, "Huerta");

onValue(refDatos, (snapshot) => {
    console.log(snapshot.val())
    let huerta = snapshot.val()
    parrafoSuelo.textContent = `La huerta tiene una temperatura en el suelo de ${Huerta.tempSuelo}° y de humedad de ${Huerta.humSuelo}`
    parrafoAire.textContent = `La huerta tiene una temperatura en el suelo de ${Huerta.tempAire}° y de humedad de ${Huerta.humAire}`
   
})
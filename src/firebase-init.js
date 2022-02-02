
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-analytics.js";
import { getDatabase, ref, onValue  } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyA6wy_x7wDGF5R-H2u2OTgqf0jcSlvFgCI",
  authDomain: "aquaponik-c32b0.firebaseapp.com",
  databaseURL: "https://aquaponik-c32b0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aquaponik-c32b0",
  storageBucket: "aquaponik-c32b0.appspot.com",
  messagingSenderId: "144953172182",
  appId: "1:144953172182:web:174fb1d2e0199dd889a977",
  measurementId: "G-549W3JHNNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const suhuAir = document.getElementById("param_temp");
const phAir = document.getElementById("param_ph");
const waterLevel = document.getElementById("param_waterlevel");


const dataSensorKolam = ref(db, 'sensor_kolam_ikan/');
onValue(dataSensorKolam,(snapshot)=>{
  const dataSensor= snapshot.val();
  suhuAir.innerHTML = dataSensor.realtime_suhu_air+ ' ° C';
  phAir.innerHTML =dataSensor.realtime_ph_air;
  console.log(dataSensor);

});

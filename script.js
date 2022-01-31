import firebase from "firebase/app";
import "firebase/database";

const dbRef = firebase.database().ref();
const dataSensorKolam = dbRef.child('sensor_kolam_ikan');

  const suhuAir = document.getElementById("param_suhu");
  var dataSensorSuhu = dataSensorKolam.child('realtime_suhu_air');
  dataSensorKolam.on("value",snap => {
    let dataSensor = snap.val();
    suhuAir.innerHTML = dataSensor.realtime_suhu_air;

  });
const firebaseConfig = {
    apiKey: "AIzaSyDzcZZkJK1dqrgj_CZq28FUB9L0rHZ7n7I",
    authDomain: "cursuri-7a19d.firebaseapp.com",
    projectId: "cursuri-7a19d",
    storageBucket: "cursuri-7a19d.appspot.com",
    messagingSenderId: "12172389314",
    appId: "1:12172389314:web:808165b954248bd4fcc45b",
    measurementId: "G-R3S8J1QYFB"
  };

  const postareBtn = document.getElementById('postare-btn');
  const admin = "DEdaX49GF8NR5oh2zWuIPDxy2Av1";
  firebase.initializeApp(firebaseConfig);


//referinta la serviciul de autentificare
  const auth = firebase.auth();

  //referinta la baza de date
  const db = firebase.firestore();

 //referinta la colectia de teme din Baza de date
  const temeDb =db.collection("teme");

  let uzer = null;

const yearElement = document.getElementById('year');

if (yearElement) {
    let date = new Date();
    
    yearElement.innerHTML = date.getFullYear() + " ©";
}

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

function refresh() {
    window.location.reload();
}

function isAdmin() {
   if (user == null) {
       return false;
   }

    return admin == user.uid;

}

function formatareData(stamp) {
    let data = new Date(stamp);
    let an = data.getFullYear();
    let luna = data.getMonth() + 1;
    let zi = data.getDate();

    let result = zi + "-" + luna + "-" + an;
    return result;
}

auth.onAuthStateChanged( function(fuser) {
   user = fuser;

   if (isAdmin() == true) {
     postareBtn.style.display = "block";
   }
   else {
    postareBtn.style.display = "none";
   }

   document.querySelector("body").style.display = "block";
});
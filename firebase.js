// firebase.js
// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCe_-_lZgdk0jf8vvISySQzd5L5cBeY3AE",
  authDomain: "attendease-ai.firebaseapp.com",
  projectId: "attendease-ai",
  storageBucket: "attendease-ai.firebasestorage.app",
  messagingSenderId: "973514586",
  appId: "1:973514586:web:714388421702a1b5dab563",
  measurementId: "G-F45BCCB9NJ"
};

// using compat (easiest to work with plain scripts)
const script1 = document.createElement('script');
script1.src = "https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js";
document.head.appendChild(script1);

const script2 = document.createElement('script');
script2.src = "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js";
document.head.appendChild(script2);

const script3 = document.createElement('script');
script3.src = "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js";
document.head.appendChild(script3);

script3.onload = () => {
  firebase.initializeApp(firebaseConfig);
  window.auth = firebase.auth();
  window.db = firebase.firestore();
  console.log("Firebase initialized");
};
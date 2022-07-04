import firebase from "firebase-admin";

const firebaseConfig = {
  apiKey: "AIzaSyBzQrc6BeI73TACPo-oVXM0VgEDuHYSoT8",
  authDomain: "amzv1-9a160.firebaseapp.com",
  projectId: "amzv1-9a160",
  storageBucket: "amzv1-9a160.appspot.com",
  messagingSenderId: "1028962754750",
  appId: "1:1028962754750:web:ce04e32462e66b1b2f3eef",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;

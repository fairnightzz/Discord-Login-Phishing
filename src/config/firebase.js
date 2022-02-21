import firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB-wPl9L4pSQaHiR69thQRvNN1-r-hgEv0",
  authDomain: "accounts-7106b.firebaseapp.com",
  projectId: "accounts-7106b",
  storageBucket: "accounts-7106b.appspot.com",
  messagingSenderId: "423017889614",
  appId: "1:423017889614:web:2b42b1e81e7b147067681f",
  measurementId: "G-5ZKRPE21Y1"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

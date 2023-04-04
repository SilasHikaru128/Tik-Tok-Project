import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBggLkeoM6j8VrNiXa9aORRpM-CzcwmCC0",
  authDomain: "tiktok---jornada-67795.firebaseapp.com",
  projectId: "tiktok---jornada-67795",
  storageBucket: "tiktok---jornada-67795.appspot.com",
  messagingSenderId: "703066139924",
  appId: "1:703066139924:web:13dbe2b5c7da9d83af6601"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
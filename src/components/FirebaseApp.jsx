import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebase = initializeApp({
    apiKey: "AIzaSyCapDvfreP7_u9G2su8-1NHAwOlb9HeT-4",
    authDomain: "adamdomieskuvo.firebaseapp.com",
    projectId: "adamdomieskuvo",
    storageBucket: "adamdomieskuvo.appspot.com",
    messagingSenderId: "36817562607",
    appId: "1:36817562607:web:19202ff5233258d760a41a",
    measurementId: "G-Q04SR45XSC"
});
export const firestore = getFirestore(firebase);
export const storage = getStorage();

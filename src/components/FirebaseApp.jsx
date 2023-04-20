import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebase = initializeApp({
    apiKey: "AIzaSyCapDvfreP7_u9G2su8-1NHAwOlb9HeT-4",
    authDomain: "adamdomieskuvo.firebaseapp.com",
    projectId: "adamdomieskuvo",
    storageBucket: "adamdomieskuvo.appspot.com",
    messagingSenderId: "36817562607",
    appId: "1:36817562607:web:19202ff5233258d760a41a",
    measurementId: "G-Q04SR45XSC"
});
export const analytics = getAnalytics(firebase);
export const firestore = getFirestore(firebase);
export const auth = getAuth(firebase);
auth.languageCode = 'hu';

export const googleAuthProvider = new GoogleAuthProvider();
// export const auth = getAuth(firebase);
// export const fbProvider;
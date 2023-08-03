import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBcboWC6rkcnowhFLQi2QBA7-pA3DtRJ84",
    authDomain: "amezix-43dbf.firebaseapp.com",
    projectId: "amezix-43dbf",
    storageBucket: "amezix-43dbf.appspot.com",
    messagingSenderId: "1058162263351",
    appId: "1:1058162263351:web:1320f684a63c34237906b2",
    measurementId: "G-SPPN6XTXR7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
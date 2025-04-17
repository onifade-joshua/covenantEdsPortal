// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your new Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAHpMhWFTcZZF84o4OS_KO-VtSPOFN2PRA",
  authDomain: "covenant-payment-v2.firebaseapp.com",
  projectId: "covenant-payment-v2",
  storageBucket: "covenant-payment-v2.appspot.com", // <-- fixed this line
  messagingSenderId: "957124623308",
  appId: "1:957124623308:web:783a2007cd10627f6f3b69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };

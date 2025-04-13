import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAAp5IxRGUUxBWTPW8oref4cXbywHD66nU",
  authDomain: "covenant-payment-app.firebaseapp.com",
  projectId: "covenant-payment-app",
  storageBucket: "covenant-payment-app.appspot.com",
  messagingSenderId: "4797849275",
  appId: "1:4797849275:web:79ed6fcc47043dd170539e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Export the initialized services
export { auth, db, storage };

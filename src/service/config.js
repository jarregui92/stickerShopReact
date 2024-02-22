import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDrUqVPza4sejwpBtBliSFXKf5nVjBZnk4",
  authDomain: "stickershop-62615.firebaseapp.com",
  projectId: "stickershop-62615",
  storageBucket: "stickershop-62615.appspot.com",
  messagingSenderId: "386791402821",
  appId: "1:386791402821:web:72714311078baa9872e22c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Instancia para obtener el servicio de Firebase
export const db = getFirestore(app);
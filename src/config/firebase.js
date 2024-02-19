import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBFmmuToXpbqLeLl5xjLKg-1TThcGTsf1s",
  authDomain: "furnitureandwoodcarving.firebaseapp.com",
  projectId: "furnitureandwoodcarving",
  storageBucket: "furnitureandwoodcarving.appspot.com",
  messagingSenderId: "454584475999",
  appId: "1:454584475999:web:b7b7c9dd4dcc59436556ea",
  measurementId: "G-6SN5BHEQ51"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
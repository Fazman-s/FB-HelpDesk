import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from "firebase/storage"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyClG14JN7SU62IutnhODnyiwnFRl6IL65A",
  authDomain: "richpanel-108e3.firebaseapp.com",
  projectId: "richpanel-108e3",
  storageBucket: "richpanel-108e3.appspot.com",
  messagingSenderId: "327853561641",
  appId: "1:327853561641:web:e4d7fae290b1d32ecc4938",
  measurementId: "G-60Q1L6ET34"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const storage = getStorage(app);
  export const db = getFirestore(app);

  export default app;
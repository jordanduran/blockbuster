import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'twinnleaf-5a39f.firebaseapp.com',
  projectId: 'twinnleaf-5a39f',
  storageBucket: 'twinnleaf-5a39f.appspot.com',
  messagingSenderId: '620604908372',
  appId: '1:620604908372:web:c2bb0326bc2764135e9ec1',
  measurementId: 'G-2WW33H6QB7',
};

// Initialize firebase
initializeApp(firebaseConfig);

// Initialize firestore
const db = getFirestore();

// Initialize firebase auth
const auth = getAuth();

export { db, auth };

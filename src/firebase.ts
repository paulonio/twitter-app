import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCJLp18x7_3szplfE5N_LN5aSmdGs3t1gg',
  authDomain: 'twitter-a4044.firebaseapp.com',
  projectId: 'twitter-a4044',
  storageBucket: 'twitter-a4044.appspot.com',
  messagingSenderId: '321680955284',
  appId: '1:321680955284:web:b83c24d3422705334aa181',
  measurementId: 'G-6R7RTEXBKK',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const signInWithGoogle = () => signInWithPopup(auth, provider);

export { auth, db, signInWithGoogle };

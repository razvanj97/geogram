// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { collection } from '@firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC9rGNKgvUohESPR1B662z5KLhXSBEmzes',
  authDomain: 'photo-gallery-95fa2.firebaseapp.com',
  projectId: 'photo-gallery-95fa2',
  storageBucket: 'photo-gallery-95fa2.appspot.com',
  messagingSenderId: '369436538308',
  appId: '1:369436538308:web:8ac7d9a7a3194051c1e091',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();

export const postsCollectionRef = collection(db, 'posts');

import 'dotenv';
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: "amichaelis-cloud-hosted-app.firebaseapp.com",
  projectId: "amichaelis-cloud-hosted-app",
  storageBucket: "amichaelis-cloud-hosted-app.appspot.com",
  messagingSenderId: "692926387346",
  appId: process.env.APIID,
  measurementId: "G-5J6JTH75WM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()
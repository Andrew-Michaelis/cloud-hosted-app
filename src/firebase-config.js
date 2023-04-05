import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBgAt7Fa9N6GYdszXHfzZ6nKJvNSDQ31HU",
  authDomain: "amichaelis-cloud-hosted-app.firebaseapp.com",
  projectId: "amichaelis-cloud-hosted-app",
  storageBucket: "amichaelis-cloud-hosted-app.appspot.com",
  messagingSenderId: "692926387346",
  appId: "1:692926387346:web:46ac4f385057535791424b",
  measurementId: "G-5J6JTH75WM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore()
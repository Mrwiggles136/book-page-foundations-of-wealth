// src/firebase.js​
import { initializeApp } from 'firebase/app';​
import { getFirestore } from 'firebase/firestore';​
import { getAuth } from 'firebase/auth';​
​
const firebaseConfig = {​
apiKey: "YOUR_API_KEY",​
authDomain: "YOUR_AUTH_DOMAIN",​
projectId: "YOUR_PROJECT_ID",​
storageBucket: "YOUR_STORAGE_BUCKET",​
messagingSenderId: "YOUR_MESSAGING_SENDER_ID",​
appId: "YOUR_APP_ID"​
};​
​
const app = initializeApp(firebaseConfig);​
const db = getFirestore(app);​
const auth = getAuth(app);​
​
export { db, auth };
/* eslint-disable no-undef */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
//console.log('API KEY')
//console.log(import.meta.env)
//console.log(import.meta.env.VITE_REACT_APP_API_KEY)
console.log(import.meta.env)
const firebaseConfig = {
	apiKey: 'AIzaSyDwqHjM_lNxdNSdqwRpSSgPQyG-9-K437Q', // import.meta.env.PUBLIC_VITE_REACT_APP_API_KEY,
	authDomain: 'chat-6f94e.firebaseapp.com', //import.meta.env.PUBLIC_VITE_REACT_APP_AUTH_DOMAIN,
	projectId: 'chat-6f94e', // import.meta.env.PUBLIC_VITE_REACT_APP_PROJECT_ID,
	storageBucket: 'chat-6f94e.appspot.com', //import.meta.env.PUBLIC_VITE_REACT_APP_STORAGE_BUCKET,
	messagingSenderId: '586279433961', //import.meta.env.PUBLIC_VITE_REACT_APP_MESSAGING_SENDER_ID,
	appId: '1:586279433961:web:ea689cd23880d227152278', //import.meta.env.PUBLIC_VITE_REACT_APP_APP_ID,
	measurementId: 'G-YDXLD2HE4C' //import.meta.env.PUBLIC_VITE_REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

// Export auth and provider for use in components
export const auth = getAuth(firebaseApp);
console.log(auth.currentUser)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default firebaseApp;

import { initializeApp, getApp } from "firebase/app";
// import { FirebaseApp } from "firebase/app";
import "firebase/auth";

export let app;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_ID,
};

// import할 때마다 initialize하는 것은 비효율적이기 때문에
try {
  app = getApp("app")
} catch(e){
  app = initializeApp(firebaseConfig, "app")
}

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;
import { initializeApp } from "firebase/app";
import {initializeAuth, getReactNativePersistence} from "firebase/auth";
import { ReactNativeAsyncStorage } from '@react-native-async-storage/async-storage'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCvwwpazbkSWqyWSZKIT0riW20A6PCqVIE",
  authDomain: "trabalhoii-a9454.firebaseapp.com",
  projectId: "trabalhoii-a9454",
  storageBucket: "trabalhoii-a9454.appspot.com",
  messagingSenderId: "106436444494",
  appId: "1:106436444494:web:7d3a3e9fec8215fd251e1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
})
const db = getFirestore(app)

export { auth, db }
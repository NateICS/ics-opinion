import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const app = initializeApp({
  apiKey: "AIzaSyAUqlpUu0tpYU5PEkGsopL5d6XZvmqfva4",
  authDomain: "ics-opinion.firebaseapp.com",
  projectId: "ics-opinion",
  storageBucket: "ics-opinion.appspot.com",
  messagingSenderId: "899984369533",
  appId: "1:899984369533:web:f7bbca826a862df8888e14",
})

export const db = getFirestore(app)
export const auth = getAuth(app)

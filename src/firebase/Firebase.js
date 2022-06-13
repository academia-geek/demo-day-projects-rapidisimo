// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa3u_6oJQaFtn2n5EbwYHFYpMIknmZilE",
  authDomain: "rapidisimoproject.firebaseapp.com",
  projectId: "rapidisimoproject",
  storageBucket: "rapidisimoproject.appspot.com",
  messagingSenderId: "905464710593",
  appId: "1:905464710593:web:a8fc0969d4a3ef8d9ddb40"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const google = new GoogleAuthProvider()
const facebook = new FacebookAuthProvider()

export { app, google, facebook}
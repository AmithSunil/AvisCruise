import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDGii4qmQZ-IvZdmfxQB9mWjqJS68me9Bo",
  authDomain: "destinations-6c6a6.firebaseapp.com",
  projectId: "destinations-6c6a6",
  storageBucket: "destinations-6c6a6.appspot.com",
  messagingSenderId: "1091544870377",
  appId: "1:1091544870377:web:594939723d1c0772776f78",
  measurementId: "G-S3C8991EPZ",
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const firestore = firebase.firestore()

export { firestore }

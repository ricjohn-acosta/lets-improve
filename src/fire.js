import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD3crIc4YzqQs5Vzr2F5DN7TzkTx00hd4s",
  authDomain: "lets-improve.firebaseapp.com",
  databaseURL: "https://lets-improve.firebaseio.com",
  projectId: "lets-improve",
  storageBucket: "lets-improve.appspot.com",
  messagingSenderId: "396538697524",
  appId: "1:396538697524:web:5b5da73b4b730eb5837761",
  measurementId: "G-JNDQPS9W79"
}
var fire = firebase.initializeApp(firebaseConfig)

export default fire

const functions = require("firebase-functions");
const firebase = require("firebase/app");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const firebaseConfig = {
  apiKey: "AIzaSyD3crIc4YzqQs5Vzr2F5DN7TzkTx00hd4s",
  authDomain: "lets-improve.firebaseapp.com",
  databaseURL: "https://lets-improve.firebaseio.com",
  projectId: "lets-improve",
  storageBucket: "lets-improve.appspot.com",
  messagingSenderId: "396538697524",
  appId: "1:396538697524:web:5b5da73b4b730eb5837761",
  measurementId: "G-JNDQPS9W79",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database()

exports.myCloudTimer = functions.database
  .ref("/startTimerRequest/")
  .onCreate((event) => {
    return db.ref("cloudTimer/timeInMs").once("value", (snap) => {
      if (!snap.exists()) {
        return Promise.reject(new Error("error"));
      }

      let timeInSeconds = snap.val() / 1000;
      console.log("Cloud Timer was Started: " + timeInSeconds);

      return functionTimer(timeInSeconds, (elapsedTime) => {
        db.ref("cloudTimer/observableTime").set(elapsedTime);
      })
        .then((totalTime) => {
          console.log("Timer of " + totalTime + " has finished.");
          return null;
        })
        .then(() => new Promise((resolve) => setTimeout(resolve, 1000)))
        .then(() => event.data.ref.remove())
        .catch((error) => console.error(error));
    });
  });

function functionTimer(seconds, call) {
  return new Promise((resolve, reject) => {
    if (seconds > 300) {
      reject(new Error("error"));
      return;
    }
    let interval = setInterval(onInterval, 1000);
    let elapsedSeconds = 0;

    function onInterval() {
      if (elapsedSeconds >= seconds) {
        clearInterval(interval);
        call(0);
        resolve(elapsedSeconds);
        return;
      }
      call(seconds - elapsedSeconds);
      elapsedSeconds++;
    }
  });
}

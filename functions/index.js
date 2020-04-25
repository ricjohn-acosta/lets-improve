const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.myCloudTimer = functions.database
  .ref("/startTimerRequest/")
  .onCreate((event) => {
    return admin.database().ref("cloudTimer/timeInMs").once("value", (snap) => {
      if (!snap.exists()) {
        return Promise.reject(new Error("error"));
      }

      let timeInSeconds = snap.val() / 1000;
      console.log("Cloud Timer was Started: " + timeInSeconds);

      return functionTimer(timeInSeconds, (elapsedTime) => {
        admin.database().ref("cloudTimer/observableTime").set(elapsedTime);
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

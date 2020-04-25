const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.myCloudTimer = functions.database
  .ref("/startTimerRequest/")
  .onCreate((event) => {
    return db.ref("cloudTimer/timeInMs").once("value", (snap) => {
      if (!snap.exists()) {
        return Promise.reject(err);
      }

      let timeInSeconds = snap.val() / 1000;
      console.log("Cloud Timer was Started: " + timeInSeconds);

      return functionTimer(timeInSeconds, (elapsedTime) => {
        db.ref("cloudTimer/observableTime").set(elapsedTime);
      })
        .then((totalTime) => {
          return console.log("Timer of " + totalTime + " has finished.");
        })
        .then(() => new Promise((resolve) => setTimeout(resolve, 1000)))
        .then(() => event.data.ref.remove())
        .catch((error) => console.error(error));
    });
  });

function functionTimer(seconds, call) {
  return new Promise((resolve, reject) => {
    if (seconds > 300) {
      reject(err);
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

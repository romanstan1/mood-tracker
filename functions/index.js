const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

//

// Read teh data from the firestore
// Display as JSON so backend can use it

var data = require('./mock.json');

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send(data);
});

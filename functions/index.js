const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

//

// Read teh data from the firestore
// Display as JSON so backend can use it

var data = require('./mock.json');

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send(data);
});








exports.getRealData = functions.https.onRequest((req, res) => {
    
    var users = [];
    var db = admin.firestore();




    function addDateToUser(dateElement, userElement) {
        users = users.map(user => {
            if(user.email === userElement.email) {
                return {
                    ...user,
                    dates: [].concat(user.dates, dateElement)
                }
            }
            return user
        })
    }



    db.collection("users").get().then(snapshot => {
        snapshot.forEach(user => {
            var userElement = {
                "email": user.data().email,
                "firstName": user.data().firstName,
                "lastName": user.data().lastName,
                "dates": []
            }

            users = users.concat(userElement);

            console.log("user.uid", user.data().firstName, user.uid)
            


            db.collection("users").doc(user.id).collection('dates').get().then(snapInner => {

                snapInner.forEach(date => {
                    var dateElement = {
                        "answer": date.data().answer,
                        "date": date.data().date,
                        "id": date.data().id
                    }

                    addDateToUser(dateElement, userElement)
                })

            })



        })
    })
    .then(() => {
        setTimeout(() => {
            res.send(users) 
        }, 3000);
    })
    .then(response => {

        console.log('users in THENN: ', users) 
        // res.send(users) 
        return "";
    })
    .catch(reason => {
        console.log('error caught, reason: ', reason)
        console.log('error caught, users: ', users)
        res.send(reason)
        return "";
    })
});

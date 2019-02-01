import {messaging} from 'firebase/initialize'

export function registerDeviceForNotifications() {
  if(!!messaging) {
    messaging.requestPermission()
    .then(() => messaging.getToken())
    .then(token => {
      let url = 'https://us-central1-room-ipro.cloudfunctions.net/app/registerDevice'
      fetch(url,
        {
          method: "POST",
          mode: 'cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body:"token=" + token + "&topic=roomipro1" // the topic name
        })
        .then(res => res.json())
        .then(resp => {})
        .catch(error => console.log("Error with notification registration", error))
    })
    .catch(error => console.log("Error with messaging request persmission", error))
  }
}

export function postNotificationApi(url, idToken, {title, body, link }) {
  return fetch(url,
  {
    method: "POST",
    mode: 'cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Bearer ' + idToken
    },
    body:"title=" + title + "&body=" + body + "&link=" + link + "&icon=https://room-ipro.firebaseapp.com/fav128.png"
  })
  .then(res => res.json())
  .then(res => { console.log('res notification::: ',res) })
  .catch(error => console.log("Error with posting notification : ",error))
}

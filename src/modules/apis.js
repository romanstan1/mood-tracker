import {messaging} from 'firebase/initialize'



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

import moment from 'moment'

import {auth, firestore } from './initialize'
import { addUserAndDate } from 'store/actions'

import  store from '../store'

export const subscribeToUser = (user) => {
    firestore.collection('users')
        .doc(user.uid)
        .onSnapshot(userData => {
            let thisUser = userData.data()
            firestore.collection('users')
            .doc(user.uid)
            .collection('dates')
            .onSnapshot(querySnapshot => {
                let dates = []
                querySnapshot.forEach(docQuery => { 
                    dates.push(docQuery.data())
                    store.dispatch(addUserAndDate(thisUser, dates))
                })
            })
    })
}

export const inputValueForToday = (val, user, todayId) => {
    const userRef = firestore
    .collection("users")
    .doc(user.uid)
    
    const dateRef = userRef
    .collection('dates')
    .doc(`${todayId}`)

    dateRef.get()
    .then(doc => {
        const date = moment(todayId).format('dddd D MMMM YYYY')
        if (doc.exists)  {
            dateRef.update({
                "id": todayId,
                "date": date,
                "answer": val
            })
        } else {
            dateRef.set({
                "id": todayId,
                "date": date,
                "answer": val
            })
        }
    })
}

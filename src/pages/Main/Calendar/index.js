import React, { Component, Fragment } from "react";
import { Text } from "../../../components";
import { inputValueForToday } from 'firebase/modules';
import {connect} from 'react-redux'
import "./Calendar.css"

class Input extends Component {
  state = {
    answer: undefined
  }

  returnSelectedEmoji = (answer) => {
    switch (answer) {
      case 1:
        return <Text>😡</Text>
      case 2:
        return <Text>🙁</Text>
      case 3:
        return <Text>😖</Text>
      case 4:
        return <Text>🙂</Text>
      case 5:
        return <Text>😁</Text>
      case 6:
        return <Text>😂</Text>
      default:
        return <Text>❓</Text>
    }
  }

  handleInput = (answer) => {
    const {user, today} =  this.props
    inputValueForToday(answer, user, today)
  }

  render() {
    const {myUserData} = this.props
    const dates = myUserData && myUserData.dates && myUserData.dates.length > 0
    ? myUserData.dates
    : []

    return (
      <div className="Calendar">
        <span style={{marginBottom: 10}}>How you've been feeling the last few weeks..</span>
        {
          dates.slice(0).reverse().map((date, i) => (
            <div key={i}>
              <hr/>
              <span>{date.date}</span>
              <Text>{this.returnSelectedEmoji(date.answer)}</Text>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapState = state => ({
  user: state.data.user,
  today: state.data.today,
  myUserData: state.data.myUserData
})

export default connect(mapState)(Input)
import React, { Component, Fragment } from "react";
import ReactNipple from 'react-nipple';
import { Text } from "../../../components";
import './Input.css'
import { inputValueForToday } from 'firebase/modules';
import {connect} from 'react-redux'

class Input extends Component {
  state = {
    answer: undefined
  }

  handleEvent = (_evt, data) => {
    if (data && data.angle && data.angle.degree) {
      const degree = data.angle.degree
      const answer = Math.round(degree / 60)
      this.setState({answer})
      this.handleInput(answer)
    }
  }

  componentDidMount() {
    // Use this to add mock data for a user
    // const {user} = this.props
    // inputValueForToday(1, user, 1546560000000)
    // inputValueForToday(2, user, 1546819200000)
    // inputValueForToday(1, user, 1546905600000)
    // inputValueForToday(3, user, 1546992000000)
    // inputValueForToday(2, user, 1547078400000)
    // inputValueForToday(6, user, 1547164800000)
    // inputValueForToday(4, user, 1547424000000)
    // inputValueForToday(5, user, 1547510400000)
    // inputValueForToday(2, user, 1547596800000)
    
    // inputValueForToday(6, user, 1547683200000)
    // inputValueForToday(4, user, 1547769600000)
    // inputValueForToday(3, user, 1548028800000)
    // inputValueForToday(4, user, 1548115200000)
    // inputValueForToday(6, user, 1548201600000)

    // inputValueForToday(4, user, 1548288000000)
    // inputValueForToday(6, user, 1548374400000)
    // inputValueForToday(5, user, 1548633600000)
    // inputValueForToday(6, user, 1548720000000)
    // inputValueForToday(3, user, 1548806400000)
    // inputValueForToday(5, user, 1548892800000)
  }

  returnSelectedEmoji = () => {
    switch (this.state.answer) {
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
    return (
      <div className="Main">
        <div style={{display: "flex", height: "60px", marginTop: "20px"}}>
          <div style={{width: "100%", alignItems: "center", justifyContent: "center"}}>
            <Text>You are feeling: </Text>
            {this.returnSelectedEmoji()}
          </div>
        </div>
        <ReactNipple
          options={{ mode: 'static', position: { top: '50%', left: '50%' } }}
          style={{
            color: 'blue',
            width: 200,
            height: 200,
            position: 'relative'
          }}
          onStart={this.handleEvent}
          onEnd={this.handleEvent}
          onMove={this.handleEvent}
          onDir={this.handleEvent}
          onPlain={this.handleEvent}
          onShown={this.handleEvent}
          onHidden={this.handleEvent}
          onPressure={this.handleEvent}
        />
      </div>
    )
  }
}

const mapState = state => ({
  width: state.data.width,
  user: state.data.user,
  today: state.data.today
})

export default connect(mapState)(Input)
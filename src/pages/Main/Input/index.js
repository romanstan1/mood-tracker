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
    }
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

  handleInput = () => {
    const {user, today} =  this.props
    inputValueForToday(4, user, today)
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
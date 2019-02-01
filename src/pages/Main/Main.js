import React, {Component, Fragment} from 'react'
// import {Location, Booking, Dates} from 'components'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {updateWidth} from 'store/actions'
import Nav from './Nav'
import SwipeableViews from 'react-swipeable-views';
import './Main.css'
import { subscribeToUser, inputValueForToday } from 'firebase/modules';
import Input from "./Input"
import Calendar from './Calendar';

class Main extends Component {

  componentDidMount() {
    window.addEventListener('resize', this.resize)
    const { user } = this.props
    subscribeToUser(user)
  }

  handleInput = () => {
    const {user, today} =  this.props
    inputValueForToday(4, user, today)
  }

  resize = (e) => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    this.props.updateWidth(width)
  }

  render() {
    const {width} = this.props

    if(width > 720) return (
        <div className='Main'>
          <Nav />
          <div className="inner">
            <div className="input" onClick={this.handleInput}><Input/></div>
            <Calendar/>
          </div>
        </div>
    )
    else return (
      <div className='Main'>
        <Nav />
        <div className="inner mobile">
          <SwipeableViews>
            <div className='input mobile'>
            <Input/>
            </div>

            <div className='calender mobile'>
              <Calendar/>
            </div>
          </SwipeableViews>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  width: state.data.width,
  user: state.data.user,
  today: state.data.today
})

const mapDispatch = {
  updateWidth
}

export default connect(mapState,mapDispatch)(Main)

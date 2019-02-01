import React, {Component, Fragment} from 'react'
// import {Location, Booking, Dates} from 'components'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {updateWidth} from 'store/actions'
import Nav from './Nav'
import SwipeableViews from 'react-swipeable-views';
import './Main.css'

class Main extends Component {

  componentDidMount() {
    window.addEventListener('resize', this.resize)
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
            <div className="input">Input</div>
            <div className="calender">Calender</div>
          </div>
        </div>
    )
    else return (
      <div className='Main'>
        <Nav />
        <div className="inner mobile">
          <SwipeableViews>
            <div className='input'>
              Input
            </div>

            <div className='calender'>
              Calender
            </div>
          </SwipeableViews>
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  width: state.data.width,
})

const mapDispatch = {
  updateWidth
}

export default connect(mapState,mapDispatch)(Main)

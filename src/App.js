import React, { Component, Fragment } from 'react';
import {Route, Router, Redirect, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import { Main, SignIn} from 'pages'
import 'styles/global.css'

export const history = createBrowserHistory()

class App extends Component {
  state = {}
  render() {
    const { isAuthenticated } = this.props

    return (
      <Router history={history}>
        <Fragment>
          {
            isAuthenticated ?
              <Fragment>
                <Switch>
                  {/* <Route path="/view" component={View}/> */}
                  <Route exact path="/" component={Main}/>
                  <Redirect to="/"/>
                </Switch>
              </Fragment>
              :
              <Fragment>
                <Switch>
                  <Route exact path="/sign-in" component={SignIn} />
                  <Redirect to="/sign-in" />
                </Switch>
              </Fragment>
          }

        </Fragment>
      </Router>
    )
  }
}

const mapState = state => ({
  isAuthenticated: state.data.isAuthenticated,
})

const mapDispatch = {
}

export default connect(mapState, mapDispatch)(App)

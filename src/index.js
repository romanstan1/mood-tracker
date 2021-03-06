import React from 'react';
import { render } from 'react-dom'
import App, {history} from './App';
import { ConnectedRouter } from 'react-router-redux'
import store from './store'
import {Provider} from 'react-redux'
import registerServiceWorker from './modules/registerServiceWorker';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));


registerServiceWorker()
'use strict'
import MainView from './mainView'
import React from 'react-native'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'

import rootReducer from '../reducers'

let createStoreWithMiddleware = applyMiddleware(promiseMiddleware())(createStore)
let store = createStoreWithMiddleware(rootReducer)

const App = React.createClass({
  render() {
    return (
      <Provider store={store}>
        <MainView/>
      </Provider>
    )
  }
})

export default App

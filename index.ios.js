'use strict'

import React from 'react-native'
import App from './app/containers'

const {
  AppRegistry,
} = React

// let DoubanDemo = React.createClass({
//   render() {
//     return (
//       <App/>
//     )
//   }
// })

AppRegistry.registerComponent('demo2', () => App);

'use strict'
import React from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/native'

import SubjectListView from './subjectListView'
import actions from '../actions'

const {
  NavigatorIOS,
  StyleSheet
} = React


const MainView = React.createClass({
  componentWillMount(){
    this.props.actions.getIntheatersSync()
  },
  render() {
    const {actions,intheaters} = this.props

    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'douban demo',
          component:SubjectListView,
          passProps: {intheaters},
        }} />
    )
  }
})

let styles = StyleSheet.create({
  //加入flex才能正常显示listview
  container: {
    flex: 1,
  },
})

function mapStateToProps(state) {
  return {
    intheaters:state.intheaters
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView)

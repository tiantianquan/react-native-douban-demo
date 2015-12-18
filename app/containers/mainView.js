'use strict'
import React from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux/native'

import SubjectListView from './subjectListView'
import actions from '../actions'

const {
  NavigatorIOS,
  Navigator,
  StyleSheet,
  Text,
  View
} = React



let Test  = React.createClass({
  render: function() {
    return (
      <View>
        <Text>navigationBar</Text>
      </View>
    )
  }
})


const MainView = React.createClass({
  componentWillMount(){
    this.props.actions.getIntheatersSync()
  },
  render() {
    const {actions,intheaters} = this.props
    return (
      // <NavigatorIOS
      //   ref="nav"
      //   style={styles.container}
      //   initialRoute={{
      //     title: 'douban demo',
      //     component:SubjectListView,
      //     passProps: {
      //       intheaters,
      //     },
      //   }} />
      <Navigator
        initialRoute={{name: 'douban demo', index: 0}}
        navigationBar={<Test/>}
        renderScene={(route, navigator) =>
          <SubjectListView
            name={route.name}
            onForward={() => {
              var nextIndex = route.index + 1;
              navigator.push({
                name: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
            intheaters={intheaters}
            />
        }
        />
    )
  }
})

let styles = StyleSheet.create({
  //NavigatorIOS 加入flex才能正常显示listview
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

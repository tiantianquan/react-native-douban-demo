'use strict'
import React from 'react-native'

const {
  ListView,
  Text
} = React


const SubjectListView = React.createClass({
  getInitialState(){
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      subjectsData:this.ds.cloneWithRows(this.props.intheaters)
    }
  },
  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      subjectsData:this.ds.cloneWithRows(this.nextProps.intheaters)
    })
  },
  render() {
    return (
      <ListView
        dataSource={this.state.subjectsData}
        renderRow={(rowData) => <Text>{rowData.title}</Text>}
      />
    )
  }
})

export default SubjectListView

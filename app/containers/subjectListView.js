'use strict'
import React from 'react-native'

const {
  ListView,
  Text
} = React


const SubjectListView = React.createClass({
  componentWillMount() {
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  },
  // getInitialState(){
  //   this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   return {
  //     subjectsData:this.ds.cloneWithRows(this.props.intheaters)
  //   }
  // },
  render() {
    const {intheaters} = this.props
    return (
      <ListView
        dataSource={this.ds.cloneWithRows(intheaters)}
        renderRow={(rowData) => <Text>{rowData.title}</Text>}
      />
    )
  }
})

export default SubjectListView

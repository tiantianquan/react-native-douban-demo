'use strict'
import React from 'react-native'

const {
  View,
  ListView,
  TouchableHighlight,
  Text
} = React


const SubjectListView = React.createClass({
  componentWillMount() {
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  },
  handleClick(){
    this.props.onForward()
  },
  render() {
    const {intheaters} = this.props
    return (
      <ListView
        dataSource={this.ds.cloneWithRows(intheaters)}
        renderRow={(rowData) =>
          <TouchableHighlight onPress={this.handleClick}>
            <Text>
              {rowData.title}
            </Text>
          </TouchableHighlight>
        }
        />
    )
  }
})

export default SubjectListView

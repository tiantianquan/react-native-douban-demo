'use strict'
import React from 'react-native'

const {
  View,
  ListView,
  TouchableHighlight,
  Text,
  Image,
  StyleSheet,
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
            <View>

              <View style={styles.row}>
                <Image
                  style={styles.thumb}
                  source={{uri:rowData.images.large}} />
                <Text style={styles.text}>
                  {rowData.title}
                </Text>
              </View>
              <View style={styles.separator} />
            </View>
          </TouchableHighlight>
        }
        />
    )
  }
})

let styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
});

export default SubjectListView

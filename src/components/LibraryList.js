import React from 'react';
import {connect} from 'react-redux';
import {View, ListView} from 'react-native';
import ListItem from './ListItem';

class LibraryList extends React.Component {
  UNSAFE_componentWillMount() {
    // ListView is for rendering a large amount of data, it does lazy loading and creates only the
    // components that are visible in the screen at that moment, prevents to have all the data in memory
    // and have only the needed data, it points the created components when scrolling to the data that
    // will be displayed.
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListItem item={library} />;
  }

  render() {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

const mapStateToProps = state => {
  return {
    libraries: state.libraries, // This libraries key comes from the combineReducers in reducers/index.js
  };
};

export default connect(mapStateToProps)(LibraryList);

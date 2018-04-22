import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';

class LibraryList extends React.Component {
  render() {
    console.log(this.props);
    return <View>{JSON.stringify(this.props.libraries)}</View>;
  }
}

const mapStateToProps = state => {
  return {libraries: state.libraries};
};

export default connect(mapStateToProps)(LibraryList);

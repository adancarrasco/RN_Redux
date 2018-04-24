import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation,
} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import * as actions from '../actions';

class ListItem extends React.Component {
  UNSAFE_componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const {item, expanded} = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{flex: 1}}>{item.description}</Text>;
        </CardSection>
      );
    }
  }

  render() {
    const {titleStyle} = styles;
    const {id, title} = this.props.item;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

// Map the State to Props in this component
/**
 * Returns the object mapped from the reducer to this component
 * @param {Object} state - The current state
 * @param {Object} ownProps  - The props from this component (ListItem) This is set in the connect()(ListItem)
 * @returns {Object}
 */
const mapStateToProps = (state, ownProps) => {
  // NOTE: The checks and calculations can be done in here to simplify the component code
  const expanded = state.selectedLibraryId === ownProps.item.id;
  return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);

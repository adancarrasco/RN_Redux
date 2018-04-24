// ES6 default value for this parameter `state = null`
import {ACTION_TYPES} from '../actions';
export default (state = null, action) => {
  switch (action.type) {
    case ACTION_TYPES.SELECT_LIBRARY:
      return action.payload;
    default:
      return state;
  }
};

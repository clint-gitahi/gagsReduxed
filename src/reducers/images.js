import Immutable from 'immutable';
import {
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
} from '../constants/images';

// lets set the initailstate to an empty map.
const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch(action.type) {
    // GET_IMAGES_SUCCESS should return a new state with the fetched games in the state.
    case GET_IMAGES_SUCCESS: {
      return state.merge({ list: action.images })
    }

    // if there is a failure return empty state.
    case GET_IMAGES_FAILURE: {
      console.log("getimagesfailure", action.err)
      return state.clear();
    }

    default:
      return state;
  }
}

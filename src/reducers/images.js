import Immutable from 'immutable';
import {
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
  SET_SEARCH_BAR,
  SELECTED_PHOTO,
  DELETE_PHOTO_FAILURE,
  DELETE_PHOTO_SUCCESS
} from '../constants/images';

// lets set the initailstate to an empty map.
const initialState = Immutable.Map();

export default (state = initialState, action) => {
  switch(action.type) {
    // GET_IMAGES_SUCCESS should return a new state with the fetched games in the state.
    // since they both share the same behaviour.
    case DELETE_PHOTO_SUCCESS:
    case GET_IMAGES_SUCCESS: {
      return state.merge({ list: action.images })
    }
    // its now the work of the reducer to set the searchbar content into state.
    case SET_SEARCH_BAR: {
      return state.merge({ searchword: action.words})
    }
    // selected pic to app state.
    case SELECTED_PHOTO: {
      return state.merge({ selectedPhoto: action.photo})
    }

    // if there is a failure return empty state.
    case DELETE_PHOTO_FAILURE:
    case GET_IMAGES_FAILURE: {
      return state.clear();
    }

    default:
      return state;
  }
}

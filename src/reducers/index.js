import { combineReducers } from 'redux-immutable';
import images from './images';

// merge all reducers.
export default combineReducers({
  images,
});

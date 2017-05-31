import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
  SET_SEARCH_BAR
} from '../constants/images';

// dispatch this function in the ImageContainer.
function getImages() {
  return {
    type: GET_IMAGES
  };
}

// this is after fetching from the server, this action is intercepted by the reducer and the images are added to the state.
function getImagesSuccess(images) {
  return {
    type: GET_IMAGES_SUCCESS,
    images
  };
}

function getImagesFailure(err) {
  return {
    type: GET_IMAGES_FAILURE,
    err
  }
}

// this action creator comes with words, typed by the user.
function setSearchBar(words) {
  return {
    type: SET_SEARCH_BAR,
    words
  }
}

export {
  getImages,
  getImagesSuccess,
  getImagesFailure,
  setSearchBar
};

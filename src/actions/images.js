import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
  SET_SEARCH_BAR,
  SELECTED_PHOTO,
  DELETE_PHOTO,
  DELETE_PHOTO_SUCCESS,
  DELETE_PHOTO_FAILURE,
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

function getImagesFailure() {
  return {
    type: GET_IMAGES_FAILURE
  }
}

// this action creator comes with words, typed by the user.
function setSearchBar(words) {
  return {
    type: SET_SEARCH_BAR,
    words
  }
}

function selectedPhoto(photo) {
  return {
    type: SELECTED_PHOTO,
    photo
  };
}

function deletePhoto() {
  return {
    type: DELETE_PHOTO
  }
}

function deletePhotoSuccess(images) {
  type: DELETE_PHOTO_SUCCESS,
  images
};

function deletePhotoFailure() {
  return {
    type: DELETE_PHOTO_FAILURE
  }
}

export {
  getImages,
  getImagesSuccess,
  getImagesFailure,
  setSearchBar,
  selectedPhoto,
  deletePhoto,
  deletePhotoFailure,
  deletePhotoSuccess
};

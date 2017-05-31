import {
  GET_IMAGES,
  GET_IMAGES_SUCCESS,
  GET_IMAGES_FAILURE,
} from '../constants/images';

// dispatch this function in the ImageContainer.
function getImages() {
  return {
    type: GET_IMAGES
  };
}







export {
  getImages,
};

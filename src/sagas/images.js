import { takeLatest } from 'redux-saga/effects';
import { put, call, select } from 'redux-saga/effects';
import { GET_IMAGES, DELETE_PHOTO } from '../constants/images';   // saga handles the GET_IMAGES actions.
import { getImagesSuccess, getImagesFailure, deletePhotoFailure, deletePhotoSuccess } from '../actions/images';
// import fetch from 'isomorphic-fetch';

// we fetch the images.
const fetchImages = () => {
  return fetch('http://localhost:4000/gram', {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => response.json())
};
// this yield call helps control the flow even when there are promise rejections
// the try-catch used below is to make sure that incase the promise gets rejected
// we handle the situation and dispatch a failure action to the reducer.

function* getImages() {
  try {
    const images = yield call(fetchImages);
    // console.log(images)
    yield put(getImagesSuccess(images));
  } catch (err) {
    yield put(getImagesFailure());
  }
}

// this is what waits for the GET_IMAGES action to be dispatched.
function* watchGetImages() {
  yield takeLatest(GET_IMAGES, getImages);    // we use takeLatest so that it will cancel previous tasks.
}

///////////***************** DELETING ********///////////
// selector function to return the images list from state.
const selectedImages = (state) => {
  return state.getIn(['images', 'list']).toJS();
}

const deleteImagebackend = (id) => {
  return fetch(`http://localhost:4000/gram/${id}`, {
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    method: 'DELETE',
  })
  .then(res => res.json())
}

function* deleteImage(action) {
  const { id } = action;
  // we take images from the state.
  const imgs = yield select(selectedImages);
  try {
    yield call(deleteImagebackend, id);
    // the new state will contian the images except for the deleted one.
    yield put(deletePhotoSuccess(imgs.filter(img => img._id !== id)));

  } catch(err) {
    yield put(deletePhotoFailure())
  }
}

// this watcher intercepts the action and runs deleteImage.
function* watchDeleteImage() {
  yield takeLatest(DELETE_PHOTO, deleteImage)
}

export {
  watchGetImages,
  watchDeleteImage
};

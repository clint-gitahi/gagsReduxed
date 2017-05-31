import { takeLatest } from 'redux-saga/effects';
import { put, call } from 'redux-saga/effects';
import { GET_IMAGES } from '../constants/images';   // saga handles the GET_IMAGES actions.
import { getImagesSuccess, getImagesFailure } from '../actions/images';
import fetch from 'isomorphic-fetch';

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

export {
  watchGetImages
};

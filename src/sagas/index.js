import { watchGetImages } from './images';

// we want to start all sagas in parallel.
export default function* rootSaga() {
  yield [
    watchGetImages()
  ];
}

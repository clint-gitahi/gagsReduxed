import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducer from './reducers';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  );

  // start the sagaMiddleware
  sagaMiddleware.run(rootSaga);
  return store;       // this is actually the state of the app.
}

export default configureStore;

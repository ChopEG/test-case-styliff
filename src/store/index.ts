import createSagaMiddleware from '@redux-saga/core';
import {applyMiddleware, createStore, Store} from 'redux';
import {rootReducer} from './root.reducer';
import {rootSaga} from './root.saga';
import {AppState} from './root.types';

export function createAppStore(): Store<AppState> {
  const sagaMiddleware = createSagaMiddleware();
  const initialState = {};

  const store = createStore(
    rootReducer(),
    initialState,
    applyMiddleware(sagaMiddleware),
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

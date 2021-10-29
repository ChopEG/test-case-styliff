import {all} from '@redux-saga/core/effects';
import {postSaga} from './modules/post/post.saga';
import {userSaga} from './modules/user/user.saga';

export function* rootSaga() {
  yield all([
    userSaga,
    postSaga,
  ]);
};

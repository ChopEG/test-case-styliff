import {postService} from './post.service';
import {postActions} from './post.actions';
import {AxiosResponse} from 'axios';
import {GetPosts, Post} from './post.types';
import {call, put, all, takeEvery} from 'redux-saga/effects';

function* getPostsByUser({payload}: any) {
  try {
    const {data}: AxiosResponse<GetPosts> = yield call(
      postService.getPostsByUser,
      payload,
    );

    yield put(postActions.postsSuccess(data));

    data.data = yield all(data.data.map((post) => call(getMessages, post)));

    yield put(postActions.postsSuccess(data));
  } catch (e) {

  }
}

function* getPostsByTag({payload}: any) {
  try {
    const {data}: AxiosResponse<GetPosts> = yield call(
      postService.getPostsByTag,
      payload,
    );

    yield put(postActions.postsSuccess(data));

    data.data = yield all(data.data.map((post) => call(getMessages, post)));

    yield put(postActions.postsSuccess(data));
  } catch (e) {

  }
}

function* getMessages(post: Post) {
  const {data} = yield call(
    postService.getComments,
    {
      id: post.id,
      page: 0,
      limit: 2,
    },
  );

  return {
    ...post,
    countComment: data.total,
    comments: data.data,
  };
}

export const postSaga = all([
  takeEvery(postActions.getPostsByUser, getPostsByUser),
  takeEvery(postActions.getPostsByTag, getPostsByTag),
//  takeEvery(postActions.getCountComment, getCountComment),
]);

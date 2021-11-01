import {GetUserList, User, UserFull} from './user.types';
import {userActions} from './user.actions';
import {userService} from './user.service';
import {all, put, call, takeEvery} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import {PayloadAction} from '@reduxjs/toolkit';
import {postService} from '../post/post.service';

function* getUsers({payload}: any) {
  try {
    const {data}: AxiosResponse<GetUserList> = yield call(
      userService.getUsers,
      payload,
    );

    data.data = yield all(data.data.map((user) => call(getCountPosts, user)));

    yield put(userActions.usersSuccess(data));
  } catch (e) {

  }
}

function* getUser({payload}: PayloadAction<string>) {
  try {
    const {data}: AxiosResponse<UserFull> = yield call(
      userService.getUser,
      payload,
    );

    yield put(userActions.userSuccess(data));
  } catch (e) {

  }
}

function* getCountPosts(user: User) {
  const {data} = yield call(
    postService.getPostsByUser,
    {
      id: user.id,
      page: 0,
      limit: 1,
    },
  );

  return {
    ...user,
    countPosts: data.total,
  };
}

export const userSaga = all([
  takeEvery(userActions.getUsers, getUsers),
  takeEvery(userActions.getUser, getUser),
]);

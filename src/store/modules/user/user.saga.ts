import {GetUserList, UserFull} from './user.types';
import {userActions} from './user.actions';
import {userService} from './user.service';
import {all, put, call, takeEvery} from 'redux-saga/effects';
import {AxiosResponse} from 'axios';
import {PayloadAction} from '@reduxjs/toolkit';

function* getUsers({payload}: any) {
  try {
    const {data}: AxiosResponse<GetUserList> = yield call(
      userService.getUsers,
      payload,
    );

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

export const userSaga = all([
  takeEvery(userActions.getUsers, getUsers),
  takeEvery(userActions.getUser, getUser),
]);

import {GetUserList, GetUserPayload, UserFull} from './user.types';
import {createAction} from '@reduxjs/toolkit';

export const userActionTypes = {
  USERS_REQUEST: '[users] request',
  USERS_SUCCESS: '[users] success',

  USER_REQUEST: '[user] request',
  USER_SUCCESS: '[user] success',
};

export const userActions = {
  getUsers: createAction<GetUserPayload>(userActionTypes.USERS_REQUEST),
  usersSuccess: createAction<GetUserList>(userActionTypes.USERS_SUCCESS),

  getUser: createAction<string>(userActionTypes.USER_REQUEST),
  userSuccess: createAction<UserFull>(userActionTypes.USER_SUCCESS),
};

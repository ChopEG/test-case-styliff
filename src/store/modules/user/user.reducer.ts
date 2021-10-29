import {createReducer} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {userActions} from './user.actions';
import {User, UserPageState} from './user.types';

const {
  getUsers,
  usersSuccess,
  getUser,
  userSuccess,
} = userActions;

const initUsers: User[] = [];

const users = createReducer(initUsers, (builder) => {
  builder
    .addCase(usersSuccess, (state, {payload}) => {
      return [
        ...payload.data,
      ];
    })
    .addCase(userSuccess, (state, {payload}) => {
      return [
        ...state,
        payload,
      ];
    });
});

const initUserPage = {
  isLoading: false,
  page: 0,
  total: 0,
  limit: 10,
};

const userMeta = createReducer(initUserPage, (builder) => {
  builder
    .addCase(getUsers, (state, {payload}) => {
      return {
        ...state,
        isLoading: true,
      };
    })
    .addCase(usersSuccess, (state, {payload}) => {
      return {
        ...state,
        isLoading: false,
        page: payload.page,
        total: payload.total,
      };
    })
    .addCase(getUser, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    })
    .addCase(userSuccess, (state) => {
      return {
        ...state,
        isLoading: false,
      };
    });
});

export const userReducer = combineReducers<UserPageState>({
  users,
  meta: userMeta,
});

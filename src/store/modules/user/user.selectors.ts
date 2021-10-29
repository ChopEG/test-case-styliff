import {createSelector} from 'reselect';
import {AppState} from '../../root.types';

export const getUserState = (state: AppState) => state.user;

export const getUsers = createSelector(
  getUserState,
  (state) => state.users,
);

export const getUserById = createSelector(
  (state: AppState) => state,
  (_: AppState, id: string) => id,
  (state, id) => {
    return state.user.users.find((user) => user.id === id);
  },
);

export const getUserPageMeta = createSelector(
  getUserState,
  (state) => state.meta,
);

import {createSelector} from 'reselect';
import {AppState} from '../../root.types';

export const getPostState = (state: AppState) => state.post;

export const getPosts = createSelector(
  getPostState,
  (state) => state.posts,
);

export const getPostPageMeta = createSelector(
  getPostState,
  (state) => state.meta,
);

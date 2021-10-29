import {postActions} from './post.actions';
import {createReducer} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {Post, PostPageState} from './post.types';

const {
  getPostsByUser,
  postsSuccess,
  countCommentSuccess,
} = postActions;

const initPosts: Post[] = [];

const posts = createReducer(initPosts, (builder) => {
  builder
    .addCase(postsSuccess, (state, {payload}) => {
      return [
        ...payload.data,
      ];
    })
    .addCase(countCommentSuccess, (state, {payload}) => {
      const index = state.findIndex((post) => post.id === payload.id);

      if (!index) {
        return state;
      }

      const newState = [...state];

      newState[index] = {
        ...newState[index],
        countComment: payload.count,
      };

      return [...newState];
    });
});

const initPostPage = {
  isLoading: false,
  page: 0,
  total: 0,
  limit: 10,
};

const postMeta = createReducer(initPostPage, (builder) => {
  builder
    .addCase(getPostsByUser, (state, {payload}) => {
      return {
        ...state,
        isLoading: true,
      };
    })
    .addCase(postsSuccess, (state, {payload}) => {
      return {
        ...state,
        isLoading: false,
        page: payload.page,
        total: payload.total,
      };
    });
});

export const postReducer = combineReducers<PostPageState>({
  posts,
  meta: postMeta,
});

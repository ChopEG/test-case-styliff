import {GetPostPayload, Post} from './post.types';
import {createAction} from '@reduxjs/toolkit';

export const postActionTypes = {
  POSTS_REQUEST_BY_USER: '[posts] user request',
  POSTS_REQUEST_BY_TAG: '[posts] tag request',
  POSTS_SUCCESS: '[posts] success',

  POST_REQUEST_COUNT_COMMENT: '[post] count comment request',
  POST_COUNT_COMMENT_SUCCESS: '[post] count comment sucess',
};

export const postActions = {
  getPostsByUser: createAction<GetPostPayload>(
    postActionTypes.POSTS_REQUEST_BY_USER,
  ),
  getPostsByTag: createAction<GetPostPayload>(
    postActionTypes.POSTS_REQUEST_BY_TAG,
  ),
  postsSuccess: createAction<any>(postActionTypes.POSTS_SUCCESS),

  getCountComment: createAction<Post[]>(
    postActionTypes.POST_REQUEST_COUNT_COMMENT,
  ),
  countCommentSuccess: createAction<{id: string, count: number}>(
    postActionTypes.POST_COUNT_COMMENT_SUCCESS,
  ),
};


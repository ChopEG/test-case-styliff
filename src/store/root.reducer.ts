import {postReducer} from './modules/post/post.reducer';
import {combineReducers} from 'redux';
import {userReducer} from './modules/user/user.reducer';

export function rootReducer() {
  return combineReducers({
    user: userReducer,
    post: postReducer,
  });
}

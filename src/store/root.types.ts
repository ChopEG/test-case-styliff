import {PostPageState} from './modules/post/post.types';
import {UserPageState} from './modules/user/user.types';

export interface AppState {
  user: UserPageState
  post: PostPageState,
}

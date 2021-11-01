import {MetaRequest} from '../../../services/api.service';
import {User} from '../user/user.types';

export interface PostPageState {
  posts: Post[],
  meta: PostMeta,
}

export interface PostMeta {
  isLoading: boolean
  page: number,
  total: number,
  limit: number,
}


export interface Post {
  id: string;
  text: string;
  image: string;
  likes: number;
  link: string
  tags: string[];
  publishDate: string;
  owner: User;
  countComment?: number;
  comments: Comment[]
}

export interface Comment {
  id: string;
  message: string;
  owner: User,
  post: string,
  publishDate: string,
}

export interface GetPostPayload {
  id: string,
  page: number;
  limit?: number;
}

export interface GetPosts extends MetaRequest {
  data: Post[];
}


import {MetaRequest} from '../../../services/api.service';
import {Post} from '../post/post.types';

export interface UserPageState {
  users: User[];
  meta: UserPageMeta;
}

export interface User {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface UserFull extends User {
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  location: UserLocation;
}

export interface UserLocation {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
}

export interface UserPageMeta {
  isLoading: boolean
  page: number,
  total: number,
  limit: number,
}

export interface GetUserPayload {
  page: number;
  limit?: number;
}

export interface GetUserList extends MetaRequest {
  data: User[];
}

export interface GetUserPosts extends MetaRequest {
  data: Post[];
}

import {PostListPage} from './../page/post/PostListPage';
import {UserListPage} from '../page/user/UserListPage';
import {UserProfilePage} from '../page/user/UserProfilePage';

const routes = [
  {
    path: '/users/:userId/post/',
    exact: true,
    component: PostListPage,
    children: PostListPage,
  },
  {
    path: '/users',
    exact: true,
    component: UserListPage,
  },
  {
    path: '/users/:id',
    exact: true,
    component: UserProfilePage,
  },
  {
    path: '/tag/:tagId/post/',
    exact: true,
    component: PostListPage,
  },
];

export default routes;

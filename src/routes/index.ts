import {PostListPage} from './../page/post/PostListPage';
import {UserListPage} from '../page/user/UserListPage';

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
    path: '/tag/:tagId/post/',
    exact: true,
    component: PostListPage,
  },
];

export default routes;

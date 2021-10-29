import {apiService} from '../../../services/api.service';
import {GetUserList, GetUserPosts, UserFull} from './user.types';

class UserService {
  public name = 'user'

  getUser(id: string) {
    return apiService.get<UserFull>(`user/${id}`);
  }

  getUsers({page, limit}: { page: number, limit?: number}) {
    return apiService.get<GetUserList>('user', {
      params: {
        page,
        limit: limit || 10,
      },
    });
  }

  getUserPosts(id: string, limit?: number) {
    return apiService.get<GetUserPosts>(`user/${id}/post`, {
      params: {
        limit: limit || 10,
      },
    });
  }
}


export const userService = new UserService();

import {apiService} from '../../../services/api.service';

class PostService {
  getPostsByTag(data: {id: string, page?: number, limit?: number}) {
    return apiService.get(`tag/${data.id}/post`, {
      params: {
        page: data.page || 0,
        limit: data.limit || 10,
      },
    });
  }

  getPostsByUser(data: {id: string, page?: number, limit?: number}) {
    return apiService.get(`user/${data.id}/post`, {
      params: {
        page: data.page || 0,
        limit: data.limit || 10,
      },
    });
  }

  async getComments(data: {id: string, page?: number, limit?: number}) {
    return await apiService.get(`post/${data.id}/comment`, {
      params: {
        page: data.page || 0,
        limit: data.limit || 10,
      },
    });
  }
}

export const postService = new PostService();

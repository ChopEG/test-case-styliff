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

  async getCountComments(id: string) {
    const {data} = await apiService.get(`post/${id}/comment`);

    return data.total;
  }
}

export const postService = new PostService();

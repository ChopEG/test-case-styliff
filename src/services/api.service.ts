import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

export interface MetaRequest {
  page: number;
  limit: number;
  total: number;
}

function createClient(clientConfig?: AxiosRequestConfig):AxiosInstance {
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL || '',
    headers: {
      'app-id': process.env.REACT_APP_API_KEY || '',
    },
  });
}

export const apiService = createClient();

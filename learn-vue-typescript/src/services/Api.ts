import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { baseURL } from './Constants'

export class Api {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: baseURL,
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
  }

  get<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.api.get(url, config)
  }
}

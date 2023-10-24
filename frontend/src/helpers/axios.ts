import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const service = axios.create({
  headers: { accept: 'application/json' },
  // baseURL: 'https://',
})

service.interceptors.request.use((config: InternalAxiosRequestConfig) => config)

service.interceptors.response.use((response: AxiosResponse) => response.data)

export default service

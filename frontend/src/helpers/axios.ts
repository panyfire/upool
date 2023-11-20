import axios, { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const service = axios.create({
  // headers: { accept: 'application/json' },
  // withCredentials: false,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json, text/plain, */*'
  },
})

service.interceptors.request.use((config: InternalAxiosRequestConfig) => config)
service.interceptors.response.use((response: AxiosResponse) => response.data)

console.log(
  'service',
  service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => config
  )
)

export default service

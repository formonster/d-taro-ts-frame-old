import axios from 'axios'
import Taro from '@tarojs/taro'

export type ServiceError = {
  error: string
  message: string
  path: string
  status: number
  timestamp: number
}

async function request<T>(option: Taro.request.Option<T>) {
  try {
    const res = await Taro.request(option)
    const data: { statusCode: number; data: T & ServiceError; errMsg: string } =
      res[1]
    return data
  } catch (error) {
    const axiosRes = await axios.request<T>({
      url: option.url,
      data: option.data,
      method: option.method as any,
    })
    return axiosRes
  }
}

async function get<T = any>(option: Taro.request.Option<T>) {
  return request<T>(option)
}
async function post<T = any>(option: Taro.request.Option<T>) {
  return request<T>({ method: 'POST', ...option })
}
async function del<T = any>(option: Taro.request.Option<T>) {
  return request<T>({ method: 'DELETE', ...option })
}
async function put<T = any>(option: Taro.request.Option<T>) {
  return request<T>({ method: 'PUT', ...option })
}
export function checkError(data: { status: number; msg?: string }) {
  if (data.status !== 200) {
    Taro.showToast({
      title: data.msg || '',
      icon: 'error',
    })
    return true
  }
  return false
}

export default { get, post, del, put }

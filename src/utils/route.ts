import { RouteKeys, Routes, routeConfig } from '@/route'
import Taro from '@tarojs/taro'

export const objectToUrlParams = (data: object) => {
  if (!data || !Object.keys(data)) return ''

  let url = '?'
  Object.entries(data).forEach(([key, value]) => {
    let _value = value
    if (typeof value === 'object') _value = JSON.stringify(_value)
    url += `${key}=${_value}`
  })
  return url
}

export const to = <K extends RouteKeys>(
  route: K,
  params?: Routes[K]['params']
) => {
  Taro.navigateTo({
    url:
      '/' +
      routeConfig[route].route +
      ((params && objectToUrlParams(params)) || ''),
  })
}

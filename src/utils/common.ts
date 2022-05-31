import Taro from '@tarojs/taro'
import { clone } from 'lodash'

export function isError(res: any, showToast = true) {
  if (res.statusCode !== 200) {
    if (showToast)
      Taro.showToast({
        title: res.data.message,
        icon: 'error',
      })
    return true
  }
  return false
}
export function pageOffset(index: number, size: number) {
  return index ? index * size + 1 : 0
}
export function getFetchData(res: [null, { data: unknown }]) {
  return res[1].data
}
export const nowSecond = () => Math.floor(new Date().getTime() / 1000)
export const nowTime = () => Math.floor(new Date().getTime())
export function getDate(type: string) {
  const date = new Date()

  let year = date.getFullYear()
  let month: number | string = date.getMonth() + 1
  let day: number | string = date.getDate()

  if (type === 'start') {
    year = year - 10
  } else if (type === 'end') {
    year = year + 10
  }
  month = month > 9 ? month : '0' + month
  day = day > 9 ? day : '0' + day

  return `${year}-${month}-${day}`
}

export const arr2Dic = function (
  arr: any[] = [],
  field: string,
  other?: object
) {
  let dic = {}
  if (Array.isArray(field)) {
    arr.forEach((vo) => {
      // @ts-ignore
      dic[vo[field[0]]] = other ? Object.assign(vo, clone(other)) : vo[field[1]]
    })
  } else {
    arr.forEach((vo) => {
      // @ts-ignore
      dic[vo[field]] = other ? Object.assign(vo, clone(other)) : vo
    })
  }
  return dic
}

export function formatRichText(html: string) {
  let newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {
    match = match.replace(/style="[^"]+"/gi, '').replace(/style='[^']+'/gi, '')
    match = match.replace(/width="[^"]+"/gi, '').replace(/width='[^']+'/gi, '')
    match = match
      .replace(/height="[^"]+"/gi, '')
      .replace(/height='[^']+'/gi, '')
    return match
  })
  newContent = newContent.replace(/style="[^"]+"/gi, function (match, capture) {
    match = match
      .replace(/width:[^;]+;/gi, 'max-width:100%;')
      .replace(/width:[^;]+;/gi, 'max-width:100%;')
    return match
  })
  newContent = newContent.replace(/<br[^>]*\/>/gi, '')
  newContent = newContent.replace(
    /\<img/gi,
    '<img style="max-width:100%;height:auto;display:inline-block;margin:10rpx auto;"'
  )
  return newContent
}

export function numberToCapitalize(num: number) {
  if (num > 10) return ''
  return ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'][num]
}

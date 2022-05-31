/**
 * 秒转倒计时
 * @param seconds 秒
 */
export function secondToCountDown(seconds: number) {
  var d = Math.floor(seconds / 3600 / 24) //得到天数
  var h = Math.floor((seconds / 3600) % 24) //小时
  var m = Math.floor((seconds / 60) % 60) //分钟
  var s = Math.floor(seconds % 60) //秒
  return { d, h, m, s }
}

/**
 * 返回当前时间的秒数
 * @returns 秒数
 */
export const nowSecond = () => Math.floor(Date.now() / 1000)

export const second2DateStr = (second: number) =>
  dateFormat(new Date(second * 1000))

export const dateFormat = function (date: Date, fmt = 'yyyy-MM-dd') {
  var o = {
    'M+': date.getMonth() + 1, //月份
    'd+': date.getDate(), //日
    'h+': date.getHours(), //小时
    'm+': date.getMinutes(), //分
    's+': date.getSeconds(), //秒
    'q+': Math.floor((date.getMonth() + 3) / 3), //季度
    S: date.getMilliseconds(), //毫秒
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  // @ts-ignore
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
  return fmt
}

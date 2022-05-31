import {} from 'taro-ui'

// export function getWxCode() {
//   return new Promise((resolve, reject) => {
//     Taro.login({
//       provider: 'weixin',
//       success: async function (loginRes) {
//         console.log('getWxCode', loginRes)
//         let code = loginRes.code
//         const user = { code }
//         resolve(user)
//         uni.hideLoading()
//       },
//     })
//   })
// }

// export function getWxUserInfo() {
//   return new Promise<Taro.GetUserInfoRes>((resolve, reject) => {
//     uni.getUserProfile({
//       desc: 'Wexin',
//       success: async function (infoRes) {
//         console.log('用户信息：', infoRes)
//         resolve(infoRes)
//       },
//       fail: function (error) {
//         console.log(error)
//       },
//       complete: uni.hideLoading,
//     })
//   })
// }

/**
 * 参与人申请消息通知权限
 */
export function applyUserMessage({
  success,
  fail,
  complete,
}: {
  success: () => {}
  fail: () => {}
  complete: () => {}
}) {
  wx.requestSubscribeMessage({
    tmplIds: [
      'Alm77o-GQi_BA7zkdrbH6cUYHlcV4WeWuTJSb1vqLE0',
      'iO4gmhj7PZuDXTCXy2AFrLny7-yJ5sOVCNtuc5szMlQ',
    ],
    success,
    fail,
    complete,
  })
}

/**
 * 发布者申请消息通知权限
 */
export function applyAdminMessage({
  success,
  fail,
  complete,
}: {
  success: () => {}
  fail: () => {}
  complete: () => {}
}) {
  wx.requestSubscribeMessage({
    tmplIds: ['uR5pGAmrml-KHV58vBxK5jPPgMpwo2fHine2H31VpiE'],
    success,
    fail,
    complete,
  })
}

import { isError } from '@/utils/common'
import { upload as qiniuUploadUtil } from '@/service/qiniu'
import { getUploadOssFormData } from '@/apis/common'

export async function qiniuUpload(tempFilePaths: string[]) {
  const img = tempFilePaths[0]
  return new Promise((resolve, reject) => {
    qiniuUploadUtil({
      filePath: img,
      success: (res) => {
        resolve(res.imageURL)
      },
      fail: (err) => {
        reject(err)
      },
    })
  })
}

export async function upload(tempFilePaths: string[]) {
  const res = await getUploadOssFormData()
  if (isError(res)) return
  return new Promise((resolve, reject) => {
    Promise.allSettled(
      tempFilePaths.map((filePath) => {
        return uploadFile(filePath, {
          name: res.data.name,
          key: res.data.bucket + res.data.name,
          policy: res.data.policy,
          OSSAccessKeyId: res.data.accessId,
          success_action_status: '200',
          signature: res.data.signature,
        })
      })
    ).then((data: any[]) => {
      resolve(data.map((val: any) => val.value))
    })
  })
}

export function uploadFile(
  filePath: string,
  formData: {
    name: string
    key: string
    policy: string
    OSSAccessKeyId: string
    success_action_status: string
    signature: string
  }
) {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url: 'https://r3fkip92h.hn-bkt.clouddn.com',
      filePath,
      name: 'file',
      header: {
        'Content-Type': 'multipart/form-data',
      },
      formData,
      success: function () {
        resolve(`http://file.healthtoo.cn/${formData.key}`)
      },
      fail: function (err) {
        reject(err)
      },
    })
  })
}

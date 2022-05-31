import fetch from '@/service/fetch'
import { url } from '@/apis/utils'

export function sendMessage(phone: string) {
  return fetch.post({
    url: url('/api/user/sendSMS'),
    data: { phone },
  })
}

export function getUploadOssFormData() {
  return fetch.post<{
    bucket: string
    accessId: string
    name: string
    policy: string
    signature: string
  }>({
    url: url('/api/lotteryMain/fileUpload'),
  })
}

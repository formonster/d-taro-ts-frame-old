import fetch from '@/service/fetch'
import { url } from '@/apis/utils'

export function list() {
  return fetch.get({
    url: url('/api/list'),
    data: { table: 'user' },
  })
}

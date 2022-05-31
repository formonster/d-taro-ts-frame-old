import serviceConfig from '@/config/service'

export function url(requestUrl: string) {
  return `${serviceConfig.host}${requestUrl}`
}

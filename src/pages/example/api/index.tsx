import { View } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { list } from '@/apis/base'
import './index.less'

export default function AtIconDemo() {
  return (
    <View className='index flex flex-col'>
      <AtButton onClick={list}>请求</AtButton>
    </View>
  )
}

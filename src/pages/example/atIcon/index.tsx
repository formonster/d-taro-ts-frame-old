import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.less'

export default function AtIconDemo() {
  return (
    <View className='index flex flex-col'>
      <View className='at-icon at-icon-settings'></View>
      <AtIcon value='clock' size='30' color='#F00'></AtIcon>
    </View>
  )
}

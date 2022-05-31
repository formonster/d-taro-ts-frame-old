import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.less'

export default function CustomIconDemo() {
  return (
    <View className='index flex flex-col'>
      <View className='iconfont iconfont-shuoming'></View>
      <AtIcon prefixClass='iconfont' value='shuoming' size='30' color='#F00'></AtIcon>
    </View>
  )
}

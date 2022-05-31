import { View } from '@tarojs/components'
import { to } from '@/utils/route'
import { useState } from 'react'
import { AtAccordion, AtList, AtListItem } from 'taro-ui'
import './index.less'

type MenuOpenState = { icon?: boolean; api?: boolean }

export default function Index() {
  const [open, setOpen] = useState<MenuOpenState>({})

  function onChangeOpen(key: string) {
    let _open = { ...open }
    if (!_open[key]) _open[key] = {}
    _open[key].open = !_open[key].open
    console.log(_open)
    setOpen(_open)
  }
  return (
    <View>
      <AtAccordion
        open={open.icon}
        onClick={onChangeOpen.bind(null, 'icon')}
        title='Icon'
      >
        <AtList hasBorder={false}>
          <AtListItem
            title='AtIcon'
            arrow='right'
            onClick={() => to('example/atIcon')}
          />
          <AtListItem
            title='自定义图标'
            arrow='right'
            onClick={() => to('example/customIcon')}
          />
        </AtList>
      </AtAccordion>
      <AtAccordion
        open={open.api}
        onClick={onChangeOpen.bind(null, 'api')}
        title='API 请求'
      >
        <AtList hasBorder={false}>
          <AtListItem
            title='API 请求'
            arrow='right'
            onClick={() => to('example/api')}
          />
        </AtList>
      </AtAccordion>
    </View>
  )
}

## 支持以下功能

- 集成 [Taro UI](https://taro-ui.jd.com/#/docs/introduction)
- ✅ 字体图标
- ✅ 封装请求API
- 支持上传七牛
- 支持弹窗
- tailwinds
- 演示代码高亮

## 常用 API

**路由跳转**

[官方文档](https://taro-docs.jd.com/taro/docs/router)

```ts
// // 跳转到目的页面，打开新页面
Taro.navigateTo({ url: '/pages/page/path/name' })

// 跳转到目的页面，在当前页面打开
Taro.redirectTo({ url: '/pages/page/path/name' })
```

**获取路由参数**

**页面配置**

**「事件」下拉刷新**

**「事件」滑动到页面底部事件**

## 问题记录

### Can't resolve './style/index.scss'

描述：引入 taro-ui 之后报错
原因：版本兼容问题，当前使用的 taro 版本为 3，taro-ui 也需要升级
解决办法：升级 taro-ui 到 3
参考：https://blog.csdn.net/qq_28827635/article/details/122725509

### Failed to load local font resource /assets/fonts/

描述：引入字体图标后报错
解决办法：https://wanlinqiang.com/2019/01/18/Taro-Failed-to-load-local-font-resource/
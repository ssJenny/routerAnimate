# zcanimate

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 转场动画
安装插件
vueg 基于animate.css动画库
```
npm install --save vueg
```
引入插件

```$xslt
import vueg from 'vueg'
import 'vueg/css/transition-min.css'

Vue.use(vueg, router, {
  forwardAnim: 'fadeInRight'
})


```
组件内使用 
```$xslt
data() {
      return {
        vuegConfig: {
          forwardAnim:'fadeInRight',  //进入动画
          backAnim: 'fadeInLeft',  //返回动画
          duration: 0.8, //动画持续事件
          disable:false  //禁用动画，默认为false，嵌套路由默认为true  
        }
      }
    },
```

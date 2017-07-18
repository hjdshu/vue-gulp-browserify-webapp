# vue + vue-router webapp


### 目录
- src
    - components: 组件
    - pages 业务页面
    - router 路由
    - static 静态文件、图片等
    - app.js 入口文件
    - App.vue 入口模板，放一些公共组件
    - index.html 入口页面

- tmp 开发打包目录
- dist 发布打包目录


## dev
### host
host里需加上 127.0.0.1 localhost

```
npm install

```

### 关于安装
作者发现在高版本nodejs(6.0以上) vue会选择安装2.4.0版本，但由于vue官方包可能有错误导致安装失败， 所以推荐手动安装2.3.4版本,
vue-template-compiler 可能也会被安装成2.4.0 需要手动安装跟vue对应的 2.3.4版本
例：

```
npm install vue@2.3.4
npm install vue-template-compiler@2.3.4

```

```
gulp

```


## build

```
gulp build

```
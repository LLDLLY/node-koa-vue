# koa-vue

## 技术栈
1. 前端: vue 2.x (基础框架) vuex 3.x (状态管理) + vant 组件库 + vue-cli-service (编译方案)
2. 后端: koa 2.x (基础框架) + MongoDB (数据库) + mongoose 5.x (链接数据库工具)

## 简介
 前端vue、后端koa搭建的一个商城类的H5项目，包括：首页、商品分类、购物车、个人中心四个大模块，主要是用于学习全栈开发。

## 项目目录结构

```

├── README.md                                        // 项目使用说明文件
├── package.json                                     // 项目依赖和常用脚本命令配置
├── postcss.config.js                                // postcss配置
├── vue.config.js                                    // vue-cli-service配置
├── babel.config.js                                  // vue-cli-service babel配置
├── public                                           // 静态文件存放目录
│   ├── favicon.ico                                  // 项目图标
│   └── index.html                                   // index页面
├── src
│   ├── assets                                       // 资源目录
│   │   ├── img                                      // 图片
│   │   └── style                                    // 样式文件
│   │── filter                                       // vue filter
│   │   ...                                    
│   │── request                                      // axios请求
│   │   ├── api                                      // api
│   │   ├── base.url                                 // baseUrl环境区分
│   │   ├── index                                    // axios初始化
│   │   └── request.config                           // axios拦截器封装
│   │── router                                        
│   │   └── router                                   // 路由
│   │── store                                        // vuex
│   │   ...                                          
│   │── utiles                                       // 工具类目录
│   │   ├── constant                                 // 全局常量
│   │   ├── modules-index                            // 公共导入类(导出所有公共文件)
│   │   └── utils                                    // 工具类
│   │── views                                        // 组件目录 
│   │   ...                                          
│── App.vue                                          // VUE主文件
└── main.js                                          // Main主文件

```
## 项目启动及构建

### 下载依赖
#### 前端
```
npm install
```

#### 后端
> 注意：运行项目需要自己搭建一下MongoDB数据库，并在`server -> config -> DATABASE` 中修改一下配置。
```
cd server
npm install
```

### 项目启动
#### 前端
```
npm run serve
```
#### 后端
```
cd server
npm run start
```

### 项目构建

```
npm run build
```


## server API

```
 http://localhost:3001/api/v1
```

1. 首页
```
/home
/city
```

2. 商品
```
/goods/getGoodsDetail
/goods/commentsList
/goods/getCategories
/goods/getCategoriesChild
/goods/getCategoriesChildList
```

3. 用户
```
/user/register
/user/login
```


4. 给数据库导入数据接口
```
/insert/comments 
/insert/allGoodsInfo
/insert/allCategory
/insert/allCategorySub
```

## 感谢

一开始想要学习写node,找到了[D调的_coder](https://github.com/tqq123)的[Vue-Koa2-MongoDB](https://github.com/tqq123/Vue-Koa2-MongoDB)，最开始是照着这个项目学习着写，后来有了些自己的想法对整体项目结构重新整理了一下。在此特别鸣谢[D调的_coder](https://github.com/tqq123)。
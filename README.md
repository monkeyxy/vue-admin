# middle-backend

> 中后台系统

### 目录结构 

```bash
├── /dist/           # 项目输出目录
├── /src/            # 项目源码目录
│ ├── /components/   # UI组件及UI相关方法
│ ├── /routes/       # 页面级别
│ ├── /store/       # 数据管理
│ ├── /utils/        # 工具函数
│ │ ├── index.js     # 项目常规公共方法
│ │ ├── request.js     # 封装的http函数
│ │ └── service.js     # 异步请求
│ ├── router.js       # 路由
│ ├── index.js       # 入口文件
│ └── index.html     # 项目入口
├── package.json     # 项目信息
├── .eslintrc        # Eslint配置
├── Dockerfile       # 生成镜像文件
└── .roadhogrc.js    # roadhog配置
```

### 快速开始


node版本建议使用8.0.0+

进入目录安装依赖：

  npm i 或者 yarn install

``` bash
# 开发环境
npm run dev

# 打包构建
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```


### 使用的库

1. ui库--iview   
`https://www.iviewui.com/`
2. http库--axios   
3. 数据管理--vuex
`https://vuex.vuejs.org/`



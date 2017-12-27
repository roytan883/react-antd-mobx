# react-antd-mobx

## create react app 配置添加
[create-react-app](https://github.com/timarney/react-app-rewired)
再项目根目录下创建config-overrrides.js文件  
```
const {
    injectBabelPlugin
} = require('react-app-rewired');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', {
        libraryName: 'antd',
        style: 'css'
    }], config);
    config = injectBabelPlugin('transform-decorators-legacy', config);
    return config;
};
```
配置里加入的是antd的ui框架的按需加载方案，以及@注解功能。

package.json里scripts替换
```
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test --env=jsdom",
```


## vscode chrome插件
[DebuggerForChrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) vscode 下的 chrome 插件

在项目根目录下创建.vscode/launch.json

```
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [{
        "name": "Chrome",
        "type": "chrome",
        "request": "launch",
        "url": "http://localhost:3000",
        "webRoot": "${workspaceRoot}/src",
        "sourceMapPathOverrides": {
            "webpack:///src/*": "${webRoot}/*"
        }
    }]
}
```
* url可根据实际运行的端口来定


## Eslint的配置

[ESLint](https://eslint.org/) 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误。

在根目录创建.eslintrc文件
```json
{
    "extends": "react-app"
}
```


create-react-app 使用的语法规则插件：

[eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype) flowtype的语法规则  
[eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) import相关的语法规则  
[eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) jsx的语法规则  
[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) react的语法规则  

使用的语法规则是最小范围的规则,如果使用比较严格的语法官方推荐使用[Prettier](https://prettier.io/docs/en/install.html)

### html模板
[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)  
create-react-app模板文件放在public/index.html,可以修改基础路径配置

```
<link rel="manifest" href="%PUBLIC_URL%/static/manifest.json">
<link rel="shortcut icon" href="%PUBLIC_URL%/static/favicon.ico">
```

### 生产打包
```
yarn build 
```
在build目录下生成打包后的文件
index.html 是入口html文件  
manifest.json 是html配置文件
static目录下的是打包后的js，css文件

create-react-app脚手架帮我们实现了serve的功能，需要安装serve的命令运行，这种方式彻底分离了服务端和客户端,api通过跨域请求的方式可以解决
```
  yarn global add serve
  serve -s build
```

### packages

#### 开发工具
[webpack](https://github.com/webpack/webpack)  
[babel](https://github.com/babel/babel)  


#### ui库
[antd](https://github.com/ant-design/ant-design) ui组件库  
[elemental](https://github.com/elementalui/elemental)布局灵活的ui框架  

#### 工具库
[immutable](https://github.com/facebook/immutable-js)用于Javascript的不可变持久性数据集合可提高效率和简单性  
[lodash](https://github.com/lodash/lodash)一个现代的JavaScript实用程序库，提供模块化，性能和附加功能  

#### http请求库
[axios](https://github.com/axios/axios)基于Promise的浏览器和node.js的HTTP客户端  
[isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)同构WHATWG获取API，用于Node＆Browserify

#### mobx相关库
[mobx](https://github.com/mobxjs/mobx)简单，可扩展的状态管理  
[mobx-react](https://github.com/mobxjs/mobx-react)React bindings for MobX  
[mobx-react-router](https://github.com/alisd23/mobx-react-router)保持你的MobX状态与react-router同步  

#### redux相关库
[redux](https://github.com/reactjs/redux)可预测的JavaScript应用程序状态容器  
[react-redux](https://github.com/reactjs/react-redux)Official React bindings for Redux   
[react-router-redux](https://github.com/reactjs/react-router-redux)简单的绑定，以保持react-router和redux的同步  
[redux-thunk](https://github.com/gaearon/redux-thunk)redux异步的中间件  
[redux-saga](https://github.com/redux-saga/redux-saga)redux异步的中间件

#### 脚手架
[create-react-app](https://github.com/timarney/react-app-rewired)react官方脚手架    
[react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) react redux的脚手架  
[starhakit](https://github.com/FredericHeem/starhackit)react mobx node 的全站脚手架  

#### 测试
[jest](https://github.com/facebook/jest)facebook官方测试框架  

#### 代码分离
[react-loadable](https://github.com/thejameskyle/react-loadable)生产环境按需加载代码

#### 服务器
[serve](https://github.com/zeit/serve)静态文件服务和目录列表  
[koa](https://github.com/koajs/koa)node web框架  
[egg](https://eggjs.org/)阿里基于koa的web框架  

#### 其他
[react awesome](https://github.com/brillout/awesome-react-components)react 集锦    
[react native awesome](https://github.com/jondot/awesome-react-native)react native 集锦  
[react-desktop](https://github.com/gabrielbull/react-desktop)react 桌面版  
[electronjs](https://electronjs.org/)javascritp桌面端工具      
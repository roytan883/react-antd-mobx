# react-antd-mobx

## create react app �������
[create-react-app](https://github.com/timarney/react-app-rewired)
����Ŀ��Ŀ¼�´���config-overrrides.js�ļ�  
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
������������antd��ui��ܵİ�����ط������Լ�@ע�⹦�ܡ�

package.json��scripts�滻
```
"start": "react-app-rewired start",
"build": "react-app-rewired build",
"test": "react-app-rewired test --env=jsdom",
```


## vscode chrome���
[DebuggerForChrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) vscode �µ� chrome ���

����Ŀ��Ŀ¼�´���.vscode/launch.json

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
* url�ɸ���ʵ�����еĶ˿�����


## Eslint������

[ESLint](https://eslint.org/) ���� ECMAScript/JavaScript ������ʶ��ͱ���ģʽƥ��Ĺ��ߣ�����Ŀ���Ǳ�֤�����һ���Ժͱ������

�ڸ�Ŀ¼����.eslintrc�ļ�
```json
{
    "extends": "react-app"
}
```


create-react-app ʹ�õ��﷨��������

[eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype) flowtype���﷨����  
[eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) import��ص��﷨����  
[eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) jsx���﷨����  
[eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) react���﷨����  

ʹ�õ��﷨��������С��Χ�Ĺ���,���ʹ�ñȽ��ϸ���﷨�ٷ��Ƽ�ʹ��[Prettier](https://prettier.io/docs/en/install.html)

### htmlģ��
[html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)  
create-react-appģ���ļ�����public/index.html,�����޸Ļ���·������

```
<link rel="manifest" href="%PUBLIC_URL%/static/manifest.json">
<link rel="shortcut icon" href="%PUBLIC_URL%/static/favicon.ico">
```

### �������
```
yarn build 
```
��buildĿ¼�����ɴ������ļ�
index.html �����html�ļ�  
manifest.json ��html�����ļ�
staticĿ¼�µ��Ǵ�����js��css�ļ�

create-react-app���ּܰ�����ʵ����serve�Ĺ��ܣ���Ҫ��װserve���������У����ַ�ʽ���׷����˷���˺Ϳͻ���,apiͨ����������ķ�ʽ���Խ��
```
  yarn global add serve
  serve -s build
```

### packages

#### ��������
[webpack](https://github.com/webpack/webpack)  
[babel](https://github.com/babel/babel)  


#### ui��
[antd](https://github.com/ant-design/ant-design) ui�����  
[elemental](https://github.com/elementalui/elemental)��������ui���  

#### ���߿�
[immutable](https://github.com/facebook/immutable-js)����Javascript�Ĳ��ɱ�־������ݼ��Ͽ����Ч�ʺͼ���  
[lodash](https://github.com/lodash/lodash)һ���ִ���JavaScriptʵ�ó���⣬�ṩģ�黯�����ܺ͸��ӹ���  

#### http�����
[axios](https://github.com/axios/axios)����Promise���������node.js��HTTP�ͻ���  
[isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)ͬ��WHATWG��ȡAPI������Node��Browserify

#### mobx��ؿ�
[mobx](https://github.com/mobxjs/mobx)�򵥣�����չ��״̬����  
[mobx-react](https://github.com/mobxjs/mobx-react)React bindings for MobX  
[mobx-react-router](https://github.com/alisd23/mobx-react-router)�������MobX״̬��react-routerͬ��  

#### redux��ؿ�
[redux](https://github.com/reactjs/redux)��Ԥ���JavaScriptӦ�ó���״̬����  
[react-redux](https://github.com/reactjs/react-redux)Official React bindings for Redux   
[react-router-redux](https://github.com/reactjs/react-router-redux)�򵥵İ󶨣��Ա���react-router��redux��ͬ��  
[redux-thunk](https://github.com/gaearon/redux-thunk)redux�첽���м��  
[redux-saga](https://github.com/redux-saga/redux-saga)redux�첽���м��

#### ���ּ�
[create-react-app](https://github.com/timarney/react-app-rewired)react�ٷ����ּ�    
[react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit) react redux�Ľ��ּ�  
[starhakit](https://github.com/FredericHeem/starhackit)react mobx node ��ȫվ���ּ�  

#### ����
[jest](https://github.com/facebook/jest)facebook�ٷ����Կ��  

#### �������
[react-loadable](https://github.com/thejameskyle/react-loadable)��������������ش���

#### ������
[serve](https://github.com/zeit/serve)��̬�ļ������Ŀ¼�б�  
[koa](https://github.com/koajs/koa)node web���  
[egg](https://eggjs.org/)�������koa��web���  

#### ����
[react awesome](https://github.com/brillout/awesome-react-components)react ����    
[react native awesome](https://github.com/jondot/awesome-react-native)react native ����  
[react-desktop](https://github.com/gabrielbull/react-desktop)react �����  
[electronjs](https://electronjs.org/)javascritp����˹���      
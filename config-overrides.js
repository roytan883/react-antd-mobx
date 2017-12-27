const {
    injectBabelPlugin
} = require('react-app-rewired');

const rewireLess = require('react-app-rewire-less');
const rewireEslint = require('react-app-rewire-eslint');

module.exports = {
    webpack: function (config, env) {
        config = rewireEslint(config, env);
        config = injectBabelPlugin(['import', {
            libraryName: 'antd',
            style: true
        }], config);
        config = injectBabelPlugin('transform-decorators-legacy', config);

        config = rewireLess.withLoaderOptions({
            modifyVars: {
                // "@primary-color": "#1DA57A" 主题颜色
            },
        })(config, env);
        return config;
    }
}
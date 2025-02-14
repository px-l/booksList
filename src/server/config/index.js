const path = require('path');
let config = {
    viewDir: path.join(__dirname, '../../', "web/views"),
    staticDir: path.join(__dirname, '../../', "assets")
};
// NODE_ENV
if(process.env.NODE_ENV === 'development') {
    const devConfig={
        port: 3000,
        cache: false
    }
    config = {
        ...config, ...devConfig
    }
}
if(process.env.NODE_ENV === 'production') {
    const prodConfig={
        port: 80,
        cache: 'memory'
    }
    config = {
        ...config, ...prodConfig
    }
}

module.exports = config;
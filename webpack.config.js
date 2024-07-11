const { argv } = require('yargs');
const mode = argv.mode || 'development';
const envConfig = require(`./build/webpack.${mode}.js`);
const { merge } = require('webpack-merge');
const glob = require('glob');
const files = glob.sync('./src/web/views/**/*.js');
let entries = {};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugins = [];
files.map(file => {
    if (/([a-zA-Z]+)\.js/.test(file)) {
        const filename = RegExp.$1;
        entries[filename] = './' + file;
        htmlPlugins.push(
            new HtmlWebpackPlugin({
                filename:  '../views/' + filename + '.html',
                template: './src/web/views/books/' + filename + '.html',
                chunks: [filename]
            }
        ))
    }
});

const baseConfig = {
    mode,
    entry: entries,
    output: {
        path: path.join(__dirname, './dist/assets'),
        filename: 'scripts/[name].bundle.js'
    },
    optimization: {
        runtimeChunk: 'single',
    },
    module: {
        rules: [
            { test: /\.js$/, use: ['babel-loader'] },
            { css:  /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        ...htmlPlugins
    ]
}
module.exports = merge(baseConfig, envConfig);
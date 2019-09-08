const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 负责将html文档虚拟到根目录下
let htmlWebpackPlugin = new HtmlWebpackPlugin({
    // 虚拟的html文件名 index.html
    filename: 'index.html',
    // 虚拟html的模板为 src下的index.html
    template: path.resolve(__dirname, './src/index.html')
})

module.exports = {
    // 开发模式
    mode: 'development',
    // 配置入口文件
    entry: './src/index.js',
    // 出口文件目录为根目录下dist, 输出的文件名为main
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    // 配置source-map用于chrome调试
    devtool: 'source-map',
    // 配置开发服务器, 并配置自动刷新
    devServer: {
        // 根目录下dist为基本目录
        contentBase: path.join(__dirname, 'dist'),
        // 自动压缩代码
        compress: true,
        // 服务端口为1404
        port: 1404,
        // 自动打开浏览器
        open: true,
        // 当使用 HTML History API(history.pushState) 时，任意的 404 响应都会被重定向到 /index.html
        // 防止手动输入url返回 "Can not get xxx": https://blog.csdn.net/zwkkkk1/article/details/83411071
        historyApiFallback: true,
    },
    // 装载虚拟目录插件
    plugins: [htmlWebpackPlugin],
    // 配置loader
    module: {
        // 根据文件后缀匹配规则
        rules: [
            // 配置js/jsx语法解析
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/},
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
        ]
    }
}
// const { dirname } = require('path')
const path = require('path')

module.exports = {
  target: 'node',//webpack 将在类 Node.js 环境编译代码
  mode: 'development',//加上这个标志开发，打包速度会快很多
  entry: path.join(__dirname, 'src/client/ServerApp.js'),//转换客户端的页面给服务端
  output: {
    filename: 'ServerApp.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs2' //打包输出的代码将在 Node.js 环境下运行
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
}
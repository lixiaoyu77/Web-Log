Webpack 的运行流程是一个**串行**的过程，它的工作流程就是将**各个插件串联**起来
**在运行过程中会广播事件，插件只需要监听它所关心的事件，就加入到这条webpack机制中，去改变webpack的运作，使得整个系统扩展性良好**

Webpack 启动到结束会依次执行以下三大步骤：
1. 初始化流程：从配置文件（webpack.config.js）/ Shell 语句中读取与合并参数，并初始化需要使用的**插件**和配置插件等执行环境所需要的**参数**
```javascript
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

module.exports = {
  // 入口文件，是模块构建的起点，同时每一个入口文件对应最后生成的一个 chunk。
  entry: './path/to/my/entry/file.js'，
  // 文件路径指向(可加快打包过程)。
  resolve: {
    alias: {
      'react': pathToReact
    }
  },
  // 生成文件，是模块构建的终点，包括输出文件与输出路径。
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  // 这里配置了处理各模块的 loader ，包括 css 预处理 loader ，es6 编译 loader，图片处理 loader。
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
    noParse: [pathToReact]
  },
  // webpack 各插件对象，在 webpack 的事件流中执行对应的方法。
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
```
2. 编译构建流程：从 Entry 发出，针对每个 Module 串行调用对应的 Loader 去翻译文件内容，再找到该 Module 依赖的 Module，递归地进行编译处理
```javascript
module.exports = {
  entry: './src/file.js'
}
```
3. 输出流程：对编译后的 Module 组合成 Chunk，把 Chunk 转换成文件，输出到文件系统。
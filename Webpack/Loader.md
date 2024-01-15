# Loader 用于对模块的"源代码"进行转换，在 import 或"加载"模块时预处理文件
webpack做的事情，仅仅是分析出各种模块的依赖关系，然后形成资源列表，最终打包生成到指定的文件中。
![webpack](../img/webpackloader.png)
在webpack内部中，任何文件都是模块，不仅仅只是js文件
默认情况下，在遇到import或者require加载模块的时候，webpack只支持对js 和 json 文件打包
像css、sass、png等这些类型的文件的时候，webpack则无能为力，这时候就需要配置对应的loader进行文件内容的解析
在加载模块的时候，执行顺序如下：
![webpack](../img/loader.png)

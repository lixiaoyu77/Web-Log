
# Tree Shaking 
一种优化技术，主要用于移除 JavaScript 中未被使用的、无效的代码，以减小最终打包文件的大小。在 Webpack 中，Tree Shaking 主要与 ES6 模块（import/export）和静态解析有关。

以下是 Tree Shaking 在 Webpack 中的主要原理：

ES6 模块系统： Tree Shaking 主要依赖于 ES6 模块的静态结构。ES6 模块是静态的，这意味着它们在编译时就可以被解析，而不需要运行时的信息。这使得编译器可以在构建过程中进行静态分析，找出哪些导入的模块被实际使用。

标记未使用代码： 在编译过程中，Webpack 会标记模块中的各个导出，以及哪些导出被其他模块引用。这个信息将用于后续的 Tree Shaking 过程。

UglifyJS 或 Terser 插件： Webpack 通常使用 UglifyJS 或 Terser 插件进行代码压缩。这些插件会根据标记的信息，将未被引用的代码从最终的输出中移除。在这一步骤中，静态分析确保只有未被引用的代码被删除。

优化级别： 为了确保 Tree Shaking 的有效性，通常需要配置 UglifyJS 或 Terser 的优化级别。通过使用较高的优化级别，这些插件会更彻底地清除未被引用的代码。

需要注意的是，Tree Shaking 的有效性取决于多个因素，包括模块的编写方式、模块之间的依赖关系等。一些条件，例如动态导入（import()）或 CommonJS 模块系统，可能会影响 Tree Shaking 的结果。

确保在 Webpack 配置中开启了 mode 为 'production'，以启用相关的优化插件和 Tree Shaking。在代码层面，使用纯粹的 ES6 模块语法，并确保没有引入未使用的变量或模块，可以帮助 Tree Shaking 更有效。
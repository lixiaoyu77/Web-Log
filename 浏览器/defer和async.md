### 在网页开发中，script 标签上的 defer 和 async 属性用于控制脚本的执行时机。

#### defer 属性
当浏览器解析到带有 defer 属性的 script 标签时，它会继续解析 HTML，并且会在 HTML 解析完成后按照在文档中出现的顺序执行脚本。
多个带有 defer 属性的脚本会按照它们在文档中的顺序依次执行  
使用 defer 属性可以确保脚本在文档解析完成后执行，但它们的执行顺序是按照在文档中出现的顺序  
```html
<script defer src="script1.js"></script>
<script defer src="script2.js"></script>
```

#### async 属性
当浏览器解析到带有 async 属性的 script 标签时，它会继续解析 HTML，并且会在脚本下载完成后立即执行，而不会等待 HTML 解析完成  
多个带有 async 属性的脚本的执行顺序不能保证，因为它们可能在下载完成的顺序不同的情况下执行  
```html
<script async src="script1.js"></script>
<script async src="script2.js"></script>
```

### 总结
defer 用于确保脚本按照它们在文档中的顺序执行，且在文档解析完成后执行  
async 用于告诉浏览器脚本是异步执行的，不会阻止文档解析，但脚本的执行顺序不能保证  
使用时的选择取决于脚本之间的依赖关系和执行顺序的要求。如果脚本之间没有依赖关系且执行顺序不重要，可以使用 async 提高页面加载性能。如果脚本之间有依赖关系，或者需要确保它们按照顺序执行，可以使用 defer  
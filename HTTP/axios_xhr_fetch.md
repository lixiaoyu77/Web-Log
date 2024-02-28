# axios、xhr（XMLHttpRequest）和 fetch 是用于进行网络请求的不同工具，

## 区别

### API 和用法

axios 是一个基于 Promise 的 HTTP 客户端，提供了丰富的功能，支持浏览器和 Node.js 环境  
xhr 是传统的 XMLHttpRequest 对象，它是浏览器原生提供的 API，用于在前端发起 HTTP 请求  
fetch 是在 ES6 中引入的新的网络请求 API，是基于 Promise 设计的，提供了一种更现代和简洁的方式来进行网络请求

### 语法

axios 通过创建实例，并使用该实例的方法（例如 axios.get、axios.post）来发起请求  
xhr 使用 XMLHttpRequest 对象，需要手动设置请求头、监听事件等  
fetch 使用全局的 fetch 函数，使用 Promise 链式调用，通过链式调用可以设置请求头、请求方法等

### 返回值

axios 和 fetch 返回的是 Promise 对象，可以使用 .then 和 .catch 处理结果  
xhr 通常使用回调函数处理结果，或者通过事件监听器监听请求状态变化

### 兼容性

axios 对于各种环境（包括浏览器和 Node.js）都提供了较好的兼容性  
xhr 是浏览器原生 API，在现代浏览器中得到广泛支持  
fetch 在较老的浏览器中可能需要使用 polyfill 进行兼容

### 中断请求

axios 具有中断请求的能力，可以使用 cancelToken 来取消请求  
xhr 可以使用 abort 方法来中断请求  
fetch 原生不提供直接的中断请求的方法，但可以使用第三方库或自己封装实现中断请求的功能

### 默认携带 cookies

axios 在浏览器环境中默认携带 cookies
xhr 在跨域请求时，默认不携带 cookies，需要手动设置 withCredentials 为 true  
fetch 在跨域请求时默认不携带 cookies，需要手动设置 credentials 为 'include'

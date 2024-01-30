# Get 与 Post 的区别
两者本质上都是 TCP 链接

1. get 参数通过 url 传递，post 放在请求体 (request body) 中
2. get 请求在 url 中传递的参数是有长度限制的（该限制是由浏览器和服务器限制的），而 post 没有 
3. get 请求只能进行 url 编码，而 post 支持多种编码方式  
4. get 请求参数会被完整保留在浏览历史记录里，而 post 中的参数不会被保留  
5. get 产生一个 TCP 数据包；post 产生两个 TCP 数据包。 
6. 对于 get 方式的请求，浏览器会把 http header 和 data 一并发送出去，服务器响应 200（返回数据）； 而对于 post，浏览器先发送 header，服务器响应 100 continue，浏览器再发送 data，服务器响应 200 ok（返回数据）

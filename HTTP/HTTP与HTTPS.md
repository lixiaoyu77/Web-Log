## HTTP (HyperText Transfer Protocol)
**超文本运输协议，是实现网络通信的一种规范**
HTTP常被用于在Web浏览器和网站服务器之间传递信息，**以明文方式发送内容，不提供任何方式的数据加密**

**特点如下**

1. 支持客户/服务器模式
2. 简单快速：客户向服务器请求服务时，只需传送请求方法和路径。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快
3. 灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记
4. 无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间
5. 无状态：HTTP协议无法根据之前的状态进行本次的请求处理

## HTTPS
为了保证这些隐私数据能加密传输，让**HTTP运行安全的SSL/TLS协议上，即 HTTPS = HTTP + SSL/TLS**，通过 SSL证书来验证服务器的身份，并为浏览器和服务器之间的通信进行加密
**过程**  
1. 首先客户端通过URL访问服务器建立SSL连接
2. 服务端收到客户端请求后，会将网站支持的证书信息（证书中包含公钥）传送一份给客户端
3. 客户端的服务器开始协商SSL连接的安全等级，也就是信息加密的等级
4. 客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站
5. 服务器利用自己的私钥解密出会话密钥
服务器利用会话密钥加密与客户端之间的通信

**SSL 协议**位于TCP/IP 协议与各种应用层协议之间，浏览器和服务器在使用 SSL 建立连接时需要选择一组恰当的加密算法来实现安全通信，为数据通讯提供安全支持

## 区别
1. HTTPS是HTTP协议的安全版本，HTTP协议的数据传输是明文的，是不安全的，**HTTPS使用了SSL/TLS协议进行了加密处理，相对更安全**
2. HTTP 和 HTTPS 使用连接方式不同，默认端口也不一样，HTTP是80，HTTPS是443
3. HTTPS 由于需要设计加密以及多次握手，性能方面不如 HTTP
4. HTTPS需要SSL(网络安全协议)，SSL 证书需要钱，功能越强大的证书费用越高



## 扩展
**对称加密**
对称加密指的是加密和解密使用的秘钥都是同一个，是对称的。只要保证了密钥的安全，那整个通信过程就可以说具有了机密性
**非对称加密**
非对称加密，存在两个秘钥，一个叫公钥，一个叫私钥。两个秘钥是不同的，公钥可以公开给任何人使用，私钥则需要保密
公钥和私钥都可以用来加密解密，但公钥加密后只能用私钥解密，反过来，私钥加密后也只能用公钥解密
# BOM (Browser Object Model)
**浏览器对象模型**，提供了独立于内容与浏览器窗口进行交互的对象

作用：跟浏览器做一些交互效果,比如如何进行页面的后退，前进，刷新，浏览器的窗口发生变化，滚动条的滚动，以及获取客户的一些信息如：浏览器品牌版本，屏幕分辨率


# window
Bom的**核心对象**是window，它表示浏览器的一个实例
在浏览器中，window对象有双重角色，即是浏览器窗口的一个接口，又是全局对象
``` javascript
//全局作用域中声明的变量、函数都会变成window对象的属性和方法
    var name = 'js每日一题';
    function lookName(){
    alert(this.name);
    }

    console.log(window.name);  //js每日一题
    lookName();                //js每日一题
    window.lookName();         //js每日一题
```
**窗口控制方法**：
1. moveBy(x,y)：从当前位置水平移动窗体x个像素，垂直移动窗体y个像素，x为负数，将向左移动窗体，y为负数，将向上移动窗体
2. moveTo(x,y)：移动窗体左上角到相对于屏幕左上角的(x,y)点
3. resizeBy(w,h)：相对窗体当前的大小，宽度调整w个像素，高度调整h个像素。如果参数为负值，将缩小窗体，反之扩大窗体
4. resizeTo(w,h)：把窗体宽度调整为w个像素，高度调整为h个像素
5. scrollTo(x,y)：如果有滚动条，将横向滚动条移动到相对于窗体宽度为x个像素的位置，将纵向滚动条移动到相对于窗体高度为y个像素的位置
6. scrollBy(x,y)： 如果有滚动条，将横向滚动条向左移动x个像素，将纵向滚动条向下移动y个像素

window.open() 既可以导航到一个特定的url，也可以打开一个新的浏览器窗口
``` javascript
// 如果 window.open() 传递了第二个参数，且该参数是已有窗口或者框架的名称，那么就会在目标窗口加载第一个参数指定的URL
window.open('htttp://www.vue3js.cn','topFrame')
==> < a href=" " target="topFrame"></ a>
window.open() //会返回新窗口的引用，也就是新窗口的 window 对象

const myWin = window.open('http://www.vue3js.cn','myWin')
window.close() //仅用于通过 window.open() 打开的窗口
// 新创建的 window 对象有一个 opener 属性，该属性指向打开他的原始窗口对象
```

# location
url地址如下：
http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q=javascript#contents
属性名 | 例子 | 说明 |
-|-|-|
hash|	"#contents"|	utl中#后面的字符，没有则返回空串|
host|	www.wrox.com:80|	服务器名称和端口号|
hostname|	www.wrox.com|	域名，不带端口号|
href|	http://www.wrox.com:80/WileyCDA/?q=javascript#contents|	完整url
pathname|	"/WileyCDA/"|	服务器下面的文件路径|
port|	80|	url的端口号，没有则为空|
protocol|	http:|	使用的协议|
search|	?q=javascript|	url的查询字符串，通常为？后面的内容|

**location.reload()**
此方法可以重新刷新当前页面。这个方法会根据最有效的方式刷新页面，如果页面自上一次请求以来没有改变过，页面就会从浏览器缓存中重新加载

# navigator
navigator 对象主要用来获取浏览器的属性，区分浏览器类型。属性较多，且兼容性比较复杂

# screen
保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息，比如像素宽度和像素高度

# history
history对象主要用来**操作浏览器URL的历史记录**，可以通过参数向前，向后，或者向指定URL跳转
常用属性：
1. history.go()
```javascript
// 接收一个整数数字或者字符串参数：向最近的一个记录中包含指定字符串的页面跳转，
history.go('maixaofei.com')
// 当参数为整数数字的时候，正数表示向前跳转指定的页面，负数为向后跳转指定的页面
history.go(3) //向前跳转三个记录
history.go(-1) //向后跳转一个记录
```
2. history.forward()：向前跳转一个页面
3. history.back()：向后跳转一个页面
4. history.length：获取历史记录数

# DOM和BOM区别如下：
浏览器的全部内容可以看成DOM，整个浏览器可以看成BOM
![区别](../img/bom.png)
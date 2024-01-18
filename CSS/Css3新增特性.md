# CSS
层叠样式表（Cascading Style Sheets）的简称，是一种标记语言，由浏览器解释执行用来使页面变得更美观
# css3
是css的最新标准，增加了很多新特性，并且是向后兼容的，CSS1/2的特性在CSS3 里都是可以使用的.

## 新增选择器

## 新样式
1. border 三个边框属性
    1. border-radius：创建圆角边框
    2. box-shadow：为元素添加阴影
    3. border-image：使用图片来绘制边框
2. box-shadow 设置元素阴影
    水平阴影、垂直阴影、模糊距离(虚实)、阴影尺寸(影子大小)、阴影颜色、内/外阴影
3.  backgroud 背景
```javascript
#background-clip
用于确定背景画区，有以下几种可能的属性：

background-clip: border-box; 背景从border开始显示
background-clip: padding-box; 背景从padding开始显示
background-clip: content-box; 背景显content区域开始显示
background-clip: no-clip; 默认属性，等同于border-box
通常情况，背景都是覆盖整个元素的，利用这个属性可以设定背景颜色或图片的覆盖范围

#background-origin
当我们设置背景图片时，图片是会以左上角对齐，但是是以border的左上角对齐还是以padding的左上角或者content的左上角对齐? border-origin正是用来设置这个的

background-origin: border-box; 从border开始计算background-position
background-origin: padding-box; 从padding开始计算background-position
background-origin: content-box; 从content开始计算background-position
默认情况是padding-box，即以padding的左上角为原点

#background-size
background-size属性常用来调整背景图片的大小，主要用于设定图片本身。有以下可能的属性：

background-size: contain; 缩小图片以适合元素（维持像素长宽比）
background-size: cover; 扩展元素以填补元素（维持像素长宽比）
background-size: 100px 100px; 缩小图片至指定的大小
background-size: 50% 100%; 缩小图片至指定的大小，百分比是相对包 含元素的尺寸
#background-break
元素可以被分成几个独立的盒子（如使内联元素span跨越多行），background-break 属性用来控制背景怎样在这些不同的盒子中显示

background-break: continuous; 默认值。忽略盒之间的距离（也就是像元素没有分成多个盒子，依然是一个整体一样）
background-break: bounding-box; 把盒之间的距离计算在内；
background-break: each-box; 为每个盒子单独重绘背景
```
##  文字
#word-wrap  
语法：word-wrap: normal|break-word    
normal：使用浏览器默认的换行    
break-all：允许在单词内换行    

#text-overflow 设置或检索当当前行超过指定容器的边界时如何显示，属性有两个值选择：
clip：修剪文本
ellipsis：显示省略符号来代表被修剪的文本  

#text-shadow 可向文本应用阴影。能够规定水平阴影、垂直阴影、模糊距离，以及阴影的颜色

#text-decoration  CSS3里面开始支持对文字的更深层次的渲染，具体有三个属性可供设置：  
text-fill-color: 设置文字内部填充颜色  
text-stroke-color: 设置文字边界填充颜色  
text-stroke-width: 设置文字边界宽度  

## 颜色 css3新增了新的颜色表示方式rgba与hsla
rgba分为两部分，rgb为颜色值，a为透明度
hala分为四部分，h为色相，s为饱和度，l为亮度，a为透明度  

## transition 过渡
transition属性可以被指定为一个或多个CSS属性的过渡效果，多个属性之间用逗号进行分隔，必须规定两项内容：
1. 过度效果
2. 持续时间
语法：transition： CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0)
transition-property: width; 
transition-duration: 1s;
transition-timing-function: linear;
transition-delay: 2s;

## transform 转换
transform属性允许你旋转，缩放，倾斜或平移给定元素  
transform-origin：转换元素的位置（围绕那个点进行转换），默认值为(x,y,z):(50%,50%,0)    
使用方式： 
transform: translate(120px, 50%)：位移  
transform: scale(2, 0.5)：缩放  
transform: rotate(0.5turn)：旋转  
transform: skew(30deg, 20deg)：倾斜  
##  animation 动画 
主要是做一个预设的动画。和一些页面交互的动画效果，结果和过渡应该一样，让页面不会那么生硬  
animation也有很多的属性  
animation-name：动画名称  
animation-duration：动画持续时间  
animation-timing-function：动画时间函数  
animation-delay：动画延迟时间  
animation-iteration-count：动画执行次数，可以设置为一个整数，也可以设置为infinite，意思是无限循环  
animation-direction：动画执行方向  
animation-paly-state：动画播放状态  
animation-fill-mode：动画填充模式  
## 渐变 颜色渐变是指在两个颜色之间平稳的过渡，css3渐变包括
linear-gradient：线性渐变  
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);  
radial-gradient：径向渐变  
linear-gradient(0deg, red, green);  

## 其他
关于css3其他的新特性还包括flex弹性布局、Grid栅格布局  
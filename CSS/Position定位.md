## position

在 CSS 中，position 属性用于指定元素的定位方式

#### position 属性有以下几个常用的取值：

static（默认值）：

元素在正常文档流中定位，不受 top、right、bottom 和 left 属性的影响。

```css
Copy code .element {
  position: static;
}
```

relative：

元素相对于其正常位置进行定位，通过设置 top、right、bottom 和 left 属性可以调整元素的位置。

```css
.element {
  position: relative;
  top: 10px;
  left: 20px;
}
```

absolute：

元素相对于其最近的已定位祖先元素进行定位，如果没有已定位的祖先元素，则相对于初始包含块进行定位。

```css
.element {
  position: absolute;
  top: 10px;
  left: 20px;
}
```

fixed：

元素相对于浏览器窗口进行定位，即使页面滚动，它也会保持在窗口的相同位置。

```css
.element {
  position: fixed;
  top: 10px;
  left: 20px;
}
```

sticky：
元素根据用户的滚动位置在父元素内定位。它的表现类似于 relative 和 fixed 的混合，当页面滚动到某个位置时，元素将保持固定位置，直到达到另一个阈值。

```css
Copy code .element {
  position: sticky;
  top: 10px;
}
```

##

这些 position 属性的取值提供了不同的定位方式，可以根据实际需要选择合适的方式。同时，通过配合使用 top、right、bottom 和 left 属性，可以进一步调整元素的位置。

```

```

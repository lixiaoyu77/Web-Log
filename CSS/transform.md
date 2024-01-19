transform 是 CSS 中的一个属性，用于对元素进行变形（transform）。它可以实现平移、缩放、旋转、倾斜等效果，而无需修改元素的实际尺寸和布局。

```css
transform: none|transform-functions;
```
none: 默认值，表示无变形。
transform-functions: 一个或多个变形函数，可以组合使用。

常用变形函数：
1. 平移（Translate）：移动元素的位置。
```css
transform: translateX(20px) translateY(30px);
```

2. 缩放（Scale）：放大或缩小元素。
```css
transform: scale(1.2);
```

3. 旋转（Rotate）：旋转元素。
```css
transform: rotate(45deg);
```

4. 倾斜（Skew）：沿着 X 轴和 Y 轴倾斜元素。
```css
transform: skewX(20deg) skewY(10deg);
```

5. 组合使用：多个变形函数可以组合使用。

```css
.element {
  transform: translateX(20px) rotate(45deg) scale(1.2);
}
```
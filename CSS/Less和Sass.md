# Less 和 Sass 是两种用于编写层叠样式表 (CSS) 的预处理器，它们引入了一些功能和语法糖，以便更轻松、模块化地编写和管理样式

# Less
语法: Less 使用类似 CSS 的语法，但添加了变量、嵌套、混合等功能

```javascript
// 变量
@primary-color: #3498db;

// 混合
.rounded-corners() {
  border-radius: 5px;
}

// 使用变量和混合
.button {
  color: @primary-color;
  .rounded-corners();
}
```
编译:Less 文件需要编译成纯粹的 CSS 文件，可以使用 Less 编译器或集成到构建工具中

# Sass
语法:Sass 提供了两种语法，一种是缩进式语法（Sass），另一种是 SCSS（Sassy CSS），类似于 CSS
```javascript
// 变量
$primary-color: #3498db;

// 混合
@mixin rounded-corners {
  border-radius: 5px;
}

// 使用变量和混合
.button {
  color: $primary-color;
  @include rounded-corners;
}
```
编译:Sass 也需要编译成纯粹的 CSS 文件，可以使用 Sass 编译器或集成到构建工具中

# 区别
1. 语法:Less 更接近于原始 CSS 语法，而 Sass 提供两种语法，可以选择使用
2. 变量符号:Less 使用 @ 作为变量符号，而 Sass 使用 $
3. 混合:在 Less 中，混合使用 .class 定义，而 Sass 使用 @mixin
4. 编译:编译工具和集成方式在 Less 和 Sass 中可能会有所不同
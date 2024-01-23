# var、let 和 const 是 JavaScript 中用于声明变量的关键字

# 区别
###  作用域
var：var 声明的变量具有函数作用域，如果在函数内部声明，它在函数内有效；如果在函数外部声明，它在全局范围内有效  
let 和 const：let 和 const 声明的变量具有块级作用域，它们只在包含它们的块内部有效  
```javascript
function example() {
  if (true) {
    var x = 5; // 函数作用域
    let y = 10; // 块级作用域
    const z = 15; // 块级作用域
  }
  console.log(x); // 5
  console.log(y); // ReferenceError: y is not defined
  console.log(z); // ReferenceError: z is not defined
}
```
### 变量提升
var：存在变量提升，可以在声明之前使用，但值为 undefined  
let和const不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错
```javascript

console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;

console.log(c)  // Cannot access 'c' before initialization
const c = 10
```
### 重复声明
var：可以重复声明同一变量，不会报错  
let 和 const：不允许在同一作用域内重复声明同一变量，会导致 SyntaxError  
```javascript
var x = 5;
var x = 10; // 合法

let y = 15;
let y = 20; // SyntaxError: Identifier 'y' has already been declared

const c = 10
const c = 20 // Identifier 'c' has already been declared
```

### 初始化和赋值
var：声明变量时会被自动初始化为 undefined，可以在之后重新赋值   
let：声明变量时不会被自动初始化，可以在之后赋值  
const：声明**常量**时必须立即初始化，并且不能在之后重新赋值  
```javascript
var a;
console.log(a); // undefined
a = 5;

let b;
console.log(b); // undefined
b = 10;

const c; // SyntaxError: Missing initializer in const declaration
```

###  修改声明的变量
var和let可以  
const声明一个只读的常量。一旦声明，常量的值就不能改变
```javascript
var a = 10
a = 20
console.log(a)  // 20

let b = 10
b = 20
console.log(b)  // 20

const c = 10
c = 20
console.log(c) // Uncaught TypeError: Assignment to constant variable
```

### 全局对象属性
var 声明的全局变量会成为全局对象的属性。
let 和 const 声明的全局变量不会成为全局对象的属性。
```javascript

var globalVar = 5;
console.log(window.globalVar); // 5

let globalLet = 10;
console.log(window.globalLet); // undefined

const globalConst = 15;
console.log(window.globalConst); // undefined
```

### 推荐使用 let 和 const，因为它们提供了更好的作用域和变量声明行为。 const 用于声明常量，一旦赋值就不能再更改，而 let 用于声明可变的变量。
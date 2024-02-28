#### ECMAScript 6（简称 ES6 或 ES2015）引入了许多新的特性和语法糖，以提升 JavaScript 的功能和可读性

## ES6 中的主要新特性

#### let 和 const

let 和 const 替代了 var，提供了块级作用域，解决了 var 变量提升和全局作用域的问题。
javascript

let x = 10;
const PI = 3.14;

#### 箭头函数

箭头函数提供了一种更简洁的函数声明方式，并且没有自己的 this，继承外层作用域的 this。
javascript

const add = (a, b) => a + b;

#### 模板字符串

模板字符串使用反引号（`）包裹，可以轻松地插入变量和换行符，使字符串拼接更加方便。
javascript

const name = 'John';
const greeting = `Hello, ${name}!`;

#### 解构赋值

解构赋值允许从数组或对象中提取值，并赋给变量，提高了代码的简洁性。
javascript

const [a, b] = [1, 2];
const { firstName, lastName } = { firstName: 'John', lastName: 'Doe' };

#### 默认参数值

允许在函数声明中为参数设置默认值，简化了函数调用时的代码。
javascript
function greet(name = 'Guest') {
console.log(`Hello, ${name}!`);
}

#### 类和继承

引入了类（class）和继承的语法，使面向对象编程更加直观和易用。
javascript
class Animal {
constructor(name) {
this.name = name;
}

speak() {
console.log(`${this.name} makes a sound.`);
}
}

class Dog extends Animal {
speak() {
console.log(`${this.name} barks.`);
}
}

#### 模块化

ES6 引入了模块化的语法，使用 import 和 export 关键字可以轻松地管理和导入导出模块。
javascript

// module.js
export const add = (a, b) => a + b;

// main.js
import { add } from './module';

#### 迭代器和生成器

引入了迭代器和生成器，提供了一种更灵活的遍历集合的方式。
javascript

function\* generator() {
yield 1;
yield 2;
yield 3;
}

const iterator = generator();
console.log(iterator.next()); // 输出 { value: 1, done: false }

####

这些特性只是 ES6 引入的一部分，还有其他一些新特性，如 Map、Set、Promise、Symbol、Array.from 等，共同提升了 JavaScript 的功能和开发体验。随着时间的推移，ES6 已经成为 JavaScript 开发的标准，并得到了广泛的支持。

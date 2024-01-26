# Object.assign() 
JavaScript 中的一个静态方法，用于将一个或多个源对象的可枚举属性复制到目标对象

```javascript
Object.assign(target, source1, source2, ...);
```
target：目标对象，将要接收属性的对象  
source1, source2, ...：一个或多个源对象，从这些对象中复制属性到目标对象  

Object.assign 的特性：
1. 浅拷贝： 它执行的是浅拷贝，即只复制对象的第一层属性。如果源对象的属性值是对象，那么目标对象得到的是该属性值的引用
2. 覆盖属性： 如果目标对象和源对象有相同的属性名，后面的源对象属性会覆盖前面的
3. 不复制继承属性和不可枚举属性： 只复制源对象自身的可枚举属性，不会复制继承的属性和不可枚举的属性

```javascript
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { d: 5 };

const result = Object.assign(target, source1, source2);

console.log(result); // { a: 1, b: 3, c: 4, d: 5 }
console.log(target); // { a: 1, b: 3, c: 4, d: 5 }
//target 对象的属性被 source1 和 source2 的属性覆盖，最终得到了合并后的结果
```
Object.assign 方法返回的是目标对象，即 target。
需要注意的是，Object.assign 在复制时是有限制的，例如它不会复制源对象的原型链上的属性。如果需要更深层次的拷贝，需要考虑使用其他方法，比如递归地遍历对象。
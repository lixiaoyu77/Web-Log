# new操作符：用于创建一个构造函数的实例对象

# new具体做的？
1. 创建一个新的对象obj
2. 将对象与构建函数通过原型链连接起来
3. 将构建函数中的this绑定到新建的对象obj上
4. 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理

# 手写new操作符
```javascript
function mynew(Func, ...args) {
    // 1.创建一个新对象
    const obj = {}
    // 2.新对象原型指向构造函数原型对象
    obj.__proto__ = Func.prototype
    // 3.将构建函数的this指向新对象
    let result = Func.apply(obj, args)
    // 4.根据返回值判断
    return result instanceof Object ? result : obj
}
// 测试
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const john = mynew(Person, 'John', 30);
console.log(john instanceof Person); // 输出: true
console.log(john.name); // 输出: John
console.log(john.age); // 输出: 30

```
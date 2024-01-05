## Set是一种叫做集合的数据结构，Map是一种叫做字典的数据结构
什么是集合？什么又是字典？

**集合**
是由一堆无序的、相关联的，且不重复的内存结构【数学中称为元素】组成的组合
**字典**
是一些元素的集合。每个元素有一个称作key 的域，不同元素的key 各不相同

**区别**
共同点：集合、字典都可以存储不重复的值
不同点：集合是以[值，值]的形式存储元素，字典是以[键，值]的形式存储


## Set
Set是es6新增的数据结构，类似于数组，但是**成员的值都是唯一的，没有重复的值**，我们一般称为集合  
Set本身是一个构造函数，用来生成 Set 数据结构  

```javascript
const s = new Set();
```

# Set的实例增删改查
# add() 添加某个值，返回 Set 结构本身

**当添加实例中已经存在的元素，set不会进行处理添加**
```javascript
s.add(1).add(2).add(2); // 2只被添加了一次
```
# delete() 删除某个值，返回一个布尔值，表示删除是否成功
```javascript
s.delete(1)
```

# has() 返回一个布尔值，判断该值是否为Set的成员
```javascript
s.has(2)
```
# clear() 清除所有成员，没有返回值
```javascript
s.clear()
```
# Set实例遍历的方法有如下：


keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：使用回调函数遍历每个成员

keys方法、values方法、entries方法返回的都是遍历器对象(遍历顺序就是插入顺序)
```javascript
let set = new Set(['red', 'green', 'blue']);

for (let item of set.keys()) {
  console.log(item);
}
// red green blue

for (let item of set.values()) {
  console.log(item);
}
// red green blue

for (let item of set.entries()) {
  console.log(item);
}
// ["red", "red" ["green", "green"] ["blue", "blue"]
forEach()用于对每个成员执行某种操作，没有返回值，键值、键名都相等，同样的forEach方法有第二个参数，用于绑定处理函数的this

let set = new Set([1, 4, 9]);
set.forEach((value, key) => console.log(key + ' : ' + value))
// 1 : 1 4 : 4 9 : 9
```
# 扩展运算符和Set 结构相结合实现数组或字符串去重
```javascript
// 数组
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)]; // [3, 5, 2]
// 字符串
let str = "352255";
let unique = [...new Set(str)].join(""); // "352"
```

# 实现并集、交集、和差集
```javascript
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}
// （a 相对于 b 的）差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```
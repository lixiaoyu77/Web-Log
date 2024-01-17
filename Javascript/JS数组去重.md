# 数组去重

1. 使用双重for循环+splice方法
在早期双重for循环几乎是去重的唯一方式，但是双重for循环是比较笨拙的方法，它的时间复杂度是O(n^2)，如果数组长度很大，那么将会非常耗费内存。
```javascript
//双重循环去重
const handleRemoveRepeat = (arr) =>   
{
for (let i=0,len = arr.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
        if (arr[i] === arr[j]) {
            arr.splice(j, 1);
            j--;    // 保证j的值自加后不变
            len--; //减少循环次数提高性能
            }
    }
    } 
    return arr;
};
```
2. 利用数组的indexOf()方法
使用indexOf()，可以判断一个数组中是否包含某个值，如果存在则返回该元素在数组中的位置，如果不存在则返回-1。
```javascript

functon unique(arr) {

let res = []

for (let i = 0; i < arr.length; i++) {

if (res.indexOf(arr[i]) === -1) {

res.push(arr[i])

}

}

return res}



利用indexOf检测元素在数组中第一次出现的位置是否和元素现在的位置相等，如果不等则说明该元素是重复元素

function unique(arr) {

if (!Array.isArray(arr)) {

console.log('type error!')

return

}

return Array.prototype.filter.call(arr, function(item, index){

return arr.indexOf(item) === index;

});

}
```


3. 利用includes()
```javascript

functon unique(arr) {

let res = []

for (let i = 0; i < arr.length; i++) {

if (!res.includes(arr[i])) {

res.push(arr[i])

}

}

return res}
```



4. 利用filter()
filter() 方法一般用来过滤符合条件的数组，通过创建一个新的数组，检查指定数组中符合条件的所有元素。

```javascript

function unique(arr) {

return arr.filter((item,index, arr) => {

return arr.indexOf(item) === index

})

}
```


5. 使用map方式
```javascript

function uniqueFunc(arr, uniId){

const res = new Map();

return arr.filter((item) =>

!res.has(item[uniId]) && res.set(item[uniId], 1));

}
```

6. 使用对象的特点
对象是一种以键值对存储信息的结构，并且不能有重复的键。

创建空对象，遍历数组，将数组中的值设为对象的属性，并给该属性赋初始值1，每出现一次，对应的属性值增加1，属性值对应的就是该元素出现的次数了

```javascript


function unique(arr) {

if (!Array.isArray(arr)) {

console.log('type error!')

return

}

let res = [],

obj = {}

for (let i = 0; i < arr.length; i++) {

if (!obj[arr[i]]) {

res.push(arr[i])

obj[arr[i]] = 1

} else {

obj[arr[i]]++

}

} return res

}

```

7. s使用set
ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

解构赋值方法：

```javascript

function unique(arr) { return [...new Set(arr)]

Array.from方法：

function unique(arr) {

if (!Array.isArray(arr)) {

console.log('type error!')

return

}

return Array.from(new Set(arr))

}
```


8. 使用reduce
```javascript

function unique(arr) {

return arr.reduce((pre, cur) => {

!pre.includes(cur) && pre.push(cur)

return pre

}, [])

}
```


9. 相邻元素去重
这种方法首先调用了数组的排序方法sort()，然后根据排序后的结果进行遍历及相邻元素比对，如果相等则跳过改元素，直到遍历结束
```javascript

function unique(arr) {

if (!Array.isArray(arr)) {

console.log('type error!')

return

}

arr = arr.sort() let res = []

for (let i = 0; i < arr.length; i++) {

if (arr[i] !== arr[i-1]) {

res.push(arr[i])

}

} return res

}
```
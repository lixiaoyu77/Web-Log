## JSON（JavaScript Object Notation）

一种轻量级的数据交换格式，它是一种文本格式，独立于语言，用于表示结构化的数据。JSON 格式易于阅读和编写，同时也易于解析和生成。它在 Web 开发中被广泛用于数据交换。

#### JSON 数据类型

1. 对象（Object）： 由花括号 {} 包裹，键值对的集合，键和值之间使用冒号 : 分隔，不同键值对之间使用逗号 , 分隔。

```json
{
  "name": "John",
  "age": 30,
  "city": "New York"
}
```

2. 数组（Array）： 由方括号 [] 包裹，值的有序集合，数组中的元素之间使用逗号 , 分隔。

```json
[1, 2, 3, 4, 5]
```

字符串（String）： 由双引号 " 包裹的文本序列。

```json
"Hello, World!"
```

数字（Number）： 整数或浮点数。

```json
42
```

布尔值（Boolean）： 表示真或假。

```json
true
```

空值（null）： 表示空值。

```json
null
```

JSON 的主要优势之一是它的通用性，不限于特定编程语言。在 Web 开发中，它经常用于前后端之间的数据交换，例如在 AJAX 请求中，或是在将数据存储在本地浏览器的本地存储中。

## JSON.parse()

JSON.parse() 是 JavaScript 中的一个内置方法，用于将 JSON 字符串解析为对应的 JavaScript 对象或其他原始值。它通常用于以下情况：

接收服务器响应： 当从服务器获取到 JSON 格式的数据时，使用 JSON.parse() 将其转换为 JavaScript 对象。

```javascript
// 假设服务器返回的是 '{"name":"John","age":30,"city":"New York"}'
const jsonString = '{"name":"John","age":30,"city":"New York"}'
const data = JSON.parse(jsonString)

console.log(data.name) // 输出: John
console.log(data.age) // 输出: 30
console.log(data.city) // 输出: New York
```

解析本地存储的数据： 当使用本地存储（如 localStorage）存储的数据是以 JSON 格式字符串存在时，需要使用 JSON.parse() 进行解析。

```javascript
const storedPreferences = localStorage.getItem("userPreferences");
const preferences = JSON.parse(storedPreferences);
处理用户输入： 当接收到用户输入的 JSON 格式字符串时，可以使用 JSON.parse() 将其转换为 JavaScript 对象，以便在程序中进行处理。
```

```javascript
const userInput = '{"username":"john_doe","email":"john@example.com"}'
const userObject = JSON.parse(userInput)
```

## JSON.stringify()

是 JavaScript 中的一个内置方法，用于将 JavaScript 对象或数组转换为 JSON 字符串。这个方法通常在以下情况下使用：

数据传输： 当你需要将 JavaScript 对象或数组发送到服务器或通过网络传输给其他系统时，通常会将其转换为 JSON 字符串。这确保了数据的格式是标准的，易于解析和处理。

```javascript
const data = {
  name: 'John',
  age: 30,
  city: 'New York',
}

const jsonString = JSON.stringify(data)
// jsonString 的值为 '{"name":"John","age":30,"city":"New York"}'
```

本地存储： 在客户端使用本地存储（例如 localStorage）时，通常将数据转换为 JSON 格式进行存储。

```javascript
const preferences = {
  theme: 'dark',
  fontSize: 16,
}

localStorage.setItem('userPreferences', JSON.stringify(preferences))
```

与服务器通信： 当使用 AJAX 或 Fetch API 从服务器获取数据时，服务器通常会返回 JSON 格式的数据。在接收到数据后，你可能需要使用 JSON.parse() 将其转换为 JavaScript 对象。

```javascript
// 使用 Fetch API 获取数据
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => {
    // data 是一个 JavaScript 对象
    console.log(data)
  })
```

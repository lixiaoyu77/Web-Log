function myStringify (obj) {
  // 如果传入的不是对象，直接返回空值
  if (typeof obj !== 'object' || obj === null) {
    return String(obj)
  }

  let result = ''

  // 如果是数组
  if (Array.isArray(obj)) {
    result += '['
    for (let i = 0; i < obj.length; i++) {
      // 递归调用自身，将数组中的每个元素转换为字符串
      result += myStringify(obj[i])
      if (i < obj.length - 1) {
        result += ','
      }
    }
    result += ']'
  } else {
    // 如果是对象
    result += '{'
    let keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i]
      let value = obj[key]
      // 递归调用自身，将对象的每个属性转换为字符串
      result += '"' + key + '":' + myStringify(value)
      if (i < keys.length - 1) {
        result += ','
      }
    }
    result += '}'
  }

  return result
}

// 示例
const obj = {
  name: 'John',
  age: 30,
  hobbies: ['reading', 'traveling'],
  address: {
    city: 'New York',
    zip: '10001'
  }
}

console.log(myStringify(obj))

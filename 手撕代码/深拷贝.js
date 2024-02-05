function deepCopy (obj, memo = new WeakMap()) {
    // 处理对象
    const copyObj = {}
    memo.set(obj, copyObj) // 将原对象和复制对象关联起来，防止循环引用
    for (let key in obj) {
        //hasOwnProperty 是 JavaScript 中的方法，用于检查对象是否包含指定属性 
        if (obj.hasOwnProperty(key)) { //确保只处理对象自身的属性，而不包括从原型链继承的属性
            if (typeof obj[key] === 'object') {
                copyObj[key] = deepCopy(obj[key], memo) // 递归
            } else {
                copyObj[key] = obj[key]
            }
        }
    }

    return copyObj
}

// 示例
const originalObject = {
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        zip: '10001'
    },
    hobbies: ['reading', 'traveling']
}

const clonedObject = deepCopy(originalObject)
console.log(clonedObject)
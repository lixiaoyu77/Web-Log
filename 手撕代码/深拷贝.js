function deepCopy(obj, memo = new WeakMap()) {
    // 处理对象
    const copyObj = {};
    memo.set(obj, copyObj); // 将原对象和复制对象关联起来，防止循环引用
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object') {
                copyObj[key] = deepCopy(obj[key], memo); // 递归
            } else {
                copyObj[key] = obj[key];
            }
        }
    }

    return copyObj;
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
};

const clonedObject = deepCopy(originalObject);
console.log(clonedObject);
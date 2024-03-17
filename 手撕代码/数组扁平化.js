function flattenArray (arr) {
  let result = []
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item))
    } else {
      result.push(item)
    }
  })
  return result
}

const nestedArray = [1, [2, [3, 4]], 5, [6]]
const flatArray = flattenArray(nestedArray)
console.log(flatArray) // [1, 2, 3, 4, 5, 6]

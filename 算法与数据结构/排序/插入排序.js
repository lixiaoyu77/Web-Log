// 插入排序如何实现，时间复杂度是多少， 还可以如何改进？

// 将数据按照一定的顺序一个一个的插入到有序的表中，最终得到的序列就是已经排序好的数据


// 插入排序
function insertionSort (arr) {
  const n = arr.length

  for (let i = 1; i < n; i++) {
    let currentElement = arr[i]
    let j = i - 1

    // 将当前元素与已排序部分的元素逐个比较并移动
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j]
      j--
    }

    // 将当前元素插入到合适的位置
    arr[j + 1] = currentElement
  }
  return arr
}
const arr = [64, 25, 12, 22, 11]
insertionSort(arr)
console.log("排序后的数组:", arr)

// 时间复杂度为O(n^2)

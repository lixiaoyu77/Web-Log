// 插入排序如何实现，时间复杂度是多少， 还可以如何改进？

// 将数据按照一定的顺序一个一个的插入到有序的表中，最终得到的序列就是已经排序好的数据


// 插入排序
function insertionSort (arr) {
  const len = arr.length
  let preIndex, current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}
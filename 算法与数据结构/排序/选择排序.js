// 选择排序如何实现，时间复杂度是多少， 还可以如何改进？

// 首先在未排序的数列中找到最小(or最大)元素，然后将其存放到数列的起始位置，然后再从剩余未排序的元素中继续寻找最小(or最大)元素，然后放到已排序序列的末尾，以此类推，直到所有元素均排序完毕

// 选择排序
function selectionSort (arr) {
  var len = arr.length
  var minIndex, temp
  for (var i = 0; i < len - 1; i++) {
    minIndex = i
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {     // 寻找最小的数
        minIndex = j                 // 将最小数的索引保存
      }
    }
    // 使用解构赋值进行交换
    // [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}


// n^2
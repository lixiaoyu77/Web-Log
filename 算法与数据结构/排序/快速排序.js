// 快速排序如何实现，时间复杂度是多少， 还可以如何改进？

// 快速排序（Quick Sort）也是一种分治算法
// 它选择一个元素作为基准，将数组分为两个子数组，小于基准的放在左边，大于基准的放在右边，然后对左右子数组分别进行递归快速排序

// 选择基准元素： 从数组中选择一个基准元素。
// 划分： 将数组中小于基准的元素放在基准的左边，大于基准的元素放在右边。
// 递归排序： 对左右两个子数组进行递归快速排序。

function quickSort (arr) {
  // 如果数组长度小于等于1，直接返回，因为已经是有序的
  if (arr.length <= 1) {
    return arr
  }

  // 选择基准元素
  const pivot = arr[Math.floor(Math.random() * arr.length)]

  // 划分
  const left = []
  const right = []
  const equal = []

  for (let element of arr) {
    if (element < pivot) {
      left.push(element)
    } else if (element > pivot) {
      right.push(element)
    } else {
      equal.push(element)
    }
  }

  // 递归排序左右两部分
  return quickSort(left).concat(equal, quickSort(right))
}

// 示例
const arr = [64, 25, 12, 22, 11]
const sortedArr = quickSort(arr)
console.log("排序后的数组:", sortedArr)


// 快速排序的平均时间复杂度为O(n log n)
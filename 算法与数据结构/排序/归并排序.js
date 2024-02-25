// 归并排序如何实现，时间复杂度是多少， 还可以如何改进？

// 归并排序的基本步骤：
// 分解（Divide）： 将数组一分为二，分别对两个子数组进行归并排序
// 合并（Merge）： 将两个有序的子数组合并成一个有序的数组

function mergeSort (arr) {
    const n = arr.length

    // 如果数组长度小于等于1，直接返回，因为已经是有序的
    if (n <= 1) {
        return arr
    }

    // 将数组一分为二
    const mid = Math.floor(n / 2)
    const left = arr.slice(0, mid)
    const right = arr.slice(mid)

    // 递归对左右两部分进行归并排序
    const sortedLeft = mergeSort(left)
    const sortedRight = mergeSort(right)

    // 合并已排序的左右两部分
    return merge(sortedLeft, sortedRight)
}

function merge (left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0

    // 比较左右两部分的元素，将较小的元素加入结果数组
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex])
            leftIndex++
        } else {
            result.push(right[rightIndex])
            rightIndex++
        }
    }

    // 将剩余的元素加入结果数组
    return result.concat(left.slice(leftIndex), right.slice(rightIndex))
}

// 示例
const arr = [64, 25, 12, 22, 11]
const sortedArr = mergeSort(arr)
console.log("排序后的数组:", sortedArr)

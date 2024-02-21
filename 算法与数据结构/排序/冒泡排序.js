// 冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？

// 冒泡排序   重复地遍历要排序的列表，一次比较两个元素
const a1 = [1, 4, 7, 2, 12, 6]

function sort (arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1])
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        }
    }
    return arr
}

const bubblesort = sort(a1)
console.log(bubblesort)
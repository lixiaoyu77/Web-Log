// 冒泡排序如何实现，时间复杂度是多少， 还可以如何改进？
// 每次遍历一遍未排序的数列之后，将一个数据元素浮上去（也就是排好了一个数据）

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

// 时间复杂度： n^2

// 算法优化 ---标识符，如果一次都没有交换，则退出

function sortPlus (arr) {
    let len = arr.length

    for (let i = 0; i < len - 1; i++) {
        let swapped = false
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swapped = true
            }

            // 如果一趟遍历中没有发生交换，说明数组已经有序，可以提前结束排序
            if (!swapped) {
                break
            }
        }
    }
    return arr
}

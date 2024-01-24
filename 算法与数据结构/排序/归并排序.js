function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // 数组长度为1或为空时，无需排序
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // 将剩余元素加入结果数组
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// 示例用法
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);

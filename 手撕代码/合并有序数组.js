const a1 = [1,4,5,9]
const a2 = [1,3,7,9,14]

// 思路: 
// 双指针法
// 比较两个数组的元素，将较小的元素添加到合并数组中，然后移动指针。
//最后，如果其中一个数组还有剩余元素，将其全部添加到合并数组的末尾
function mergeSort(arr1,arr2){
    const mergeArr = [];
    let i = 0;
    let j = 0;
    
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            mergeArr.push(arr1[i]);
            i++;
        }else{
            mergeArr.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length){
        mergeArr.push(arr1[i]);
        i++;
    }

    while(j<arr2.length){
        mergeArr.push(arr2[j]);
        j++;
    }
    return mergeArr;
}


const arr = mergeSort(a1,a2);
console.log(arr)

// 使用方法 concat/sort
function mergeSort1(arr1,arr2){
    const arr = arr1.concat(arr2)
    arr.sort((a,b)=>a-b)
    return arr;
}

// const arr = mergeSort1(a1,a2);
// console.log(arr)
// 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5

// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4

// 切分原理
let Partition = function (arr, first, last) {
    // 将第一个数作为基准元。并进行分区
    let value = arr[first];
    let key = first;
    while (first < last) {
        while (first < last && arr[last] >= value) {
            last -= 1;
        }
        while (first < last && arr[first] <= value) {
            first += 1;
        }
        arr = Swap(arr, first, last);
    }
    arr = Swap(arr, last, key);
    return {partition: first, nums: arr};
}



let PartitionMedianOfThree = function (arr, first, last) {
    //将中间和尾端末端的三个数顺序排列 | 0 向下取整
    let mid = first + ((last + -first) / 2) | 0;
    if (arr[mid] > arr[last]) {
        arr = Swap(arr, mid, last);
    }
    if (arr[first] > arr[last]) {
        arr = Swap(arr, first, last);
    }
    if (arr[mid] > arr[first]) {
        arr = Swap(arr, mid, first);
    }
    return arr;
}

let Swap = function (arr, key1, key2) {
    let temp;
    temp = arr[key1];
    arr[key1] = arr[key2];
    arr[key2] = temp;
    return arr;
}

// Quick Sort. 利用的是三数取中
let quiteSort = function (nums, first, last) {
    if (first >= last) return nums;
    nums = PartitionMedianOfThree(nums, first, last);
    let temp = Partition(nums, first, last);
    nums = temp.nums;
    let partition = temp.partition;
    nums = quiteSort(nums, first, partition - 1);
    nums = quiteSort(nums, partition + 1, last);
    return nums;
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums = quiteSort(nums, 0, nums.length-1);
    return nums[nums.length-k];
};

console.log(findKthLargest([3,2,1,5,6,4], 2));

console.log(Partition([3,2,3,1,2,4,5,5,6], 0, 8))

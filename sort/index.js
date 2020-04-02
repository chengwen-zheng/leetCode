// bubble sort
let sortArray = function (nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
    return nums;
};


// console.log(sortArray(nums));

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
    //将中间和尾端末端的三个数顺序排列
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


let getRandomNumArray = function () {
    let arr = new Array();
    while (arr.length < 1000000) {
        let num = Math.floor(Math.random() * 1000000);
        arr.push(num);
    }
    return arr;
}
let nums = getRandomNumArray();

console.time("quickSort");
console.log(quiteSort(nums, 0, nums.length - 1));
console.timeEnd("quickSort");


console.time("bubble Sort");
console.log(sortArray(nums));
console.timeEnd("bubble Sort");



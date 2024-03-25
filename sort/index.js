/**
 来源：https://leetcode-cn.com/problems/sort-an-array/
 */


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
    return { partition: first, nums: arr };
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


/**
 * Selecction Sort
 * */
let selectionSort = function (nums) {
    let min;
    for (let i = 0; i < nums.length; i++) {
        min = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                Swap(nums, j, min);
            }
        }
    }
    return nums;
}

/**
 * InsertionSort Sort
 * */
let insertionSort = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j > 0 && nums[j] < nums[j - 1]; j--) {
            Swap(nums, j, j - 1);
        }
    }
    return nums;
}


/**
 * Shell Sort
 * */
let shellSort = function (nums) {
    let numsLength = nums.length;
    let h = 1;
    while (h < (numsLength / 3)) {
        h = 3 * h + 1;
    }
    while (h >= 1) {
        console.log("===============" + h + "===============")
        for (let i = h; i < numsLength; i++) {
            for (let j = i; j >= h && nums[j] < nums[j - h]; j -= h) {
                Swap(nums, j, j - h);
            }
        }
        h = Math.floor(h / 3);
    }
    return nums;
}


/**
 * 归并排序
 * */
let merge = function (nums, tempNums, leftFirtIndex, middle, rightLastIndex) {
    let rightIndex = middle + 1;
    let leftIndex = leftFirtIndex;
    for (let k = leftFirtIndex; k <= rightLastIndex; k++) {
        tempNums[k] = nums[k];
    }

    for (let k = leftFirtIndex; k <= rightLastIndex; k++) {
        if (leftIndex > middle + 1) {
            nums[k] = tempNums[rightIndex++];
        } else if (rightIndex > rightLastIndex) {
            nums[k] = tempNums[leftIndex++];
        } else if (tempNums[leftIndex] > tempNums[rightIndex]) {
            nums[k] = tempNums[rightIndex++];
        } else {
            nums[k] = tempNums[leftIndex++];
        }
    }


};

let sort = function (nums, tempNums, start, last) {
    let middle = (start + last) >>> 1;

    if (start >= last) {
        return;
    }

    sort(nums, tempNums, start, middle);
    sort(nums, tempNums, middle + 1, last);
    merge(nums, tempNums, start, middle, last);
}

let mergeSort = function (nums) {
    let tempNums = [];
    sort(nums, tempNums, 0, nums.length - 1);
    return nums;
}

let getRandomNumArray = function (numsLength, T) {
    let arr = new Array();
    while (arr.length < numsLength) {
        let num = Math.floor(Math.random() * T);
        arr.push(num);
    }
    return arr;
}


let nums = getRandomNumArray(100, 100);

console.time("quickSort");
console.log(quiteSort(nums, 0, nums.length - 1));
console.timeEnd("quickSort");


console.time("bubble Sort");
console.log(sortArray(nums));
console.timeEnd("bubble Sort");


console.time("selection Sort");
console.log(selectionSort(nums));
console.timeEnd("selection Sort");


console.time("insertionSort Sort");
console.log(shellSort(nums));
console.timeEnd("insertionSort Sort");


console.time("mergeSort Sort");
console.log(mergeSort(nums));
console.timeEnd("mergeSort Sort");

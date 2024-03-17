/*
给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。

示例 1 :

输入:nums = [1,1,1], k = 2
输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。
说明 :

    数组的长度为 [1, 20,000]。
数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let subarraySum = function (nums, k) {
    let count = 0;
    if (nums.length < 1 || nums.length > 20000) return -1;
    if (k < -1e7 || k > 1e7) return -1;

    for (let i = 0, j = 0; i < nums.length; i++, j = i) {
        let total = 0;
        while (j < nums.length) {
            total += nums[j];
            if (total === k) {
                count += 1;
            }
            j += 1;
        }
    }
    return count;
};

let subarraySumPro = function (nums, k) {
    let prefixMap = new Map();
    let n = nums.length;

    prefixMap.set(0, 1);

    let count = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += nums[i];

        let prefixSum = sum - k;
        //相加为k的条件
        if (prefixMap.has(prefixSum)) {
            count += prefixMap.get(prefixSum);
        }
        // 设置前缀和
        if (prefixMap.has(sum)) {
            prefixMap.set(sum, prefixMap.get(sum) + 1);
        } else {
            prefixMap.set(sum, 1);
        }
    }
    return count;
}

console.log(subarraySumPro([1,-1,0],0))


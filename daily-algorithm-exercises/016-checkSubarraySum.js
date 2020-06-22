/**
 给定一个包含 非负数 的数组和一个目标 整数 k，编写一个函数来判断该数组是否含有连续的子数组，其大小至少为 2，且总和为 k 的倍数，即总和为 n*k，其中 n 也是一个整数。



 示例 1：

 输入：[23,2,4,6,7], k = 6
 输出：True
 解释：[2,4] 是一个大小为 2 的子数组，并且和为 6。
 示例 2：

 输入：[23,2,6,4,7], k = 6
 输出：True
 解释：[23,2,6,4,7]是大小为 5 的子数组，并且和为 42。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/continuous-subarray-sum/
 */


// 暴力解法
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = function (nums, k) {
    let counts = 0;
    for (let i = 0, j; i < nums.length; i++) {
        j = i;
        counts = 0;
        while (j < nums.length) {
            counts += nums[j];
            if (isDivByK(counts, k) && j - i >= 1) {
                return true;
            }
            j++;
        }
    }
    return false;
};

const isDivByK = (number, k) => {
    return number % k === 0 || (number === 0 && k === 0);
}

console.log(checkSubarraySum([5, 5], 0));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySumDp = function (nums, k) {
    if (k === 0) {
        for (let i = 1; i < nums.length; i++) {
            if (nums[i - 1] == nums[i] && nums[i] === 0) {
                return true;
            }
        }
    } else {
        let sumMap = new Map();
        let sumArray = [];
        sumArray[0] = 0;
        sumMap.set(0, [0]);
        let index, value;
        // 先埋点
        for (let i = 1; i <= nums.length; i++) {
            sumArray[i] = sumArray[i - 1] + nums[i - 1];
            index = sumArray[i] % k;
            if (sumMap.get(index)) {
                sumMap.get(index).push(i);
            } else {
                sumMap.set(index, [i]);
            }
        }

        for (let i = 1; i <= nums.length; i++) {
            index = sumArray[i] % k;
            value = sumMap.get(index) || [];
            for (let item of value) {
                if (item < i - 1) {
                    return true;
                }
            }
        }
    }
    return false;
}

console.log(checkSubarraySumDp([5, 5], 0));



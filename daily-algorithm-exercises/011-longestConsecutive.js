/*
给定一个未排序的整数数组，找出最长连续序列的长度。

要求算法的时间复杂度为 O(n)。

示例:

    输入: [100, 4, 200, 1, 3, 2]
输出: 4
解释: 最长连续序列是 [1, 2, 3, 4]。它的长度为 4。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-consecutive-sequence

*/

// 超出时间限制

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let res = [], temp = [];
    let currentValue;
    for (let i = 0; i < nums.length; i++) {
        currentValue = nums[i];
        if (!temp.includes(currentValue)) {
            // 清空数组
            temp = [];
            while (nums.includes(currentValue) && !temp.includes(currentValue)) {
                temp.push(currentValue);
                currentValue++;
            }
        }
        if (temp.length > res.length) {
            res = temp.slice(0, temp.length);
        }
    }
    return res.length;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutivePro = function (nums) {
    let num_set = new Set(nums);
    for (const num of nums) {
        num_set.add(num);
    }

    let maxNum = 0;
    for (const num of num_set) {
        if (!num_set.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (num_set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            maxNum = Math.max(maxNum, currentStreak);
        }
    }
    return maxNum;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2, 6, 8098, 5, 89]));
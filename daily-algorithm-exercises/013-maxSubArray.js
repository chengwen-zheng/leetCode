/*
连续子数组的最大和
输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

要求时间复杂度为O(n)。



示例1:

    输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。


提示：

1 <= arr.length <= 10^5
-100 <= arr[i] <= 100
注意：本题与主站 53 题相同：https://leetcode-cn.com/problems/maximum-subarray/

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// dp 动态规划
var maxSubArray = function (nums) {
    let preMaxSubArrray = nums[0], pre = 0;

    for (let i of nums) {
        // 这一步是算出f(i),无后效性。
        pre = Math.max(pre + i, i);
        // 比较出整个数组中最大的子数组的和。
        preMaxSubArrray = Math.max(pre, preMaxSubArrray);
    }

    return preMaxSubArrray;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
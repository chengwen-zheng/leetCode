/*
给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

示例 1:

输入: [2,3,-2,4]
输出: 6
解释: 子数组 [2,3] 有最大乘积 6。
示例 2:

输入: [-2,0,-1]
输出: 0
解释: 结果不能为 2, 因为 [-2,-1] 不是子数组。
*/

var maxProduct = function (nums) {
    let min, max, minTemp, maxTemp, ans;
    min = max = minTemp = maxTemp = ans = nums[0];
    for (let i = 1; i < nums.length; i++) {
        minTemp = min;
        maxTemp = max;
        max = Math.max(maxTemp * nums[i], Math.max(nums[i], minTemp * nums[i]));
        min = Math.min(minTemp * nums[i], Math.min(nums[i], maxTemp * nums[i]));
        ans = Math.max(max, ans);
    }
    return ans;
}

console.log(maxProduct([-4, -3, -2]));
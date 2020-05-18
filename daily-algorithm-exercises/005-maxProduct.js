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
    let total = nums[0];
    let ret = nums[0];
    let tmp = nums[0];
    for (let i = 0, j = 0; i < nums.length; i++, j = i) {
        total = 1;
        tmp = nums[i];
        while (j < nums.length) {
            if (nums[j] < 0 && i !== j) {
                tmp = total;
            } else if (nums[j] === 0 && i !== j) {
                break;
            }
            total = total * nums[j];
            j++;
        }
        total = total > tmp ? total : tmp;
        ret = ret > total ? ret : total;
    }
    return ret;
}

console.log(maxProduct([-2,0,-1]));
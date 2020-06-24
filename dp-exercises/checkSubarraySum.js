/**
 从数组arr中找出子数列等于S，可以找出则返回true.否则返回false

 输入：arr = [3,34,4,12,5,2];
 s = 9;
 输出：true
 */

// 递归解法
/**
 * @param {number[]} arr
 * @param {number} s
 * @return {boolean}
 */
const checkSubarraySum = function (arr, s) {
    if (s === 0) return true;
    if (arr.length === 1) return arr[0] === s;
    // 这里的出口比较困难
    if (arr[arr.length - 1] > s) return checkSubarraySum(arr.slice(0, arr.length - 1), s);
    return checkSubarraySum(arr.slice(0, arr.length - 1), s) || checkSubarraySum(arr.slice(0, arr.length - 1), s - arr[arr.length - 1])
}

console.log(checkSubarraySum([3, 34, 4, 12, 5, 2], 9))

// 动态规划用二维数组保存状态
const checkSubarraySumDp = function (arr, s) {
    let subset = Array.from({length: arr.length}, () => new Array(s + 1).fill(false));
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= s; j++) {
            if (j === 0) {
                subset[i][j] = true;
            } else if (i === 0 && j !== 0) {
                subset[i][j] = (arr[0] === j);
            } else {
                if (arr[i] > s) {
                    subset[i][j] = subset[i - 1][j];
                } else {
                    subset[i][j] = subset[i - 1][j - arr[i]] || subset[i - 1][j]
                }
            }
        }
    }
    return subset[arr.length - 1][s];
}

console.log(checkSubarraySumDp([3, 34, 4, 12, 5, 2], 9))


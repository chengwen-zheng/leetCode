/**
 如果序列 X_1, X_2, ..., X_n 满足下列条件，就说它是 斐波那契式 的：

 n >= 3
 对于所有 i + 2 <= n，都有 X_i + X_{i+1} = X_{i+2}
 给定一个严格递增的正整数数组形成序列，找到 A 中最长的斐波那契式的子序列的长度。如果一个不存在，返回  0 。

 （回想一下，子序列是从原序列 A 中派生出来的，它从 A 中删掉任意数量的元素（也可以不删），而不改变其余元素的顺序。例如， [3, 5, 8] 是 [3, 4, 5, 6, 7, 8] 的一个子序列）



 示例 1：

 输入: [1,2,3,4,5,6,7,8]
 输出: 5
 解释:
 最长的斐波那契式子序列为：[1,2,3,5,8] 。
 示例 2：

 输入: [1,3,7,11,12,14,18]
 输出: 3
 解释:
 最长的斐波那契式子序列有：
 [1,11,12]，[3,11,14] 以及 [7,11,18] 。


 提示：

 3 <= A.length <= 1000
 1 <= A[0] < A[1] < ... < A[A.length - 1] <= 10^9
 （对于以 Java，C，C++，以及 C# 的提交，时间限制被减少了 50%）
 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/length-of-longest-fibonacci-subsequence/

 */

// 暴力算法
/**
 * @param {number[]} A
 * @return {number}
 */
const lenLongestFibSubseq = function (A) {
    let ret = [], temp = [];
    for (let i = 0, j; i < A.length; i++) {
        for (let k = i + 1; k < A.length; k++) {
            temp = [];
            temp.push(A[i])
            j = k;
            temp.push(A[k]);
            while (j <= A.length - 1 && A[j] <= temp[temp.length - 1] + temp[temp.length - 2]) {
                if (A[j] === temp[temp.length - 1] + temp[temp.length - 2]) {
                    temp.push(A[j]);
                }
                j++;
            }
            if (temp.length > ret.length && temp.length > 2) {
                ret = temp;
            }
        }
    }
    return ret.length;
};

// 动态规划
/**
 * @param {number[]} A
 * @return {number}
 */
const lenLongestFibSubseqDp = function (A) {
    let dp = Array.from({length: A.length}, () => new Array(A.length - 1).fill(0));
    let maxLen = 0;
    let intMap = new Map();
    for (let i = 0; i < A.length; i++) {
        intMap.set(A[i], i)
    }
    let stepLen, k;
    for (let i = 1; i < A.length - 1; i++) {
        for (let j = i + 1; j < A.length; j++) {
            stepLen = A[j] - A[i] // A[k]
            if (intMap.has(stepLen) && intMap.get(stepLen) < i) {
                k = intMap.get(stepLen);
                dp[i][j] = dp[k][i] + 1;
                maxLen = Math.max(maxLen, dp[i][j] + 2);
            }
        }
    }
    return maxLen;
}


console.log(lenLongestFibSubseqDp([1, 2, 3, 4, 5, 6, 7, 8]))
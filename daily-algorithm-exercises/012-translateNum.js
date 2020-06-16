/*
面试题46. 把数字翻译成字符串
给定一个数字，我们按照如下规则把它翻译为字符串：0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。



示例 1:

输入: 12258
输出: 5
解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"


提示：
0 <= num < 2^31

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
*/

// 动态规划的（滚动数组优化空间）
/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
    let numString = num.toString()
    let counts = 1, p = 0, q = 0;
    for (let i = 0; i < numString.length; i++) {
        p = q;
        q = counts;
        counts = 0;
        counts += q;
        if (i === 0) {
            continue;
        }
        let pre = numString.substring(i - 1, i + 1);
        if (pre <= 25 && pre >= 10) {
            counts += p;
        }
    }
    return counts;
};

console.log(translateNum(12258));
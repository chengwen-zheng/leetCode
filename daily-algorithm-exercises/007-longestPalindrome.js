/*
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
*/

// 暴力解法
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let longestPalindromeString = '';
    if (s.length < 2) return s;
    for (let i = 0; i < s.length - 1; i++) {
        for (let k = i; k < s.length + 1; k++) {
            if (k - i > 0 && isValidPalindromic(s, i, k) && longestPalindromeString.length < s.substring(i, k).length) {
                longestPalindromeString = s.substring(i, k);
            }
        }
    }
    return longestPalindromeString;
};


var isValidPalindromic = function (s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(longestPalindrome("zz"));

/*
给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1:

输入: "aba"
输出: True
示例 2:

输入: "abca"
输出: True
解释: 你可以删除c字符。
注意:
    字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
*/

var isReturn =  0
var validPalindrome = function (s) {
    let k = 0, j = s.length - 1;
    while (k < j) {
        if (s.charAt(k) === s.charAt(j)) {
            k++;
            j--;
        } else {
            if (isReturn === 0) {
                isReturn++;
                return validPalindrome(s.substring(k, j)) || validPalindrome(s.substring(k + 1, j + 1));
            }
            return false;
        }
    }
    return true;
};


console.log(validPalindrome("deeee"));
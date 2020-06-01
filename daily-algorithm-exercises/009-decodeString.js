/*
给定一个经过编码的字符串，返回它解码后的字符串。

编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。

此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入。

示例:

    s = "3[a]2[bc]", 返回 "aaabcbc".
    s = "3[a2[c]]", 返回 "accaccacc".
    s = "2[abc]3[cd]ef", 返回 "abcabccdcdcdef".
    s = "a2[abc]3[cd]ef", 返回 "aabcabccdcdcdef".
*/

/**
 * @param {string} s
 * @return {string}
 */

var decodeString = function (s) {
    let stack = [];
    let temp = {};
    let res = '';
    for (let i = 0, c; i < s.length; i++) {
        c = s.charAt(i);
        if (c === '[') {
            // 起始入栈操作
            temp = {string: '', multi: 0};
            stack.push(temp);
        } else if (c === ']') {
            // 出栈操作，拼接字符
            res += stack.pop().string.repeat(stack.pop().multi);
        } else if (c >= '0' && c <= '9') {
            temp.multi = Number.parseInt(c);
        } else {
            temp.string += c;
        }
    }
    return res;
};

decodeString("3[a2[c]]");
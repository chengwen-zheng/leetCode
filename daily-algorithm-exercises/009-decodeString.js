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
    let k = '';
    for (let i = 0, c; i < s.length; i++) {
        c = s.charAt(i);
        if (c === '[') {
            // 起始入栈操作
            temp = {string: '', multi: k};
            stack.push(temp);
            k = '';
        } else if (c === ']') {
            // 出栈操作，拼接字符
            let last = stack.pop();
            if (stack.length) {
                stack[stack.length - 1].string += last.string.repeat(last.multi);
            } else {
                res += last.string.repeat(last.multi);
            }
        } else if (c >= '0' && c <= '9') {
            k += c;
        } else {
            if (stack.length) {
                stack[stack.length - 1].string += c;
            } else {
                res += c;
            }

        }
    }
    return res;
};


// 递归解法，耗时更多。重要是找到起始条件。
/**
 * @param {string} s
 * @return {string}
 */
var decodeStringRecursive = function (s) {
    return dfs(s, 0);
}

function dfs(s, i) {
    let c;
    let multi = '', res = '';
    let temp = '';
    while (i < s.length) {
        c = s.charAt(i)
        if (c >= '0' && c <= '9') {
            multi += c;
        } else if (c === '[') {
            temp = dfs(s, i + 1);
            res = res + temp.res.repeat(Number.parseInt(multi));
            // 这里的i要用返回的i; 时间复杂度 O(N)O(N)，递归会更新索引，因此实际上还是一次遍历 s
            i = temp.i;
            multi = '';
        } else if (c === ']') {
            // 终止条件
            return {res, i};
        } else {
            res += c;
        }
        i++;
    }
    return res;
}


console.log(decodeStringRecursive("a2[abc]3[cd]ef"));
console.log(decodeString("a2[abc]3[cd]ef"));

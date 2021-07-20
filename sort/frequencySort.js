
// 给定一个字符串，请将字符串里的字符按照出现的频率降序排列。

// 示例 1:

// 输入:
// "tree"

// 输出:
// "eert"

// 解释:
// 'e'出现两次，'r'和't'都只出现一次。
// 因此'e'必须出现在'r'和't'之前。此外，"eetr"也是一个有效的答案。
// 示例 2:

// 输入:
// "cccaaa"

// 输出:
// "cccaaa"

// 解释:
// 'c'和'a'都出现三次。此外，"aaaccc"也是有效的答案。
// 注意"cacaca"是不正确的，因为相同的字母必须放在一起。
// 示例 3:

// 输入:
// "Aabb"

// 输出:
// "bbAa"

// 解释:
// 此外，"bbaA"也是一个有效的答案，但"Aabb"是不正确的。
// 注意'A'和'a'被认为是两种不同的字符。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/sort-characters-by-frequency
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    let map = new Map()

    for(let i = 0; i < s.length; i++) {
        let count = map.has(s[i]) ? map.get(s[i]) : 0;
        map.set(s[i], count + 1);
    }

    let list = [];
    for(let [key, value] of map) {
        list.push([key, value]);
    }
    return list.sort((a, b) => a[1] - b[1]).reduce((pre, cur) => {
        let i = 1;
        while(i <= cur[1]) {
            pre += cur[0];
            i++;
        }
        return pre;
    }, '');
};

console.log(frequencySort("raaeaedere"));
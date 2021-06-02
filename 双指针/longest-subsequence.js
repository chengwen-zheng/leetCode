// leetcode: https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/
// Input:
// s = "abpcplea", d = ["ale","apple","monkey","plea"];

// Output:
// "apple"
// 题目描述：删除 s 中的一些字符，使得它构成字符串列表 d 中的一个字符串，找出能构成的最长字符串。如果有多个相同长度的结果，返回字典序的最小字符串。

// 通过删除字符串 s 中的一个字符能得到字符串 t，可以认为 t 是 s 的子序列，我们可以使用双指针来判断一个字符串是否为另一个字符串的子序列。

const isSubString = (string, subString) => {
    let i = 0, j = string.length, m = 0, n = subString.length
    while(i < j &&  m < n) {
        if(string[i] === subString[m]) {
            m++;
        }
        i++;
    }
    return m === n;
}


console.log(isSubString('bs', 's'));
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
const findLongestWord = function(s, dictionary) {
    dictionary = dictionary.sort((a, b) => {
        if (a.length != b.length) {
            return b.length - a.length;
        } else {
            return a.localeCompare(b);
        }
    });
    let i = 0;
    while((i < dictionary.length -1) && !isSubString(s, dictionary[i])) {
        i++;
    }
    return isSubString(s, dictionary[i]) ? dictionary[i] : '';
}


const s = 'apple'

const d = ["zxc","vbn"]

console.log(findLongestWord(s, d));

// 总结：涉及到字符串顺序匹配的问题，一般都可以使用双指针法。


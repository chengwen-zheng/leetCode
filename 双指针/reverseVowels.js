
// 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。

 

// 示例 1：

// 输入："hello"
// 输出："holle"
// 示例 2：

// 输入："leetcode"
// 输出："leotcede"
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    s = s.split('');
    let i = 0, j = s.length - 1;
    while(i < j) {
        if(!HashSet.includes(s[i])) {
            i++;
        } else if (!HashSet.includes(s[j])) {
            j--;
        } else if(HashSet.includes(s[j]) && HashSet.includes(s[i])) {
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }
    }
    return s.join('');
};

var HashSet = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

var s = 'hello';
console.log(reverseVowels(s));


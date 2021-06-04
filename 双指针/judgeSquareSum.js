// 给定一个非负整数 c ，你要判断是否存在两个整数 a 和 b，使得 a2 + b2 = c 。

// 输入：c = 5
// 输出：true
// 解释：1 * 1 + 2 * 2 = 5

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for(let i = 0; (i*i) <= c; i++){
        const b = Math.sqrt(c - i * i);
        if (b === parseInt(b)) {
            return true;
        }
    }
    return false
};
console.log(judgeSquareSum(5));
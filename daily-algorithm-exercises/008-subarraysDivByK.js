/*
974. 和可被 K 整除的子数组
给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。



示例：

输入：A = [4,5,0,-2,-3,1], K = 5
输出：7
解释：
有 7 个子数组满足其元素之和可被 K = 5 整除：
[4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]


提示：

1 <= A.length <= 30000
-10000 <= A[i] <= 10000
2 <= K <= 10000
*/
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function (array, k) {
    var count = 0;
    var number = 0;
    for (let i = 0; i < array.length; i++) {
        number = array[i];
        for (let j = i; j < array.length; j++) {
            if (i !== j) {
                number += array[j]
            }
            if (isDivByK(number, k)) {
                count++;
            }
        }
    }
    return count;
}

// var isDivByK = function (array, k) {
//     return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) % k === 0;
// }

var isDivByK = (number, k) => {
    return number % k === 0;
}

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5))
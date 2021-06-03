// 给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。

// 函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length 。

// 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted

// 输入：numbers = [2,7,11,15], target = 9
// 输出：[1,2]
// 解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
    let i = 0; j = numbers.length - 1;
    while(numbers[i] + numbers[j] !== target) {
        if(i >= j || (numbers[i] + numbers[j] < target)) {
            i++;
            j = numbers.length - 1;
        } else {
            j--;
        }
    }
    return [i+1, j+1]
};

const numbers = [2,7,11,15], target = 9;

console.log(twoSum(numbers, target));
/**
 从数组中找出一堆不相邻的数字，并使得和最大.

 输入: [4,1,1,9,1]
 输出: 13
 */


// dp规划. 用数组保存最优解可以减少
/**
 * @param {number[]} A
 * @return {number}
 */
const findNonadjacentAndMaxNumber = function (A) {
    let opt = [];
    opt[0] = A[0];
    if (A.length === 1) return A[0];
    opt[1] = Math.max(A[1], A[0]);

    for (let i = 2; i < A.length; i++) {
        opt[i] = Math.max(opt[i - 1], A[i] + opt[i - 2]);
    }
    return opt.pop();
}

console.log(findNonadjacentAndMaxNumber([1, 2, 4, 1, 7, 8, 3]))

// 给你一个整数 n ，请你找出并返回第 n 个 丑数 。

// 丑数 就是质因子只包含 2、3 和 5 的正整数。


// 示例 1：

// 输入：n = 10
// 输出：12
// 解释：[1, 2, 3, 4, 5, 6, 8, 9, 10, 12] 是由前 10 个丑数组成的序列。
// 示例 2：

// 输入：n = 1
// 输出：1
// 解释：1 通常被视为丑数



function isUglyNumber(n) {
  if (n === 1) {
    return true;  // 1是特殊数
  }

  // 逐步除以2、3和5，直到不能整除为止
  while (n % 2 === 0) {
    n /= 2;
  }

  while (n % 3 === 0) {
    n /= 3;
  }

  while (n % 5 === 0) {
    n /= 5;
  }

  // 如果n最终为1，则是特殊数
  return n === 1;
}


/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let stack = [];
  let i = 0;
  while (stack.length < n) {
    if (isUglyNumber(++i)) {
      stack.push(i)
    }
    continue;
  }

  return i;
};

console.log(nthUglyNumber(10));




/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumberPro = function (n) {
  let i = 1;
  let seen = new Set([1]);
  let minHap = [1];
  let ugly;
  while (i <= n) {
    ugly = minHap.pop();
    [2, 3, 5].forEach(item => {
      let prime = item * ugly;
      if (!seen.has(prime)) {
        seen.add(prime);
        minHap.push(prime);
        minHap.sort((a, b) => b - a);
      };
    });
    i++;
  }

  return ugly;
};

console.log(nthUglyNumberPro(10));

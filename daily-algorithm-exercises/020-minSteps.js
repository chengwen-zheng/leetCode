/**
 650. 只有两个键的键盘
 最初在一个记事本上只有一个字符 'A'。你每次可以对这个记事本进行两种操作：

 Copy All (复制全部) : 你可以复制这个记事本中的所有字符(部分的复制是不允许的)。
 Paste (粘贴) : 你可以粘贴你上一次复制的字符。
 给定一个数字 n 。你需要使用最少的操作次数，在记事本中打印出恰好 n 个 'A'。输出能够打印出 n 个 'A' 的最少操作次数。

 示例 1:

 输入: 3
 输出: 3
 解释:
 最初, 我们只有一个字符 'A'。
 第 1 步, 我们使用 Copy All 操作。
 第 2 步, 我们使用 Paste 操作来获得 'AA'。
 第 3 步, 我们使用 Paste 操作来获得 'AAA'。
 说明:

 n 的取值范围是 [1, 1000] 。

 来源：力扣（LeetCode）
 链接：https://leetcode-cn.com/problems/2-keys-keyboard/
 */


// 动态规划
/**
 * @param {number} n
 * @return {number}
 */
const minSteps = function (n) {
    //  第一维坐标是指是当前打印出的数量，第二维坐标是缓存中数量
    let dp = Array.from({length: n + 1}, () => new Array(n + 1).fill(n));
    dp[1][1] = 0;
    let minNum = dp[1][1];
    for (let i = 1; i <= n; i++) {
        minNum = dp[i][1];  //纪录第二层循环的最小值 下面会用到
        for (let j = 1; j <= i; j++) {
            if (i - j >= 1) { //注意不要越界
                dp[i][j] = Math.min(dp[i - j][j] + 1, dp[i][j]);	//i个A 要在i-j个A的基础上粘贴j个A
                minNum = Math.min(minNum, dp[i][j]);
            }

            if (i === j) { //当i=j的时候 代表复制所有的"A" 肯定是在最小操作数的基础上复制，所以前面要纪录最小值
                dp[i][j] = minNum + 1;
            }
        }
    }
    return dp[n][n] - 1;
};

console.log(minSteps(3))
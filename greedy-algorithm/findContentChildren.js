// 示例 1:

// 输入: g = [1,2,3], s = [1,1]
// 输出: 1
// 解释: 
// 你有三个孩子和两块小饼干，3个孩子的胃口值分别是：1,2,3。
// 虽然你有两块小饼干，由于他们的尺寸都是1，你只能让胃口值是1的孩子满足。
// 所以你应该输出1。
// 示例 2:

// 输入: g = [1,2], s = [1,2,3]
// 输出: 2
// 解释: 
// 你有两个孩子和三块小饼干，2个孩子的胃口值分别是1,2。
// 你拥有的饼干数量和尺寸都足以让所有孩子满足。
// 所以你应该输出2.

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/assign-cookies
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 按胃口从小到大排序小孩子
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let count = 0;
    for(let i = 0, j = 0; i < g.length && j < s.length; i++, j++) {
        while(g[i] > s[j]) {
            j++;
        }
        if(j < s.length) {
            count++;
        }
    }
    return count;
};
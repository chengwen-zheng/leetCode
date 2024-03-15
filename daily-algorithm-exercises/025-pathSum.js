// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/path-sum-iii/solutions/1021296/lu-jing-zong-he-iii-by-leetcode-solution-z9td/

// 给定一个二叉树的根节点 root ，和一个整数 targetSum ，求该二叉树里节点值之和等于 targetSum 的 路径 的数目。

// 路径 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  if (root === null) {
      return 0;
  }
  let ret = rootSum(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);
  return ret;
};

var rootSum = function (root, targetSum) {
  let ret = 0;
  if (root === null) {
      return ret;
  }

  let total = root.val;
  if (total === targetSum) {
      ret++;
  }

  ret += rootSum(root.left, targetSum - total);
  ret += rootSum(root.right, targetSum - total);
  return ret;
}

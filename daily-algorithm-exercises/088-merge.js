// https://leetcode.cn/problems/merge-sorted-array/description/
// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
// 代码
// 测试用例
// 测试用例
// 测试结果
// 88. 合并两个有序数组
var merge = function (nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  return nums1.sort((a, b) => a - b);
};


var nums1 = [1, 2, 3, 0, 0, 0];
var nums2 = [2, 5, 6];
var m = 3;
var n = 3;
merge(nums1, m, nums2, n)
console.log(nums1);
// 双指针法

var mergePro = function (nums1, m, nums2, n) {
  let sort = [];
  let i = 0, j = 0;
  let cur;
  while (i < m || j < n) {
    if (i === m) {
      // nums1已经移完
      cur = nums2[j++];
    } else if (j === n) {
      // nums1已经移完
      cur = nums1[i++];
    } else if (nums1[i] <= nums2[j]) {
      cur = nums1[i++];
    } else if (nums1[i] > nums2[j]) {
      cur = nums2[j++];
    }

    sort.push(cur);
  }

  sort.forEach((item, index) => nums1[index] = item);
}

mergePro(nums1, m, nums2, n);
console.log(nums1);


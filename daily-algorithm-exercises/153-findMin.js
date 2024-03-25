
// 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
// 若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
// 若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
// 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

// 给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。


// 本题算法考的是归并算法的归。缺少merge操作，直接用Math.min。具体可以看这里：
// https://www.bilibili.com/video/BV1Pt4y197VZ/?spm_id_from=333.337.search-card.all.click&vd_source=c7491d8333031bf6dc7174b52176a08b
var sort = function (nums, start, last) {
  let middle = (start + last) >>> 1;

  if (start >= last) {
    return nums[start];
  }

  let left = sort(nums, start, middle);
  let right = sort(nums, middle + 1, last);
  return Math.min(left, right);
}

/**
* @param {number[]} nums
* @return {number}
*/
var findMin = function (nums) {
  return sort(nums, 0, nums.length - 1);
};

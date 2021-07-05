// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。

//  

// 示例 1：

// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 示例 2：

// 输入：nums1 = [1], m = 1, nums2 = [], n = 0
// 输出：[1]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/merge-sorted-array


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 || j >= 0) {
        if(i < 0) nums1[k--] = nums2[j--];
        else if(j < 0) nums1[k--] = nums1[i--];
        else if(nums1[i] < nums2[j]) nums1[k--] = nums2[j--];
        else nums1[k--] = nums1[i--];
    }
    return nums1;
    
};



//  var merge = function(nums1, m, nums2, n) {
//      let i = 0, j = 0;
//      let newArr = [];
//      while(i < m || j < n) {
//          if(nums1[i] < nums2[j] && i < m) {
//             newArr = [...newArr, nums1[i]]
//             i++;
//          } else if(nums1[i] > nums2[j] && j < n) {
//             newArr = [...newArr, nums2[j]]
//             j++;
//          } else if (nums1[i] === nums2[j]) {
//             newArr = [...newArr, nums2[j], nums1[i]];
//             i++;
//             j++;
//          } else if(i === m || j === n) {
//             newArr = i === m ? [...newArr, ...nums2.slice(j)] : [...newArr, ...nums1.slice(i)];
//             break;
//          }

//      }
//      return newArr;
// };

var nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
// var nums1 = [1], m = 1, nums2 = [], n = 0

console.log(merge(nums1, m, nums2, n));
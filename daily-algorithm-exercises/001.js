/*
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
    [-1, 0, 1],
    [-1, -1, 2]
]
 */
var nums = [-1, 0, 1, 2, -1, -4, 5, 67, -3, 4];

var threeSum = function (nums) {
    nums = nums.sort((a, b) => a > b)
    let res = [];
    if (nums < 3) return;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            continue;
        } else {
            let l = i - 1;
            let r = i + 1;
            if (l >= 0 && r <= nums.length - 1 && nums[i] + nums[l] + nums[r] === 0) {
                res.push([nums[i], nums[l], nums[r]])
            } else if (l >= 0 && r <= nums.length - 1 && nums[i] + nums[l] + nums[r] > 0) {
                l -= 1
            } else if (l >= 0 && r <= nums.length - 1 && nums[i] + nums[l] + nums[r] < 0) {
                r += 1;
            }
        }
    }
    return res;
};

console.log(threeSum(nums))
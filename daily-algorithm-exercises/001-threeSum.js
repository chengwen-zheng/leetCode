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
var nums = [-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0];

var threeSum = function (nums) {
    nums = nums.sort((a, b) => a - b)
    let n = nums.length;
    let res = [];
    if (n < 3) return res;
    for (let l, r, i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return res;
        } else if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        } else {
            l = i + 1;
            r = n - 1;
            while (r > l) {
                if (nums[i] + nums[l] + nums[r] === 0) {
                    while (r > l && nums[r] === nums[r - 1]) r = r - 1;
                    while (r > l && nums[l] === nums[l + 1]) l = l + 1;
                    res.push([nums[i], nums[l], nums[r]])
                    l = l + 1;
                    r = r - 1;
                } else if (nums[i] + nums[l] + nums[r] > 0) {
                    r += -1;
                } else if (nums[i] + nums[l] + nums[r] < 0) {
                    l += 1;
                }
            }
        }
    }
    return res;
};


var threeSumPro = function (nums) {
    let results = [];
    sums = nums.sort((a, b) => a - b);
    let left = 0;
    let right = sums.length - 1;

    for (let i = 0; i <= sums.length - 1; i++) {
        if(sums[i] > 0) {
            return results;
        }
        // 对i去重, 这里去重要注意 i - 1
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        left = i + 1;
        right = sums.length - 1;
        while (left < right) {
            let total = sums[i] + sums[left] + sums[right];
            if (total < 0) {
                left++;
            } else if (total > 0) {
                right--;
            } else {
                results.push([sums[i], sums[left], sums[right]]);
                // 对left去重
                left++;
                while (sums[left] === sums[left + 1]) {
                    left++;
                }
                // 对right进行去重;
                right--;
                while (sums[right] === sums[right + 1]) {
                    right--;
                }
            }
        }
    }

    return results;

};

console.log(threeSum(nums))

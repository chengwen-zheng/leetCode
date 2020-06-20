/**
 区域和检索 - 数组不可变
 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。

 示例：

 给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()

 sumRange(0, 2) -> 1
 sumRange(2, 5) -> -1
 sumRange(0, 5) -> -3
 说明:
 你可以假设数组不可变。
 会多次调用 sumRange 方法。
 * */

// 暴力算法

/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.numArray = nums;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    let ret = 0;
    while (i <= j) {
        ret += this.numArray[i];
        i++;
    }
    return ret;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1])
var param_1 = obj.sumRange(2, 5);
console.log(param_1);

// 用动态规划的方法dp.空间换时间
var NumArrayDp = function (nums) {
    this.numArray = nums;
    this.sumArray = [];
    nums.forEach((value, index) => {
        this.sumArray[index] = index === 0 ? value : this.sumArray[index - 1] + value;
    })
};

NumArrayDp.prototype.sumRange = function (i, j) {
    return this.sumArray[j] - this.sumArray[i] + this.numArray[i];
}

var obj_2 = new NumArrayDp([-2, 0, 3, -5, 2, -1])
var param_2 = obj_2.sumRange(2, 5);
console.log(param_2);



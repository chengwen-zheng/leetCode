
// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

//  

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/top-k-frequent-elements
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const numsMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        if (numsMap.has(nums[i])) {
            let numsLen = numsMap.get(nums[i]) + 1;
            numsMap.set(nums[i], numsLen);
        } else {
            numsMap.set(nums[i], 1);
        }
    }

    
    const timesMap  = new Map();
    let timesList = [];
    for(let [key, value] of numsMap) {
        if(timesMap.has(value)) {
            timesMap.set(value, [key].concat(timesMap.get(value)));
        } else {
            timesMap.set(value, [key]);
            timesList.push(value);
        }
    }
    timesList = timesList.sort((a, b) => b-a);

    let topKFrequentNums = [];
    for(let j = 0; j < timesList.length && topKFrequentNums.length < k; j++) {
        if(timesMap.has(timesList[j]) ){
            topKFrequentNums = topKFrequentNums.concat(timesMap.get(timesList[j]));
        }
    }
    return topKFrequentNums
}

const nums = [5,1,-1,-8,-7,8,-5,0,1,10,8,0,-4,3,-1,-1,4,-5,4,-3,0,2,2,2,4,-2,-4,8,-7,-7,2,-8,0,-8,10,8,-8,-2,-9,4,-7,6,6,-1,4,2,8,-3,5,-9,-3,6,-8,-5,5,10,2,-5,-1,-5,1,-3,7,0,8,-2,-3,-1,-5,4,7,-9,0,2,10,4,4,-4,-1,-1,6,-8,-9,-1,9,-9,3,5,1,6,-1,-2,4,2,4,-6,4,4,5,-5], k = 7;
console.log(topKFrequent(nums, k));

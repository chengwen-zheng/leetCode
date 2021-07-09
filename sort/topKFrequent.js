
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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequentPro = function (nums, k) {
	let map = new Map()
	nums.forEach((num) => {
		let count = map.has(num) ? map.get(num) : 0
		map.set(num, count + 1)
	})
    console.log(map);
	this.count = 0
	let heap = [[0, 0]]
	for ([key, value] of map) {
        // count小于k时，将该key, value放入heap中。构建小顶堆
		if (this.count < k) {
			buildHeap(heap, key, value, k)
		} else {
        // count小于k时，比较顶部数的频率和当前数频率，进行堆化。
			if (value > heap[1][1]) {
				heap[1] = [key, value]
				heapify(heap)
			}
		}
	}
    console.log(heap);
	let res = []
	for (let i = 1; i <= k; i++) {
		res.push(heap[i][0])
	}
	return res
}

// 构建的时候就是构建了一个小顶堆数组
function buildHeap(heap, key, value, k) {
	if (this.count >= k) {
		return
	}
	this.count++
	heap.push([key, value])
	let i = this.count
	while (parseInt(i / 2) > 0 && heap[i][1] < heap[parseInt(i / 2)][1]) {
		swap(heap, i, parseInt(i / 2))
		i = parseInt(i / 2)
	}
}

// 堆化： https://wdxtub.com/interview/14520595471461.html(小顶堆和大顶堆)
function heapify(heap) {
	let i = 1
	while (true) {
		let maxPos = i
		if (i * 2 <= this.count && heap[i][1] > heap[i * 2][1]) {
			maxPos = i * 2
		}
		if (i * 2 + 1 <= this.count && heap[maxPos][1] > heap[i * 2 + 1][1]) {
			maxPos = i * 2 + 1
		}
		if (maxPos === i) {
			break
		}
		swap(heap, i, maxPos)
		i = maxPos
	}
}

function swap(heap, i, j) {
	let temp = heap[i]
	heap[i] = heap[j]
	heap[j] = temp
}

// react的优先队列也是应用小顶堆进行排序的

const nums = [5,1,-1,-8,-7,8,-5,0,1,10,8,0,-4,3,-1,-1,4,-5,4,-3,0,2,2,2,4,-2,-4,8,-7,-7,2,-8,0,-8,10,8,-8,-2,-9,4,-7,6,6,-1,4,2,8,-3,5,-9,-3,6,-8,-5,5,10,2,-5,-1,-5,1,-3,7,0,8,-2,-3,-1,-5,4,7,-9,0,2,10,4,4,-4,-1,-1,6,-8,-9,-1,9,-9,3,5,1,6,-1,-2,4,2,4,-6,4,4,5,-5], k = 7;
console.log(topKFrequentPro(nums, k));
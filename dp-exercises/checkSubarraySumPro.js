/**
 从数组arr中找出子数列之和等于S，可以找出则返回true.否则返回false

 输入：arr = [3,34,4,12,5,2];
 s = 9;
 输出：true
 */

// 第一种-递归解法
/**
 * @param {number[]} arr
 * @param {number} s
 * @return {boolean}
 */
function getSubArray(arr) {
    if (arr.length === 1) {
        return [arr];
    }

    const [first, ...last] = arr;

    const othersSubArray = getSubArray(last);

    let genArray = othersSubArray.map(value => {
        return [...value, first];
    });

    return [...genArray, [first], ...othersSubArray];
}


function checkSubarraySumR(arr, S) {
    const subArray = getSubArray(arr);
    for (let index = 0; index < subArray.length; index++) {
        if (subArray[index].reduce((acc, cur) => acc + cur, 0) === S) {
            return true
        }
    }
    return false
}


// 第一种-递归解法
// pendding是该数组的序列化为key，子数列数组和为value的map的数组
const pending = [];
const memorized = {};
let Fail = "fail";
function Clone(value) {
    return JSON.parse(JSON.stringify(value));
}

function try_get_sub(array) {
    const calcedValue = memorized[JSON.stringify(array)]
    if(calcedValue){
        return memorized[JSON.stringify(array)];
    } else {
        return Fail;
    }
}

function calc(arr) {
    if (arr.length === 1) {
        return [arr];
    }

    const [first, ...others] = arr;

    const othersSubArray = try_get_sub(Clone(others));
    if(othersSubArray != Fail) {
        let genArray = othersSubArray.map(value => {
            return [...value, first];
        });
    
        return [...genArray, [first], ...othersSubArray];
    } else {
        pending.push({
            [JSON.stringify(others)]: Fail
        });
        return Fail
    }

}

function getSubArrayPrue(arr) {
    arr = arr.sort();
    pending.push({
        [JSON.stringify(arr)]: Fail
    });

    while (pending.length > 0) {
        let begin = Clone(pending).pop();
        let value;
        for (let [key, _] of Object.entries(begin)) {
            const x = JSON.parse(key);
            value = calc(x);
            if (value !== Fail) {
                memorized[JSON.stringify(x)] = value;
                pending.pop();
            }
        }
    }
    return try_get_sub(arr)
}

function checkSubarraySumPrue(arr, S) {
    const subArray = getSubArray(arr);
    for (let index = 0; index < subArray.length; index++) {
        if (subArray[index].reduce((acc, cur) => acc + cur, 0) === S) {
            return true
        }
    }
    return false
}

console.log(checkSubarraySumPrue([3,34,4,12,5,2], 9))

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  let path = [];
  let result = [];
  var backTrack = (k, n, startIndex, sum) => {
    if ((n - startIndex + 1 < k - path.length) || path.length > k || sum > n) {
      return;
    }
    if (path.length === k && sum === n) {
      result.push([...path]);
      return;
    }
    for (let i = startIndex; n - i + 1 >= k - path.length && i<= 9; i++) {
      path.push(i);
      sum += i;
      backTrack(k, n, i + 1, sum);
      path.pop();
      sum -= i;
    }
  }

  backTrack(k, n, 1, 0);
  return result;
};


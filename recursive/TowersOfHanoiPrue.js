// 汉诺塔问题的数学版本

function Clone(value) {
  return JSON.parse(JSON.stringify(value));
}
// 每次的移动都生成一个状态 Result
// diskSate {A: [], B: [], C: []}
function moveDisk(diskSate, n, from, to) {
  const moveSlice = diskSate[from].slice(0, n);
  diskSate[to] = [...moveSlice, ...(diskSate[to])];
  diskSate[from].splice(0, n)
  
  return diskSate;
}


// from, to, aux 表示每个柱子的盘子状态 [1,2,3, n], [], []
function hanoi(S0, n, from, to) {
  if (n == 1) {
    return moveDisk(S0, 1, from, to);
  }

  // 这里是塔的切换关系
  const aux = 3 - from - to;

  var S1 = moveDisk(Clone(S0), n - 1, from, aux);
  var S2 = moveDisk(Clone(S1), 1, from, to);
  // var S3 = moveDisk(S0, n, from, to);


  // 把一个大的问题切割成了几个小的部分，因为切割时需要中间状态。所以上面有个moveDisk函数生成中间状态
  const Step1 = hanoi(Clone(S0), n - 1, from, aux);
  const Step2 = hanoi(Clone(S1), 1, from, to);
  const Step3 = hanoi(Clone(S2), n - 1, aux, to);
  return [...Step1, '-', ...Step2, '-', ...Step3];
}

const n = 3;
const A = Array.from({ length: n }, (_, key) => key + 1);
const B = [];
const C = [];
const diskSate = [A, B, C]

console.log(hanoi(diskSate, n, 0, 2));

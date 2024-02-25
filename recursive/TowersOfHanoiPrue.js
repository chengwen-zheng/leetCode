// 汉诺塔问题的数学版本

// arguments [State, n, from, to]
// pending是arguments的序列化(stringify)为key的,对应汉诺塔移动步骤数组为value的
var pending = [];
var memorized = {};
let FAIL = "Fail";

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

function weKnow(args) {
  if (memorized[args]) {
    return memorized[args]
  } else {
    return FAIL;
  }
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
  const Step1Args = JSON.stringify([Clone(S0), n - 1, from, aux]);
  const Step2Args = JSON.stringify([Clone(S1), 1, from, to]);
  const Step3Args = JSON.stringify([Clone(S2), n - 1, aux, to]);

  if (!memorized[Step1Args]) return FAIL;
  if (!memorized[Step2Args]) return FAIL;
  if (!memorized[Step3Args]) return FAIL;

  return [...memorized[Step1Args], ...memorized[Step2Args], ...memorized[Step3Args]];
}

function main() {
  const n = 3;
  const A = Array.from({ length: n }, (_, key) => key + 1);
  const B = [];
  const C = [];
  const diskSate = [A, B, C];
  const Step1Args = JSON.stringify([Clone(diskSate), n, 0, 2]);
  pending.push({
    [Step1Args]: FAIL
  });
 
  while(pending.length > 0) {
    let begin = Clone(pending).pop();
    let value;
    for (let [key, _] of Object.entries(begin)) {
      let x = JSON.parse(key);
      value = hanoi(x);
    
      if(value !== FAIL) {
        memorized[key] = value;
        pending.pop();
      }
    }
  }

  weKnow(Step1Args);
}
main();


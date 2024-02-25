
var moveCount = 0;

function moveDisk(nDisk, from, to) {
  console.log("第" + (++moveCount) +" 次移动 : " +" 把 "+ nDisk+" 号圆盘从 " + from +" ->移到->  " + to);
}

function hanoi(n, from, to, aux) {
  if (n == 1) {
    moveDisk(n, from, to);
  } else {
    hanoi(n - 1, from, aux, to);
    moveDisk(n, from, to);
    hanoi(n - 1, aux, to, from);
  }
}

function main() {
  hanoi(3, "A", "C", "B");
}

main();

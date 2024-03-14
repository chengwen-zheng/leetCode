const s = "23<44<11>34>103333>=100333"


const strategies = {
  "<": (prev, operand) => prev < operand,
  "<=": (prev, operand) => prev <= operand,
  ">": (prev, operand) => prev > operand,
  ">=": (prev, operand) => prev >= operand,
};
// 根据操作符获取相应的策略函数
function getStrategy(operator) {
  return strategies[operator];
}

function calcInequalityValue(s) {
  let expr = s.split(/(>=|<=|<|>)/g);
  let prev = expr.shift();
  while (expr.length > 0) {
    let operator = expr.shift();
    let operand = Number(expr.shift());
    let strategy = getStrategy(operator);

    if (strategy && !strategy(prev, operand)) {
      return false;
    }
    prev = operand;
  }

  return true;
}

console.log(calcInequalityValue(s)  === eval(s));

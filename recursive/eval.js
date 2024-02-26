// 表达式求值，数字都是整数. 1 + 5*6
const rightBracket = ")";
const leftBracket = "(";

function buildNode(name, value, children = []) {
  return {
    name: name,
    value: value,
    children,
  };
}

function evalExpression(expr) {
  const n = expr.length;
  if (n === 0) return;
  if (n === 1) {
    return `Node(name=${expr})`
  }

  // 标记嵌套层数
  let level = [], cur = 0;
  for (let i = 0; i < n; i++) {
    const char = expr[i];
    if (char === rightBracket) cur--;
    if (char === leftBracket) cur++;
    level[i] = cur;
  }

  const positive = (x) => x > 0;
  if (expr[0] === leftBracket) {
    if (level.slice(0, n - 1).every(positive)) {
      return buildNode("()", evalExpression(expr.substr(1, n - 2)));
    }
  }


  let pos = -1;
  let priority = {
    "+": 2,
    "-": 2,
    "*": 1,
    "/": 1
  };

  // 否则找到最后一个运算的符号
  for (let i = n - 1; i >= 0; i--) {
    if (level[i] === 0 && priority.hasOwnProperty(expr[i])) {
      if (pos === -1 || priority[expr[pos]] < priority[expr[i]]) {
        pos = i;
      }
    }
  }

  let lhs = evalExpression(expr.substr(0, pos));
  let rhs = evalExpression(expr.substr(pos+1));

  return buildNode(expr[pos], expr[pos], [lhs, rhs]);

}
const expression = "1*5+3*4";
const result = evalExpression(expression);
console.log(JSON.stringify(result));

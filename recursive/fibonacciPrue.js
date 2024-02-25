var pending = [];
var memorized = [];
let callCount = 0;
let FAIL = "Fail";
function Clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function try_get_f(n) {
  if (memorized[n]) {
    return memorized[n]
  } else {
    return FAIL;
  }
}

function add(pending, element) {
  for (let [key] of Object.entries(element)) {
    if (pending.filter((ele) => Object.keys(ele).includes(key)).length > 0) {
      return
    } else {
      pending.push(element);
    }
  }
}

function calc(n) {
  if (n <= 1) {
    return 1
  }
  let t1 = try_get_f(n - 1);
  let t2 = try_get_f(n - 2)

  if (t1 == FAIL) add(pending, { [n - 1]: FAIL })
  if (t2 == FAIL) add(pending, { [n - 2]: FAIL })
  callCount++;

  if (t1 === FAIL || t2 === FAIL) {
    return FAIL;
  } else {
    return t1 + t2;
  }
  
}

function f_nr(n) {
  callCount = 0;
  add(pending, { [n]: FAIL })

  while (pending.length > 0) {
    let begin = Clone(pending).pop();
    let value;
    for (let [key, _] of Object.entries(begin)) {
      const x = Number(key);
      value = calc(x);
      if (value !== FAIL) {
        memorized[x] = value;
        pending.pop();
      }
    }

  }

  return try_get_f(n);

}

console.log(f_nr(10))

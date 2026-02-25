function domath(num1, num2) {
  const diff = num1 * num2;
  const rest = diff / 2;
  return rest;
}

function isEven(digit) {
  if (digit % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
const out = domath(40, 50);
const output = isEven(85);
console.log(output);
console.log("the result is", out);

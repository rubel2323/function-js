function arraySum(digits) {
  let arr = 0;

  for (let digit of digits) {
    arr += digit;
  }
  return arr;
}

const num = [3, 4, 6, 9];
const arraysummation = arraySum(num);
console.log("The summation of the array is ", arraysummation);

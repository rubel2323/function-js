function arraOddNumsDis(array) {
  let arr = [];
  for (arrdigit of array) {
    if (arrdigit % 2 === 0) {
      arr.push(arrdigit);
    }
  }
  return arr;
}

const arrDigits = [3, 4, 5, 6, 7, 8];
const disPlay = arraOddNumsDis(arrDigits);
console.log("The numbers are", disPlay);

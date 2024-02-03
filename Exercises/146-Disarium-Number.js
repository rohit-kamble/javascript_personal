// isDisarium(75) ➞ false
// // 7^1 + 5^2 = 7 + 25 = 32
// isDisarium(135) ➞ true
// // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
// isDisarium(544) ➞ false
// isDisarium(518) ➞ true
// isDisarium(8) ➞ true
// isDisarium(466) ➞ false

function isDisarium(num) {
  let testNum = 0;
  const convertString = num.toString().split("");
  for (let i = 0; i < convertString.length; i++) {
    testNum += calaculatemultiplie(convertString[i], i);
  }
  return testNum === num;
}

function calaculatemultiplie(num, i) {
  if (i === 0) {
    return parseInt(num);
  } else {
    num *= calaculatemultiplie(parseInt(num), Math.abs(i - 1));
    return num;
  }
}
console.log("--", isDisarium(518));

//  reversedBinaryInteger(10) ➞ 5
// // 10 = 1010 -> 0101 = 5
// reversedBinaryInteger(12) ➞ 3
// // 12 = 1100 -> 0011 = 3
// reversedBinaryInteger(25) ➞ 19
// // 25 = 11001 -> 10011 = 19
// reversedBinaryInteger(45) ➞ 45
// // 45 = 101101 -> 101101 = 45

function reversedBinaryInteger(ninary) {
  return parseInt(
    Number(ninary).toString(2).split("").reverse().join("", ","),
    2
  );
}

console.log(reversedBinaryInteger(45));

// isPandigital(98140723568910) ➞ true
// isPandigital(90864523148909) ➞ false
// // 7 is missing.
// isPandigital(112233445566778899) ➞ false

const obj = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
};

let flag = true;
function isPandigital(num) {
  for (let x in obj) {
    if ((num + "").includes(String(obj[x]))) {
      flag = true;
    } else {
      flag = false;
      break;
    }
  }
  return flag;
}

console.log("--", isPandigital(90864523148909));

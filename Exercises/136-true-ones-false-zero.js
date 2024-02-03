// integerBoolean("100101") ➞ [true, false, false, true, false, true]
// integerBoolean("10") ➞ [true, false]
// integerBoolean("001") ➞ [false, false, true]

function convertZeroOne(str) {
  return str.split("").map((item) => (parseInt(item) ? true : false));
}
console.log(convertZeroOne("001"));

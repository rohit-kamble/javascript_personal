const ONE_TO_NINETEEN = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
var TENS = [
  "ten",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
var SCALES = ["thousand", "million", "billion", "trillion"];
function integerToNumber(num) {
  let str = [];
  if (num < 20) {
    str.push(ONE_TO_NINETEEN[num - 1]);
    return str;
  } else if (num % 10 === 0 && num < 100) {
    str.push(TENS[num / 10 - 1]);
    return str;
  } else if (num % 10 === 0 && num > 100) {
    const idx = (num / 10 + "").length;
    str = integerToNumber(num / 10).concat([str.join("") + SCALES[idx - 2]]);
    console.log("8");
    // str.push(SCALES[integerToNumber(num / 10) + "".length - 3]);
    return str;
  } else {
    return str;
  }
}

console.log("ans--", integerToNumber(12000));

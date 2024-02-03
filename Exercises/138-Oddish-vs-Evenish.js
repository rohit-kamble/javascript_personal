// oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

// oddishOrEvenish(373) ➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

// oddishOrEvenish(4433) ➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0

function oddishOrEvenish(num) {
  return num
    .toString()
    .split("")
    .reduce((acc, val) => acc + parseInt(val), 0) %
    2 ===
    0
    ? "Evenish"
    : "oddish";
}
console.log(oddishOrEvenish(43));

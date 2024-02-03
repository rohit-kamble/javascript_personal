// function anagram(str) {
//   const str1 = str.split("").sort().join("");
//   const str2 = "silent".split("").sort().join("");
//   return str1 === str2;
// }
// console.log("--", anagram("lihten"));

let obj = {};
let chake = false;
function anagramString(str) {
  for (let x of str.split("")) {
    obj[x] = x;
  }

  for (let y of "listen".split("")) {
    if (obj[y]) {
      chake = true;
    } else {
      chake = false;
      break;
    }
  }
  return chake;
}
console.log("is anagram =", anagramString("silent"));

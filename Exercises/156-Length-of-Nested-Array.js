// getLength([1, [2, 3]]) ➞ 3
// getLength([1, [2, [3, 4]]]) ➞ 4\
// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
// getLength([1, [2], 1, [2], 1]) ➞ 5

// let ans = [];
// function getLength(arr) {
//   for (let x of arr) {
//     if (Array.isArray(x)) {
//       getLength(x);
//     } else {
//       ans.push(x);
//     }
//   }
//   return ans;
// }

function getLength(arr) {
  if (typeof arr !== "object") {
    ans.push(arr);
  } else {
    for (let x of arr) {
      if (typeof x === "object") {
        getLength(x);
      } else {
        ans.push(x);
      }
    }
  }
  return ans;
}

console.log("--", getLength([1, [2], 1, [2], 1]));

// isDisarium(75) ➞ false
// // 7^1 + 5^2 = 7 + 25 = 32
// isDisarium(135) ➞ true
// // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135
// isDisarium(544) ➞ false
// isDisarium(518) ➞ true
// isDisarium(8) ➞ true
// isDisarium(466) ➞ false

// function isDisarium(num) {
//   let total = 0;
//   let strNum = num.toString();
//   for (let x in strNum) {
//     total += calCulatePower(strNum[x], x);
//   }
//   return total === num;
// }

// const calCulatePower = (val, pow) => {
//   if (parseInt(pow) === 0) {
//     return parseInt(val);
//   } else {
//     return parseInt(val) * calCulatePower(val, Math.abs(parseInt(pow) - 1));
//   }
// };

// console.log("****", isDisarium(135));

// const product = (a, b) => (e, d) => (i, j) => a * e * i + b * d * j;
// console.log("Ans===", product(1, 2)(0, 3)(3, 0));

// product(1,2)(1,1)(2,3) ➞ 8
// // 1 * 1 * 2 + 2 * 1 * 3
// product(10,2)(5,0)(2,3) ➞ 100
// // 10 * 5 * 2 + 2 * 0 * 3
// product(1,2)(2,3)(3,4) ➞ 30
// // 1 * 2 * 3 + 2 * 3 * 4
// product(1,2)(0,3)(3,0) ➞ 0
// // 1 * 0 * 3 + 2 * 3 * 0

function product(a1, b1) {
  return (a2, b2) => {
    return (a3, b3) => a1 * a2 * a3 + b1 * b2 * b3;
  };
}

console.log("ans--", product(1, 2)(2, 3)(3, 4));

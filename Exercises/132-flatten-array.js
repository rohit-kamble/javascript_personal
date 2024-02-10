function flatArr(arr) {
  let newData = [];
  for (let x of arr) {
    if (Array.isArray(x)) {
      console.log("x", x);
      newData.push(...flatArr(x)); // Recursively flatten nested arrays
    } else {
      newData.push(x); // Add non-array elements to the result
    }
  }
  return newData;
}

const data = [1, [2, 3, [4, 5]], 6, [7, 8]];
console.log(flatArr(data));

// [1, [2,[3,[4]]]] => [1,2,3,4]

// const data1 = [];
// function sortArrt(arr) {
//   if (typeof arr !== "object") {
//     data1.push(arr);
//     return data1;
//   } else {
//     for (let x of arr) {
//       if (typeof x === "object") {
//         return sortArrt(x);
//       } else {
//         data1.push(x);
//       }
//     }
//     return data1;
//   }
// }

// const data = [1, [2, 3, [4, 5]], 6, [7, 8]];
// function flatArr(arr) {
//   let newData = [];
//   for (let x of arr) {
//     if (Array.isArray(x)) {
//       newData.push(...x);
//     }
//   }
//   return newData;
// }
// console.log("ans---", flatArr(data));
// console.log("data", sortArrt([1, [2, [3, [4]]]]));

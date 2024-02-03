// const quetion = [1, [2, [3, [4]]]];
// let data = [];
// function flattenArr(arr) {
//   let result = [];
//   for (let arg of arr) {
//     if (Array.isArray(arg)) {
//       result.push(...arg);
//     }
//   }
//   return result;
// }
// // console.log("==", d);
// const ans = flattenArr(quetion);
// console.log("ans=", ans);

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
// console.log("data", sortArrt([1, [2, [3, [4]]]]));

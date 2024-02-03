// -5, -2, -6, 0, -1 =>  0

// function findLargestNumber(arr) {
//   return arr.sort((a, b) => b - a)[0];
// }

// function findLargestNumber(arr) {
//   let ans = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (ans !== arr[i] && ans < arr[i]) {
//       ans = arr[i];
//     }
//   }
//   return ans;
// }

// function findLargestNumber(arr, n = 0) {
//   let ans = arr[0];
//   if (arr.length === n) {
//     return ans;
//   } else {
//     n++;
//     return findLargestNumber(arr, n) > arr[n]
//       ? findLargestNumber(arr, n)
//       : arr[n];
//   }
// }

// function findLargestNumber(arr) {
//   let ans = arr[0];
//   let i = 0;
//   while (i < arr.length) {
//     ans = ans > arr[i] ? ans : arr[i];
//     i++;
//   }
//   return ans;
// }

// console.log("ans-->", findLargestNumber([-5, -2, -6, 0, -1, 1]));

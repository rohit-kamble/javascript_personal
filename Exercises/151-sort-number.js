// (0, -1, 4) => (4, 0, -1)

// function sortNumber(...args) {
//   return args.sort((a, b) => b - a);
// }

// function sortNumber(args) {
// for (let i = 0; i < args.length; i++) {
//   for (let j = i; j < args.length; j++) {
//     if (args[i] > args[j]) {
//       let temp = args[i];
//       args[i] = args[j];
//       args[j] = temp;
//       console.log("i", j);
//     }
//   }
// }
//   return args;
// }

// using recursion
let st = false;
// let n = 0;
function recursionSorting(args, n = 0) {
  console.log("op-", n);
  if (n === 6) {
    return args;
  } else {
    for (let j = n; j < args.length - 1; j++) {
      if (args[n] < args[j]) {
        let temp = args[j];
        args[j] = args[n];
        args[n] = temp;
        st = false;
        return recursionSorting(args, 0);
      } else {
        n++;
        console.log("opo", n);
        return recursionSorting(args, n);
      }
    }
  }
}

console.log("ans=>", recursionSorting([4, 8, 9, 210, 2, 1, 7, 3]));
// console.log("ans=>", sortNumber([4, 8, 9, 2, 1, 7, 3]));

// const quickSort = (arr) => {
//   if (arr.length <= 1) {
//     return arr;
//   } else {
//     let pivot = arr[0];
//     let leftArr = [];
//     let rightArr = [];

//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < pivot) {
//         leftArr.push(arr[i]);
//       } else {
//         rightArr.push(arr[i]);
//       }
//     }

//     return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
//   }
// };

// console.log("==0", quickSort([8, 4, 9, 2, 1, 7, 3]));

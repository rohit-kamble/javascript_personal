// Mutations Only: Zeroes to the End
// zeroesToEnd([1, 2, 0, 0, 4, 0, 5]) ➞ [1, 2, 4, 5, 0, 0, 0]
// zeroesToEnd([0, 0, 2, 0, 5]) ➞ [2, 5, 0, 0, 0]
// zeroesToEnd([4, 4, 5]) ➞ [4, 4, 5]
// zeroesToEnd([0, 0]) ➞ [0, 0]

function zeroesToEnd(arr) {
  let coumt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[coumt];
      arr[coumt] = temp;
      coumt++;
    }
  }
  return arr;
}

console.log("", zeroesToEnd([0, 0, 2, 0, 5]));

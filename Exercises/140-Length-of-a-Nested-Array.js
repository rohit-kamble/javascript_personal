// getLength([1, [2, 3]]) ➞ 3
// getLength([1, [2, [3, 4]]]) ➞ 4
// getLength([1, [2, [3, [4, [5, 6]]]]]) ➞ 6
// getLength([1, [2], 1, [2], 1]) ➞ 5
const data = [];
function getLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      getLength(arr[i]);
    } else {
      data.push(arr[i]);
    }
  }
  return data;
}

console.log(getLength([1, [2, [3, 4]]]));

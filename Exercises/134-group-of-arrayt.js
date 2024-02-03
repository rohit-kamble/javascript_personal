// group([1, 2, 3, 4], 2) ➞ [[1, 3], [2, 4]]
// group([1, 2, 3, 4, 5, 6, 7], 4) ➞ [[1, 3, 5, 7], [2, 4, 6]]
// group([1, 2, 3, 4, 5], 1) ➞ [[1], [2], [3], [4], [5]]
// group([1, 2, 3, 4, 5, 6], 4) ➞ [[1, 3, 5], [2, 4, 6]]

function groupOfArray(arr, num) {
  let store = [];
  let str = "";
  for (let i = 1; i <= arr.length; i++) {
    if (i % num === 0 && i !== arr.length) {
      str += arr[i - 1] + "=";
    } else {
      str += arr[i - 1] + "";
    }
  }
  const splitString = str.split("=");
  for (let x of splitString) {
    store.push(x.split("").map((item) => parseInt(item)));
  }
  return store;
}
console.log("==", groupOfArray([1, 2, 3, 4, 5, 6], 3));

function binarySearchRecursive(arr, start, end, findValue) {
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === findValue) {
    return mid;
  } else {
    if (arr[mid] < findValue) {
      return binarySearchRecursive(arr, mid + 1, end, findValue);
    } else {
      return binarySearchRecursive(arr, start, mid - 1, findValue);
    }
  }
}

const arr = [10, 30, 40, 66, 78, 94, 100, 120];
let start = 0;
let end = arr.length - 1;
const ans = binarySearchRecursive(arr, start, end, 78);
console.log("ans--", ans);

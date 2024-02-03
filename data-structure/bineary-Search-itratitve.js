function binarySearchIterative(arr, findValue) {
  let start = 0;
  let end = arr.length - 1;
  let pos = null;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === findValue) {
      pos = mid;
      break;
    } else if (arr[mid] < findValue) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return pos;
}

const arr = [1, 8, 45, 78, 100, 160, 200];

console.log("===", binarySearchIterative(arr, 200));

function linerSearch(arr, findeValue) {
  let idx = null;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === findeValue) {
      idx = i;
      break;
    }
  }
  return idx;
}

const arr = [4, 5, 45, 86, 8, 9, 10];
console.log("ans", linerSearch(arr, 86));

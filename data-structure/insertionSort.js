function insertionSort(arr) {
  let i, j, currentValue;
  for (let i = 0; i < arr.length; i++) {
    currentValue = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

const arr = [89, 877, 474, 32, 4, 9, 1];
const ans = insertionSort(arr);
console.log(ans);

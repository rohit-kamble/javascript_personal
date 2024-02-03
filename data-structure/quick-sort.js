function QuickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return [...QuickSort(left), pivot, ...QuickSort(right)];
  }
}

const array = [38, 27, 43, 31, 868, 1, 23, 2];
const Ans = QuickSort(array);
console.log("--", Ans);

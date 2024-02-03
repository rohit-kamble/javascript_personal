function mostOften(arr) {
  let obj = {};
  let ans = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      ans[arr[i]] = arr[i];
    } else {
      obj[arr[i]] = arr[i];
    }
  }
  return Object.values(ans);
}

const arr = [1, 2, 3, 3, 3, 7, 9, 10];
const ans = mostOften(arr);
console.log("===", ans);

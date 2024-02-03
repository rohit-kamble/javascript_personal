function AddTwoArray(arr1, arr2) {
  let n=1;
  if(arr1.length < n) {
    return 0;
  }

  else {
    let sum = arr1[0] + arr2[0];
    n++;
    return sum + AddTwoArray(arr1.splice(1), arr2.splice(1));
  }
}

const show = AddTwoArray([1,2,8], [3,4,9]);
console.log("show**", show);

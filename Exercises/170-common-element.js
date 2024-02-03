// commonElements([-1, 3, 4, 6, 7, 9], [1, 3]) ➞ [3]

// commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) ➞ [1, 3, 4, 7]

// commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) ➞ [1, 2, 4, 5]

// commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]) ➞ []

function commonElements(arr, arr2) {
  const newAr = [...arr, ...arr2];
  const obj = {};
  const result = {};
  for (let i = 0; i < newAr.length; i++) {
    if (obj[newAr[i]]) {
      result[newAr[i]] = newAr[i];
    } else {
      obj[newAr[i]] = newAr[i];
    }
  }
  return Object.values(result);
}

console.log("===", commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15]));

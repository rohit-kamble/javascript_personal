// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
// getFrequencies([]) ➞ {}

const obj = {};
function getFrequencies(arr) {
  for (let x of arr) {
    if (obj[x]) {
      obj[x] += 1;
    } else {
      obj[x] = 1;
    }
  }
  return obj;
}
console.log(getFrequencies([]));

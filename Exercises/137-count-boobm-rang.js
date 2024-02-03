cd export default (first) => {second}// countBoomerangs([9, 5, 9, 5, 1, 1, 1]) ➞ 2
// countBoomerangs([5, 6, 6, 7, 6, 3, 9]) ➞ 1
// countBoomerangs([4, 4, 4, 9, 9, 9, 9]) ➞ 0

function countBoomerangs(arr) {
  let count = 0;
  for (let i in arr) {
    if (
      arr[parseInt(i) + 2] !== undefined &&
      arr[parseInt(i) + 2] === arr[i] &&
      arr[parseInt(i) + 1] !== arr[i]
    ) {
      count++;
    }
  }
  return count;
}

console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));

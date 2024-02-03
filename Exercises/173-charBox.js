// charBox(1) ➞ [
//   ["#"]
// ]

// charBox(4) ➞ [
//   ["#", "#", "#", "#"],
//   ["#", " ", " ", "#"],
//   ["#", " ", " ", "#"],
//   ["#", "#", "#", "#"]
// ]

// charBox(2) ➞ [
//   ["#", "#"],
//   ["#", "#"]
// ]

function charBox(num) {
  let ddf = [];
  for (let i = 0; i < num; i++) {
    let ne = [];
    for (let j = 0; j < num; j++) {
      if (i % (num - 1) == 0) {
        ne.push("#");
      } else {
        if (j % (num - 1) == 0) {
          ne.push("#");
        } else {
          ne.push(" ");
        }
      }
    }
    ddf.push(ne);
  }

  return ddf;
}
console.log("", charBox(5));

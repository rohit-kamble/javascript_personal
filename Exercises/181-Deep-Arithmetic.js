// sum(["1", "five", "2wenty", "thr33"]) ➞ 36
// sum([["1X2", "t3n"],["1024", "5", "64"]]) ➞ 1099
// sum([[["1"], "10v3"], ["738h"], [["s0"], ["1mu4ch3"],"-1s0"]]) ➞ 759

function sum(arr) {
  const a = arr.toString().split(",");
  let total = [];
  for (let x = 0; x < a.length; x++) {
    if (Number(a[x])) {
      total.push(Number(a[x]));
    } else {
      let count = 0;
      let num = "";

      for (let k = 0; k < a[x].length; k++) {
        if (Number(a[x].charAt(k))) {
          console.log("count", count);
          if (count === 0) {
            console.log("A-", a[x].charAt(k));
            count++;
          } else {
            console.log("B-", a[x].charAt(k));
            count = 0;
          }
        }
      }
      num && total.push(parseInt(num));
    }
  }
  console.log("=", total);
  return total.reduce((acc, item) => acc + item, 0);
}
console.log(sum(["1", "five", "2wenty", "55th4er33"]));

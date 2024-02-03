const arr = [];

const getScore = (ch, i) => {
  console.log("arr", arr, ch);
  switch (ch) {
    case "C": {
      arr.pop();
      return arr;
    }
    case "D": {
      const score = 2 * arr[arr.length - 1];
      arr.push(score);
      return arr;
    }
    case "+": {
      const total =
        parseInt(arr[arr.length - 2]) + parseInt(arr[arr.length - 1]);
      arr.push(total);
      return arr;
    }
    default: {
      arr.push(ch);
      return arr;
    }
  }
};

function calll(ops) {
  let result = null;
  for (let i = 0; i < ops.length; i++) {
    result = getScore(ops[i], i);
  }
  return result.reduce((acc, val) => acc + parseInt(val), 0);
}
console.log("Ans=", calll(["5", "2", "C", "D", "+"]));

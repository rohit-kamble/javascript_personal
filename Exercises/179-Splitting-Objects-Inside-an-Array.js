// splitBunches([
//   { name: "grapes", quantity: 2 }
// ]) ➞ [
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 }
// ]

// splitBunches([
//   { name: "currants", quantity: 1 },
//   { name: "grapes", quantity: 2 },
//   { name: "bananas", quantity: 2 }
// ]) ➞ [
//   { name: "currants", quantity: 1},
//   { name: "grapes", quantity: 1 },
//   { name: "grapes", quantity: 1 },
//   { name: "bananas", quantity: 1 },
//   { name: "bananas", quantity: 1 }
// ]

function splitBunches(arr) {
  let data = [];
  for (let x of arr) {
    let count = 0;
    while (count < x.quantity) {
      data.push({ ...x, quantity: 1 });
      count++;
    }
  }
  return data;
}
splitBunches([
  { name: "currants", quantity: 1 },
  { name: "grapes", quantity: 2 },
  { name: "bananas", quantity: 2 },
]);

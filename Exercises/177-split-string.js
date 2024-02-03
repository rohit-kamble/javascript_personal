// splitNCases("Strengthened", 6) ➞ ["St", "re", "ng", "th", "en", "ed"]
// splitNCases("Unscrupulous", 2) ➞ ["Unscru", "pulous" ]
// splitNCases("Flavorless", 1) ➞ ["Flavorless" ]

function splitNCases(str, num) {
  const len = str.length / num;
  const neArr = [];
  console.log(str);
  while (str.length > 1) {
    const g = str.substring(len, str.length);
    const h = str.substring(0, len);
    neArr.push(h);
    splitNCases(g);
  }
  return neArr;
}

console.log(splitNCases("Strengthened", 6));

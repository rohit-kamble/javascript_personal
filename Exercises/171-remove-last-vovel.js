// removeLastVowel("Those who dare to fail miserably can achieve greatly.")
// ➞ "Thos wh dar t fal miserbly cn achiev gretly."

// removeLastVowel("Love is a serious mental disease.")
// ➞ "Lov s  serios mentl diseas"

// removeLastVowel("Get busy living or get busy dying.")
// ➞ "Gt bsy livng r gt bsy dyng"

const vowles = { a: "a", e: "e", i: "i", o: "o", u: "u" };
function removeChar(char) {
  for (let i = char.length - 1; i >= 0; i--) {
    if (vowles[char[i]]) {
      return char.replace(vowles[char[i]], "");
    }
  }
}
function removeLastVowel(str) {
  const newArr = str.split(" ");
  let reult = "";
  for (let i = 0; i < newArr.length; i++) {
    reult += removeChar(newArr[i]) + " ";
  }
  return reult.trim();
}
console.log(removeLastVowel("Get busy living or get busy dying."));

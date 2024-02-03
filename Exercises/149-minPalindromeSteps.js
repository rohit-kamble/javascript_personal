// minPalindromeSteps("race") ➞ 3
// // Add 3 letters: "car" to make "racecar"

// minPalindromeSteps("mada") ➞ 1
// // Add 1 letter: "m" to make "madam"

// minPalindromeSteps("mirror") ➞ 3
// // Add 3 letters: "rim" to make "mirrorrim"
let start = false;
let idx = 0;
let notMatch = false;
function minPalindromeSteps(str) {
  let inital = str.charAt(str.length - 1);
  for (let i = str.length - 2; i >= 0; i--) {
    if (inital === str.charAt(i) && !start && !notMatch) {
      start = true;
      idx = i;
      if (idx === 0) {
        console.log("****", str.charAt(i));
      }
    }
    if (start && idx !== i && !notMatch) {
      console.log("--", str.charAt(i));
    }
    if (notMatch && inital !== str.charAt(i)) {
      // notMatch = true;
      console.log("-*-", str.charAt(i));
    }
  }
  console.log("**dd*", str);
}
console.log(minPalindromeSteps("race"));

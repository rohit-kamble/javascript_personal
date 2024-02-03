// reverseOdd("Bananas") ➞ "sananaB"

// reverseOdd("One two three four") ➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// ➞ "Make sure you only reverse words of odd length"

function reverseOdd(str) {
  const arrStr = str.split(" ");
  for (let x of arrStr) {
    if (x.length % 2 !== 0) {
      let reversedWord = x.split("").reverse().join("");
      arrStr[arrStr.indexOf(x)] = reversedWord;
    }
  }
  return arrStr.join(" ", ",");
}
console.log(reverseOdd("Bananas"));

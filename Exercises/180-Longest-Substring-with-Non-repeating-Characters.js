// longestNonrepeatingSubstring("abcabcbb") ➞ "abc"
// longestNonrepeatingSubstring("aaaaaa") ➞ "a"
// longestNonrepeatingSubstring("abcde") ➞ "abcde"
// longestNonrepeatingSubstring("abcda") ➞ "abcd"

function longestNonrepeatingSubstring(str) {
  let obj = {};
  let ans = "";
  for (let x = 0; x < str.length; x++) {
    if (!obj[str.charAt(x)]) {
      obj[str.charAt(x)] = str.charAt(x);
    }
  }
  return Object.keys(obj).reduce((acc, item) => acc + item, "");
}
console.log(longestNonrepeatingSubstring("abcda"));

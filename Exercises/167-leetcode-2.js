// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"

// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"

// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""

function gcdOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    // not possible
    // no common element
    return "";
  } else if (str1 == str2) {
    return str1;
  } else if (str1.length > str2.length) {
    return gcdOfStrings(str1.slice(str2.length), str2);
  } else {
    return gcdOfStrings(str2.slice(str1.length), str1);
  }
}

console.log("Ans===", gcdOfStrings("LEET", "CODE"));
// console.log("Ans===", gcdOfStrings("ABABAB", "ABAB"));
// console.log("Ans===", gcdOfStrings("AAAAAAAAA", "AAACCC"));

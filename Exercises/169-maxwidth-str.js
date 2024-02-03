// Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
// Output:
// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

function fullJustify(word, maxWidth) {
  const arrWord = word.join(" ");
  let start = 0;
  let rAns = [];
  for (let i = 0; i < arrWord.length; i++) {
    if (i % 16 === 0 && i !== 0) {
      console.log("--", start, i);
      rAns.push(arrWord.substr(start, i));
      start++;
    }
  }
  console.log("===", rAns);
}

fullJustify(
  ["This", "is", "an", "example ", "of", "text", "justification."],
  16
);

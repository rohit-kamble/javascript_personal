// insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"
// insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"
// insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"

function insertWhitespace(str) {
  let data = [];
  const arrStr = str.split("");
  for (let i = arrStr.length - 1; i >= 0; i--) {
    if (arrStr[i].charCodeAt(0) >= 65 && arrStr[i].charCodeAt(0) <= 90) {
      data.push(arrStr[i]);
      data.push(" ");
    } else {
      data.push(arrStr[i]);
    }
  }
  return data.reverse().join("").trim();
}
console.log("--", insertWhitespace("MarvinTalksTooMuch"));

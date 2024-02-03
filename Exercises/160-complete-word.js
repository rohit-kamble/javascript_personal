// uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?"
// uncensor("abcd", "") ➞ "abcd"
// uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"

function uncensor(char, remainingChar) {
  const arrStr = char.split("");
  let count = 0;
  for (let i = 0; i < arrStr.length; i++) {
    if (arrStr[i] === "*") {
      arrStr[i] = remainingChar.charAt(count);
      count++;
    }
  }
  return arrStr.join("");
}
console.log("Ans=", uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));

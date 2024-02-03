// rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"

// rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"

// rearrange(" ") ➞ "
function isNumbers(str) {
  const t = str.split("").filter((item) => Number(item));
  return parseInt(t[0]);
}

function removeNumber(str) {
  return str
    .split("")
    .filter((item) => (Number(item) ? false : true))
    .join("");
}
function rearrange(str) {
  const arrStr = str.split(" ");
  for (let i = 0; i < arrStr.length; i++) {
    for (let j = 0; j < arrStr.length; j++) {
      if (isNumbers(arrStr[i]) < isNumbers(arrStr[j])) {
        let temp = arrStr[i];
        arrStr[i] = arrStr[j];
        arrStr[j] = temp;
      }
    }
  }
  const response = arrStr.map((item) => removeNumber(item));
  return response.join(" ");
}
console.log("---", rearrange("4of Fo1r pe6ople g3ood th5e the2"));
